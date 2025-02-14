import React from "react";
import { useNavigate } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react";
import { useCart } from "../../Components/CartContext/CartContext";
import tozo1 from "../../assets/tozo1.png";
import seventh from "../../assets/seventh.png";
import third from "../../assets/third.png";
import fourth from "../../assets/fourth.png";
import fifth from "../../assets/fifth.png";
import sixth from "../../assets/sixth.png";
// import products from "../../data/products.json";

export default function HomeCustomersAlsoBought() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  const handleAddToCart = (e, product) => {
    e.stopPropagation(); // Prevent card click event from firing
    addToCart(product);
  };

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
    {
      id: 9,
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
      id: 10,
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

  return (
    <section className="py-5 px-4 sm:px-8 lg:px-16">
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
          <div className="w-full">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 lg:gap-4">
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
                        className="flex-1 bg-[#3b82f6] text-white font-bold py-1.5 px-3 rounded-lg hover:bg-orange-600 flex items-center justify-center gap-1 text-xs"
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
