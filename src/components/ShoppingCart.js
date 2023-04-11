import React, { useState } from "react";
import "../styles/ShoppingCart.css";

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);

  // function to add an item to the cart
  function addItemToCart(item) {
    setCartItems([...cartItems, item]);
  }

  // function to remove an item from the cart
  function removeItemFromCart(item) {
    setCartItems(cartItems.filter((cartItem) => cartItem !== item));
  }

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <span>
                {item.name} - {item.price}
              </span>
              <button onClick={() => removeItemFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Available Products</h3>
      <ul className="product-list">
        <li>
          Product 1 - $10
          <button
            onClick={() => addItemToCart({ name: "Product 1", price: 10 })}
          >
            Add to Cart
          </button>
        </li>
        <li>
          Product 2 - $15
          <button
            onClick={() => addItemToCart({ name: "Product 2", price: 15 })}
          >
            Add to Cart
          </button>
        </li>
        <li>
          Product 3 - $20
          <button
            onClick={() => addItemToCart({ name: "Product 3", price: 20 })}
          >
            Add to Cart
          </button>
        </li>
      </ul>
    </div>
  );
}

export default ShoppingCart;
