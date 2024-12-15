import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <Link
        to="/"
        className="space-x-4 text-white no-underline"
      >
        {" "}
        <h1 className="text-2xl font-semibold">Event App</h1>
      </Link>

      <nav>
        <ul className="text-white">
          <Link
            to="/"
            className="items-center space-x-4 hover:bg-gray-700 p-2 rounded-md text-white no-underline"
          >
            <i className="bi bi-house-door-fill text-xl"></i>
            <span className="font-medium">Home</span>
          </Link>

          <Link
            to="/event-form"
            className="items-center space-x-4 hover:bg-gray-700 p-2 rounded-md text-white no-underline"
          >
            <i className="bi bi-calendar2-event text-xl"></i>
            <span className="font-medium">Form</span>
          </Link>
          <Link
            to="/sign-in"
            className="items-center space-x-4 hover:bg-gray-700 p-2 rounded-md text-white no-underline"
          >
            <i className="bi bi-box-arrow-in-right text-xl"></i>
            <span className="font-medium">Sign In</span>
          </Link>
          <Link
            to="/sign-up"
            className="items-center space-x-4 hover:bg-gray-700 p-2 rounded-md text-white no-underline"
          >
            <i className="bi bi-box-arrow-in-up text-xl"></i>
            <span className="font-medium">Sign Up</span>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
