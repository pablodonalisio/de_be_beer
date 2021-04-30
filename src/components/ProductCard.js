import React from "react";

const ProductCard = (props) => {
  const { product } = props;

  return (
    <div className="card">
      <img src={product.image} alt={product.name}></img>
      <p>{product.name}</p>
      <p>{product.brand}</p>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductCard;
