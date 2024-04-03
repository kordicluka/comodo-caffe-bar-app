import React, { useState, useContext, useEffect } from "react";
import "../styles/Menu.scss";
import { Link } from "react-router-dom";
import { AppContext } from "../AppContext";

const Menu = () => {
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
    fetchDrinks();
    fetchCategories();
    fetchDrinksCombinations();
  }, []);

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
    <div className="page menu">
      <div className="menu-top">
        <div className="menu-top-header">
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
            placeholder="Pretraži pića..."
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
        <div className="menu-categories">
          <div className="menu-categories-container">
            {categories.map((category, index) => (
              <button
                key={index}
                className={category?._id === activeCategory ? "active" : ""}
                onClick={() => setActiveCategory(category?._id)}
              >
                <span> {category?.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="menu-container">
        {elements
          .filter((element) => {
            if (checkSearch(element.title)) {
              if (element?.category?.includes(activeCategory)) {
                return true;
              }
            }
            return false;
          })
          .sort((a, b) => a.layoutNumber - b.layoutNumber)
          .map((element, index) => {
            if (element.type === "drink") {
              return element.prices.map((price, priceIndex) => (
                <Link
                  key={`${element._id}-${priceIndex}`} // Ensuring a unique key by combining the element ID and price index.
                  className="menu-container-drink"
                  to={`/menu/${element._id}`}
                >
                  <div className="menu-container-drink-image">
                    <img src={element.image?.url} alt={element?.title} />
                  </div>
                  <div className="menu-container-drink-text">
                    <h1>
                      {element.prices.length > 1
                        ? `${element?.title} - ${
                            price?.subtraction + " " + element?.unitSubtraction
                          }`
                        : element?.title}
                    </h1>
                    <span>
                      {
                        categories.find(
                          (category) => category._id === element?.category[0]
                        )?.title
                      }
                    </span>
                  </div>
                  <div className="menu-container-drink-price">
                    <span>{price?.price.toFixed(2)} €</span>
                  </div>
                </Link>
              ));
            } else {
              return (
                <Link
                  key={`${element._id}`} // Creating a composite key.
                  className="menu-container-drink"
                  to={`/menu/${element._id}`}
                >
                  <div className="menu-container-drink-image">
                    <img src={element.image?.url} alt={element?.title} />
                  </div>
                  <div className="menu-container-drink-text">
                    <h1>{element?.title}</h1>
                    <span>
                      {
                        categories.find(
                          (category) => category._id === element?.category[0]
                        )?.title
                      }
                    </span>
                  </div>
                  <div className="menu-container-drink-price">
                    <span>{element?.price.toFixed(2)} €</span>
                  </div>
                </Link>
              );
            }
          })}
      </div>
    </div>
  );
};

export default Menu;
