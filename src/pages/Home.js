import React from "react";
import "../styles/Home.scss";
import cjenik from "../assets/images/gallery-4.jpg";
import galerija from "../assets/images/gallery-1.jpg";
import blogs from "../assets/images/blogs.jpg";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" home">
      <Link to="/menu">
        <img src={cjenik} alt="logo" />
        <h1>Cjenik</h1>
      </Link>
      <Link to="/blogs">
        <img src={blogs} alt="blog" />
        <h1>Događanja</h1>
      </Link>
      <Link to="/gallery">
        <img src={galerija} alt="blog" />
        <h1>Galerija</h1>
      </Link>
    </div>
  );
};

export default Home;
