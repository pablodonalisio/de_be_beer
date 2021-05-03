import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

const ShopCart = (props) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setCartProducts(
      props.cartProducts.map((product) => {
        return (
          <div key={product.itemID} className="content">
            <p>
              {product.name}(x{product.quantity})
              <button
                type="button"
                onClick={() => props.removeProduct(product)}
                className="delete-button"
              >
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
            </p>
            <p>${product.price}</p>
          </div>
        );
      })
    );
  }, [props.cartProducts]);

  useEffect(() => {
    setTotal(
      props.cartProducts.reduce((total, product) => {
        console.log(product.quantity);
        return (total =
          total + parseInt(product.price) * parseInt(product.quantity));
      }, 0)
    );
  }, [props.cartProducts]);

  return (
    <div className="cart">
      <h2>Cart</h2>
      <div className="cart-content content-header">
        <div className="content">
          <p>
            <b>Item</b>
          </p>
          <p>
            <b>Precio</b>
          </p>
        </div>
        <hr />
        <br></br>
        {cartProducts}
        <br></br>
        <hr />
        <div className="content">
          <p>Total</p>
          <p>${total.toString()}</p>
        </div>
      </div>
      <button type="button" className="pagar">
        <FontAwesomeIcon icon={faDollarSign} />
      </button>
    </div>
  );
};

export default ShopCart;
