import React from 'react';
import ArrowRight from "../../assets/shopwithcat/ArrowRight.svg";
type HalfProductCardProps = {
  imageurl: string;
  name: string;
  description: string;
};

const HalfProductCard: React.FC<HalfProductCardProps> = ({ imageurl, name, description }) => {
  return (
    <div className="z-10 flex flex-col   overflow-hidden relative  p-10 shadow-lg rounded-lg h-90 ">
      {/* Left Side: Text Content */}
      <div className="text-left z-20 max-w-1/2 ">
        <div className="bg-yellow-500  px-4 py-1 inline-block">
          <h2 className="text-lg text-black font-semibold">INTRODUCING NEW</h2>
        </div>
        <h1 className="text-4xl mt-3">{name}</h1>
        <p className=" text-white mt-2 pb-3">{description}</p>
        <button className="mt-4 bg-gray-500  px-5 w-50 h-15 py-2  rounded-lg font-extrabold hover:bg-gray-300">
         <div className='flex flex-row gap-8 '><h1>SHOP NOW</h1>
         <img src={ArrowRight} alt="" /></div>
        </button>
      </div>

      {/* Right Side: Product Image */}
      <div className="mt-6 z-10000  justify-center relative  flex items-center   ">
        <img src={imageurl} alt={name} className="h-auto w-300 relative left-110 bottom-120 lg:left-70 lg:bottom-100  " />
      </div>
    </div>
  );
};

export default HalfProductCard; 