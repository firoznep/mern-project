import React from "react";
import { Button, Spinner } from "react-bootstrap";

export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        <span className="sr-only">Loading...</span>
      </Button>
    </div>
  );
}
