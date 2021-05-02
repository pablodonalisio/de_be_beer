import React, { useState } from "react";
import { ProductData as Data } from "../ProductData";
import ProductCard from "./ProductCard";
import ShopCart from "./ShopCart";

const Products = () => {
  const [cartProducts, setCartProducts] = useState([]);

  const addProduct = (product, quantity) => {
    product.quantity = quantity;
    setCartProducts([...cartProducts, product]);
  };

  return (
    <div className="container">
      <div className="products-container">
        {Data.map((product) => {
          return (
            <ProductCard
              product={product}
              key={product.itemID}
              addProduct={addProduct}
            />
          );
        })}
      </div>
      <ShopCart cartProducts={cartProducts} />
    </div>
  );
};

export default Products;
