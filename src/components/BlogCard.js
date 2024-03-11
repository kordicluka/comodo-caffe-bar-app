import React from "react";
import "../styles/BlogCard.scss";
import { Link } from "react-router-dom";

const BlogCard = ({ blog, index, searchTitle }) => {
  return (
    <Link to={`/blogs/${blog.slug}`} className="blog-card" key={index}>
      <div className="image-container">
        <img src={blog.images[0]} alt={blog.title} />
      </div>
      <div className="content">
        {" "}
        <div className="blog-card-content-date">
          {blog.dateStart === blog.dateEnd ? (
            <span>{blog.dateStart}</span>
          ) : (
            <span>
              {blog.dateStart} - {blog.dateEnd}
            </span>
          )}
        </div>
        {searchTitle(blog.title)} <p>{blog.shortDescription}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
