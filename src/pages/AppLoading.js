import React, { useState, useEffect } from "react";
import "../styles/AppLoading.scss";
import logo from "../assets/logo.svg";
const AppLoading = () => {
  const [loading, setLoading] = useState(true);
  // after 3 seconds push the page to the home page
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (!loading) {
    window.location.href = "/menu";
  }
  return (
    <div className="app-loading">
      <img src={logo} alt="logo" />
      <h1>Dobrodošli u caffe bar Comodo!</h1>
    </div>
  );
};

export default AppLoading;
