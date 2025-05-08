import React from "react";
import Imac from "../../assets/IMAC.png";
import catphone from "../../assets/catphones.png";
import CatProductCards from "../ProductCards/CatProductCards";
import Assessories from "../../assets/computeraccessories.png";
import Desktop from "../../assets/extendgamingpc.png";
import Phone from "../../assets/catphones.png";
import Headphones from "../../assets/headphones.png";
import Laptop from "../../assets/msilaptop.png";
import ArrowBigLeft from "../../assets/shopwithcat/ArrowLeft.svg";
import ArrowRight from "../../assets/shopwithcat/ArrowRight.svg";
const Shopwithcat = () => {
  return (
    <div className="mx-auto max-w-screen-xl my-10 flex items-center justify-between flex-col">
      <div>
        <h1 className="text-4xl font-bold pb-10">Shop with Categories</h1>
      </div>
    
      <div className=" flex-cols-6 grid-rows-1 items-center flex justify-between gap-17">
        <div className="border-2 w-50 h-50 border-gray-200">
          <img src={Phone} alt="" />
          <div className="flex relative bottom-30 right-8">
          <div className="bg-green-900 rounded-4xl h-15 w-15 flex items-center justify-center">
            
            <img src={ArrowBigLeft} alt="" className="w-10 h-10"/>
          </div>
          </div>
        </div>
        <div className="border-2 w-50 h-50 border-gray-200 flex justify-items-center">
          <img src={Assessories} alt="" />
        </div>
        <div className="border-2 w-50 h-50 border-gray-200 ">
          <img src={Desktop} alt="" />
        </div>
        <div className="border-2 w-45 h-50 border-gray-200 ">
          <img src={Headphones} alt="" />
        </div>
        <div className="border-2 w-50 h-50 flex justify-items-center border-gray-200 ">
          <img src={Laptop} alt="" />
          <div className="flex relative top-18 right-6 ">
          <div className="bg-green-900 rounded-4xl h-15 w-15 flex items-center justify-center">
            
            <img src={ArrowRight} alt="" className="w-10 h-10"/>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopwithcat;
