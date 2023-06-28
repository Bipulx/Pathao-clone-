import React, { useState, useEffect } from "react";
import "./loadmore.css";
import { Button } from "@material-ui/core";
const Product = ({ id, name, price, addToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    const item = { id, name, price, quantity };
    addToCart(item);
  }, [quantity, addToCart, id, name, price]);

  return (
    <div>
      <div>
        <Button onClick={handleDecrement}>-</Button>
        <span>{quantity}</span>
        <Button onClick={handleIncrement}>+</Button>
      </div>
      <Button onClick={() => setQuantity(0)}>Reset</Button>
    </div>
  );
};

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      const updatedItems = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: item.quantity }
          : cartItem
      );
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, item]);
    }
  };

  // const clearCart = () => {
  //   setCartItems([]);
  //   localStorage.removeItem("cart");
  // };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const products = [
    { id: 1, name: "Product 1", price: 9.99 },
    // Add more products here
  ];

  return (
    <div>
      <div>
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
