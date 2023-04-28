import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import image from "./logofornav.png";

const Menu = () => (
  <div className="navbar">
    {/* <div className="logo">
      <img src={image} alt="logo" />
    </div> */}
    <Link to="/men">Men</Link>
    <br />
    <Link to="/women">Women</Link>
    <br />
    <Link to="/kids">Kids</Link>
    <br />
    <Link to="/beauty">Beauty</Link>
    <br />
    <Link to="/studio">Studio</Link>
  </div>
);
export default Menu;
