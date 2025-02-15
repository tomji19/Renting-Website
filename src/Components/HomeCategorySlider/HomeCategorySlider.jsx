import React from "react";
import card1 from "../../assets/airpod.png";
import card3 from "../../assets/console1.png";
import card4 from "../../assets/smartphone.png";
import card5 from "../../assets/laptop.png";
import card6 from "../../assets/case.png";

export default function CategoryCards() {
  const categories = [
    { title: "Shop All", color: "#2762eb" },
    { title: "Laptops", image: card5 },
    { title: "Gaming", image: card3 },
    { title: "Smartphones", image: card4 },
    { title: "Wearables", image: card1 },
    { title: "Pc Parts", image: card6 },
  ];

  return (
    <section className="py-5 px-16">
      <div className="relative w-full">
        <div className="flex items-center justify-center">
          <div className="w-full relative">
            <h1 className="mb-20 text-5xl text-center font-semibold heading-font">
              Categories
            </h1>
            <div className="flex gap-1 justify-center">
              {categories.map((item, index) => (
                <div
                  key={index}
                  className="relative w-[14.28rem] h-[12.875rem] rounded-lg border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-300 flex flex-col items-center justify-center group cursor-pointer"
                  style={{
                    backgroundColor: item.title === "Shop All" ? "#2762eb" : "#ffffff42",
                  }}
                >
                  {item.title === "Shop All" ? (
                    <span className="text-xl font-bold text-white body-font">
                      {item.title}
                    </span>
                  ) : (
                    <>
                      <div className="absolute -top-12 transform transition-transform duration-300 group-hover:-translate-y-2">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-48 h-48 object-contain"
                        />
                      </div>
                      <span className="absolute bottom-8 text-xl font-bold text-gray-800 body-font">
                        {item.title}
                      </span>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}