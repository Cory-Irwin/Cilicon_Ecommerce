import React from "react";
import ProductCards from "../ProductCards/CatProductCards";
import BigBestDealProductCard from "../ProductCards/bigBestDealProductCard";
import Controller from "../../assets/controller.png";
import MousePad from "../../assets/Mousepad.png";
import Headphones from "../../assets/headphones.png";
import Smartphone from "../../assets/iphone.png";
import Mice from "../../assets/Mice.png";
import Ultrawide from "../../assets/ultrawide.png";
import Keyboard from "../../assets/keyboard.png";
import Charger from "../../assets/charger.png";
import PS5 from "../../assets/bigBestDealProductCard/Image.svg";
import { NavLink } from "react-router-dom";
const Bestdeals = () => {
  return (
    <>
      <section className="w-full bg-white left-0 z-40 ">
        <div className="max-w-screen-xl mx-auto  px-4 py-2 flex justify-between items-center">
          {/* Categories Section */}
          <div className=" p-2 ">
            <h1 className="text-xl font-semibold">Best Deals</h1>
            <h1>Deals end in 10 Days</h1>
          </div>
          {/* Contact Info */}
          <div>
            <NavLink to={"/ComparePage"}>
              <a href="#" className="hover:text-gray-400">
                See more...
              </a>
            </NavLink>{" "}
          </div>
        </div>

        <div className="mx-auto flex-row flex  flex-1 w-full  h-130 border-2 border-gray-200 max-w-screen-xl  ">
          <div className=" max-w-70 ">
            {" "}
            <BigBestDealProductCard
              imageurl={PS5}
              name="Xbox One Controller"
              description="no"
              price={99}
            />
          </div>
          <div className="grid grid-cols-4 grid-rows-2 border-gray-200  border-2 flex-1 h-full ">
            <div className="  border-b-2 border-r-2 border-gray-200 max-w-65">
              <ProductCards
                imageurl={MousePad}
                name="Logitech Mouspad gaming workplace matt."
                description="no"
                price={500}
              />
            </div>
            <div className=" border-b-2 border-r-2  border-gray-200 ">
              {" "}
              <ProductCards
                imageurl={Controller}
                name="Xbox One Controller Logitech Mouspad gaming workplace matt."
                description="no"
                price={99}
              />
            </div>
            <div className="border-b-2 border-r-2 border-gray-200 ">
              {" "}
              <ProductCards
                imageurl={Headphones}
                name="HeadPhones Logitech Mouspad gaming workplace matt. "
                description="no"
                price={500}
              />
            </div>
            <div className="border-b-2  border-gray-200 ">
              {" "}
              <ProductCards
                imageurl={Smartphone}
                name="Iphone Logitech Mouspad gaming workplace matt. "
                description="no"
                price={500}
              />
            </div>
            <div className=" border-r-2 border-gray-200  ">
              {" "}
              <ProductCards
                imageurl={Charger}
                name="charger Logitech Mouspad gaming workplace matt. "
                description="no"
                price={500}
              />
            </div>

            <div className=" border-r-2 border-gray-200 ">
              {" "}
              <ProductCards
                imageurl={Keyboard}
                name="Keyboard Logitech Mouspad gaming workplace matt. "
                description="no"
                price={500}
              />
            </div>

            <div className=" border-r-2 border-gray-200  ">
              {" "}
              <ProductCards
                imageurl={Mice}
                name="G902 Mice Logitech Mouspad gaming workplace matt. "
                description="no"
                price={500} 
              />
            </div>

            <div className=" border-gray-200  ">
              {" "}
              <ProductCards
                imageurl={Ultrawide}
                name="G9 Odessy Logitech Mouspad gaming workplace matt. "
                description="no"
                price={500}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bestdeals;
