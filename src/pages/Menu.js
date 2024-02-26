import React, { useState, useEffect } from "react";
import "../styles/Menu.scss";
import { Link } from "react-router-dom";

const Menu = () => {
  const [search, setSearch] = useState("");
  const [drinks, setDrinks] = useState([
    {
      id: 1,
      title: "Coca Cola",
      price: 2.5,
      category: ["Sva pića", "Sokovi"],
      image:
        "https://assets.turbologo.com/blog/en/2019/08/19085106/coca-cola-logo-2007.jpg",
    },
    {
      id: 2,
      title: "Coca Cola Zero",
      price: 2.5,
      category: ["Sva pića", "Sokovi"],
      image:
        "https://res.cloudinary.com/dvg2o5azu/image/upload/v1708010560/cola_zero_qs3okx.webp",
    },
    {
      id: 3,
      title: "Cedevita",
      price: 2.5,
      category: ["Sva pića", "Sokovi"],
      image:
        "https://res.cloudinary.com/dvg2o5azu/image/upload/v1708010560/cedevita_lkl5ap.jpg",
    },
    {
      id: 4,
      title: "Limonada",
      price: 2.5,
      category: ["Sva pića", "Sokovi"],
      image:
        "https://res.cloudinary.com/dvg2o5azu/image/upload/v1708010561/limunada_vlkuhv.jpg",
    },
    {
      id: 5,
      title: "Naranča",
      price: 2.5,
      category: ["Sva pića", "Sokovi"],
      image:
        "https://res.cloudinary.com/dvg2o5azu/image/upload/v1708010561/naranca_ro3efd.png",
    },
    {
      id: 6,
      title: "Pago",
      price: 2.5,
      category: ["Sva pića", "Sokovi"],
      image:
        "https://res.cloudinary.com/dvg2o5azu/image/upload/v1708010561/pago_logo_glow_umnptq.png",
    },

    {
      id: 1,
      title: "Coca Cola",
      price: 2.5,
      category: ["Sva pića", "Sokovi"],
      image:
        "https://assets.turbologo.com/blog/en/2019/08/19085106/coca-cola-logo-2007.jpg",
    },
    {
      id: 2,
      title: "Coca Cola Zero",
      price: 2.5,
      category: ["Sva pića", "Sokovi"],
      image:
        "https://res.cloudinary.com/dvg2o5azu/image/upload/v1708010560/cola_zero_qs3okx.webp",
    },
    {
      id: 3,
      title: "Cedevita",
      price: 2.5,
      category: ["Sva pića", "Sokovi"],
      image:
        "https://res.cloudinary.com/dvg2o5azu/image/upload/v1708010560/cedevita_lkl5ap.jpg",
    },
    {
      id: 4,
      title: "Limonada",
      price: 2.5,
      category: ["Sva pića", "Sokovi"],
      image:
        "https://res.cloudinary.com/dvg2o5azu/image/upload/v1708010561/limunada_vlkuhv.jpg",
    },
    {
      id: 5,
      title: "Naranča",
      price: 2.5,
      category: ["Sva pića", "Sokovi"],
      image:
        "https://res.cloudinary.com/dvg2o5azu/image/upload/v1708010561/naranca_ro3efd.png",
    },
    {
      id: 6,
      title: "Pago",
      price: 2.5,
      category: ["Sva pića", "Sokovi"],
      image:
        "https://res.cloudinary.com/dvg2o5azu/image/upload/v1708010561/pago_logo_glow_umnptq.png",
    },
    {
      id: 1,
      title: "Coca Cola",
      price: 2.5,
      category: ["Sva pića", "Sokovi"],
      image:
        "https://assets.turbologo.com/blog/en/2019/08/19085106/coca-cola-logo-2007.jpg",
    },
    {
      id: 2,
      title: "Coca Cola Zero",
      price: 2.5,
      category: ["Sva pića", "Sokovi"],
      image:
        "https://res.cloudinary.com/dvg2o5azu/image/upload/v1708010560/cola_zero_qs3okx.webp",
    },
    {
      id: 3,
      title: "Cedevita",
      price: 2.5,
      category: ["Sva pića", "Sokovi"],
      image:
        "https://res.cloudinary.com/dvg2o5azu/image/upload/v1708010560/cedevita_lkl5ap.jpg",
    },
    {
      id: 4,
      title: "Limonada",
      price: 2.5,
      category: ["Sva pića", "Sokovi"],
      image:
        "https://res.cloudinary.com/dvg2o5azu/image/upload/v1708010561/limunada_vlkuhv.jpg",
    },
    {
      id: 5,
      title: "Naranča",
      price: 2.5,
      category: ["Sva pića", "Sokovi"],
      image:
        "https://res.cloudinary.com/dvg2o5azu/image/upload/v1708010561/naranca_ro3efd.png",
    },
    {
      id: 6,
      title: "Pago",
      price: 2.5,
      category: ["Sva pića", "Sokovi"],
      image:
        "https://res.cloudinary.com/dvg2o5azu/image/upload/v1708010561/pago_logo_glow_umnptq.png",
    },
    {
      id: 7,
      title: "Schweppes Tonic",
      price: 2.5,
      category: ["Sva pića", "Sokovi"],
      image:
        "https://res.cloudinary.com/dvg2o5azu/image/upload/v1708010561/schweppes_tonic_ac11sz.jpg",
    },
    {
      id: 8,
      title: "Schweppes Bitter Lemon",
      price: 2.5,
      category: ["Sva pića", "Sokovi"],
      image:
        "https://res.cloudinary.com/dvg2o5azu/image/upload/v1708010562/schwpees_bitter_lemon_e29kv9.webp",
    },
    {
      id: 9,
      title: "Tangerine Juice",
      price: 2.5,
      category: ["Sva pića", "Sokovi"],
      image:
        "https://res.cloudinary.com/dvg2o5azu/image/upload/v1708010562/tangerine_wijc2n.jpg",
    },
    {
      id: 10,
      title: "Thomas Henry",
      price: 2.5,
      category: ["Sva pića", "Sokovi"],
      image:
        "https://res.cloudinary.com/dvg2o5azu/image/upload/v1708010561/thoma_henry_yb6mhv.webp",
    },

    {
      id: 1,
      title: "Coca Cola",
      price: 2.5,
      category: ["Sva pića", "Sokovi"],
      image:
        "https://assets.turbologo.com/blog/en/2019/08/19085106/coca-cola-logo-2007.jpg",
    },
    {
      id: 2,
      title: "Coca Cola Zero",
      price: 2.5,
      category: ["Sva pića", "Sokovi"],
      image:
        "https://res.cloudinary.com/dvg2o5azu/image/upload/v1708010560/cola_zero_qs3okx.webp",
    },
    {
      id: 3,
      title: "Cedevita",
      price: 2.5,
      category: ["Sva pića", "Sokovi"],
      image:
        "https://res.cloudinary.com/dvg2o5azu/image/upload/v1708010560/cedevita_lkl5ap.jpg",
    },
    {
      id: 4,
      title: "Limonada",
      price: 2.5,
      category: ["Sva pića", "Sokovi"],
      image:
        "https://res.cloudinary.com/dvg2o5azu/image/upload/v1708010561/limunada_vlkuhv.jpg",
    },
    {
      id: 5,
      title: "Naranča",
      price: 2.5,
      category: ["Sva pića", "Sokovi"],
      image:
        "https://res.cloudinary.com/dvg2o5azu/image/upload/v1708010561/naranca_ro3efd.png",
    },
    {
      id: 6,
      title: "Pago",
      price: 2.5,
      category: ["Sva pića", "Sokovi"],
      image:
        "https://res.cloudinary.com/dvg2o5azu/image/upload/v1708010561/pago_logo_glow_umnptq.png",
    },
    {
      id: 7,
      title: "Schweppes Tonic",
      price: 2.5,
      category: ["Sva pića", "Sokovi"],
      image:
        "https://res.cloudinary.com/dvg2o5azu/image/upload/v1708010561/schweppes_tonic_ac11sz.jpg",
    },
    {
      id: 8,
      title: "Schweppes Bitter Lemon",
      price: 2.5,
      category: ["Sva pića", "Sokovi"],
      image:
        "https://res.cloudinary.com/dvg2o5azu/image/upload/v1708010562/schwpees_bitter_lemon_e29kv9.webp",
    },
    {
      id: 9,
      title: "Tangerine Juice",
      price: 2.5,
      category: ["Sva pića", "Sokovi"],
      image:
        "https://res.cloudinary.com/dvg2o5azu/image/upload/v1708010562/tangerine_wijc2n.jpg",
    },
    {
      id: 10,
      title: "Thomas Henry",
      price: 2.5,
      category: ["Sva pića", "Sokovi"],
      image:
        "https://res.cloudinary.com/dvg2o5azu/image/upload/v1708010561/thoma_henry_yb6mhv.webp",
    },
    {
      id: 11,
      title: "Pago",
      price: 2.5,
      category: ["Sva pića", "Sokovi"],
      image:
        "https://res.cloudinary.com/dvg2o5azu/image/upload/v1708010561/pago_logo_glow_umnptq.png",
    },
    {
      id: 12,
      title: "Espresso",
      price: 1.6,
      category: ["Sva pića", "Topli napitci"],
      image:
        "https://images.getrecipekit.com/20230414194230-espresso-cup-with-coffee-beans.jpg?aspect_ratio=16:9&quality=90&",
    },
  ]);
  const [categories, setCategories] = useState([
    {
      title: "Sva pića",
      image:
        "https://images-katalozi.njuskalo.hr/data/image/500x705/42377/set-staklenih-casa-za-razna-pica-4-dijelni-interspar1638967161513-interspar-211884835.jpg",
      shortDescription: "Piva, Žestoka pića, Vina, Kokteli...",
      id: "all",
    },
    {
      title: "Topli napitci",
      image:
        "https://www.poslovni.hr/wp-content/uploads/2022/12/louis-hansel-vD9gZXbmRP4-unsplash.jpg",
      shortDescription: "Espresso, Macchiato, Cappuccino, Latte...",
      id: "Topli napitci",
    },

    {
      title: "Sokovi",
      image:
        "https://www.arz.hr/wp-content/uploads/2022/04/prirodni-sokovi--kako-ih-napraviti-scaled.jpg",
      shortDescription: "Naranča, Jabuka, Ananas, Borovnica...",
      id: "Sokovi",
    },

    {
      title: "Piva",
      image: "https://possector.hr/wp-content/uploads/2023/05/vrste-piva.webp",
      shortDescription: "Lager, Ale, Stout, IPA...",
      id: "beer",
    },

    {
      title: "Žestoka pića",
      image:
        "https://www.teklic.hr/slike/2021/01/pexels-oleg-magni-1005642.jpg",
      shortDescription: "Votka, Tekila, Rum, Whiskey...",
      id: "spirits",
    },
    {
      title: "Vina",
      image: "https://glasistrenovine.hr/fotografije/255218-.jpg",
      shortDescription: "Bijela, Crvena, Rose, Desertna...",
      id: "wines",
    },
    {
      title: "Kokteli",
      image: "https://hrb.com.hr/wp-content/uploads/2023/06/kokteli-1.jpg",
      shortDescription: "Cuba Libre, Mojito, Margarita, Gin Tonic...",
      id: "cocktails",
    },
  ]);
  const [activeCategory, setActiveCategory] = useState(categories[0].title);

  const checkSearch = (title) => {
    if (title.toLowerCase().includes(search.toLowerCase())) {
      return true;
    }

    return false;
  };

  const checkDrinkFilter = (drink) => {
    if (activeCategory === "Sva pića") {
      return true;
    }

    if (drink.category.includes(activeCategory)) {
      return true;
    }

    return false;
  };

  return (
    <div className="page menu">
      <div className="menu-top">
        <div className="menu-top-header">
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
                className={category.title === activeCategory ? "active" : ""}
                onClick={() => setActiveCategory(category.title)}
              >
                <span> {category.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="menu-container">
        {drinks.map((drink, index) => {
          if (checkSearch(drink.title) && checkDrinkFilter(drink)) {
            return (
              <Link key={index} className="menu-container-drink">
                <div className="menu-container-drink-image">
                  <img src={drink.image} alt={drink.title} />
                </div>
                <div className="menu-container-drink-text">
                  <h1>{drink.title}</h1>
                  <span>{drink.category[1]} </span>
                </div>
                <div className="menu-container-drink-price">
                  <span>{drink.price} €</span>
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
