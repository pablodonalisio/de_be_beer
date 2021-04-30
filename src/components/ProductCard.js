import React from "react";

const ProductCard = (props) => {
  const { product } = props;

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
          <input type="number" min="1"></input>
          <button>Add</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
