import React from "react";
import BestProductCards from "../ProductCards/BestProductCards";
import alienwaredesktop from "../../assets/alienwaredesktop.png";
import extendedgamingpc from "../../assets/extendgamingpc.png";
import canonprinter from "../../assets/canonprinter.png";
import xaomiairpods from "../../assets/AIRPHONESXAOMI.svg";
import arrow from "../../assets/shopwithcat/ArrowRight.svg";
import MousePad from "../../assets/Mousepad.png";
import Headphones from "../../assets/headphones.png";
import Controller from "../../assets/IMAC.png";
import Smartphone from "../../assets/iphone.png";
import Mice from "../../assets/Mice.png";
import Ultrawide from "../../assets/ultrawide.png";
import Keyboard from "../../assets/keyboard.png";
import Charger from "../../assets/charger.png";
import ProductCards from "../ProductCards/CatProductCards";
const ComputerAccessories = () => {
  return (
    <div className="mx-auto max-w-screen-xl my-20 px-4">
      <div className="grid grid-cols-5 grid-rows-[auto_1fr_1fr]  gap-4">
        <div className="col-span-4 ">
          <div className=" flex items-center justify-between px-4 shadow-md">
            <h1 className="text-xl font-bold">Computer Accessories</h1>

            {/* Product Categories */}
            <div className="flex items-center gap-6 text-sm">
              <h1>All Products</h1>
              <h1>Smart Phone</h1>
              <h1>Laptop</h1>
              <h1>Headphones</h1>
              <h1>TV</h1>
              <h1 className="font-semibold text-blue-600">
                Browse All Products
              </h1>
            </div>
          </div>
        </div>
        <div className="  col-span-4 h-auto w-auto row-span-2  col-start-1 row-start-2">
          <div className="flex flex-col   h-200">
            <div className="flex h-auto border-2  border-gray-200 ">
              <div className="border-r-2 border-gray-200 w-1/4  ">
                <ProductCards
                  imageurl={MousePad} reviewStars="⭐⭐⭐" reviewCount={426}
                  name="Logitech G Powerplay Wireless Charging Mouse Pad"
                  description="no"
                  price={499.99}
                />
              </div>
              <div className="border-r-2 border-gray-200 w-1/4">
                <ProductCards
                  imageurl={Controller} reviewStars="⭐⭐⭐⭐⭐" reviewCount={672}
                  name="Microsoft Xbox One Wireless Controller – Carbon Black "
                  description="no"
                  price={99.99}
                />
              </div>
              <div className="border-r-2 border-gray-200 w-1/4">
                <ProductCards
                  imageurl={Headphones} reviewStars="⭐⭐⭐⭐⭐" reviewCount={876}
                  name="Sony WH-1000XM5 Wireless  Leading Noise Canceling  "
                  description="no"
                  price={488.99}
                />
              </div>
              <div className="w-1/4">
                <ProductCards
                  imageurl={Smartphone} reviewStars="⭐⭐⭐" reviewCount={126}
                  name="Samsung Electronics Samsung Galaxy S21 5G Smartphone "
                  description="no"
                  price={399.99}
                />
              </div>
            </div>

            <div className="flex  border-b-2 border-l-2 border-r-2 border-gray-200 h-1/2">
              <div className="border-r-2  border-gray-200 w-1/4">
                <ProductCards
                  imageurl={Charger} reviewStars="⭐⭐⭐⭐⭐" reviewCount={5321}
       
                  name="Anker PowerPort III 65W USB-C Fast Charger – GaN Technology"
                  description="no"
                  price={500.99} 
                />
              </div>
              <div className="border-r-2 border-gray-200 w-1/4">
                <ProductCards reviewStars="⭐⭐⭐⭐" reviewCount={767}
                  imageurl={Keyboard}
                  name="Razer Huntsman Elite Opto-Mechanical Gaming Keyboard –  "
                  description="no"
                  price={500.99}
                />
              </div>
              <div className="border-r-2 border-gray-200 w-1/4">
                <ProductCards reviewStars="⭐⭐⭐" reviewCount={112}
                  imageurl={Mice}
                  name="Logitech G902 Lightspeed Wireless Gaming Mouse –s"
                  description="no"
                  price={500.99}
                />
              </div>
              <div className="w-1/4">
                <ProductCards reviewStars="⭐⭐⭐⭐⭐" reviewCount={1235}
                  imageurl={Ultrawide}
                  name="Odyssey G9 Gaming Monitor – QHD 240Hz Curved Display"
                  description="no"
                  price={500.99}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row-span-3 col-start-5 row-start-1">
          <div className="flex flex-col gap-6 my-2">
            <div className="h-120 bg-gradient-to-r from-green-600 to-stone-900">
              <div className="flex justify-center flex-col p-4 items-center  ">
                <img src={Mice} alt="" className="w-30 h-30" />
                <h1 className="text-center font-semibold text-white text-3xl">
                  Logitech G502 Gaming Mices
                </h1>{" "}
                <p className="text-center text-xl text-gray-200">
                  Experience gaming responsiveness like never before.
                </p>{" "}
              </div>
              <div className="flex items-center my-2 gap-2 justify-center ">
                <h1 className="text-white text-xl  ">Only For</h1>
                <div className="bg-black border-2 text-xl border-gray-400 text-white p-2 my-1">$129</div>
              </div>
              <div className="my-5 flex items-center gap-2 justify-center ">
                <div className="bg-black border-2 border-gradient-to-r from-neutral-900 to-orange-600 border-teal-400 w-50 gap-8 p-2 h-12 flex flex-row items-center">
                  <div>
                    <h1 className="text-xl  text-white text-center py-2 font-extrabold">
                      SHOP NOW
                    </h1>
                  </div>
                  <div>
                    <img src={arrow} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-78  justify-center text-center bg-gradient-to-r from-neutral-900 to-orange-600">
              <div className="flex flex-col items-center my-5">
              <div className="bg-yellow-300 border-red-500 border-4 p-2  w-40  ">
                <h1 className="font-bold ">SUMMER SALES</h1>
              </div>
              <div className="text-white">
                <h1 className="text-3xl text-white font-bold my-4">40% Discount</h1>

                <p className="my-2 text-lg">
                  Only for smartphone products selected retailers.
                </p>
              </div>
              <div className="flex justify-center text-center my-10">
              <div className="bg-black border-2 border-red-400 w-50 gap-8 p-2 h-12
                flex flex-row items-center">
                  <div className=" my-5">
                    <h1 className="text-xl  text-white text-center font-extrabold">
                      SHOP NOW
                    </h1>
                  </div>
                  <div>
                    <img src={arrow} alt="" />
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    /*  <div className="flex justify-center flex-col p-4 items-center ">
            
              <img src={Mice} alt="" className="w-30 h-30" />
              <h1 className="text-center font-semibold text-2xl">Logitech G502 Gaming Mice</h1>{" "}
              <p className="text-center text-sm text-gray-600">
                Experience gaming responsiveness like never before.
              </p>{" "}
            </div>
            <div className="flex items-center justify-center ">
              <h1>Only For</h1>
              <div className="bg-white p-2">$129 AUD</div>
            </div>
            <div className="flex justify-center text-center my-5">
            <div className="bg-white w-35 p-2  "><button><h1 className="text-2xl font-bold">Shop now</h1></button></div>
          </div>
        </div>
        <div className=" bg-purple-200 col-start-5 row-start-3 h-40">4</div>
      </div>
    </div> */
  );
};

export default ComputerAccessories;
