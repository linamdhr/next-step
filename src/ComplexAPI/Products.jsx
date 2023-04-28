import { useState } from "react";
import Card from "./Card";
function Products() {
  const products = [
    { name: "vest", price: 50 },
    { name: "sweater", price: 50 },
    { name: "tshirt", price: 50 },
    { name: "jacket", price: 50 },
    { name: "jamper", price: 50 },
    { name: "necklace", price: 50 },
  ];
  return (
    <div className="product-list">
      <h1>products</h1>
      {products.map((product) => (
        <Card name={product.name} price={product.price} />
      ))}
    </div>
  );
}
export default Products;
