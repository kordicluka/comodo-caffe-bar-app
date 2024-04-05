import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/Drink.scss";
import { AppContext } from "../AppContext";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Drink = () => {
  const { drinks, drinksCombinations } = useContext(AppContext);

  //get the id from the url params
  const url = window.location.href;
  const urlParts = url.split("/");

  const [id, setId] = useState();

  useEffect(() => {
    setId(urlParts[5]);
  }, [urlParts]);

  const [drink, setDrink] = useState(null);
  const [drinkCombinationOrDrink, setDrinkCombinationOrDrink] = useState(null);

  useEffect(() => {
    const d = drinks.find((drink) => drink._id === urlParts[5]);

    if (d) {
      setDrink(d);
      setDrinkCombinationOrDrink("drink");
    } else {
      const drinkCombination = drinksCombinations.find(
        (drinkCombination) => drinkCombination._id === urlParts[5]
      );
      setDrinkCombinationOrDrink("drinkCombination");
      setDrink(drinkCombination);
    }
  }, [id, drinks]);

  return (
    <div className="page drink-page">
      <div className="drink-top">
        <div className="drink-top-header">
          <a onClick={() => window.history.back()}>
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
          </a>
        </div>
      </div>
      <div className="drink-content">
        {" "}
        <div className="drink-content-image">
          <LazyLoadImage
            src={drink?.image?.url}
            alt={drink?.title}
            effect="blur"
            fit="cover"
            width="100%"
            height="100%"
          />
        </div>
        <div className="drink-content-text">
          <h1>{drink?.title}</h1>
          <div className="prices">
            {drinkCombinationOrDrink === "drinkCombination" && (
              <div className="price">
                <h4>{drink?.price.toFixed(2)} €</h4>
              </div>
            )}

            {drink?.prices?.map((price) => {
              let displaySubtraction;
              if (
                (price.subtraction === 0.06 &&
                  drink?.unitSubtraction === "kg") ||
                drink?.unitSubtraction === "komad"
              ) {
                displaySubtraction = "";
              } else {
                displaySubtraction = `${price.subtraction} ${drink?.unitSubtraction}`;
              }
              return (
                <div className="price" key={price._id}>
                  {" "}
                  <h4>{price.price.toFixed(2)} €</h4>
                  <h5>{displaySubtraction}</h5>
                </div>
              );
            })}
          </div>
          <p>{drink?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Drink;
