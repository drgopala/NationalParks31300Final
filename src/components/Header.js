import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "../App.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h1 className="bg-orange-900 text-white p-9 mt-4 text-4xl font-bold text-center">
        Parks National - National Park Showcase
      </h1>
      <nav className ={isOpen ? "isOpen" : ""}>
        {/* Hamburger Button */}
        <button onClick={() => setIsOpen(!isOpen)}>&#8801;</button>
        {/* Navigation Links */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      
      </>
  );
};

export default Header;
