import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="conatiner flex justify-between bg-gray-800 text-white">
        <div className="logo m-5">
          <NavLink to="/">Nikhil_Developer</NavLink>
        </div>
        <nav>
          <ul className="flex gap-8 mr-10 mt-5" >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
