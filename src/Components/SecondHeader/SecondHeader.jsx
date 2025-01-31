import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function SecondHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Add effect to handle screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // 1024px is the 'lg' breakpoint in Tailwind
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#3b82f6] py-5 px-4 md:px-16">
      <div className="container mx-auto relative"> {/* Removed flex to fix centering */}
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
                : "lg:flex lg:justify-start lg:space-x-4"
            }`}
          >
            <div className="text-white flex items-center text-3xl sm:text-3xl md:text-3xl lg:text-xl body-font">
              Computers
              <svg
                className="ml-2 h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 9l-7 7-7-7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="text-white flex items-center text-3xl sm:text-3xl md:text-3xl lg:text-xl body-font">
              Laptops
              <svg
                className="ml-2 h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 9l-7 7-7-7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="text-white flex items-center text-3xl sm:text-3xl md:text-3xl lg:text-xl body-font">
              Accessories
              <svg
                className="ml-2 h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 9l-7 7-7-7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="text-white flex items-center text-3xl sm:text-3xl md:text-3xl lg:text-xl body-font">
              Mobiles
              <svg
                className="ml-2 h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 9l-7 7-7-7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="text-white flex items-center text-3xl sm:text-3xl md:text-3xl lg:text-xl body-font">
              Tablets
              <svg
                className="ml-2 h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 9l-7 7-7-7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="text-white flex items-center text-3xl sm:text-3xl md:text-3xl lg:text-xl body-font">
              Gaming
              <svg
                className="ml-2 h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 9l-7 7-7-7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="text-white flex items-center text-3xl sm:text-3xl md:text-3xl lg:text-xl body-font">
              Brands
              <svg
                className="ml-2 h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 9l-7 7-7-7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}