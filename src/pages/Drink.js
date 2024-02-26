import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Drink.scss";

const Drink = () => {
  const [drinks, setDrinks] = useState([
    {
      id: 1,
      title: "Coca Cola",
      price: 2.5,
      category: ["Sva pića", "Sokovi"],
      description:
        "Coca Cola je gazirano bezalkoholno piće koje se proizvodi od strane kompanije Coca-Cola Company. Coca Cola je najprodavanije bezalkoholno piće u svetu.",
      image:
        "https://assets.turbologo.com/blog/en/2019/08/19085106/coca-cola-logo-2007.jpg",
    },
    {
      id: 2,
      title: "Coca Cola Zero",
      price: 2.5,
      category: ["Sva pića", "Sokovi"],
      description:
        "Coca Cola Zero je bezalkoholno gazirano piće koje se proizvodi od strane kompanije Coca-Cola Company. Coca Cola Zero je bez šećera.",
      image:
        "https://res.cloudinary.com/dvg2o5azu/image/upload/v1708010560/cola_zero_qs3okx.webp",
    },
    {
      id: 3,
      title: "Cedevita",
      price: 2.5,
      category: ["Sva pića", "Sokovi"],
      description:
        "Cedevita je instant napitak koji se koristi za pripremu osvežavajućeg napitka. Cedevita je proizvod kompanije Atlantic Grupa.",
      image:
        "https://res.cloudinary.com/dvg2o5azu/image/upload/v1708010560/cedevita_lkl5ap.jpg",
    },
    {
      id: 4,
      title: "Limonada",
      price: 2.5,
      category: ["Sva pića", "Sokovi"],
      description:
        "Limonada je osvežavajuće gazirano bezalkoholno piće koje se pravi od limuna, vode i šećera.",
      image:
        "https://res.cloudinary.com/dvg2o5azu/image/upload/v1708010561/limunada_vlkuhv.jpg",
    },
    {
      id: 5,
      title: "Naranča",
      price: 2.5,
      category: ["Sva pića", "Sokovi"],
      description:
        "Naranča je osvežavajuće gazirano bezalkoholno piće koje se pravi od naranče, vode i šećera.",
      image:
        "https://res.cloudinary.com/dvg2o5azu/image/upload/v1708010561/naranca_ro3efd.png",
    },
    {
      id: 6,
      title: "Pago",
      price: 2.5,
      category: ["Sva pića", "Sokovi"],
      description:
        "Pago je osvežavajuće gazirano bezalkoholno piće koje se pravi od voća, vode i šećera.",
      image:
        "https://res.cloudinary.com/dvg2o5azu/image/upload/v1708010561/pago_logo_glow_umnptq.png",
    },

    {
      id: 9,
      title: "Tangerine Juice",
      price: 2.5,

      category: ["Sva pića", "Sokovi"],
      description:
        "Tangerine Juice is a refreshing non-alcoholic drink made from tangerine, water and sugar.",
      image:
        "https://res.cloudinary.com/dvg2o5azu/image/upload/v1708010562/tangerine_wijc2n.jpg",
    },
    {
      id: 10,
      title: "Thomas Henry",
      price: 2.5,
      category: ["Sva pića", "Sokovi"],
      description:
        "Thomas Henry is a refreshing non-alcoholic drink made from tangerine, water and sugar.",
      image:
        "https://res.cloudinary.com/dvg2o5azu/image/upload/v1708010561/thoma_henry_yb6mhv.webp",
    },

    {
      id: 11,
      title: "Pago",
      price: 2.5,
      category: ["Sva pića", "Sokovi"],
      description:
        "Pago is a refreshing non-alcoholic drink made from fruit, water and sugar.",
      image:
        "https://res.cloudinary.com/dvg2o5azu/image/upload/v1708010561/pago_logo_glow_umnptq.png",
    },
    {
      id: 12,
      title: "Espresso",
      price: 1.6,
      category: ["Sva pića", "Topli napitci"],
      description:
        "Espresso is a concentrated form of coffee served in small, strong shots. It's known for its rich flavor and creamy texture, often forming a velvety foam on top known as crema. A perfect espresso is the foundation of many coffee drinks and is revered for its energy-boosting properties and deep, complex flavor profile.",
      image:
        "https://images.getrecipekit.com/20230414194230-espresso-cup-with-coffee-beans.jpg?aspect_ratio=16:9&quality=90&",
    },
  ]);

  //get the id from the url params
  const url = window.location.href;
  const urlParts = url.split("/");

  useEffect(() => {
    setId(parseInt(urlParts[urlParts.length - 1]));
  }, [urlParts]);

  const [id, setId] = useState(null);
  const [drink, setDrink] = useState(null);

  useEffect(() => {
    setDrink(drinks.find((drink) => drink.id === id));
  }, [id, drinks]);

  return (
    <div className="page drink-page">
      <div className="drink-top">
        <div className="drink-top-header">
          <Link to="/home">
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
          <img src={drink?.image} alt={drink?.title} />
        </div>
        <div className="drink-content-text">
          <h1>{drink?.title}</h1>
          <h4>{drink?.category[1]}</h4>

          <p>{drink?.description}</p>
          <div className="drink-content-text-date">
            <span>{drink?.price}0 €</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drink;
