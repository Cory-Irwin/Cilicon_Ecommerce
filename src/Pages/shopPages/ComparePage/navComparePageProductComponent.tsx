import React from "react";
import samsung from "../../../assets/misc/iphone.png";
import keyboard from "../../../assets/misc/keyboard.png";
import IMAC from "../../../assets/Misc/IMAC.png";
import Shopping from "../../../assets/bestdeals/ShoppingCartSimple.svg";
import Heart from "../../../assets/bigBestDealProductCard/Heart.svg";
import StarRating from "../../../Components/RatingStars/fiveStarRating";

type comparePageProductComponentProps = {
  imgValue: string;
  productTitle: string;
  reviewStars?: number;
  reviewCount?: number;
  price?: any;
  number?: any;
  soldBy?: string;
  brandName?: string;
  modelName?: string;
  stockStatus?: boolean;
  size?: string;
  weight?: string;
  emptyFeedback?: string;
  emptyPrice?: string;
  emptySoldBy?: string;
  emptyBrand?: string;
  emptyModel?: string;
  emptyStockStatus?: string;
  emptySize: string;
  emptyWeight: string;
};

const comparePageProductComponent = (
  props: comparePageProductComponentProps
) => {
  return (
    <>
      <div className="my-138">

     
         <div className=" flex w-full">
                <div className="mt-4 w-full">
                <div className="h-15 ">
                  <div className="  p-2">
                    <h1>Customer Feedback:</h1>
                  </div>
                  <div className=" bg-gray-100 p-2">
                    <h1>Price:</h1>
                  </div>
                  <div className=" p-2">
                    <h1>Sold By:</h1>
                  </div>
                  <div className= " bg-gray-100 p-2">
                    <h1>Brand:</h1>
                  </div>
                  <div className=" p-2">
                    <h1>Model:</h1>
                  </div>
                  <div className=" bg-gray-100 p-2">
                    <h1>Stock Status:</h1>
                  </div>
                  <div className=" p-2">
                    <h1>Size:</h1>
                  </div>
                  <div className=" bg-gray-100 p-2">
                    <h1>Weight:</h1>
                  </div>
                </div>
                </div>
        </div> </div>
   
    </>
  );
};

export default comparePageProductComponent;
