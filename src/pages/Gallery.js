import React from "react";
import "../styles/Gallery.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import image1 from "../assets/images/gallery-1.jpg";
import image2 from "../assets/images/gallery-2.jpg";
import image3 from "../assets/images/gallery-3.jpg";
import image4 from "../assets/images/gallery-4.jpg";
import image5 from "../assets/images/gallery-5.jpg";

const Gallery = () => {
  const [images, setImages] = useState([
    image1,
    image2,
    image3,
    image4,
    image5,
  ]);
  return (
    <div className="page gallery">
      {" "}
      <div className="gallery-top">
        <div className="gallery-top-header">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            <span>Povratak</span>{" "}
          </Link>
          <h1>Galerija</h1>
        </div>
      </div>
      <div className="gallery-content">
        {images.map((image, index) => (
          <img src={image} alt={`Gallery Image ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
