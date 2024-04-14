import React, { useContext, useEffect } from "react";
import "../styles/Home.scss";
import cjenik from "../assets/images/gallery-4.jpg";
import galerija from "../assets/images/gallery-1.jpg";
import blogs from "../assets/images/blogs.jpg";

import { Link } from "react-router-dom";
import { AppContext } from "../AppContext";

const Home = () => {
  const {
    drinks,
    categories,
    elements,
    setDrinksCombinations,
    drinksCombinations,
    setElements,
    setDrinks,
    setCategories,
  } = useContext(AppContext);

  useEffect(() => {
    fetchCategories();
    fetchDrinks();
    fetchDrinksCombinations();
  }, []);

  const fetchDrinks = () => {
    const token = localStorage.getItem("token");
    fetch("https://cash-registar-server.vercel.app/api/drink", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setDrinks(data);
      })
      .catch((error) => {
        fetchDrinks();
      });
  };

  const fetchCategories = () => {
    const token = localStorage.getItem("token");
    fetch("https://cash-registar-server.vercel.app/api/category", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        fetchCategories();
      });
  };

  useEffect(() => {
    // add to Elements all drinks but with type drink
    const drinksWithCategory = drinks.map((drink) => ({
      ...drink,
      type: "drink",
    }));

    // add to Elements all drinkCombinations but with type drinkCombination
    const drinkCombinationsWithCategory = drinksCombinations.map(
      (drinkCombination) => ({
        ...drinkCombination,
        type: "drinkCombination",
      })
    );

    // merge all arrays
    const allElements = [
      ...drinksWithCategory,
      ...drinkCombinationsWithCategory,
    ];

    setElements(allElements);
  }, [drinks, drinksCombinations]);

  const fetchDrinksCombinations = () => {
    const token = localStorage.getItem("token");
    fetch("https://cash-registar-server.vercel.app/api/drinkCombination", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setDrinksCombinations(data);
      })
      .catch((error) => {
        fetchDrinksCombinations();
      });
  };

  return (
    <div className=" home">
      <Link to="/menu">
        <img src={cjenik} alt="logo" />
        <h1>Cjenik</h1>
      </Link>
      <Link to="/blogs">
        <img
          src={
            "https://image.dnevnik.hr/media/images/996x562/Sep2023/62638012-pub-kviz.jpg"
          }
          alt="blog"
        />
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
