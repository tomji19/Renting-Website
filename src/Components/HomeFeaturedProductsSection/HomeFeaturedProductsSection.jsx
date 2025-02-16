import React from "react";
import { useNavigate } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react";
import { Zap } from "lucide-react";
import { useCart } from "../../Components/CartContext/CartContext";
import tozo1 from "../../assets/tozo1.png";
import airpod from "../../assets/airpod.png";
import third from "../../assets/third.png";
import fourth from "../../assets/fourth.png";
import fifth from "../../assets/fifth.png";
import sixth from "../../assets/sixth.png";
import seventh from "../../assets/seventh.png";
import { NavLink } from "react-router-dom";

export const products = [
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
  {
    id: 7,
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
    id: 8,
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
];

export default function HomeFeaturedProductsSection() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  const handleAddToCart = (e, product) => {
    e.stopPropagation(); // Prevent card click event from firing
    addToCart(product);
  };



  return (
    <section className="py-5 px-4 sm:px-8 lg:px-16">
      <div className="min-h-screen">
        <div className="flex flex-col lg:flex-row lg:gap-7">
          {/* Promotional Banner */}
          {/* Promotional Section - Adjusted Width */}
          <div className="hidden lg:flex flex-col w-[26%] gap-5 mt-12">
            {/* First Promotion */}
            <div className="p-5 py-10 flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#0A1F33] to-[#112D46] text-white rounded-lg shadow-lg border border-blue-500/30">
              <img
                src={airpod}
                alt="Wireless Earbuds"
                className="w-36 h-36 object-contain mb-3 drop-shadow-lg"
              />
              <h2 className="text-lg font-semibold tracking-wide mb-3 text-gray-100">
                Xiaomi True Wireless Earbuds
              </h2>
              <p className="text-gray-400 text-xs mb-2">
                Escape the noise. Experience premium sound.
              </p>
              <div className="flex items-center gap-1 mb-4">
                <span className="text-xs text-gray-400">Only for:</span>
                <span className="font-bold text-blue-400 text-sm">2499 EGP</span>
              </div>
              <button className="w-full py-3 mt-3 bg-gradient-to-r from-[#004AAD] to-[#1D267D] text-white px-3 rounded-md shadow-md text-xs hover:from-[#1D267D] hover:to-[#004AAD] transition-all duration-300 transform hover:scale-105">
                SHOP NOW →
              </button>
            </div>

            {/* Second Promotion - Below the First */}
            <div className="p-5 py-10 bg-gradient-to-t from-[#0A1F33] to-[#112D46] text-white text-center rounded-lg shadow-lg border border-indigo-500/30">
              <h3 className="text-xs font-semibold mb-4 px-4 py-1 bg-white bg-opacity-10 backdrop-blur-md rounded-md text-gray-300">
                SUMMER SALES
              </h3>
              <div className="text-2xl font-extrabold mb-3 text-gray-100 tracking-widest">
                37% OFF
              </div>
              <p className="text-xs mb-6 text-gray-400">
                Available for <span className="text-blue-400">SmartPhone</span> products.
              </p>
              <button className="w-full py-3 bg-gradient-to-r from-[#004AAD] to-[#1D267D] text-white px-3 rounded-md shadow-md text-xs hover:from-[#1D267D] hover:to-[#004AAD] transition-all duration-300 transform hover:scale-105">
                SHOP NOW →
              </button>
            </div>
          </div>


          {/* Product Grid */}
          <div className="w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold heading-font">
                Featured Products
              </h2>
              <a href="#" className="text-orange-500 hover:underline body-font">
                Browse All Product →
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-4">
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
                    {product.discount && (
                      <span className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-sm text-sm">
                        Sale
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="text-sm font-semibold text-gray-600 mb-1">
                      {product.category}
                    </div>
                    <h3 className="h-[3rem] text-gray-800 text-sm font-semibold mb-1 body-font line-clamp-3">
                      {product.name.split(" ").slice(0, 8).join(" ") +
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
                    <div className="flex gap-1 mt-3">
                      <button
                        className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-50"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        <Heart className="w-4 h-4 text-gray-600" />
                      </button>
                      <button
                        onClick={(e) => handleAddToCart(e, product)}
                        className="flex-1 bg-gradient-to-r from-blue-700 to-indigo-900 text-white font-bold py-1.5 px-3 rounded-lg hover:bg-orange-600 flex items-center justify-center gap-1 text-xs"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


