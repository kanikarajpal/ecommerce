import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";
export const Cart = () => {
  const { cartItems, getTotalCartAmount, products } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {totalAmount > 0 &&
          products.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />;
            }
            return <></>;
          })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <div className="subtotal">
            <h2>Subtotal: ${totalAmount.toLocaleString()}</h2>
          </div>
          <div className="buttons">
            <button onClick={() => navigate("/")}>Continue Shopping</button>
            <button
              onClick={() => {
                alert("Thank you");
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};
