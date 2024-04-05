import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/Blog.scss";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Blog = () => {
  const [blogs, setBlogs] = useState([
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
          <Link to="/blogs" className="share-link">
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
                d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="blog-content">
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
        <div className="blog-content-image">
          <LazyLoadImage
            src={blog.images[activeImage]}
            alt={blog.title}
            effect="blur"
            fit="cover"
            width="100%"
            height="100%"
          />

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
      </div>
    </div>
  );
};

export default Blog;
