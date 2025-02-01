import React from "react";
import { useNavigate } from "react-router-dom";
import { Heart, Eye, ShoppingCart } from "lucide-react";
import classes from "../HomeCustomersAlsoBought/HomeCustomersAlsoBought.module.css";
import tozo1 from "../../assets/tozo1.png";
import airpod from "../../assets/airpod.png";
import a21 from "../../assets/a21.png";
import playstation from "../../assets/playstation.png";
import promotion from "../../assets/promotion.png";
import fifth from "../../assets/fifth.png";
import first from "../../assets/first.png";
import fourth from "../../assets/fourth.png";
import second from "../../assets/second.png";
import sixth from "../../assets/sixth.png";
import seventh from "../../assets/seventh.png";
import third from "../../assets/third.png";

export default function HomeCustomersAlsoBought() {
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      name: "TOZO T6 True Wireless Earbuds",
      price: `25,000 EGP`,
      image: tozo1,
      category: `Headphones`,
      rating: 4.7,
      reviews: 2500,
      sku: "TZ001",
      brand: "TOZO",
      availability: true,
    },
    {
      id: 2,
      name: "Oppo A3 Dual SIM (256GB / 8GB Ram / 6.67 Inch / 4G LTE) - Starry Purple",
      price: `23,000 EGP`,
      image: seventh,
      category: `TV's`,
      rating: 4.7,
      reviews: 2500,
      sku: "TZ001",
      brand: "TOZO",
      availability: true,
    },
    {
      id: 3,
      name: "MSI Sword 17 HX B14VGKG-236EG Laptop (Intel i7-14650HX - 16GB Ram - M.2 NVMe 1TB - Nvidia RTX 4070 8GB - 17 Inch QHD+ IPS 240Hz - Win11) - Cosmos Gray",
      price: `19,000 EGP`,
      image: third,
      category: `Laptops`,
      rating: 4.7,
      reviews: 2500,
      sku: "TZ001",
      brand: "TOZO",
      availability: true,
    },
    {
      id: 4,
      name: "Samsung UA40T5300AUXEG 40 Inch FHD Smart TV With Built-In Receiver",
      price: `43,000 EGP`,
      image: fourth,
      category: `Cases`,
      discount: `39,000`,
      rating: 4.7,
      reviews: 2500,
      sku: "TZ001",
      brand: "TOZO",
      availability: true,
    },
    {
      id: 5,
      name: "Anker Soundcore P30i A3959Z21 ANC Earbuds",
      price: `18,000 EGP`,
      image: fifth,
      category: `Consoles`,
      rating: 4.7,
      reviews: 2500,
      sku: "TZ001",
      brand: "TOZO",
      availability: true,
    },
    {
      id: 6,
      name: "Anker Soundcore H30i A3012H11 Bluetooth Headphone",
      price: `37,000 EGP`,
      image: sixth,
      category: `Smartphones`,
      discount: `24,000`,
      rating: 4.7,
      reviews: 2500,
      sku: "TZ001",
      brand: "TOZO",
      availability: true,
    },
  ];
  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <>
      <section className="py-5 px-4 sm:px-8 lg:px-16">
        {/* Header with Title and Browse All Link */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold heading-font">
            Customers Also Bought
          </h2>
          <a href="#" className="text-orange-500 hover:underline body-font">
            Browse All Product →
          </a>
        </div>

        <div className="min-h-screen">
          <div className="flex flex-col lg:flex-row lg:gap-3 items-stretch">
            {/* Left Column with Two Product Cards */}
            <div className="hidden lg:flex lg:w-1/4 flex-col gap-3 flex-shrink-0">
              {/* First Product Card */}
              <div className="max-w-xs rounded-lg bg-white p-3 shadow-md flex flex-col">
                {/* Discount and Hot tags */}
                <div className="flex gap-2 mb-1">
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-0.5 rounded">
                    32% OFF
                  </span>
                  <span className="bg-red-500 text-white text-xs font-medium px-2 py-0.5 rounded body-font">
                    HOT
                  </span>
                </div>

                {/* Product Image */}
                <div className="relative mb-2">
                  <img
                    src={playstation}
                    alt="PlayStation 5"
                    className="w-full h-[15.5rem] object-cover rounded-lg"
                  />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-3 h-3 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-1 text-xs text-gray-600">(52,677)</span>
                </div>

                {/* Product Title */}
                <h3 className="text-sm font-semibold mb-1 body-font line-clamp-2">
                  PlayStation 5 - 512GB SSD Console with Wireless Controller
                </h3>

                {/* Price */}
                <div className="flex items-center mb-2">
                  <span className="text-gray-400 line-through text-xs body-font">
                    $865.99
                  </span>
                  <span className="ml-2 text-blue-500 font-bold text-sm">
                    $442.12
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-gray-600 mb-2 line-clamp-2 body-font">
                  Games built using the PlayStation 5 development kit showcase
                  unparalleled load times, visuals.
                </p>

                {/* Action Buttons */}
                <div className="flex gap-1">
                  <button className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-50">
                    <Heart className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="flex-1 bg-[#3b82f6] text-white font-bold py-1.5 px-3 rounded-lg hover:bg-orange-600 flex items-center justify-center gap-1 text-xs">
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                  <button className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-50">
                    <Eye className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Second Product Card */}
              <div className="max-w-xs rounded-lg bg-white p-3 shadow-md flex flex-col">
                {/* Discount and Hot tags */}
                <div className="flex gap-2 mb-1">
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-0.5 rounded">
                    25% OFF
                  </span>
                  <span className="bg-red-500 text-white text-xs font-medium px-2 py-0.5 rounded body-font">
                    HOT
                  </span>
                </div>

                {/* Product Image */}
                <div className="relative mb-2">
                  <img
                    src={playstation}
                    alt="Xbox Series X"
                    className="w-full h-[15.5rem] object-cover rounded-lg"
                  />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-3 h-3 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-1 text-xs text-gray-600">(48,234)</span>
                </div>

                {/* Product Title */}
                <h3 className="text-sm font-semibold mb-1 body-font line-clamp-2">
                  Xbox Series X - 1TB SSD Gaming Console with Wireless
                  Controller
                </h3>

                {/* Price */}
                <div className="flex items-center mb-2">
                  <span className="text-gray-400 line-through text-xs body-font">
                    $799.99
                  </span>
                  <span className="ml-2 text-blue-500 font-bold text-sm">
                    $599.99
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-gray-600 mb-2 line-clamp-2 body-font">
                  Experience next-gen gaming with 4K resolution, up to 120 FPS,
                  and revolutionary speed.
                </p>

                {/* Action Buttons */}
                <div className="flex gap-1">
                  <button className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-50">
                    <Heart className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="flex-1 bg-orange-500 text-white font-bold py-1.5 px-3 rounded-lg hover:bg-orange-600 flex items-center justify-center gap-1 text-xs">
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                  <button className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-50">
                    <Eye className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="w-full lg:w-3/4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-2">
                {products.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleProductClick(product)}
                    className="bg-white rounded-lg overflow-hidden shadow-lg group relative cursor-pointer"
                  >
                    <div className="relative h-64">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Action Buttons */}
                      <div className="absolute top-5 right-4 flex flex-col gap-2 transform translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                        <button className="bg-white p-2 rounded-full shadow-md hover:bg-orange-500 hover:text-white transition-colors">
                          <Heart size={20} />
                        </button>
                        <button className="bg-white p-2 rounded-full shadow-md hover:bg-orange-500 hover:text-white transition-colors">
                          <ShoppingCart size={20} />
                        </button>
                        <button className="bg-white p-2 rounded-full shadow-md hover:bg-orange-500 hover:text-white transition-colors">
                          <Eye size={20} />
                        </button>
                      </div>
                      {product.discount && (
                        <span className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-sm text-sm">
                          Sale
                        </span>
                      )}
                    </div>
                    {/* Product Info */}
                    <div className="p-4">
                      <div className="text-sm font-semibold text-gray-600 mb-1">
                        {product.category}
                      </div>
                      <h3 className="font-bold h-[5rem] text-[0.9rem] text-gray-800 heading-font">
                        {product.name.split(" ").slice(0, 10).join(" ") +
                          (product.name.split(" ").length > 3 ? "..." : "")}
                      </h3>
                      <div className="flex items-center gap-2">
                        <p className="text-[#1B6392] font-bold heading-font">
                          {product.price}
                        </p>
                        {product.discount && (
                          <p className="text-gray-500 line-through text-sm">
                            {product.discount}
                          </p>
                        )}
                      </div>
                      <button className="mt-4 w-full py-2 text-sm text-white font-bold bg-[#3b82f6] hover:bg-[#2563eb] transition-colors rounded">
                        Add to Cart
                      </button>
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
