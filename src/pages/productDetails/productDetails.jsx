import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";

import "./productDetails.css";

export const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart, cartItems, products } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  // Find the product with the given ID
  const product = products.find((p) => p.id === Number(id));

  // If the product doesn't exist, return an error message
  if (!product) {
    return <div>Product not found</div>;
  }

  // If the product exists, render its details
  const { title, price, thumbnail, description } = product;

  return (
    <div className="product-container">
      <div className="product-image-container">
        <img src={thumbnail} alt={title} className="product-image" />
      </div>
      <div className="product-details-container">
        <h1 className="product-name">{title}</h1>
        <div className="product-details">
          <p>
            <b>ID:</b> {id}
          </p>
          <p>
            <b>Price:</b> ${price}
          </p>
          <p>
            <b>Description:</b>
          </p>
          <p>{description}</p>
          <button className="addToCartBttn" onClick={() => addToCart(id)}>
            Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
          </button>
        </div>
      </div>
    </div>
  );
};
