import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/Drink.scss";
import { AppContext } from "../AppContext";

const Drink = () => {
  const { drinks } = useContext(AppContext);

  //get the id from the url params
  const url = window.location.href;
  const urlParts = url.split("/");

  const [id, setId] = useState();

  useEffect(() => {
    setId(urlParts[4]);
  }, [urlParts]);

  const [drink, setDrink] = useState(null);

  useEffect(() => {
    const drink = drinks.find((drink) => drink._id === urlParts[4]);
    setDrink(drink);
  }, [id, drinks]);

  const getPricesJSX = () => {
    return drink?.prices?.map((price) => {
      return (
        <div className="price" key={price._id}>
          {" "}
          <h4>{price.price}0 €</h4>
          <h5>{price.subtraction + " " + drink?.unitSubtraction}</h5>
        </div>
      );
    });
  };

  return (
    <div className="page drink-page">
      <div className="drink-top">
        <div className="drink-top-header">
          <Link to="/menu">
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
        </div>
      </div>
      <div className="drink-content">
        {" "}
        <div className="drink-content-image">
          <img src={drink?.image?.url} alt={drink?.title} />
        </div>
        <div className="drink-content-text">
          <h1>{drink?.title}</h1>
          <div className="prices">{getPricesJSX()}</div>
          <p>{drink?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Drink;
