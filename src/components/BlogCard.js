import React, { useState } from "react";
import "../styles/BlogCard.scss";
import { Link } from "react-router-dom";

const BlogCard = ({ blog, index }) => {
  return (
    <Link to={`/blogs/${blog.slug}`} className="blog-card" key={index}>
      <div className="image-container">
        <img src={blog.images[0]} alt={blog.title} />
      </div>
      <div className="content">
        <h4>{blog.title}</h4>
        <p>{blog.shortDescription}</p>
        <div className="blog-card-content-date">
          {blog.dateStart === blog.dateStart ? (
            <span>{blog.dateStart}</span>
          ) : (
            <span>
              {blog.dateStart} - {blog.dateStart}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
