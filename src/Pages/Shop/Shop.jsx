import React, { useState } from "react";
import { ShoppingCart, Heart, Filter, Star, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../Components/CartContext/CartContext";
import tozo1 from "../../assets/tozo1.png";
import airpod from "../../assets/airpod.png";
import a21 from "../../assets/a21.png";
import third from "../../assets/third.png";
import fourth from "../../assets/fourth.png";
import fifth from "../../assets/fifth.png";
import sixth from "../../assets/sixth.png";
import seventh from "../../assets/seventh.png";
import promotion from "../../assets/promotion.png";
// import products from "../../data/products.json";

export default function Shop() {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [showInStock, setShowInStock] = useState(false);

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
    {
      id: 7,
      name: "Anker Soundcore H30i A3012H11 Bluetooth Headphone",
      price: `67,000 EGP`,
      image: third,
      category: `Smartphones`,
      discount: `24,000`,
      rating: 4.7,
      reviews: 2500,
      sku: "TZ001",
      brand: "TOZO",
      availability: true,
    },
    {
      id: 8,
      name: "Anker Soundcore H30i A3012H11 Bluetooth Headphone",
      price: `67,000 EGP`,
      image: seventh,
      category: `Smartphones`,
      discount: `24,000`,
      rating: 4.7,
      reviews: 2500,
      sku: "TZ001",
      brand: "TOZO",
      availability: true,
    },
  ];

  const categories = [
    "Headphones",
    "TV's",
    "Laptops",
    "Cases",
    "Consoles",
    "Smartphones",
  ];

  const brands = ["TOZO", "Samsung", "Apple", "Anker", "MSI", "Oppo"];

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  const handleAddToCart = (e, product) => {
    e.stopPropagation(); // Prevent card click event from firing
    addToCart(product);
  };

  return (
    <>
      <section>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="sticky top-4 space-y-6">
                {/* Categories */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-3">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label key={category} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="w-4 h-4"
                          checked={selectedCategories.includes(category)}
                          onChange={() => {}}
                        />
                        <span className="text-gray-700">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-3">Price Range</h3>
                  <div className="space-y-4">
                    <input
                      type="range"
                      min="0"
                      max="100000"
                      value={priceRange[1]}
                      className="w-full"
                      onChange={() => {}}
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{priceRange[0]} EGP</span>
                      <span>{priceRange[1]} EGP</span>
                    </div>
                  </div>
                </div>

                {/* Brands */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-3">Brands</h3>
                  <div className="space-y-2">
                    {brands.map((brand) => (
                      <label key={brand} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="w-4 h-4"
                          checked={selectedBrands.includes(brand)}
                          onChange={() => {}}
                        />
                        <span className="text-gray-700">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-3">Availability</h3>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="w-4 h-4"
                      checked={showInStock}
                      onChange={() => setShowInStock(!showInStock)}
                    />
                    <span className="text-gray-700">In Stock Only</span>
                  </label>
                </div>

                {/* Rating Filter */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-3">Rating</h3>
                  {[4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center gap-2 mb-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <div className="flex items-center">
                        {Array(rating)
                          .fill(0)
                          .map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 text-yellow-400 fill-current"
                            />
                          ))}
                        <span className="ml-1 text-sm text-gray-600">& up</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">All Products</h2>
                <div className="flex items-center gap-4">
                  <select className="border p-2 rounded-lg">
                    <option>Sort by: Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest First</option>
                  </select>
                </div>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleProductClick(product)}
                    className="bg-white rounded-lg shadow-sm group cursor-pointer"
                  >
                    <div className="relative h-64">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {!product.availability && (
                        <span className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-sm text-sm">
                          Out of Stock
                        </span>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="text-sm text-gray-600 mb-1">
                        {product.category}
                      </div>
                      <h3 className="text-gray-800 font-semibold mb-2 line-clamp-2">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="ml-1 text-sm">{product.rating}</span>
                        </div>
                        <span className="text-sm text-gray-500">
                          ({product.reviews})
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-blue-600">
                          {product.price}
                        </span>
                        <div className="flex gap-2">
                          <button
                            className="p-2 rounded-lg border hover:bg-gray-50"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Heart className="w-4 h-4" />
                          </button>
                          <button
                            className="p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                            onClick={(e) => handleAddToCart(e, product)}
                          >
                            <ShoppingCart className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
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
