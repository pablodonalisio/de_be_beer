import React, { useState } from "react";
import { ProductData as Data } from "../ProductData";
import ProductCard from "./ProductCard";
import ShopCart from "./ShopCart";

const Products = () => {
  const [cartProducts, setCartProducts] = useState([]);

  const addProduct = (product, quantity) => {
    product.quantity = quantity;
    if (cartProducts.filter((p) => p.itemID === product.itemID).length === 0)
      setCartProducts([...cartProducts, product]);
    else
      setCartProducts(
        cartProducts.map((p) => {
          if (p.itemID === product.itemID) {
            p.quantity = quantity;
          }
          return p;
        })
      );
  };

  const removeProduct = (product) => {
    setCartProducts(cartProducts.filter((p) => product.itemID !== p.itemID));
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
      <ShopCart cartProducts={cartProducts} removeProduct={removeProduct} />
    </div>
  );
};

export default Products;
