import React, { useEffect } from "react";
import { Card, Col, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/sub/Product.jsx";
import { listProductsAction } from "../feature/actions/productsAction.js";

export default function HomePage() {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.productsList);

  useEffect(() => {
    // const fetchApi = async () => {
    //   const { data } = await axios.get("http://localhost:5002/api/products");
    //   setProducts(data);
    // };
    // fetchApi();
    dispatch(listProductsAction);
  }, [dispatch]);

  const { loading, products, error } = productsList;
  return (
    <React.Fragment>
      <Card.Title>Feature Products</Card.Title>
      {/* <Row> */}
      {loading ? (
        // <Col>
        <Spinner animation="grow" variant="warning" />
      ) : // </Col>
      error ? (
        error.message
      ) : (
        <Row>
          {products.map((prodc) => {
            return (
              <Col
                sm={12}
                // sm={{ size: "auto", offset: 1 }}
                md={6}
                lg={4}
                xl={3}
                key={prodc._id}
              >
                <Product product={prodc} />
              </Col>
            );
          })}
        </Row>
      )}
      {/* </Row> */}
    </React.Fragment>
  );
}
