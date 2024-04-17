import React, { useState } from "react";
import BlogCard from "../components/BlogCard";
import { Link } from "react-router-dom";
import Blog from "./Blog";
import "../styles/Blogs.scss";

const Blogs = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "Tamburaška večer - svaki petak",
      shortDescription:
        "Pogledajte kako izgleda tamburaška večer u Comodo Bar-u.",
      content: "<p>This is the content for blog 1</p>",
      dateStart: "Svakog petka",
      dateEnd: "22:00h - 02:00h",
      images: [
        "https://res.cloudinary.com/dmqufec5z/image/upload/v1713353376/1080x1080_wualig.png",
      ],
      slug: "tamburaska-vecer--svaki-petak",
    },
    {
      title: "Kvizovi u Comodo Bar-u - Opći. Dođite i zabavite se!",
      shortDescription: "Pogledajte kako izgleda kviz u Comodo Bar-u.",
      content: "<p>This is the content for blog 1</p>",
      dateStart: "Svake srijede",
      dateEnd: "20:00h",
      images: [
        "https://res.cloudinary.com/dvg2o5azu/image/upload/v1708806996/unnamed_5_yvcfsy.jpg",
        "https://res.cloudinary.com/dvg2o5azu/image/upload/v1708806996/unnamed_3_ak4juq.jpg",
        "https://res.cloudinary.com/dvg2o5azu/image/upload/v1708806996/unnamed_4_cmtkt4.jpg",
      ],
      slug: "kvizovi-u-comodo-bar-u",
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
