import React, { useState } from "react";
import BlogCard from "../components/BlogCard";
import { Link } from "react-router-dom";
import Blog from "./Blog";
import "../styles/Blogs.scss";

const Blogs = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "Najava kviza Bitange i Princeze 29.2.2024.",
      shortDescription: "Kliknite za prijavu na kviz!",
      content: "<p>This is the content for blog 1</p>",
      dateStart: "15.02.2024.",
      dateEnd: "15.02.2024.",
      images: [
        "https://res.cloudinary.com/dvg2o5azu/image/upload/v1708798122/Screenshot_2024-02-24_190751_tlwv1m.png",
      ],
      slug: "najava-kviza-25-2-2024",
    },
    {
      title: "Održan kviz  18.2.2024. u Comodo Bar-u.",
      shortDescription: "Pogledajte kako je bilo na kvizu!",
      content: "<p>This is the content for blog 1</p>",
      dateStart: "15.02.2024.",
      dateEnd: "15.02.2024.",
      images: [
        "https://res.cloudinary.com/dvg2o5azu/image/upload/v1708806996/unnamed_5_yvcfsy.jpg",
        "https://res.cloudinary.com/dvg2o5azu/image/upload/v1708806996/unnamed_3_ak4juq.jpg",
        "https://res.cloudinary.com/dvg2o5azu/image/upload/v1708806996/unnamed_4_cmtkt4.jpg",
      ],
      slug: "odrzan-kviz-bitangi-i-princeza-18-2-2024",
    },
    {
      title: "Inquizicija kviz 15.2.2024. u Comodo Bar-u.",
      shortDescription: "Kliknite za prijavu na kviz!",
      content: "<p>This is the content for blog 2</p>",
      dateStart: "15.02.2024.",
      dateEnd: "15.02.2024.",
      images: [
        "https://res.cloudinary.com/dvg2o5azu/image/upload/v1708806996/unnamed_4_cmtkt4.jpg",
      ],
      slug: "inquizicija-kviz-15-2-2024",
    },
    {
      title: "Proslava rođendana u Comodo Bar-u.",
      shortDescription:
        "Pogledajte kako izgleada proslava rođendana u Comodo Bar-u!",
      content: "<p>This is the content for blog 3</p>",
      dateStart: "15.02.2024.",
      dateEnd: "15.02.2024.",
      images: [
        "https://res.cloudinary.com/dvg2o5azu/image/upload/v1708806996/unnamed_1_ltmhrq.jpg",
      ],
      slug: "proslava-rodendana-2-11-2024",
    },
    {
      title: "Inquizicija kviz 15.2.2024. u Comodo Bar-u.",
      shortDescription: "Kliknite za prijavu na kviz!",
      content: "<p>This is the content for blog 2</p>",
      dateStart: "15.02.2024.",
      dateEnd: "15.02.2024.",
      images: [
        "https://res.cloudinary.com/dvg2o5azu/image/upload/v1708806996/unnamed_2_xn3abu.jpg",
      ],
      slug: "inquizicija-kviz-15-2-2024",
    },
    {
      title: "Proslava rođendana u Comodo Bar-u.",
      shortDescription:
        "Pogledajte kako izgleada proslava rođendana u Comodo Bar-u!",
      content: "<p>This is the content for blog 3</p>",
      dateStart: "15.02.2024.",
      dateEnd: "15.02.2024.",
      images: [
        "https://res.cloudinary.com/dvg2o5azu/image/upload/v1708806996/unnamed_abflwn.jpg",
      ],
      slug: "proslava-rodendana-2-11-2024",
    },
  ]);

  const [search, setSearch] = useState("");

  const checkSearch = (title) => {
    if (title.toLowerCase().includes(search.toLowerCase())) {
      return true;
    }

    return false;
  };

  const getSearchTitle = (title) => {
    if (search === "") {
      return <h4>{title}</h4>;
    } else {
      let titleArray = title.split(search);
      return (
        <h4>
          {titleArray[0]}
          <span className="searched">{search}</span>
          {titleArray[1]}
        </h4>
      );
    }
  };

  return (
    <div className="page blogs">
      <div className="blogs-top">
        <div className="blogs-top-header">
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
          <h1>Događanja</h1>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Pretraži događanja"
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
      <div className="blogs-container">
        {blogs.map((blog, index) => {
          if (checkSearch(blog.title)) {
            return (
              <BlogCard
                blog={blog}
                index={index}
                searchTitle={getSearchTitle}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Blogs;
