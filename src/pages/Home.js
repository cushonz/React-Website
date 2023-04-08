import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="headerContainer" style=""></div>
      <h1> Perfect Prints 3D</h1>
      <Link tp="/menu" />
      <button> Shop Now </button>
    </div>
  );
}

export default Home;
