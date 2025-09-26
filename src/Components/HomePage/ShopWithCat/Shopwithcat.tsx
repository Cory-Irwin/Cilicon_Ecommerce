import React, { useRef } from "react";
import Assessories from "../../../assets/misc/computeraccessories.png";
import Desktop from "../../../assets/misc/extendgamingpc.png";
import Phone from "../../../assets/misc/catphones.png";
import Laptop from "../../../assets/misc/msilaptop.png";
import ArrowBigLeft from "../../../assets/shopwithcat/ArrowLeft.svg";
import ArrowRight from "../../../assets/shopwithcat/ArrowRight.svg";
import Camera from "../../../assets/shopwithcat/pngwing.com.png";

const categories = [
  { name: "SmartPhones", img: Phone },
  { name: "Accessories", img: Assessories },
  { name: "Desktop PC", img: Desktop },
  { name: "Cameras", img: Camera },
  { name: "Laptops", img: Laptop },
];

const Shopwithcat = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mx-auto max-w-screen-xl my-10 flex flex-col items-center">
      <h1 className="text-4xl font-semibold pb-10">Shop with Categories</h1>

      <div className="relative w-full">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-green-900 p-3 rounded-full shadow-md"
        >
          <img src={ArrowBigLeft} alt="Left" className="w-6 h-6" />
        </button>

        {/* Scrollable Items */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth gap-8 px-16 no-scrollbar"
        >
          {categories.map((cat, i) => (
            <div
              key={i}
              className="flex-shrink-0 border-2 w-72 h-80 flex flex-col items-center justify-center border-gray-200 rounded-lg"
            >
              <img src={cat.img} alt={cat.name} className="h-44 w-auto mb-4" />
              <h1 className="text-xl">{cat.name}</h1>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-green-900 p-3 rounded-full shadow-md"
        >
          <img src={ArrowRight} alt="Right" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Shopwithcat;
