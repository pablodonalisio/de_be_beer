import React, { useState } from "react";

const ProductCard = (props) => {
  const { product } = props;

  const [quantity, setQuantity] = useState("1");

  return (
    <div className="container-card">
      <img src={product.image} alt={product.name}></img>
      <div className="card-footer">
        <div className="product-description">
          <p>{product.name}</p>
          <p>{product.brand}</p>
          <p>Price: ${product.price}</p>
        </div>
        <div className="quantity-box">
          <input
            type="number"
            min="1"
            defaultValue="1"
            onChange={(e) => setQuantity(e.target.value)}
          ></input>
          <button
            type="button"
            onClick={() => props.addProduct(product, quantity)}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
