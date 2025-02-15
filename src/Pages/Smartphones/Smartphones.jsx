import React, { useState, useEffect } from "react";
import { Heart, ShoppingCart, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../Components/CartContext/CartContext";

export default function Smartphones() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Smartphones");
  const [selectedStockStatus, setSelectedStockStatus] = useState("");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const navigate = useNavigate();
  const { addToCart, cartItems } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/products");
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    addToCart(product);
  };

  const handlePriceRangeChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prev) => ({ ...prev, [name]: value }));
  };

  const filteredProducts = products.filter((product) => {
    const isCategoryMatch = !selectedCategory || product.category === selectedCategory;
    const isStockStatusMatch = !selectedStockStatus || 
      (selectedStockStatus === "In Stock" && product.stock > 0) ||
      (selectedStockStatus === "Out of Stock" && product.stock === 0);
    const isPriceRangeMatch =
      (priceRange.min === "" || product.price >= parseFloat(priceRange.min)) &&
      (priceRange.max === "" || product.price <= parseFloat(priceRange.max));
    return isCategoryMatch && isStockStatusMatch && isPriceRangeMatch;
  });

  const FilterSection = () => {
    return (
      <div className="space-y-6">
        <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
          <h2 className="text-lg font-semibold mb-6 text-gray-800 border-b border-gray-100 pb-4">
            Filters
          </h2>
          
          <div className="space-y-8">
            {/* Categories Section */}
            <div className="transform transition-all duration-300">
              <h3 className="text-sm font-medium text-gray-700 mb-4 flex items-center">
                <span className="w-1 h-4 bg-[#FA8232] rounded mr-2"></span>
                Categories
              </h3>
              <div className="space-y-3">
                {["All", "Laptops", "Gaming Consoles", "Smartphones", "Wearables & Accessories", "PC Components"].map(
                  (category) => (
                    <label 
                      key={category} 
                      className="flex items-center group cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === (category === "All" ? "" : category)}
                        onChange={() => setSelectedCategory(category === "All" ? "" : category)}
                        className="w-4 h-4 text-[#FA8232] border-gray-300 focus:ring-[#FA8232] transition-all duration-300"
                      />
                      <span className="ml-3 text-sm text-gray-600 group-hover:text-[#FA8232] transition-colors duration-300">
                        {category}
                      </span>
                    </label>
                  )
                )}
              </div>
            </div>
  
            {/* Stock Status Section */}
            <div className="transform transition-all duration-300">
              <h3 className="text-sm font-medium text-gray-700 mb-4 flex items-center">
                <span className="w-1 h-4 bg-[#FA8232] rounded mr-2"></span>
                Stock Status
              </h3>
              <div className="space-y-3">
                {["All", "In Stock", "Out of Stock"].map((status) => (
                  <label 
                    key={status} 
                    className="flex items-center group cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="stockStatus"
                      checked={selectedStockStatus === (status === "All" ? "" : status)}
                      onChange={() => setSelectedStockStatus(status === "All" ? "" : status)}
                      className="w-4 h-4 text-[#FA8232] border-gray-300 focus:ring-[#FA8232] transition-all duration-300"
                    />
                    <span className="ml-3 text-sm text-gray-600 group-hover:text-[#FA8232] transition-colors duration-300">
                      {status}
                    </span>
                  </label>
                ))}
              </div>
            </div>
  
            {/* Price Range Section */}
            <div className="transform transition-all duration-300">
              <h3 className="text-sm font-medium text-gray-700 mb-4 flex items-center">
                <span className="w-1 h-4 bg-[#FA8232] rounded mr-2"></span>
                Price Range
              </h3>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  name="min"
                  value={priceRange.min}
                  onChange={handlePriceRangeChange}
                  placeholder="Min"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#FA8232]/20 focus:border-[#FA8232] transition-all duration-300 outline-none"
                />
                <span className="text-gray-500">-</span>
                <input
                  type="number"
                  name="max"
                  value={priceRange.max}
                  onChange={handlePriceRangeChange}
                  placeholder="Max"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#FA8232]/20 focus:border-[#FA8232] transition-all duration-300 outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="py-5 px-16 flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-5 px-16 flex justify-center items-center min-h-[400px]">
        <div className="text-red-500 text-center">
          <p className="text-xl font-semibold mb-2">Error loading products</p>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <section className="py-5 px-4 md:px-16">
      {/* Mobile filter button */}
      <div className="md:hidden mb-4">
        <button
          onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg text-gray-700"
        >
          <Filter className="w-4 h-4" />
          Filters
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <div className={`
          md:w-1/4 
          ${isMobileFilterOpen ? 'block' : 'hidden'} 
          md:block 
          transition-all 
          duration-300
        `}>
          <FilterSection />
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => {
              const isInCart = cartItems.some((item) => item.id === product.id);
              return (
                <div
                  key={product.id}
                  onClick={() => handleProductClick(product)}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group relative cursor-pointer"
                >
                  <div className="relative h-48 md:h-64">
                    <img
                      src={product.image1}
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.discount && (
                      <span className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-sm text-sm">
                        Sale
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-gray-600 mb-1">
                      {product.category}
                    </div>
                    <h3 className="h-12 text-gray-800 text-sm font-medium mb-1 line-clamp-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <p className="text-blue-600 font-semibold">
                        ${product.price}
                      </p>
                      {product.discount && (
                        <p className="text-gray-500 line-through text-sm">
                          ${product.discount}
                        </p>
                      )}
                    </div>
                    <div className="flex gap-2 mt-3">
                      <button
                        className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-50"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Heart
                          className={`w-4 h-4 ${
                            isInCart ? "text-red-500" : "text-gray-600"
                          }`}
                        />
                      </button>
                      <button
                        onClick={(e) => handleAddToCart(e, product)}
                        className="flex-1 bg-blue-500 text-white font-medium py-1.5 px-3 rounded-lg hover:bg-blue-600 flex items-center justify-center gap-1 text-xs"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        {isInCart ? "Added" : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            )}
          </div>
        </div>
      </div>
    </section>
  );
}