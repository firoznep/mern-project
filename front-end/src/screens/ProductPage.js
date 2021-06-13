import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../components/sub/Loading";
import Rating from "../components/sub/Rating";
import { productAction } from "../feature/actions/productsAction";

export default function ProductsPage({ match, history }) {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const singleProduct = useSelector((state) => state.singleProduct);

  const { loading, product, error } = singleProduct;

  useEffect(() => {
    // const fetchApi = async () => {
    //   const { data } = await axios.get(
    //     `http://localhost:5002/api/products/${match.params._id}`
    //   );

    //   setProduct(data);
    // };
    // fetchApi();
    dispatch(productAction(match.params._id));
  }, [match]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params._id}?qty=${qty}`);
  };

  const addItemHandler = () => {
    setQty((pre) => pre + 1);
  };

  // let product = products.find((product) => match.params._id === product._id);
  return (
    <React.Fragment>
      <Link to="/">
        <Button variant="outline-info" className="m-3">
          <i className="fas fa-chevron-left"></i> Go Back
        </Button>
      </Link>
      <Container className="my-3">
        {loading ? (
          // <Spinner animation="grow" variant="warning" />
          <Loading />
        ) : error ? (
          error.message
        ) : (
          <Row>
            <h3>{product.category}</h3>
            <Col md={6}>
              <Card>
                <Card.Img src={product.image} />
              </Card>
            </Col>
            <Col md={3}>
              <ListGroup>
                <ListGroupItem>{product.brand}</ListGroupItem>
                <ListGroupItem>{product.name}</ListGroupItem>
                <ListGroupItem>
                  <Rating
                    totalReviews={product.numReviews}
                    ratingValue={product.rating}
                  />
                </ListGroupItem>
                <ListGroupItem>{product.description}</ListGroupItem>
              </ListGroup>
            </Col>
            <Col md={3}>
              <ListGroup>
                <ListGroupItem>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      {" "}
                      <i className="fas fa-rupee-sign"></i> {product.price}
                    </Col>
                  </Row>
                </ListGroupItem>
              </ListGroup>
              <ListGroup>
                <ListGroupItem>
                  <Row>
                    <Col>Status: </Col>
                    <Col>
                      {product.countInStock > 0 ? (
                        <Alert variant="success" className="p-2">
                          {product.countInStock + "-Avalable"}
                        </Alert>
                      ) : (
                        <Alert variant="warning" className="p-1">
                          Out of Stock
                        </Alert>
                      )}
                    </Col>
                  </Row>
                </ListGroupItem>
              </ListGroup>
              {product.countInStock > 0 ? (
                <ListGroup>
                  <ListGroupItem>
                    <Row>
                      <Col sm lg={3}>
                        Qty:
                      </Col>
                      <Col>
                        <Button
                          onClick={(e) => setQty((pre) => pre - 1)}
                          disabled={qty <= 1}
                        >
                          {" "}
                          <i className="fas fa-angle-left"></i>
                        </Button>
                        <span className="px-3">{qty}</span>

                        <Button
                          onClick={addItemHandler}
                          disabled={product.countInStock <= qty}
                        >
                          {" "}
                          <i className="fas fa-angle-right"></i>
                        </Button>
                      </Col>
                    </Row>
                  </ListGroupItem>
                </ListGroup>
              ) : null}
              <div className="d-grid my-2">
                <Button
                  onClick={addToCartHandler}
                  variant={product.countInStock <= 0 ? "secondary" : "success"}
                  size="lg"
                  disabled={product.countInStock <= 0 ? true : false}
                >
                  Add to Cart
                </Button>
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </React.Fragment>
  );
}
