import React, { useState, useEffect } from "react";
import "../styles/ShoppingCart.css";

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);

  // load cart items from local storage when the component mounts
  useEffect(() => {
    const storedItems = localStorage.getItem("cartItems");
    if (storedItems) {
      setCartItems(JSON.parse(storedItems));
    }
  }, []);

  // function to add an item to the cart and update local storage
  function addItemToCart(item) {
    const index = cartItems.findIndex(
      (cartItem) => cartItem.name === item.name
    );
    if (index === -1) {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    } else {
      const updatedCartItems = [...cartItems];
      updatedCartItems[index].quantity += 1;
      setCartItems(updatedCartItems);
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }

  // function to remove an item from the cart and update local storage
  function removeItemFromCart(item) {
    const index = cartItems.findIndex(
      (cartItem) => cartItem.name === item.name
    );
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity -= 1;
    if (updatedCartItems[index].quantity <= 0) {
      updatedCartItems.splice(index, 1);
    }
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
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
                  {item.name} - {item.price} - x{item.quantity}
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
