import React from "react";
import macBookImage from "/src/assets/Discount1.png";
import classes from "../HomePromotionSection/HomePromotionSection.module.css";

export default function HomePromotionSection() {
  return (
    <>
      <section className="py-5 px-16">
        <div className="w-full bg-[#FFE8DD] p-4 md:p-6 relative rounded-lg">
          {/* Main Container - Stack on mobile, row on desktop */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8">
            {/* Left Content */}
            <div className="lg:max-w-xl">
              {/* Save Tag */}
              <div className="inline-block bg-[#33A0FF] text-white text-xs md:text-sm px-3 md:px-4 py-1 rounded mb-3 md:mb-4 heading-font">
                SAVE UP TO $200.00
              </div>

              {/* Product Title */}
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2E2E2E] mb-2 md:mb-4 heading-font">
                Macbook Pro
              </h1>

              {/* Product Description */}
              <p className="text-base md:text-lg lg:text-xl text-[#2E2E2E] mb-4 md:mb-6 heading-font">
                Apple M1 Max Chip. 32GB Unified Memory, 1TB SSD Storage
              </p>

              {/* Shop Now Button */}
              <button className="w-full lg:w-auto bg-[#FF6E31] text-white px-6 md:px-8 py-2.5 md:py-3 rounded flex items-center justify-center gap-2 hover:bg-[#ff5c1a] transition-colors heading-font">
                SHOP NOW
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="w-4 h-4 md:w-5 md:h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Right Content */}
            <div className="relative mt-4 lg:mt-0">
              {/* Product Image Container with Price Circle */}
              <div className="relative w-full sm:w-[400px] md:w-[500px] lg:w-[600px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] mx-auto">
                {/* Price Circle - Positioned relative to image container */}

                {/* Product Image */}
                <img
                  src={macBookImage}
                  alt="MacBook Pro"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
