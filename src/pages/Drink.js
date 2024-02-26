import React, { useState, useEffect } from "react";

const Drink = () => {
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

  const [id, setId] = useState(null);

  return <div className="page "></div>;
};

export default Drink;
