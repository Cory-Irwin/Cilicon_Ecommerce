import React from "react";
import ProductCards from "../../ProductCards/CatProductCards";
import BigBestDealProductCard from "../../ProductCards/bigBestDealProductCard";
import Controller from "../../../assets/misc/controller.png";
import MousePad from "../../../assets/misc/Mousepad.png";
import Headphones from "../../../assets/misc/headphones.png";
import Smartphone from "../../../assets/misc/iphone.png";
import Mice from "../../../assets/misc/Mice.png";
import Ultrawide from "../../../assets/misc/ultrawide.png";
import Keyboard from "../../../assets/misc/keyboard.png";
import Charger from "../../../assets/misc/charger.png";
import PS5 from "../../../assets/bigBestDealProductCard/Image.svg";
import { NavLink } from "react-router-dom";
const Bestdeals = () => {
  return (
    <> <div className="mx-auto max-w-screen-xl my-10 px-4">
      <section className="w-full bg-white left-0 z-40 ">
        <div className="max-w-screen-xl mx-auto  px-4 py-2 flex justify-between items-center">
          {/* Categories Section */}
          <div className=" p-2 ">
            <h1 className="text-4xl font-semibold">Best Deals</h1>
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

        <div className="mx-auto flex-row flex  flex-1 w-full  h-190 max-w-screen-xl  ">
          <div className=" max-w-80  border-l-2 border-b-2 border-t-2 border-gray-200 ">
            {" "}
            <BigBestDealProductCard  reviewStars="4" discount="549.99" reviewCount={426} 
              imageurl={PS5}
              name="Xbox One Controller"
              description="no"
              price={599.99} percentageOff="26"
            />
          </div>
          <div className="grid grid-cols-4 grid-rows-2 border-gray-200 border-2 flex-1 h-full">
  <div className="border-b-2 border-r-2 border-gray-200 max-w-65">
    <ProductCards
       reviewStars={5}
       reviewCount={234}
      imageurl={MousePad}
      name="Logitech G840 XL Gaming Mouse Pad"
      price={39.99}
    />
  </div>

  <div className="border-b-2 border-r-2 border-gray-200">
    <ProductCards
       reviewStars={5}
      reviewCount={1183}
      imageurl={Controller}
      name="Xbox Wireless Controller – Carbon Black"
      price={64.99}
    />
  </div>

  <div className="border-b-2 border-r-2 border-gray-200">
    <ProductCards
       reviewStars={5}
       reviewCount={958}
      imageurl={Headphones}
      name="SteelSeries Arctis 7 Wireless Gaming Headset"
      price={149.99}
    />
  </div>

  <div className="border-b-2 border-gray-200">
    <ProductCards
       reviewStars={5}
       reviewCount={3201}
      imageurl={Smartphone}
      name="iPhone 14 Pro – 128GB Deep Purple Edition"
      price={999.99}
    />
  </div>

  <div className="border-r-2 border-gray-200">
    <ProductCards
       reviewStars={5}
       reviewCount={341}
      imageurl={Charger}
      name="Anker 737 GaNPrime 120W Charger Version"
      price={89.99}
    />
  </div>

  <div className="border-r-2 border-gray-200">
    <ProductCards
       reviewStars={5}
       reviewCount={872}
      imageurl={Keyboard}
      name="Keychron K6 Wireless Mechanical Keyboard"
     
      price={89.99}
    />
  </div>

  <div className="border-r-2 border-gray-200">
    <ProductCards
       reviewStars={5}
       reviewCount={1264}
      imageurl={Mice}
      name="Logitech G502 Hero Wired Gaming Mouse"
     
      price={49.99}
    />
  </div>

  <div className="border-gray-200">
    <ProductCards
       reviewStars={5}
       reviewCount={413}
      imageurl={Ultrawide}
      name="Samsung Odyssey G9 49” Curved Ultrawide Monitor"
     
      price={1399.99}
    />
  </div>
</div>

        </div>
        
      </section>
      </div>
    </>
  );
};

export default Bestdeals;
