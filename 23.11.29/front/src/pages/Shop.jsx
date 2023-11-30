import React from "react";
import { Body, Header } from "../components";

const Shop = () => {
  let tempItem = [
    { num: 10, name: "Some shirt" },
    { num: 20, name: "Some pants" },
    { num: 30, name: "Some hat" },
  ];
  return (
    <div>
      <Header name="Merchandise"></Header>
      <Body path="/" pageName="Main Page"></Body>
      {tempItem.map((i, index) => (
        <Body pageName={i.name} path={`/detail/${index}/1/1`}></Body>
      ))}
      <Body path="/" pageName="Main Page"></Body>
      {/* 상품 추가 */}
    </div>
  );
};

export default Shop;
