import React from "react";
import "../styles/BlogCard.scss";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const BlogCard = ({ blog, index, searchTitle }) => {
  return (
    <Link to={`/blogs/${blog.slug}`} className="blog-card" key={index}>
      <div className="image-container">
        {" "}
        <LazyLoadImage
          alt={blog.title}
          src={blog.images[0]} // use normal <img> attributes as props
          effect="blur"
          fit="cover"
          width="100%"
          height="100%"
        />
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
