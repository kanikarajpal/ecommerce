import React, { useContext, useState } from "react";
import { Product } from "./product";
import { ShopContext } from "../../context/shop-context";
import "./shop.css";

export const Shop = () => {
  const [show, setShow] = useState(false);
  const { products } = useContext(ShopContext);

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Ecommerce</h1>
      </div>

      <div className="products">
        {products?.map((product, index) => {
          if (index < 12) {
            return <Product data={product} />;
          }
          if (show && index > 12) {
            return <Product data={product} />;
          }
          return <></>;
        })}
      </div>
      <div className="showMoreDiv">
        <button className="show" onClick={() => setShow(!show)}>
          {!show ? "Show More" : "Show Less"}{" "}
        </button>
      </div>
    </div>
  );
};
