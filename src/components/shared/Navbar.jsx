import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 w-full md:w-10/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/skills">Skills</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            Ibrahim Khalil
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-4 rounded-md shadow-md transform hover:scale-105 transition-all"
                  : "text-black text-base hover:bg-blue-500 hover:text-white py-2 px-4 rounded-md transition-all"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-4 rounded-md shadow-md transform hover:scale-105 transition-all"
                  : "text-black text-base hover:bg-blue-500 hover:text-white py-2 px-4 rounded-md transition-all"
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive
                  ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-4 rounded-md shadow-md transform hover:scale-105 transition-all"
                  : "text-black text-base hover:bg-blue-500 hover:text-white py-2 px-4 rounded-md transition-all"
              }
            >
              Skills
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-4 rounded-md shadow-md transform hover:scale-105 transition-all"
                  : "text-black text-base hover:bg-blue-500 hover:text-white py-2 px-4 rounded-md transition-all"
              }
            >
              Contact
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end  lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">
            <NavLink
              to="/hireme"
              className={({ isActive }) =>
                isActive
                  ? "bg-gradient-to-r from-green-500 to-blue-700 text-white py-2 px-4 rounded-md shadow-md transform hover:scale-105 transition-all"
                  : "bg-gradient-to-r from-green-500 to-green-700 text-white py-2 px-4 rounded-md shadow-md transform hover:scale-105 transition-all"
              }
            >
              Hire Me
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
