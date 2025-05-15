import React from "react";
import BestProductCards from "../ProductCards/BestProductCards";
import Controller from "../../assets/IMAC.png";
import ComputerAccessories from "../../assets/Featured Products/computeracceosires.png";
import ProductCards from "../ProductCards/FeaturedProductCard";
import arrow from "../../assets/shopwithcat/ArrowRight.svg";
import arrow2 from "../../assets/computer accessories/ArrowRight.svg";
import BigBestDealProductCard from "../ProductCards/bigBestDealProductCard";
import bigphoto from "../../assets/Featured Products/newsss.svg";
import MousePad from "../../assets/Mousepad.png";
import Headphones from "../../assets/headphones.png";
import Smartphone from "../../assets/iphone.png";
import Mice from "../../assets/Mice.png";
import Ultrawide from "../../assets/ultrawide.png";
import Keyboard from "../../assets/keyboard.png";
import Charger from "../../assets/charger.png";
import PS5 from "../../assets/bigBestDealProductCard/Image.svg";
import { NavLink } from "react-router-dom";

const Featuredproducts = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-xl my-20 px-4">
        <div className="grid grid-cols-5 grid-rows-1 gap-2">
          <div className="row-span-3 bg-gray-800 w-80  col-span-1 ">
            <div className=" row-span-3  p-4">
              <div className="flex flex-col items-center text-center justify-center ">
                <h1 className="text-1xl text-white">Computers & Accessories</h1>
                <h2 className="text-3xl font-bold my-2 text-white">
                  32% Discount
                </h2>
                <p className="py-2 text-white">For all electronic products</p>{" "}
                <div className="flex flex-row gap-2 my-2">
                  <div className="text-white flex justify-center items-center">
                    <h1>OFFER ENDS IN:</h1>
                  </div>
                  <div className="bg-white   text-1xl p-1 py-2 font-semibold text-black ">
                    <p>10:45:12</p>
                  </div>
                </div>{" "}
                <div
                  className="  mt-2 p-4 text-1xl w-52 gap-4 items-center flex flex-row
                 bg-black text-white text-1xl hover:bg-gray-500 justify-between font-extrabold "
                >
                  {" "}
                  <h1>SHOP NOW</h1>
                  <img src={arrow} alt="" className="w-10" />
                </div>{" "}
                <img src={ComputerAccessories} className="h-90 my-10" alt="" />
                <div className="flex ">
                  <div className="from-yellow-800 to-yellow-500 p-4 font-extrabold">
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 h-10 ">
            <div className="col-span-4 row-span-1 flex w-253 h-18 items-center   ">
              <h1 className="text-3xl font-bold mx-20">Featured Products</h1>

              {/* Product Categories */}
              <div className="flex items-center gap-5 text-sm">
                <h1>All Products</h1>
                <h1>Smart Phone</h1>
                <h1>Laptop</h1>
                <h1>Headphones</h1>
                <h1>TV</h1>
                <div className="flex justify-between gap-2">
                  <h1 className="font-semibold text-blue-600">
                    Browse All Products
                  </h1>
                  <img src={arrow2} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4  py-6 h-175 row-span-2 col-start-2 row-start-2">
            <div className="flex flex-col  mx-20 ">
              <div className="flex h-75 gap-3 ">
                <div className="   ">
                  <ProductCards
                    reviewStars={5}
                    reviewCount={426}
                    imageurl={MousePad}
                    title="Logitech G Powerplay Wireless Charging Mouse Pad"
                    originalPrice={129.99}
                    newPrice={89.99}
                    percentOff={Math.round(((129.99 - 89.99) / 129.99) * 100)} // ~31% off
                  />
                </div>
                <div className="   h-60 ">
                  <ProductCards
                    reviewStars={4}
                    reviewCount={4}
                    imageurl={Controller}
                    title="Macbook Pro 2024 Edition 1TB SSD i7-7700k CPU 27 inch"
                    originalPrice={1299.99}
                    newPrice={999.99}
                    percentOff={Math.round(
                      ((1299.99 - 999.99) / 1299.99) * 100
                    )} // ~23% off
                  />
                </div>
                <div className="  gap-4 ">
                  <ProductCards
                    reviewStars={5}
                    reviewCount={52}
                    imageurl={Headphones}
                    title="Sony WH-1000XM5 Wireless Noise Canceling Headphones"
                    originalPrice={349.99}
                    newPrice={299.99}
                    percentOff={Math.round(((349.99 - 299.99) / 349.99) * 100)} // ~14% off
                  />
                </div>
                <div className=" gap-4">
                  <ProductCards
                    reviewStars={4}
                    reviewCount={672}
                    imageurl={Smartphone}
                    title="Samsung Galaxy S21 5G – Phantom Gray"
                    newPrice={1999.99}
                    // no originalPrice or discount, so no percentOff
                  />
                </div>
              </div>
              <div className="flex h-auto gap-3 my-15">
                <div className="  gap-4  ">
                  <ProductCards
                    reviewStars={4}
                    reviewCount={733}
                    imageurl={Charger}
                    title="Anker PowerPort III 65W USB-C Fast Charger"
                    newPrice={19.99}
                  />
                </div>
                <div className="  gap-4  ">
                  <ProductCards
                    reviewStars={5}
                    reviewCount={982}
                    imageurl={Keyboard}
                    title="Razer Huntsman Elite Gaming Keyboard – RGB"
                    newPrice={199.99}
                  />
                </div>
                <div className="  gap-4 ">
                  <ProductCards
                    reviewStars={5}
                    reviewCount={426}
                    imageurl={Mice}
                    title="Logitech G902 Lightspeed Wireless Gaming Mouse"
                    newPrice={249.99}
                  />
                </div>
                <div className=" gap-4">
                  <ProductCards
                    reviewStars={5}
                    reviewCount={16}
                    imageurl={Ultrawide}
                    title="Odyssey G9 Gaming Monitor – QHD 240Hz Curved Display"
                    newPrice={1799.99}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Featuredproducts;