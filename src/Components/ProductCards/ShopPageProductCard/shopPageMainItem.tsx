import React from "react";
import Imac from "../../../assets/ProductPage/Main Image Macbook.svg";
import ArrowBigLeft from "../../../assets/shopwithcat/ArrowLeft.svg";
import ArrowRight2 from "../../../assets/shopwithcat/ArrowRight.svg";

const shopPageMainItem = () => {
  return (
    <div>
      <div className="border-gray-200 border-2">
        <img src={Imac} alt="" />
      </div>
      <div className="flex flex-row relative mt-5 justify-between gap-2">
        <div className="border-2 border-gray-200">
          <img src={Imac} alt="" className="w-35 h-auto" />
          <div className="bg-green-900  hover:bg-black rounded-4xl h-12 w-12 flex top-4 right-145 absolute items-center justify-center">
            <img src={ArrowBigLeft} alt="" className="w-7 h-7 " />
          </div>
        </div>
        <div className="border-2 border-gray-200">
          <img src={Imac} alt="" className="w-35 h-auto" />
        </div>
        <div className="border-2 border-gray-200">
          <img src={Imac} alt="" className="w-35 h-auto" />
        </div>
        <div className="border-2 border-gray-200">
          <img src={Imac} alt="" className="w-35 h-auto" />
        </div>
        <div className="border-2 border-gray-200">
          <img src={Imac} alt="" className="w-35 h-auto" />
          <div className="bg-green-900 hover:bg-black rounded-4xl h-12 w-12 flex absolute top-4 left-145 items-center justify-center">
            <img src={ArrowRight2} alt="" className="w-7 h-7" />
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default shopPageMainItem;
