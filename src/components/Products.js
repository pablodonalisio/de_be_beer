import React from "react";
import { ProductData as Data } from "../ProductData";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div>
      {Data.map((product) => {
        return <ProductCard product={product} />;
      })}
    </div>
  );
};

export default Products;
