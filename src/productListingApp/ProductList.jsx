import { Productss } from "./Productss";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./ProductList.css";

export const ProductList = (product) => {
  const [categorytype, setcategorytype] = useState();

  const [categoryarray] = useState([]);

  // console.log(product);
  useEffect(() => butns());

  const butns = () => {
    product.product.map((btn) =>
      categoryarray.includes(btn.category)
        ? null
        : categoryarray.push(btn.category)
    );
    console.log(categoryarray);
  };

  return (
    <Container fluid className="layoutforbuttoncard">
      <div className="category-buttons">
        <Col>
          <h3>Category</h3>
          {categoryarray.map((itmebtn) => (
            <Row key={itmebtn}>
              <button
                className="m-1 p-1 categorybutton"
                onClick={() => setcategorytype(itmebtn)}
              >
                {itmebtn}
              </button>
            </Row>
          ))}
        </Col>
      </div>
      <div className="productwindo">
        <Row>
          <h2>Shopping</h2>
          {product.product
            .filter(
              (i) => i.category === (categorytype ? categorytype : i.category)
            )
            .map((item) => {
              return (
                <div key={item.id}>
                  <Col>
                    <Productss item={item} />
                  </Col>
                </div>
              );
            })}
        </Row>
      </div>
    </Container>
  );
};
