import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import classes from "../HomeCategorySlider/HomeCategorySlider.module.css";
import card1 from "../../assets/airpod.png";
import card2 from "../../assets/tv.png";
import card3 from "../../assets/console1.png";
import card4 from "../../assets/smartphone.png";
import card5 from "../../assets/laptop.png";
import card6 from "../../assets/case.png";
// import products from "../../data/products.json";

export default function HomeCategorySlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const categories = [
    { title: "Airpods", image: card1 },
    { title: "TVs", image: card2 },
    { title: "Consoles", image: card3 },
    { title: "Smartphones", image: card4 },
    { title: "Laptops", image: card5 },
    { title: "Cases", image: card6 },
  ];

  const items = Array.from({ length: 12 }, (_, i) => ({
    ...categories[i % 6],
  }));

  const slidesCount = Math.ceil(items.length / 6);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slidesCount);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slidesCount) % slidesCount);
  };

  const handleMouseDown = (e) => {
    setStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const diff = startX - e.clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <>
      <section className="py-5 px-16">
        <div className="relative w-full">
          <div
            className="flex items-center justify-center"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className="absolute -left-5 top-[15.5rem] z-20 flex items-center justify-center w-10 h-10 rounded-full bg-[#1B6392] transform -translate-y-1/2"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="absolute -right-5 top-[15rem] z-20 flex items-center justify-center w-10 h-10 rounded-full bg-[#1B6392] transform -translate-y-1/2"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Slider Container */}
            <div className="w-full relative overflow-x-clip">
              <h1 className="mb-20 text-5xl text-center font-semibold heading-font">
                Categories
              </h1>
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {Array.from({ length: slidesCount }).map((_, slideIndex) => (
                  <div
                    key={slideIndex}
                    className="flex gap-1 min-w-full shrink-0"
                  >
                    {items
                      .slice(slideIndex * 6, (slideIndex + 1) * 6)
                      .map((item, index) => (
                        <div
                          key={index}
                          className="relative w-[14.28rem] h-[12.875rem] bg-[#ffffff42] rounded-lg border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-300 flex flex-col items-center justify-center group cursor-pointer"
                        >
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
                        </div>
                      ))}
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
