import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/Blog.scss";
import { Link } from "react-router-dom";

const Blog = () => {
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
  const [activeImage, setActiveImage] = useState(0);
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  useEffect(() => {
    setBlog(blogs.find((blog) => blog.slug === slug));
    setActiveImage(0);
  }, [slug, blogs]);
  if (!blog) return <div className="page">Blog not found</div>;
  return (
    <div className="page blog">
      <div className="blog-top">
        <div className="blog-top-header">
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
      </div>
      <div className="blog-content">
        <div className="blog-content-image">
          <img src={blog.images[activeImage]} alt={blog.title} />

          {blog.images.length > 1 && (
            <>
              <button
                className="blog-content-image-arrow-button next"
                onClick={() =>
                  setActiveImage((activeImage + 1) % blog.images.length)
                }
              >
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
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>

              <button
                className="blog-content-image-arrow-button prev"
                onClick={() =>
                  setActiveImage((activeImage - 1) % blog.images.length)
                }
              >
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
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
            </>
          )}
        </div>
        <div className="blog-content-text">
          <h1>{blog.title}</h1>
          <div className="blog-content-text-date">
            {blog.dateStart === blog.dateEnd ? (
              <span>{blog.dateStart}</span>
            ) : (
              <span>
                {blog.dateStart} - {blog.dateEnd}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
