import React, { useState } from "react";
import "../styles/ShoppingCart.css";

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);

  // function to add an item to the cart
  function addItemToCart(item) {
    // check if item already exists in cart
    const existingItem = cartItems.find(
      (cartItem) => cartItem.name === item.name
    );
    if (existingItem) {
      // increase quantity if item already exists in cart
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      // add item to cart if it doesn't already exist
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  }

  // function to remove an item from the cart
  function removeItemFromCart(item) {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.name === item.name
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
    setCartItems(updatedCartItems.filter((cartItem) => cartItem.quantity > 0));
  }

  // function to handle checkout
  function handleCheckout() {
    // Here you would implement your checkout logic, such as sending the cart data to a server
    alert("Checkout button clicked!");
  }

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <span>
                  {item.name} - {item.price} - Quantity: {item.quantity}
                </span>
                <button onClick={() => removeItemFromCart(item)}>Remove</button>
              </li>
            ))}
          </ul>
          <button className="checkout-button" onClick={handleCheckout}>
            Checkout
          </button>
        </>
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
