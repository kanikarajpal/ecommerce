import { createContext, useEffect, useState } from "react";
// import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        let cart = {};
        for (let i = 1; i < products.length + 1; i++) {
          cart[i] = 0;
        }
        setProducts(data.products);
        setCartItems(cart);
      })
      .catch((error) => console.log(error));
  }, [products.length]);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    console.log(itemId, "asdsad");
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const contextValue = {
    cartItems,
    products,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
  };

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};
