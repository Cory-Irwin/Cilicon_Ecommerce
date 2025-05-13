import React from "react";
import Xbox1 from "../../assets/xbone.png"; 
import Iphone from "../../assets/iphone.png";
import Airpods from "../../assets/airpods.webp";
import arrow from "../../assets/LandingPage/ArrowRight.svg";

const Landingpage = () => {
  return (
    <div className="relative z-10 bg-white text-black max-w-screen-xl mx-auto px-4 p-10 mt-0 flex items-center">
      <div className="grid grid-cols-3 grid-rows-[auto,auto] gap-6 w-full">
        {/* Xbox Section (2x2) */}
        <div className="bg-gray-100 rounded-lg  col-span-2 row-span-2 flex justify-between items-center p-6 relative">
          {/* Text Section */}
          <div className="w-1/2">
            <h1 className="text-blue-500 text-2xl">The Best Place to Play.</h1>
            <h1 className="text-6xl font-bold mb-2">Xbox Consoles </h1>
            <p className=" text-2xl text-gray-700">
              Experience next-gen gaming with Xbox. Powerful performance,
              immersive visuals, and the best games.
            </p>
            <div className="">
              <button className="mt-3 bg-yellow-200 text-black py-6 px-20  font-bold text-3xl shadow-md hover:bg-yellow-400">
                <div className="flex items-center flex-row justify-between gap-4">
                  <div>BUY NOW </div>
                  <div>
                    <img src={arrow} alt="" className="h-10" />
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-1/2 h-full flex justify-end items-center relative">
            <img
              src={Xbox1}
              alt="Xbox Console"
              className="w-full h-full object-contain"
            />

            {/* Price Tag */}
            <div
              className="absolute top-2 right-2 w-30 h-30 bg-yellow-400 rounded-full 
                        flex items-center justify-center text-black font-bold text-4xl shadow-lg"
            >
              $299
            </div>
          </div>
        </div>

        {/* iPhone Section (Top Right - 1x1) */}
        <div className="bg-black text-black z-10 overflow-hidden rounded-lg shadow-xl h-[250px] 
        flex flex-col justify-between p-4 relative">
        
          <div className="flex py-5 z-20 p-2 items-center">
            <div>
              <h1 className="text-2xl text-yellow-500 font-semibold">
                Summer Sales
              </h1>
              <h1 className="text-3xl  word-break font-bold text-white">
                Apple iPhone <h1>16 256GB</h1>
              </h1>
             
              <button className="mt-5 z-20 bg-yellow-200 text-black font-semibold p-3 w-45 items-center
               justify-center flex   *:shadow-md hover:bg-yellow-400">
                <div className="flex text-lg flex-row items-center gap-4">
                  {" "}
                  BUY NOW
                  <img src={arrow} alt="" className="h-5" />
                </div>
              </button>  {/* Text */}
          <div className="relative left-50 bottom-65 z-0">
            <img src={Iphone} alt="iPhone" className="w-100 h-auto" />
          </div>
            </div>

            {/* Price Tag */}
            {/* Image */}
          </div>
          <div
            className="absolute top-8 right-4 w-30  p-4 font-semibold text-xl h-10 bg-yellow-400 flex items-center 
              justify-center text-black  z-30 shadow-lg"
          >
            40% OFF
          </div>
        </div>

        <div className="bg-gray-400 text-white overflow-hidden rounded-lg shadow-xl h-[250px] flex flex-col justify-between p-4 relative">
          {/* Text */}
          <div className="flex justify-center items-center">
            <div>
              <h1 className=" text-3xl font-bold ">Apple Airpods Pro</h1>
              <div className="text-2xl text-yellow-200 my-2">
                $399 AUD
              </div>
             
              <button className="mt-5 z-20 bg-yellow-200 text-black font-semibold p-3 w-45 items-center
               justify-center flex  font-boldshadow-md hover:bg-yellow-400">
                <div className="flex text-lg flex-row items-center gap-4">
                  {" "}
                  BUY NOW
                  <img src={arrow} alt="" className="h-5" />
                </div>
              </button>  
            </div>

            {/* Price Tag */}
            {/* Image */}
            <div className="w-full h-full  flex relative  left-2 top-3 justify-center items-center">
              <img src={Airpods} alt="iPhone" className="w-full  h-full " />
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
