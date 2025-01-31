import React from "react";
import { useNavigate } from "react-router-dom";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import tozo1 from "../../assets/tozo1.png";
import a21 from "../../assets/a21.png";
import third from "../../assets/third.png";
import fourth from "../../assets/fourth.png";
import fifth from "../../assets/fifth.png";
import sixth from "../../assets/sixth.png";
import seventh from "../../assets/seventh.png";
import promotion from "../../assets/promotion.png";

export default function HomeFeaturedProductsSection() {
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
    <section className="py-5 px-4 sm:px-8 lg:px-16">
      <div className="min-h-screen">
        <div className="flex flex-col lg:flex-row lg:gap-7">
          {/* Promotional Banner - Hidden on small/medium screens */}
          <div className="hidden lg:block lg:w-1/4">
            <div className="bg-[#F3DE6D] rounded-lg h-full flex flex-col">
              <div className="flex-1 p-5">
                <h2 className="text-red-500 text-sm font-semibold mb-2 body-font">
                  COMPUTER & ACCESSORIES
                </h2>
                <h1 className="text-3xl font-bold mb-2 heading-font">
                  32% Discount
                </h1>
                <p className="mb-4 heading-font">
                  For all electronics products
                </p>
                <div className="mb-4">
                  <span className="text-sm heading-font">Offers ends in:</span>
                  <span className="ml-1 bg-white px-1 py-1 text-sm rounded-sm heading-font">
                    ENDS OF CHRISTMAS
                  </span>
                </div>
                <div className="flex justify-center">
                  <button className="bg-orange-500 text-white font-bold  px-6 py-2 rounded-sm hover:bg-orange-600 transition heading-font">
                    SHOP NOW →
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <img
                  src={promotion}
                  className="w-full object-cover"
                  alt="promotional image in the left banner"
                />
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="w-full lg:w-3/4">
            {/* Header with Title and Browse All Link */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold heading-font">
                Featured Products
              </h2>
              <a href="#" className="text-orange-500 hover:underline body-font">
                Browse All Product →
              </a>
            </div>
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
  );
}