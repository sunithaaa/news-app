import React, { useState } from "react";
import { Link } from "react-router-dom";
import Category from "../data/Category";

const Navbar = ({ toggle }) => {
  const [articles, setArticles] = useState([]);
  const filterNews = (category) => {
    const updatedNews = Category.filter((ele) => {
      return ele.category === category;
    });
    setArticles(updatedNews);
  };
  return (
    <nav
      className="flex justify-between items-center bg-gray-300 h-16 font-mono shadow-sm "
      role="navigation"
    >
      <Link to="/" className="font-extrabold pl-5 text-xl cursor-pointer">
        Newz
      </Link>
      <div className="md:hidden pr-4 cursor-pointer" onClick={toggle}>
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
      <div className="md:block cursor-pointer text-md uppercase mr-40 font-semibold hidden">
        <Link to="/" className="p-4">
          All
        </Link>
        <Link to="/health" className="p-4">
          Health
        </Link>
        <Link to="/entertainment" className="p-4">
          Entertainment
        </Link>
        <Link to="politics" className="p-4">
          Politics
        </Link>
        <Link to="/sports" className="p-4" onClick={() => filterNews("sports")}>
          Sports
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
