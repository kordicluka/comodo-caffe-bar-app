import React, { createContext, useState, useEffect } from "react";

// Create the context
export const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [drinksCombinations, setDrinksCombinations] = useState([]);
  const [elements, setElements] = useState([]);

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
        console.error("Error fetching drinksCombinations:", error);
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
        console.error("Error fetching categories:", error);
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
        console.error("Error fetching categories:", error);
      });
  };

  // Prepare the context value
  const contextValue = {
    drinks,
    setDrinks,
    categories,
    setCategories,
    drinksCombinations,
    setDrinksCombinations,
    elements,
    setElements,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
