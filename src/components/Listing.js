import React from "react";
import "../styles/Listing.css"

function Listing(props) {
  return (
    <div className="grid-item">
      <img src={props.image} alt={props.title} />
      <div className="grid-item-details">
        <p className="grid-item-price">{props.price}</p>
        <button className="grid-item-add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
}

export default Listing;
