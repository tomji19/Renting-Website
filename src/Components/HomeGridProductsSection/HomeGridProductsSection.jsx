import React from "react";

export default function HomeGridProductsSection() {
  const gridData = {
    flashSale: {
      title: "FLASH SALE TODAY",
      products: [
        {
          id: 1,
          name: "Bose Sport Earbuds -Wireless Earphones -Bluetooth In Ear...",
          price: `15,000`,
          image: "/src/assets/FlashSale1.png",
        },
        {
          id: 2,
          name: "Simple Mobile 4G LTE Prepaid Smartphone",
          price: `15,000`,
          image: "/src/assets/FlashSale2.png",
        },
        {
          id: 3,
          name: "4K UHD LED Smart TV with Chromecast Built-in",
          price: `15,000`,
          image: "/src/assets/FlashSale3.png",
        },
      ],
    },
    bestSellers: {
      title: "BEST SELLERS",
      products: [
        {
          id: 1,
          name: "Samsung Electronics Samsung Galexy S21 5G",
          price: `15,000`,
          image: "/src/assets/BestSellers1.png",
        },
        {
          id: 2,
          name: "Simple Mobile 5G LTE Galexy 12 Mini 512GB Gaming Phone",
          price: `15,000`,
          image: "/src/assets/BestSellers2.png",
        },
        {
          id: 3,
          name: "Sony DSCHX8 High Zoom Point & Shoot Camera",
          price: `15,000`,
          image: "/src/assets/BestSellers3.png",
        },
      ],
    },
    topRated: {
      title: "TOP RATED",
      products: [
        {
          id: 1,
          name: "Portable Wshing Machine, 11lbs capacity Model 18NMF...",
          price: `15,000`,
          image: "/src/assets/TopRated1.png",
        },
        {
          id: 2,
          name: "Sony DSCHX8 High Zoom Point & Shoot Camera",
          price: `15,000`,
          image: "/src/assets/TopRated2.png",
        },
        {
          id: 3,
          name: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
          price: `15,000`,
          image: "/src/assets/TopRated3.png",
        },
      ],
    },
    newArrival: {
      title: "NEW ARRIVAL",
      products: [
        {
          id: 1,
          name: "TOZO T6 True Wireless Earbuds Bluetooth Headpho...",
          price: `15,000`,
          image: "/src/assets/NewArrival1.png",
        },
        {
          id: 2,
          name: "JBL FLIP 4 -Waterproof Portable Bluetooth Speaker...",
          price: `15,000`,
          image: "/src/assets/NewArrival2.png",
        },
        {
          id: 3,
          name: "Wyze Cam Pan v2 1080p Pan/Tlt/Zoom Wi-Fi Indoor Smar...",
          price: `15,000`,
          image: "/src/assets/NewArrival3.png",
        },
      ],
    },
  };

  function ProductGrid({ title, products }) {
    return (
      <div className="w-full bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
        <h2 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-100 p-4">
          {title}
        </h2>
        <div className="space-y-4 p-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
            >
              <div className="flex-shrink-0 w-20 h-20 overflow-hidden rounded-md bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold heading-font text-gray-900 leading-tight mb-1 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-lg font-bold text-blue-500 group-hover:text-blue-600 transition-colors duration-200">
                  {product.price} EGP
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="w-full py-5">
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {Object.entries(gridData).map(([key, { title, products }]) => (
            <ProductGrid key={key} title={title} products={products} />
          ))}
        </div>
      </div>
    </section>
  );
}