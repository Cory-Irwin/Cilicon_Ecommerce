import React from "react";
import PS5 from "../../assets/bigBestDealProductCard/Image.svg";
import Star from "../../assets/bigBestDealProductCard/Star.svg";
import Heart from "../../assets/bigBestDealProductCard/Heart.svg";
type CatProductCards = {
  imageurl: string;
  price: number;
  title: string;
  linkUrl: string;
  tagText?: string;
  reviewStars?: number;
  reviewCount?: number;
};

const bigBestDealProductCard = (props: any) => {
  return (
    <div className="max-w-70 h-full flex flex-col">
      <img src={props.imageurl} alt="" />
      <div className="flex flex-row ">
        <img src={Star} alt="" />
        <img src={Star} alt="" />
        <img src={Star} alt="" />
        <img src={Star} alt="" />
        <img src={Star} alt="" />
        <div>
          <p>(52,999)</p>
        </div>
      </div>

      <div className="justify-center flex">
        <h1 className=" ">
          PlayStation 5 - 1tb SSD Console with Wireless Controller AUS - Version
        </h1>
      </div>

      <div className="flex flex-row">
        <h1>$865.00</h1>
        <h1>$442.12</h1>
      </div>

      <div>
        <p>
          Games built using the PS5 development kit showcase unparalleled load
          times, visuals.
        </p>
      </div>

      <div className="flex flex-row justify-between mt-auto  w-full gap-6 ">
        <div className="bg-yellow-400   p-2">
          <img src={Heart} alt="" />
        </div>
        <div className="bg-blue-500  text-white font-bold justify-between items-center p-2 ">
          <button><a href="">Add to Cart</a></button>
        </div>
        <div className="bg-yellow-400 p-2">
          <img src={Heart} alt="" />
        </div>
      </div>
    </div>
  );
};

export default bigBestDealProductCard;
