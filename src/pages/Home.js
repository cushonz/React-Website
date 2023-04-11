import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import listing1 from "../assets/cute_plant.jpg";
import listing2 from "../assets/potted_plant.jpg";
import listing3 from "../assets/hanging_plant.jpg";
import Card from "../components/Card";
import ImageCarousel from "../components/ImageCarousel.js";

const products = [
  {
    id: 1,
    imageUrl: listing1,
    name: "Product 1",
  },
  {
    id: 2,
    imageUrl: listing2,
    name: "Product 2",
  },
  {
    id: 3,
    imageUrl: listing3,
    name: "Product 3",
  },
];

function Home() {
  return (
    <div className="home">
      <div className="img-rotate">
        <ImageCarousel products={products} />
      </div>
      <div className="title">
        <h1> Perfect Prints 3D</h1>
      </div>
      <div className="headerContainer">
        <p className="welcome">
          Hello and welcome to the PerfectPrints 3D online shop!
        </p>
      </div>

      <Link to="/products">
        <button> Shop Now </button>
      </Link>
    </div>
  );
}

export default Home;
