import React, { useState, useContext, useEffect } from "react";
import "../styles/Categories.scss";
import { Link } from "react-router-dom";
import { AppContext } from "../AppContext";

const Categories = () => {
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

  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchCategories();
    fetchDrinks();
    fetchDrinksCombinations();
  }, []);

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

  const [activeCategory, setActiveCategory] = useState();
  useEffect(() => {
    setActiveCategory(categories[0]?._id);
  }, [categories]);

  const checkSearch = (title) => {
    if (title?.toLowerCase().includes(search.toLowerCase())) {
      return true;
    }

    return false;
  };

  return (
    <div className="page categories">
      <div className="menu-top">
        <div className="menu-top-header ">
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
          <h1>Cjenik</h1>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Pretraži kategorije..."
            onChange={(e) => setSearch(e.target.value)}
          />
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
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </div>
      <div className="categories-container">
        {categories.map((category) => {
          if (checkSearch(category.title)) {
            return (
              <Link
                to={`/menu/${category._id}`}
                className="c"
                key={category._id}
              >
                <div className="back">
                  <img src={category.image.url} alt={category.title} />
                </div>
                <div className="menu-categories-info">
                  <h2>{category.title}</h2>
                  <p>{category.shortDescription}</p>
                </div>
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Categories;
