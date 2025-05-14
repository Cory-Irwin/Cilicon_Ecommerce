import React from "react";
import PS5 from "../../assets/bigBestDealProductCard/Image.svg";
import Star from "../../assets/bigBestDealProductCard/Star.svg";
import Heart from "../../assets/bigBestDealProductCard/Heart.svg";
import Eyes from '../../assets/bestdeals/Eye.svg'
import Shopping from '../../assets/bestdeals/ShoppingCartSimple.svg'
import StarRating from '../../Components/RatingStars/fiveStarRating'


type CatProductCards = {
  imageurl: string;
  price: number;
  discount: number;
  title: string;
  linkUrl: string;
  tagText?: string;
  reviewStars?: string;
  reviewCount?: number;
  percentageOff: number;
};

const bigBestDealProductCard = (props: any) => {
  return (
    <div className="h-auto flex  flex-col">
      <div className="flex flex-col text-center font-bold  left-4 relative">
        <div className="relative top-15 right-4 ">
          <img src={props.imageurl} alt="" />
        </div>
        <div className="bg-yellow-400 p-2 w-20 relative bottom-65 ">
          <h1>{props.percentageOff}% Off </h1>
        </div>
        <div className="bg-red-500  w-15 flex flex-col p-2   relative bottom-62">
          <h1 className="text-white">HOT</h1>
        </div>
      </div>

      <div className="flex flex-row ">
        <div className="flex p-2 flex-row gap-2">
        <StarRating rating={5}/>
          <p className="text-gray-400">({props.reviewCount})</p>
        </div>
        <div className=""></div>
      </div>

      <div className="justify-center p-2 flex">
        <h1 className=" text-2xl font-bold">
          PlayStation 5 - 1tb SSD Console with Wireless Controller AUS - Version
        </h1>
      </div>

      <div className="flex p-2 gap-2 flex-row">
        <h1 className="text-green-900 text-2xl font-semibold">${props.price}</h1>
        <h1 className="text-gray-300 line-through text-2xl font-bold">${props.discount}</h1>
      </div>

      <div className="p-2">
        <p>
          Games built using the PS5 development kit showcase unparalleled load
          times, visuals.
        </p>
      </div>

       <div className="my-12 ">
          <div className=" flex items-center   gap-4  justify-center">
            <div className="bg-yellow-400 p-4  ">
              <img src={Heart} alt="" />
            </div>
            <div className="bg-gray-200 p-4 h-14  ">
              <button>
                <div className="flex flex-row gap-1">
              
              <img src={Shopping} alt="" />
              <h1>ADD TO CART</h1>
              </div>
              </button>
            </div>
            <div className="bg-yellow-400 p-4 flex ">
              <img src={Eyes} alt="" />
            </div>
           {" "}
          </div>{" "}
        </div>
    </div>
  );
};

export default bigBestDealProductCard;
