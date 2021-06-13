import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

export default function Product({ product }) {
  return (
    <Card className="m-3 p-3  rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img variant="top" src={product.image} />
      </Link>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        {/* <Card.Text>{product.rating}</Card.Text> */}
        <Rating
          ratingValue={product.rating}
          totalReviews={product.numReviews}
        />
        <Card.Text>
          {" "}
          <strong>
            <i className="fas fa-rupee-sign"></i> {product.price}
          </strong>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
