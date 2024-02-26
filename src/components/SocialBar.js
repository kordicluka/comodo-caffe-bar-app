import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation hook
import "../styles/SocialBar.scss";
import facebookIcon from "../assets/icons/facebook_logo.png";
import instagramIcon from "../assets/icons/instagram_logo.png";
import twitterIcon from "../assets/icons/twitter_logo.png";

const SocialBar = () => {
  const location = useLocation(); // Use the useLocation hook to get the current location object

  // Conditionally render based on the pathname
  if (location.pathname.includes("/menu")) {
    return null; // Don't display the component if the pathname is not "/"
  }

  return (
    <div className="social-bar">
      <h4>Zapratite nas na društvenim mrežama!</h4>
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <img src={facebookIcon} alt="Facebook" />
        </a>
        <a
          href="https://www.instagram.com/comodo.bar"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </div>
  );
};

export default SocialBar;
