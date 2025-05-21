import React from "react";
import ArrowBigLeft from "../../../assets/shopwithcat/ArrowLeft.svg";

import Imac from "../../../assets/misc/macbookpro.png";
import Heart from "../../../assets/misc/heartlove.svg";
import Arrow from "../../../assets/misc/ArrowsClockwise.svg";
import CopyCat from "../../../assets/misc/copycat.svg";
import Facebook from "../../../assets/misc/Facebook.svg";
import twitter from "../../../assets/misc/Twitter.svg";
import pintrest from "../../../assets/misc/Pinterest.svg";
import grey1 from "../../../assets/misc/grey01.svg";
import grey2 from "../../../assets/misc/grey02.svg";
import payment from "../../../assets/misc/Payment Method.svg";
import airpod from "../../../assets/misc/airpods.webp";
import StarRating from "../../../Components/RatingStars/fiveStarRating";
import ArrowRight from "../../../assets/shopwithcat/ArrowRight.svg";
import ArrowRight2 from "../../../assets/LandingPage/ArrowRight.svg";
import CartIcon from "../../../assets/ProductPage/ShoppingCartSimple.svg";
type mainProduct = {
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  Availability: string;
  brand: string;
  Category: string;
  reviewStars?: number;
  ratingStars?: number;
  sku: string;
  feedback: number;
  reviewCount: number;
};
const shopPageitem = (props: mainProduct) => {
  return (
    <div className="">
      <div className="flex flex-row gap-4">
        <div className="flex py-2 flex-row gap-2">
            
          <StarRating rating={props.reviewStars || 0} />
          <h1 className=" text-black">{props.ratingStars}</h1>
          <h1 className="font-semibold">Star Rating</h1>
          <h1 className="text-gray-400">({props.reviewCount} User Feedback)</h1>
        </div>
      </div>
      <div>
        <h1 className="text-2xl">{props.name}</h1>
      </div>{" "}
      <div className="flex justify-between items-center my-1">
        <div className="flex gap-2">
          <p className="text-gray-500">Sku:</p>
          <p className="text-black">{props.sku}</p>
        </div>
        <div className="flex gap-2">
          <p className="text-gray-500">Availability:</p>
          <p className="text-green-300">{props.Availability}</p>
        </div>
      </div>
      <div className="flex justify-between items-center my-1">
        <div className="flex gap-2">
          <p className="text-gray-500">Brand:</p>
          <p className="text-black">{props.brand}</p>
        </div>
        <div className="flex gap-2">
          <p className="text-gray-500">Category:</p>
          <p className="text-black">
            <p>{props.Category}</p>
          </p>
        </div>
      </div>
      <div className=" flex gap-2 text-center items-center my-4">
        <h1 className="text-green-600 text-2xl">${props.price}</h1>
        <h1 className="text-xl  line-through text-gray-400">
          ${props.originalPrice}
        </h1>
        <div className="bg-yellow-500 font-semibold p-1">
          {props.discount}% OFF
        </div>
      </div>
      <hr className=" my-4 border-gray-200 border-2 " />
      <div className="flex  justify-between items-center my-1">
        <div className="flex flex-col ">
          <div>
            <p className="py-2">Color</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-gray-400 hover:border-teal-900 rounded-full h-15 w-15  hover:border-4"></div>
            <div className="bg-gray-200 hover:border-teal-900 rounded-full h-15 w-15  hover:border-4"></div>
            <div className="bg-gray-600 hover:border-teal-900 rounded-full h-15 w-15  hover:border-4"></div>
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <h1 className="">
              {" "}
              <p className="py-2">Size</p>
            </h1>{" "}
          </div>
          <select className="w-full md:w-75 px-4 h-15 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="py-2">14-inch Liquid Retina XDR display</option>
            <option value="price-asc">15-inch Liquid Retina XDR display</option>
            <option value="price-desc">
              16-inch Liquid Retina XDR display
            </option>
            <option value="name-asc">18-inch Liquid Retina XDR display</option>
            <option value="name-desc">20-inch Liquid Retina XDR display</option>
          </select>
        </div>
      </div>{" "}
      <div className="flex justify-between">
        <div className="flex flex-col py-4">
          <h1 className="py-2">Memory</h1>{" "}
          <select className="w-full h-15 md:w-75 px-4 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">16GB Dedicated Memory</option>
            <option value="price-asc">4GB \Dedicated Memory</option>
            <option value="price-desc">8GB Dedicated Memory</option>
            <option value="name-asc">32GB Dedicated Memory</option>
            <option value="name-desc">64GB Dedicated Memory</option>
          </select>
        </div>
        <div className="flex flex-col py-4">
          <h1 className="py-2">Storage</h1>{" "}
          <select className="w-full h-15 md:w-75 px-4 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">128GB Storage</option>
            <option value="price-asc">256B Storage</option>
            <option value="price-desc">512GB Storage</option>
            <option value="name-asc">1TB Storage</option>
            <option value="name-desc">2TB Storage</option>
          </select>
        </div>
      </div>
      <div>
        <div className="flex justify-between  items-center my-4 gap-4">
          {/* Quantity Selector */}
          <div className="border-2  hover:text-white h-14 border-teal-400 flex w-35 hover:bg-teal-600 text-center justify-center items-center gap-2 p-2">
            <div><button className="px-2">-</button></div>
            <div><p>01</p></div>
            <div><button className="px-2">+</button></div>
          </div>

          {/* Add to Cart Button  */}
          <div className="bg-teal-900 text-center items-center justify-center flex hover:bg-teal-600 p-2 h-14  flex-1">
            <div className="flex flex-row text-white  gap-6">
               
                    <a href="#" className="font-medium  hover:underline">
              ADD TO CART
            </a>
          <img src={CartIcon} alt="" />
          </div></div>

          {/* Buy Now Button */}
          <div className="border-2 flex w-35 text-center h-14 border-teal-400 hover:text-white  hover:bg-teal-600 justify-center items-center gap-2 p-2">
          <div><h1>BUY NOW</h1></div>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-4 gap-4">
        <button>
          <img src={Heart} alt="" />
        </button>
        <p>Add to Wishlist</p>
        <button>
          <img src={Arrow} alt="" />
        </button>
        <p>Add to Compare</p>
        <p>Share product:</p>

        <button>
          <img src={CopyCat} alt="" />
        </button>
        <button>
          {" "}
          <img src={Facebook} alt="" />
        </button>
        <button>
          {" "}
          <img src={twitter} alt="" />
        </button>
        <button>
          {" "}
          <img src={pintrest} alt="" />
        </button>
      </div>
      <div className="border-2 border-gray-200 p-1">
        <p>100% Guarantee Safe Checkout</p>
        <img src={payment} alt="" className="my-4" />
      </div>
    </div>
  );
};

export default shopPageitem;
//2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray
