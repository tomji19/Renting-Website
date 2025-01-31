import React from "react";
import classes from "../Footer/Footer.module.css";
import logowhite from "../../assets/logowhite.png";

export default function Footer() {
  return (
    <>
      <footer className="py-5 px-16 bg-gray-900 text-gray-300">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-20 py-10">
          {/* Company Info */}
          <div>
            <img
              src={logowhite}
              alt="Clicon Logo"
              className="w-48 h-auto mb-4"
            />
            <p className="font-semibold text-white heading-font">CLICON</p>
            <p className="text-sm body-font">Customer Support:</p>
            <p className="text-lg font-medium text-white heading-font">01270545289</p>
            <p className="text-sm mt-2 body-font">
              4517 Washington Ave.
              <br />
              Manchester, Kentucky 39495
            </p>
            <a
              href="https://www.youssefashour.com"
              className="text-blue-400 hover:underline text-sm body-font"
              target="_blank"
            >
              https://www.youssefashour.com
            </a>
          </div>

          {/* Top Category */}
          <div>
            <h3 className="text-white font-semibold mb-4 heading-font">Top Category</h3>
            <ul className="space-y-2 text-sm body-font">
              <li>Computer & Laptop</li>
              <li>SmartPhone</li>
              <li>Headphone</li>
              <li className="text-yellow-400">Accessories</li>
              <li>Camera & Photo</li>
              <li>TV & Homes</li>
            </ul>
            <a href="#" className="text-yellow-400 text-sm mt-2 inline-block heading-font">
              Browse All Products →
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 heading-font">Quick Links</h3>
            <ul className="space-y-2 text-sm body-font">
              <li>Shop Product</li>
              <li>Shopping Cart</li>
              <li>Wishlist</li>
              <li>Compare</li>
              <li>Track Order</li>
              <li>Customer Help</li>
              <li>About Us</li>
            </ul>
          </div>

          {/* Popular Tags */}
          <div>
            <h3 className="text-white font-semibold mb-4 heading-font">Popular Tag</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Game",
                "iPhone",
                "TV",
                "Asus Laptop",
                "Macbook",
                "SSD",
                "Graphics Card",
                "Power Bank",
                "Smart TV",
                "Speaker",
                "Tablet",
                "Microwave",
                "Samsung",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs bg-gray-800 text-gray-200 rounded-lg body-font"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm body-font">
          Youssef & Mayar © 2024. Design by Besmeallahe Masha2allah Team
        </div>
      </footer>
    </>
  );
}
