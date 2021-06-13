import React, { useEffect } from "react";
import {
  Alert,
  Button,
  Card,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addCartItemAction,
  removeCartItem,
} from "../feature/actions/cartAction";

export default function CartPage({ match, location, history }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const productId = match.params._id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  useEffect(() => {
    if (productId) {
      dispatch(addCartItemAction(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeCartItemHandler = (id) => {
    dispatch(removeCartItem(id));
  };
  const checkOutHandler = () => {
    history.push("/login?redirect=shipping");
  };

  return (
    <Row>
      <Col md lg xl={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Alert variant="warning">
            Your cart is empty <Link to="/"> Go Back </Link>
          </Alert>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroupItem key={item.product}>
                <Row>
                  <Col md lg xl={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md lg xl={3}>
                    <Link to={`/product/${item.product}`}> {item.name}</Link>
                  </Col>
                  <Col md lg xl={2}>
                    <i className="fas fa-rupee-sign"></i> {item.price}
                  </Col>
                  <Col md lg xl={3}>
                    <Button
                      onClick={(e) =>
                        dispatch(addCartItemAction(item.product, item.qty - 1))
                      }
                      disabled={item.qty <= 1}
                    >
                      {" "}
                      <i className="fas fa-angle-left"></i>
                    </Button>
                    <span className="px-3">{item.qty}</span>

                    <Button
                      onClick={() =>
                        dispatch(addCartItemAction(item.product, item.qty + 1))
                      }
                      disabled={item.countInStock <= item.qty}
                    >
                      {" "}
                      <i className="fas fa-angle-right"></i>
                    </Button>
                  </Col>
                  <Col md lg xl={2}>
                    <Button
                      variant="light"
                      onClick={() => removeCartItemHandler(item.product)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroupItem>
            ))}
          </ListGroup>
        )}
      </Col>

      <Col md lg xl={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>
                SubTotal ({cartItems.reduce((acc, itm) => acc + itm.qty, 0)} )
                items
              </h3>
              <i className="fas fa-rupee-sign"></i>
              {cartItems
                .reduce((acc, itm) => acc + itm.qty * itm.price, 0)
                .toFixed(2)}
            </ListGroupItem>
            <ListGroupItem>
              <Button
                type="button"
                className="btn-block"
                disabled={cartItems.length === 0}
                onClick={checkOutHandler}
              >
                Proceed to CheckOut
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
}
