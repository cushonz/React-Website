import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

function NavBar() {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNav = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={logo} />
        <div className="hiddenLinks">
          <Link to="/"> Home</Link>
          <Link to="/products"> Products</Link>
          <Link to="/about"> About Us</Link>
          <Link to="/contact"> Contact Us</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home</Link>
        <Link to="/products"> Products</Link>
        <Link to="/about"> About Us</Link>
        <Link to="/contact"> Contact Us</Link>
        <button onClick={toggleNav}>
          <MenuOpenIcon />
        </button>
      </div>
    </div>
  );
}

export default NavBar;
