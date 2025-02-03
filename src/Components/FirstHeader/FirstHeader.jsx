import React from "react";
import classes from "../FirstHeader/FirstHeader.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import AuthComponent from "./../AuthComponent/AuthComponent";

export default function FirstHeader() {
  return (
    <>
      <header className="bg-white py-5 px-16">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
          {/* Logo Section */}
          <div className="w-full sm:w-1/3 flex items-center justify-center sm:justify-start lg:w-1/6">
            <Link to="/" className="text-3xl text-start w-[16rem]">
              <img src={logo}></img>
            </Link>
          </div>

          {/* Search Bar Section */}
          <div className="flex-grow relative flex-shrink mx-5">
            <input
              type="text"
              className="bg-white rounded-md py-2 px-4 w-full focus:outline-none border-2 border-black"
              placeholder="Search..."
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 ">
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Cart and Login Section */}
          <div className="w-full sm:w-auto flex items-center justify-center sm:justify-end gap-4 flex-shrink-0">
            <Link
              to="/cart"
              className="text-black flex items-start border-2 border-black rounded-md px-6 py-2 justify-start body-font hover:bg-[#f97316] hover:border-[#f97316] hover:text-white"
            >
              <svg
                className="h-6 w-6 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Cart
            </Link>
            <Link
              to="/auth"
              className="text-black flex items-start border-2 border-black rounded-md px-6 py-2 justify-start body-font hover:bg-[#f97316] hover:border-[#f97316] hover:text-white"
            >
              <svg
                className="h-6 w-6 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM6 21V19C6 16.7909 8.79086 15 12 15C15.2091 15 18 16.7909 18 19V21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Login
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
