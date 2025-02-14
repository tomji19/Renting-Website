import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
// import products from "../../data/products.json";

const XboxSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: "THE BEST PLACE TO PLAY",
            heading: "Xbox Series X",
            description: "Save up to 50% on select Xbox games.\nGet 3 months of PC Game Pass for $2 USD.",
            color: "#0078D4",
            price: "$299",
            consoleColor: "black",
            backgroundColor: "#f1f5f9",
            image: "/src/assets/Image22.png"  // Replace with your first Xbox image
        },
        {
            title: "LIMITED EDITION",
            heading: "Xbox Series S",
            description: "Experience gaming in style.\nIncludes exclusive digital content package.",
            color: "#107C10",
            price: "$329",
            consoleColor: "green",
            backgroundColor: "#f0fdf4",
            image: "/src/assets/Image333.png"  // Replace with your second Xbox image
        },
        {
            title: "SPECIAL BUNDLE",
            heading: "Xbox Elite Bundle",
            description: "Includes 2 controllers and 3 months of Xbox Game Pass Ultimate.\nFree shipping included.",
            color: "#D83B01",
            price: "$349",
            consoleColor: "white",
            backgroundColor: "#fff7ed",
            image: "/src/assets/Image44.png"  // Replace with your third Xbox image
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <section className="py-5 px-16">
            <div className="relative w-full min-h-[650px] sm:min-h-[700px] md:min-h-[500px] bg-gray-50 overflow-hidden">
                {/* Navigation Arrows */}
                <button 
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 rounded-full shadow-lg hover:bg-white transition-colors"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
                </button>
                <button 
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 rounded-full shadow-lg hover:bg-white transition-colors"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
                </button>

                {/* Slides */}
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                            index === currentSlide ? 'translate-x-0' : 'translate-x-full'
                        }`}
                        style={{ backgroundColor: slide.backgroundColor }}
                    >
                        <div className="flex flex-col h-full px-4 sm:px-6 md:px-8 md:flex-row max-w-7xl mx-auto">
                            {/* Content */}
                            <div className="flex-1 flex flex-col justify-center text-center md:text-left pt-8 md:pt-0">
                                <span 
                                    className="text-xs sm:text-sm font-medium tracking-wider heading-font"
                                    style={{ color: slide.color }}
                                >
                                    {slide.title}
                                </span>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 mb-4 heading-font">
                                    {slide.heading}
                                </h2>
                                <p className="text-gray-600 text-sm sm:text-base whitespace-pre-line mb-6 max-w-md mx-auto md:mx-0 body-font">
                                    {slide.description}
                                </p>
                                <div className="flex justify-center md:justify-start">
                                    <button className="flex items-center gap-2 bg-orange-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-orange-600 transition-colors text-sm sm:text-base heading-font">
                                        SHOP NOW
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Image */}
                            <div className="flex-1 relative mt-8 md:mt-0">
                                <div className="flex justify-center md:block">
                                    <img 
                                        src={slide.image}
                                        alt={slide.heading}
                                        className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[600px] h-auto mx-auto md:absolute md:top-1/2 md:-translate-y-1/2 md:right-0 object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                
                {/* Dots navigation */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all ${
                                index === currentSlide 
                                    ? 'bg-blue-500 w-6 sm:w-8' 
                                    : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default XboxSlider;