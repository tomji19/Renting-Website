import React from "react";
import classes from "../FirstHeader/FirstHeader.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import AuthComponent from "./../AuthComponent/AuthComponent";
import { useCart } from "../../Components/CartContext/CartContext";
import { ShoppingCart, X, Plus, Minus } from "lucide-react";
import SearchBar from "../SearchBar/SearchBar";
// import products from "../../data/products.json";




export default function FirstHeader() {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    getTotalItems,
    getTotalPrice,
  } = useCart();

  return (
    <header className="bg-white py-5 px-16 relative">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-8">
        {/* Logo Section */}
        <div className="w-4/5 sm:w-4/5 lg:w-1/6 flex items-center justify-center sm:justify-start">
          <Link to="/" className="text-3xl text-start w-[16rem]">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        {/* Search Bar Section */}
        <div className="w-4/5 lg:flex-1 lg:w-auto order-2 lg:order-none">
          <SearchBar />
        </div>

        {/* Cart and Login Section */}
        <div className="w-4/5 lg:w-auto flex items-center justify-center gap-4 flex-shrink-0">
          <div className="relative">
            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="text-black flex items-start border-2 border-black rounded-md px-6 py-2 justify-start body-font hover:bg-[#f97316] hover:border-[#f97316] hover:text-white"
            >
              <ShoppingCart className="h-6 w-6 mr-2" />
              Cart
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#f97316] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                  {getTotalItems()}
                </span>
              )}
            </button>

            {/* Cart Dropdown */}
            {isCartOpen && (
              <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-xl z-50 border-2 border-gray-200">
                <div className="p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Shopping Cart</h3>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {cartItems.length === 0 ? (
                    <p className="text-gray-500 text-center py-4">
                      Your cart is empty
                    </p>
                  ) : (
                    <>
                      <div className="max-h-96 overflow-y-auto">
                        {cartItems.map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center gap-4 py-4 border-b"
                          >
                            <img
                              src={item.image1}
                              alt={item.name}
                              className="w-16 h-16 object-contain rounded"
                            />
                            <div className="flex-1">
                              <h4 className="text-sm font-medium">
                                {item.name}
                              </h4>
                              <p className="text-[#1B6392] font-bold">
                                {item.price}
                              </p>
                              <div className="flex items-center gap-2 mt-2">
                                <button
                                  onClick={() =>
                                    updateQuantity(item.id, item.quantity - 1)
                                  }
                                  className="p-1 rounded-md border hover:bg-gray-100"
                                >
                                  <Minus className="w-4 h-4" />
                                </button>
                                <span className="w-8 text-center">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() =>
                                    updateQuantity(item.id, item.quantity + 1)
                                  }
                                  className="p-1 rounded-md border hover:bg-gray-100"
                                >
                                  <Plus className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-gray-500 hover:text-red-500"
                            >
                              <X className="w-5 h-5" />
                            </button>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t">
                        <div className="flex justify-between items-center mb-4">
                          <span className="font-semibold">Total:</span>
                          <span className="text-[#1B6392] font-bold">
                            {getTotalPrice().toLocaleString()} EGP
                          </span>
                        </div>
                        <Link
                          to="/cart"
                          onClick={() => setIsCartOpen(false)}
                          className="block w-full bg-[#f97316] text-white text-center py-2 rounded-md hover:bg-[#ea580c]"
                        >
                          Cart
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>

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
  );
}
