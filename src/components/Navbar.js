import React from "react";
import "../styles/Navbar.scss";
import { Link, NavLink } from "react-router-dom";
import blogIcon from "../assets/icons/blog.svg";
import menuIcon from "../assets/icons/drinks.svg";
import galleryIcon from "../assets/icons/gallery.svg";
import homeIcon from "../assets/icons/home.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink className="navbar-link" to="/">
        <img src={homeIcon} alt="Home" />
        <span>Home</span>
      </NavLink>
      <NavLink className="navbar-link" to="/menu">
        <img src={menuIcon} alt="Menu" />
        <span>Cjenik</span>
      </NavLink>{" "}
      <NavLink className="navbar-link" to="/blogs">
        <img src={blogIcon} alt="Blogs" />
        <span>Događanja</span>
      </NavLink>
      <NavLink className="navbar-link" to="/gallery">
        <img src={galleryIcon} alt="Gallery" />
        <span>Galerija</span>
      </NavLink>
    </div>
  );
};

export default Navbar;
