import React from "react";
import Xbox1 from "../../assets/xbone.png"; // Ensure the path is correct
import Iphone from "../../assets/iphone.png";
import Airpods from "../../assets/airpods.webp";

const Landingpage = () => {
  return (
    <div className="relative z-10 bg-white text-black max-w-screen-xl mx-auto px-4 p-10 mt-0 flex items-center">
      <div className="grid grid-cols-3 grid-rows-[auto,auto] gap-6 w-full">
        
        {/* Xbox Section (2x2) */}
        <div className="bg-gray-100 rounded-lg  col-span-2 row-span-2 flex justify-between items-center p-6 relative">
          {/* Text Section */}
          <div className="w-1/2">
            <h1 className="text-blue-500 text-2xl">The Best Place to Play.</h1>
            <h1 className="text-6xl font-bold mb-2">Xbox Series X</h1>
            <p className=" text-2xl text-gray-700">
              Experience next-gen gaming with Xbox One. Powerful performance,
              immersive visuals, and the best games.
            </p>
            
            <button className="mt-3 bg-blue-600 text-white py-6 px-30 font-bold text-3xl rounded-lg shadow-md hover:bg-blue-700">
              Buy Now
            </button>
            
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
              className="absolute top-2 right-2 w-20 h-20 bg-red-600 rounded-full 
                        flex items-center justify-center text-white font-bold text-2xl shadow-lg"
            >
              $299
            </div>
          </div>
        </div>



        {/* iPhone Section (Top Right - 1x1) */}
        <div className="bg-white text-black overflow-hidden rounded-lg shadow-xl h-[250px] flex flex-col justify-between p-4 relative">
          {/* Text */}
          <div className="flex justify-center items-center">
            <div>
              <h1 className="text-4xl font-bold">Summer Sales</h1>
              <h1 className="text-3xl  underline"> iPhone 16</h1>
              <button className="mt-3 bg-blue-600 text-white p-5 rounded-lg text-2xl font-boldshadow-md hover:bg-blue-700">
              Buy Now
            </button>
            </div>
            
            {/* Price Tag */}
               {/* Image */}
          <div className=" flex relative left-16 bottom-2 justify-center items-center">
            <img
              src={Iphone}
              alt="iPhone"
              className="w-200"
            />
          </div>
          </div>
           <div className="absolute top-4 right-4 w-20 h-20 bg-green-400 rounded-full flex items-center 
              justify-center text-white font-bold text-2xl shadow-lg">
              $299
            </div>
      
        </div>



        <div className="bg-black text-white overflow-hidden rounded-lg shadow-xl h-[250px] flex flex-col justify-between p-4 relative">
          {/* Text */}
          <div className="flex justify-center items-center">
            <div>
              <h1 className="text-4xl font-bold">Summer Sales</h1>
              <h1 className=" text-3xl  underline">Airpod Pro</h1>
              <button className="mt-3 bg-blue-600 text-white p-5 rounded-lg text-2xl shadow-md hover:bg-blue-700">
              Buy Now
            </button>
            </div>
            
            {/* Price Tag */}
               {/* Image */}
          <div className="w-full h-full  flex relative  left-2 top-3 justify-center items-center">
            <img
              src={Airpods}
              alt="iPhone"
              className="w-full  h-full "
            />
          </div>
          </div>
           <div className="absolute top-4 right-4 w-20 h-20 bg-green-400 rounded-full flex items-center 
              justify-center text-white font-bold text-2xl shadow-lg">
              $299
            </div>
      
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
