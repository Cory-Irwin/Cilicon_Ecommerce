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
import Camera from "../../assets/shopwithcat/pngwing.com.png"
const Shopwithcat = () => {
  return (
    <div className="mx-auto max-w-screen-xl my-10 flex items-center justify-between flex-col">
      <div>
        <h1 className="text-4xl font-bold pb-10">Shop with Categories</h1>
      </div>
    
      <div className=" flex-cols-6 text-2xl font-extrabold grid-rows-1 items-center flex justify-between  gap-8">
        <div className="border-2 w-60 h-70 flex items-center flex-col border-gray-200">
          <img src={Phone} alt="" className=" h-55 w-auto" />
          <h1>SmartPhones</h1>
          <div className="flex relative bottom-35 right-30">
          <div className="bg-green-900 rounded-4xl h-15 w-15 flex items-center justify-center">
            
            <img src={ArrowBigLeft} alt="" className="w-10 h-10"/>
          </div>
          </div>
        </div>
        <div className="border-2 w-60 h-70 flex items-center flex-col border-gray-200 ">
          <img src={Assessories} alt=""className="h-55 w-auto" />
          <h1>Accessories</h1>
        </div>
        <div className="border-2 w-60 h-70 flex items-center flex-col border-gray-200 ">
          <img src={Desktop} alt=""className="h-55 w-auto" />
          <h1>Desktop PC</h1>
        </div>
        <div className="border-2 w-60 h-70 flex items-center flex-col border-gray-200 ">
          <img src={Camera} alt=""className="h-55 w-auto" />
          <h1>Cameras</h1>
        </div>
        <div className="border-2 w-60 h-70 flex items-center flex-col border-gray-200 ">
          <img src={Headphones} alt="" className="h-55 w-auto"/>
          <h1>HeadPhones</h1>
        </div>
        <div className="border-2 w-60 h-70 flex items-center flex-col  border-gray-200 ">
          <img src={Laptop} alt="" className="h-55 w-auto" />
          <h1>Laptops</h1>
          <div className="flex relative bottom-35 left-30 ">
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
