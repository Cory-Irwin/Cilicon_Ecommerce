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
      <div className="border-2 border-gray-200 ">
        <img src={props.imgValue} alt="" />
        <div className="mt-10 p-6 ">
          <h1 className="text-2xl">{props.productTitle}</h1>
          <div className="flex  mt-2 flex-row gap-5">
            <div className="bg-gray-200 w-45 hover:bg-gray-300 p-4 h-14  ">
              <button>
                <div className="flex  flex-row gap-1">
                  <img src={Shopping} alt="" />
                  <h1>ADD TO CART</h1>
                </div>
              </button>
            </div>
            <div>
              <div className="bg-yellow-400 p-4 w-15 hover:bg-yellow-200  ">
                <img src={Heart} alt="" />
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="mt-4">
          <div className="bg-gray-100 p-2">
            {" "}
            <StarRating rating={props.reviewStars || 0} />
          </div>
          <div className="p-2">{props.price}</div>
          <div className="bg-gray-100 p-2">{props.soldBy}</div>
          <div className="p-2">{props.brandName}</div>
          <div className="bg-gray-100 p-2">{props.modelName}</div>
          <div className="p-2">{props.stockStatus}</div>
          <div className="bg-gray-100 p-2">{props.size}</div>
          <div className="p-2">{props.weight}</div>
        </div>
      </div>{" "}
    </>
  );
};

export default comparePageProductComponent;
