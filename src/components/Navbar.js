import React from "react";
import "../styles/Navbar.scss";
import { Link } from "react-router-dom";
import blogIcon from "../assets/icons/blog.svg";
import menuIcon from "../assets/icons/drinks.svg";
import galleryIcon from "../assets/icons/gallery.svg";
import homeIcon from "../assets/icons/home.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="navbar-link" to="/home">
        <img src={homeIcon} alt="Home" />
        <span>Home</span>
      </Link>
      <Link className="navbar-link" to="/menu">
        <img src={menuIcon} alt="Menu" />
        <span>Cjenik</span>
      </Link>{" "}
      <Link className="navbar-link" to="/blogs">
        <img src={blogIcon} alt="Blogs" />
        <span>Događanja</span>
      </Link>
      <Link className="navbar-link" to="/gallery">
        <img src={galleryIcon} alt="Gallery" />
        <span>Galerija</span>
      </Link>
    </div>
  );
};

export default Navbar;
