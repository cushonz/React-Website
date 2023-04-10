// ImageCarousel.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/ImageCarousel.css';

const ImageCarousel = ({ products }) => {
  return (
    <Carousel className="carousel" infiniteLoop autoPlay showThumbs={false} showStatus={false}>
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/product/${product.id}`}>
            <img src={product.imageUrl} alt={product.name} />
          </Link>
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
