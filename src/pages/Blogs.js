import React, { useState } from "react";
import BlogCard from "../components/BlogCard";
import { Link } from "react-router-dom";
import Blog from "./Blog";
import "../styles/Blogs.scss";

const Blogs = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "Najava kviza 25.2.2024. u Comodo Bar-u.",
      shortDescription: "Kliknite za prijavu na kviz!",
      content: "<p>This is the content for blog 1</p>",
      dateStart: "15.02.2024.",
      dateEnd: "15.02.2024.",
      images: [
        "https://res.cloudinary.com/dvg2o5azu/image/upload/v1708798355/Screenshot_2024-02-24_191216_urfwwc.png",
      ],
      slug: "najava-kviza-25-2-2024",
    },
    {
      title: "Održan kviz Bitangi i Princeza 18.2.2024. u Comodo Bar-u.",
      shortDescription: "Pogledajte kako je bilo na kvizu!",
      content: "<p>This is the content for blog 1</p>",
      dateStart: "15.02.2024.",
      dateEnd: "15.02.2024.",
      images: [
        "https://mail.google.com/mail/u/0?ui=2&ik=f9d78bdd4b&attid=0.3&permmsgid=msg-f:1771251674760531862&th=1894c00381eacf96&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ-D50PRX1K9h2LK95ARWvHPrLK-smAu8R6nkPqopYqdZ6M4-EoEnhwRBcnmOAuQ0q2QIQsJeyXqabFwkn2zFSJYJqxOg2xTjz2gI-A4tmut1PY4ljVsIFW3kwE&disp=emb&realattid=1894bffdebb6d1c2e478",
        "https://mail.google.com/mail/u/0?ui=2&ik=f9d78bdd4b&attid=0.4&permmsgid=msg-f:1771251674760531862&th=1894c00381eacf96&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ-kqQfbc6Z74CQDNbxE3A6EpXG6CiwYHSk2C91ACPgwUpzy5uLw2t0O8XWLRIzilTrzFrSuXJ6zZc2kpKYHkQ9DxBinJYQr_IIKzJa6YFfkytknNwyLDU1KNlU&disp=emb&realattid=1894bffbb2265cd24477",
        "https://mail.google.com/mail/u/0?ui=2&ik=f9d78bdd4b&attid=0.8&permmsgid=msg-f:1771251674760531862&th=1894c00381eacf96&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ8W8PT7Ue2dg8alNGVbaQkH6pYUftwihVHU82FbYRJW6EJluIGNnVUs1DBypXJUwlMW4hc_7DPNTorWlnXeAQiw1iJqwNRO6_oflQfNeYIlDeGYDLiyJb0hgDk&disp=emb&realattid=1894bff7c3a277da8e55",
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
        "https://mail.google.com/mail/u/0?ui=2&ik=f9d78bdd4b&attid=0.4&permmsgid=msg-f:1771251674760531862&th=1894c00381eacf96&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ-kqQfbc6Z74CQDNbxE3A6EpXG6CiwYHSk2C91ACPgwUpzy5uLw2t0O8XWLRIzilTrzFrSuXJ6zZc2kpKYHkQ9DxBinJYQr_IIKzJa6YFfkytknNwyLDU1KNlU&disp=emb&realattid=1894bffbb2265cd24477",
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
        "https://mail.google.com/mail/u/0?ui=2&ik=f9d78bdd4b&attid=0.8&permmsgid=msg-f:1771251674760531862&th=1894c00381eacf96&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ8W8PT7Ue2dg8alNGVbaQkH6pYUftwihVHU82FbYRJW6EJluIGNnVUs1DBypXJUwlMW4hc_7DPNTorWlnXeAQiw1iJqwNRO6_oflQfNeYIlDeGYDLiyJb0hgDk&disp=emb&realattid=1894bff7c3a277da8e55",
      ],
      slug: "proslava-rodendana-2-11-2024",
    },
    {
      title: "Inquizicija kviz 15.2.2024. u Comodo Bar-u.",
      shortDescription: "Kliknite za prijavu na kviz!",
      content: "<p>This is the content for blog 2</p>",
      dateStart: "15.02.2024.",
      dateEnd: "15.02.2024.",
      images: ["https://www.gracin.hr/wp-content/uploads/2022/12/4.png"],
      slug: "inquizicija-kviz-15-2-2024",
    },
    {
      title: "Proslava rođendana u Comodo Bar-u.",
      shortDescription:
        "Pogledajte kako izgleada proslava rođendana u Comodo Bar-u!",
      content: "<p>This is the content for blog 3</p>",
      dateStart: "15.02.2024.",
      dateEnd: "15.02.2024.",
      images: ["https://www.gracin.hr/wp-content/uploads/2022/12/1.png"],
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
            return <BlogCard blog={blog} index={index} />;
          }
        })}
      </div>
    </div>
  );
};

export default Blogs;
