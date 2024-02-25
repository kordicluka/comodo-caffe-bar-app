import React, { useState } from "react";
import "../styles/Gallery.scss";
import { Link } from "react-router-dom";

const Gallery = () => {
  // Initial state now includes a loading state for each image
  const [images, setImages] = useState([
    {
      url: "http://parkandshopapi.lukakordic.me/uploads/images-1689925088761-440540587.jpg",
      isLoading: true,
    },
    {
      url: "http://parkandshopapi.lukakordic.me/uploads/images-1697553719118-588263583.jpg",
      isLoading: true,
    },
    {
      url: "http://parkandshopapi.lukakordic.me/uploads/images-1697553719239-234854138.jpg",
      isLoading: true,
    },
    {
      url: "http://parkandshopapi.lukakordic.me/uploads/images-1697553719708-418143471.jpg",
      isLoading: true,
    },
    {
      url: "http://parkandshopapi.lukakordic.me/uploads/images-1697553719937-911117851.jpg",
      isLoading: true,
    },
  ]);

  // Function to handle image load
  const handleImageLoad = (index) => {
    const newImages = [...images];
    newImages[index].isLoading = false;
    setImages(newImages);
  };

  return (
    <div className="page gallery">
      <div className="gallery-top">
        <div className="gallery-top-header">
          <Link to="/blogs">
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
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            <span>Povratak</span>
          </Link>
          <h1>Galerija</h1>
        </div>
      </div>
      <div className="gallery-content">
        {images.map((image, index) => (
          <div
            className={
              image.isLoading
                ? "gallery-content-image loading"
                : "gallery-content-image"
            }
          >
            <img
              src={image.url}
              alt={`Image ${index}`}
              loading="lazy"
              onLoad={() => handleImageLoad(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
