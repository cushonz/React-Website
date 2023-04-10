import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css"
import listing1 from '../assets/cute_plant.jpg'
import listing2 from '../assets/potted_plant.jpg'
import listing3 from '../assets/hanging_plant.jpg'
import Card from '../components/Card'
import ImageCarousel from "../components/ImageCarousel.js";

const products = [
  {
    id: 1,
    imageUrl: listing1,
    name: 'Product 1',
  },
  {
    id: 2,
    imageUrl: listing2,
    name: 'Product 2',
  },
  {
    id: 3,
    imageUrl: listing3,
    name: 'Product 3',
  },
];




function Home() {
  return (
    <div className="home">
      <h1 className="title"> Perfect Prints 3D</h1>
       <ImageCarousel products={products} />
      {/* <div>
        <img src={bg} className="background"></img>
      </div> */}
      <div className="headerContainer" ></div>
      
      
      <Link tp="/menu" />
      <button> Shop Now </button>
    </div>
  );
}

export default Home;
