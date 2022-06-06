import React, { useEffect, useState } from "react";
import { ProductList } from "./ProductList";

export const ProductHome = () => {
  const [product, setproduct] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((response) => response.json())
      .then((resp) => setproduct(resp.products))
      .catch((err) => console.log(err));
  }, []);
  // console.log(product);

  return (
    <div>
      <ProductList product={product} />
    </div>
  );
};
