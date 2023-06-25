import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, title, price, thumbnail } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product-link">
      <Link to={`/product/${id}`} className="product">
        <div className="productImage">
          <img src={thumbnail} alt="item-displayed" />
        </div>

        <div className="lowerContent">
          <div className="description">
            <p>
              <b>{title}</b>
            </p>
            <p> ${price}</p>
          </div>
        </div>
      </Link>
      <button
        className="addToCartBttn"
        onClick={() => {
          console.log(id, "This is the id");
          addToCart(id);
        }}
      >
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
