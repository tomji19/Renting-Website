import React from "react";
import classes from "../HomeHotDeals/HomeHotDeals.module.css";
import deal1 from "../../assets/hotdeal1.png";
import deal2 from "../../assets/hotdeal2.png";
// import products from "../../data/products.json";

export default function HomeHotDeals() {
  return (
    <section className="py-4 px-4 sm:py-5 sm:px-6 lg:px-16">
      <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row w-full gap-4">
        {/* First Deal */}
        <div className="w-full lg:w-1/2 bg-[#F2F4F5] rounded-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Content */}
            <div className="p-6 lg:p-8 flex flex-col justify-center lg:w-1/2">
              <span className="px-3 py-1 text-sm font-medium bg-blue-500 text-white rounded-full w-fit mb-4">
                INTRODUCING
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-gray-900 mb-2 max-w-[17rem] break-words heading-font">
                New Apple Homepod Mini
              </h2>
              <p className="text-gray-600 mb-6 max-w-[20rem] break-words body-font ">
                Jam-packed with innovation, HomePod mini delivers unexpectedly.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2 rounded-lg w-fit flex items-center gap-2 transition-colors heading-font">
                Shop Now
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
            {/* Image */}
            <div className="lg:w-1/2 h-48 sm:h-64 lg:h-auto flex justify-center items-center">
              <img
                src={deal1}
                className="w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 object-contain"
                alt="Apple Homepod Mini"
              />
            </div>
          </div>
        </div>

        {/* Second Deal */}
        <div className="w-full lg:w-1/2 bg-[#191C1F] rounded-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row relative">
            {/* Content */}
            <div className="p-6 lg:p-8 flex flex-col justify-center lg:w-1/2">
              <span className="px-3 py-1 text-sm font-medium bg-yellow-400 text-black rounded-full w-fit mb-4">
                INTRODUCING NEW
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-white mb-2 max-w-[17rem] break-words heading-font">
                Xiaomi Mi 11 Ultra 12GB+256GB
              </h2>
              <p className="text-gray-400 mb-6 max-w-[20rem] break-words body-font">
                *Data provided by internal laboratories. Industry measurment.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2 rounded-lg w-fit flex items-center gap-2 transition-colors heading-font">
                Shop Now
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
            {/* Image */}
            <div className="lg:w-1/2 h-48 sm:h-64 lg:h-auto flex justify-center items-center">
              <img
                src={deal2}
                className="w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 object-contain"
                alt="Xiaomi Mi 11 Ultra"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}