import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css"
import bg from '../assets/plant.jpg'
import Listing from '../components/Listing'
function Home() {
  return (
    <div className="home">
      <Listing
      title = "item"
      picture={bg}
      price = "$10.00">
      </Listing>
      <div>
        <img src={bg} className="background"></img>
      </div>
      <div className="headerContainer" ></div>
      <h1 className="title"> Perfect Prints 3D</h1>
      <Link tp="/menu" />
      <button> Shop Now </button>
    </div>
  );
}

export default Home;
