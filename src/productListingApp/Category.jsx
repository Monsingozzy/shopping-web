import React from "react";
import { Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { ProductList } from "./ProductList";

export const Category = (product, setsatte) => {
  const [categoryarry] = useState([]);
  useEffect(() => hadlecategory());

  const hadlecategory = (product) => {
    product.product.map((btn) =>
      categoryarry.includes(btn.category)
        ? null
        : categoryarry.push(btn.category)
    );
    console.log(categoryarry);
  };

  return (
    <div>
      {categoryarry.map((itmebtn) => (
        <Col>
          <Button
            className="m-1 p-2"
            onClick={() => setsatte.setsatte(itmebtn)}
          >
            {itmebtn}
          </Button>
        </Col>
      ))}
    </div>
  );
};
