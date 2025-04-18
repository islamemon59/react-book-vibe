import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <div className="navbar bg-transparent container mx-auto md:py-8 px-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/listedBooks'>Listed Books</NavLink>
          </li>
          </ul>
        </div>
        <a className="md:text-2xl font-bold ml-1">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal font-semibold gap-2">
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/listedBooks'>Listed Books</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <button className="btn bg-green-600 text-white rounded-md">Sign In</button>
        <button className="btn bg-cyan-600 text-white rounded-md">Sign Up</button>
      </div>
    </div>
  );
};

export default Header;
