import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ toggle, isOpen }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-5 bg-gray-500 text-center items-center"
          : "hidden"
      }
      onClick={toggle}
    >
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
      <Link to="/sports" className="p-4">
        Sports
      </Link>
    </div>
  );
};

export default Dropdown;
