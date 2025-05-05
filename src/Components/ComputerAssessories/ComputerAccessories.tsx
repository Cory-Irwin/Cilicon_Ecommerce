import React from "react";
import BestProductCards from "../ProductCards/BestProductCards";
import alienwaredesktop from "../../assets/alienwaredesktop.png";
import extendedgamingpc from "../../assets/extendgamingpc.png";
import canonprinter from "../../assets/canonprinter.png";
import xaomiairpods from "../../assets/AIRPHONESXAOMI.svg";
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
          <div className="flex flex-col border-gray-200 border-2 h-full">
            <div className="flex h-auto border-b-2 border-gray-200 pt-5">
              <div className="border-r-2 border-gray-200 w-1/4  ">
                <ProductCards
                  imageurl={MousePad}
                  name="Logitech Mouspad"
                  description="no"
                  price={500}
                />
              </div>
              <div className="border-r-2 border-gray-200 w-1/4">
                <ProductCards
                  imageurl={Controller}
                  name="Xbox One Controller"
                  description="no"
                  price={99}
                />
              </div>
              <div className="border-r-2 border-gray-200 w-1/4">
                <ProductCards
                  imageurl={Headphones}
                  name="Headphones"
                  description="no"
                  price={500}
                />
              </div>
              <div className="w-1/4">
                <ProductCards
                  imageurl={Smartphone}
                  name="iPhone"
                  description="no"
                  price={500}
                />
              </div>
            </div>

            <div className="flex pt-5 h-1/2">
              <div className="border-r-2  border-gray-200 w-1/4">
                <ProductCards
                  imageurl={Charger}
                  name="Charger"
                  description="no"
                  price={500}
                />
              </div>
              <div className="border-r-2 border-gray-200 w-1/4">
                <ProductCards
                  imageurl={Keyboard}
                  name="Keyboard"
                  description="no"
                  price={500}
                />
              </div>
              <div className="border-r-2 border-gray-200 w-1/4">
                <ProductCards
                  imageurl={Mice}
                  name="G902 Mice"
                  description="no"
                  price={500}
                />
              </div>
              <div className="w-1/4">
                <ProductCards
                  imageurl={Ultrawide}
                  name="Odyssey G9"
                  description="no"
                  price={500}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row-span-3 col-start-5 row-start-1">
          <div className="flex flex-col gap-6">
            <div className="h-100 bg-teal-600">
              <div className="flex justify-center flex-col p-4 items-center ">
                <img src={Mice} alt="" className="w-30 h-30" />
                <h1 className="text-center font-semibold text-2xl">
                  Logitech G502 Gaming Mice
                </h1>{" "}
                <p className="text-center text-sm text-gray-600">
                  Experience gaming responsiveness like never before.
                </p>{" "}
              </div>
              <div className="flex items-center justify-center ">
                <h1>Only For</h1>
                <div className="bg-white p-2">$129 AUD</div>
              </div>
              <div className="flex justify-center text-center my-5">
                <div className="bg-white w-35 p-2  ">
                  <button>
                    <h1 className="text-2xl font-bold">Shop now</h1>
                  </button>
                </div>
              </div>
            </div>
            <div className="h-65 bg-red-400">
              <div className="flex flex-col justify-center text-center">
                <div>SUMMER SALES</div>
                <h1>40% Discount</h1>
                <p>
                  only for <p>SMARTPHONE</p> products
                </p>

                <div className="flex justify-center text-center my-5">
                  <div className="bg-white w-35 p-2  ">
                    <button>
                      <h1 className="text-2xl font-bold">Shop now</h1>
                    </button>
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
