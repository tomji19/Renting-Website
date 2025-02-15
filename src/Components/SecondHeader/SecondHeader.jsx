import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
// import products from "../../data/products.json";

export default function SecondHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Add effect to handle screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // 1024px is the 'lg' breakpoint in Tailwind
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#3b82f6] py-5 px-4 md:px-16">
      <div className="container mx-auto relative">
        {" "}
        {/* Removed flex to fix centering */}
        {/* Menu Button - Positioned absolutely */}
        <button
          className="text-white lg:hidden absolute left-[46%] top-1/2 -translate-y-1/2"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={30} />}
        </button>
        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen
              ? "fixed inset-0 bg-[#1B6392] z-50 flex flex-col items-center justify-center"
              : "hidden"
          } lg:static lg:z-auto lg:block`}
        >
          {/* Close Button */}
          {isMenuOpen && (
            <button
              className="absolute top-4 right-4 text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={32} />
            </button>
          )}

          {/* Links */}
          <div
            className={`${
              isMenuOpen
                ? "flex flex-col space-y-4 mt-8"
                : "lg:flex lg:justify-start lg:space-x-8"
            }`}
          >
            <NavLink
              to="/shop"
              className={({ isActive }) => `text-white flex items-center text-3xl sm:text-3xl md:text-3xl lg:text-xl body-font ${isActive ? 'bg-[#FA8232]' : ''}`}
            >
              Shop
            </NavLink>
            <NavLink
              to="/laptops"
              className={({ isActive }) => `text-white flex items-center text-3xl sm:text-3xl md:text-3xl lg:text-xl body-font ${isActive ? 'bg-[#FA8232]' : ''}`}
            >
              Laptops
            </NavLink>
            <NavLink
              to="/gamingconsoles"
              className={({ isActive }) => `text-white flex items-center text-3xl sm:text-3xl md:text-3xl lg:text-xl body-font ${isActive ? 'bg-[#FA8232]' : ''}`}
            >
              Gaming Consoles
            </NavLink>
            <NavLink
              to="/smartphones"
              className={({ isActive }) => `text-white flex items-center text-3xl sm:text-3xl md:text-3xl lg:text-xl body-font ${isActive ? 'bg-[#FA8232]' : ''}`}
            >
              Smartphones
            </NavLink>
            <NavLink
              to="/wearablesaccessories"
              className={({ isActive }) => `text-white flex items-center text-3xl sm:text-3xl md:text-3xl lg:text-xl body-font ${isActive ? 'bg-[#FA8232]' : ''}`}
            >
              Wearables & Accessories
            </NavLink>
            <NavLink
              to="/pccomponents"
              className={({ isActive }) => `text-white flex items-center text-3xl sm:text-3xl md:text-3xl lg:text-xl body-font ${isActive ? 'bg-[#FA8232]' : ''}`}
            >
              PC Components
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
