// Card.js
import React from 'react';
import '../styles/Card.css';

const Card = ({ imageUrl, listingName, price }) => {
  return (
    <div className="card">
      <div className="card-img-container">
        <img src={imageUrl} alt={listingName} className="card-img" />
      </div>
      <div className="card-info">
        <h3 className="card-title">{listingName}</h3>
        <p className="card-price">${price}</p>
      </div>
    </div>
  );
};

export default Card;
