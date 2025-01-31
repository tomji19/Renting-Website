import React from "react";
import { Heart, Eye, ShoppingCart } from "lucide-react";
import classes from "../HomeCustomersAlsoBought/HomeCustomersAlsoBought.module.css";
import playstation from "../../assets/playstation.png";
import promotion from "../../assets/promotion.png";
import fifth from "../../assets/fifth.png";
import first from "../../assets/first.png";
import fourth from "../../assets/fourth.png";
import second from "../../assets/second.png";
import sixth from "../../assets/sixth.png";
import third from "../../assets/third.png";

export default function HomeCustomersAlsoBought() {
  const products = [
    {
      id: 1,
      name: "TOZO T6 True Wireless Earbuds",
      price: 70,
      image: first,
      rating: 4.8,
      reviews: 738,
      tag: "HOT",
    },
    {
      id: 2,
      name: "Samsung Electronics Samsung Galaxy S21 5G",
      price: 230,
      image: second,
      rating: 4.9,
      reviews: 536,
      tag: "BEST DEALS",
    },
    {
      id: 3,
      name: "Amazon Basics High-Speed HDMI Cable",
      price: 360,
      image: third,
      rating: 4.7,
      reviews: 423,
    },
    {
      id: 4,
      name: "Portable Washing Machine",
      price: 80,
      image: fourth,
      rating: 4.2,
      reviews: 816,
    },
    {
      id: 5,
      name: "Wired Over-Ear Gaming Headphones",
      price: 150,
      image: fifth,
      rating: 4.8,
      reviews: 647,
    },
    {
      id: 6,
      name: "Polaroid 57-Inch Photo/Video Tripod",
      price: 120,
      image: sixth,
      rating: 4.1,
      reviews: 877,
      tag: "25% OFF",
    },
  ];
  return (
    <>
      <section className="py-5 px-4 sm:px-8 lg:px-16">
        {/* Header with Title and Browse All Link */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold heading-font">Customers Also Bought</h2>
          <a href="#" className="text-orange-500 hover:underline body-font">
            Browse All Product →
          </a>
        </div>
        <div className="min-h-screen">
          <div className="flex flex-col lg:flex-row lg:gap-3 items-stretch">
            {/* Full Product Card Details */}
            <div className="hidden lg:block lg:w-1/4 flex-shrink-0">
              <div className="max-w-xs rounded-lg bg-white p-4 shadow-md flex flex-col h-full">
                {/* Discount and Hot tags */}
                <div className="flex gap-2 mb-2">
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-0.5 rounded bo">
                    32% OFF
                  </span>
                  <span className="bg-red-500 text-white text-xs font-medium px-2 py-0.5 rounded body-font	">
                    HOT
                  </span>
                </div>

                {/* Product Image */}
                <div className="relative mb-4">
                  <img
                    src={playstation}
                    alt="PlayStation 5"
                    className="w-full h-auto rounded-lg"
                  />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm text-gray-600">(52,677)</span>
                </div>

                {/* Product Title */}
                <h3 className="text-lg font-semibold mb-2 body-font">
                  PlayStation 5 - 512GB SSD Console with Wireless Controller -
                  EU Version
                </h3>

                {/* Price */}
                <div className="flex items-center mb-4">
                  <span className="text-gray-400 line-through text-sm body-font">
                    $865.99
                  </span>
                  <span className="ml-2 text-blue-500 font-bold">$442.12</span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 flex-grow body-font">
                  Games built using the PlayStation 5 development kit showcase
                  unparalleled load times, visuals.
                </p>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 heading-font">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="flex-1 bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 flex items-center justify-center gap-2">
                    <ShoppingCart className="w-5 h-5" />
                    Add to Button
                  </button>
                  <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 heading-font">
                    <Eye className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
            {/* Product Grid */}
            <div className="w-full lg:w-3/4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg overflow-hidden shadow-lg group"
                  >
                    {/* Product Image with Hover Effect */}
                    <div className="relative h-48">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      {/* Black overlay and buttons on hover */}
                      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-1/3 left-0 right-0 flex justify-center gap-2 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <button className="p-2 rounded-full bg-white hover:bg-gray-200 transition-colors">
                            <Heart className="w-5 h-5 text-gray-600" />
                          </button>
                          <button className="p-2 rounded-full bg-white hover:bg-gray-200 transition-colors">
                            <ShoppingCart className="w-5 h-5 text-gray-600" />
                          </button>
                          <button className="p-2 rounded-full bg-white hover:bg-gray-200 transition-colors">
                            <Eye className="w-5 h-5 text-gray-600" />
                          </button>
                        </div>
                      </div>
                      {product.tag && (
                        <span
                          className={`absolute top-2 left-2 px-2 py-1 text-xs text-white rounded ${
                            product.tag === "HOT"
                              ? "bg-red-500"
                              : product.tag === "BEST DEALS"
                              ? "bg-blue-500"
                              : product.tag === "SALE"
                              ? "bg-green-500"
                              : "bg-yellow-500"
                          }`}
                        >
                          {product.tag}
                        </span>
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="p-4">
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-${
                              i < Math.floor(product.rating) ? "orange" : "gray"
                            }-400`}
                          >
                            ★
                          </span>
                        ))}
                        <span className="text-gray-500 text-sm ml-1">
                          ({product.reviews})
                        </span>
                      </div>
                      <h3 className="font-medium text-gray-800 mb-2 line-clamp-2 heading-font">
                        {product.name}
                      </h3>
                      <p className="text-blue-500 font-bold heading-font ">
                        ${product.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
