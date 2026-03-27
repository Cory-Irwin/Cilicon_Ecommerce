import arrow from "../../../assets/LandingPage/ArrowRight.svg";
import X from "../../../assets/LandingPage/X.svg";
import { useState } from "react";

function BlackFriday() {
  //Variable tracks state
  const [isVisible, setIsVisible] = useState(true);
  //Toggles state value

  return (
    <div>
      {isVisible && (
        <div className="bg-black">
          <div
            className="max-w-screen-xl bg-black mx-auto px-4 py-3 flex justify-between items-center
       text-white"
          >
            {/* Logo Section */}
            <div className="flex gap-2 items-center animate-bounce">
              <h1 className="text-black bg-red-400 text-2xl -rotate-4 px-2 py-1">
                Black
              </h1>
              <h1 className="text-white text-2xl">Friday</h1>
            </div>

            {/* Discount Section */}
            <div className="flex gap-2 text-2xl items-center">
              <h1 className="text-white text-sm">Up to</h1>
              <h1 className="text-red-400 text-4xl font-bold animate-pulse ">
                59%
              </h1>
              <h1 className="text-white font-bold text-lg">OFF</h1>
            </div>

            {/* CTA Section */}

            <a href="/shop" className="cursor-pointer " aria-label="Shop now">
              <div className="bg-red-400 px-6 p-3 relative left-20 lg:left-70 flex gap-2 flex-row items-center">
                <h1 className="text-md font-bold text-black ">SHOP NOW </h1>
                <img src={arrow} className="size-4" alt="" />
              </div>
            </a>
            <button onClick={() => setIsVisible(!isVisible)} className="">
              <div className="bg-gray-800 relative left-2 lg:left-30 p-2">
                <img src={X} alt="" />
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BlackFriday;
