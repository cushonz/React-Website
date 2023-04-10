// Card.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Card.css";

const Card = ({ imageUrl, listingName, price, productId }) => {
  return (
    <Link to={`/product/${productId}`} className="card-link">
      <div className="card">
        <div className="card-img-container">
          <img src={imageUrl} alt={listingName} className="card-img" />
        </div>
        <div className="card-info">
          <h3 className="card-title">{listingName}</h3>
          <p className="card-price">${price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
