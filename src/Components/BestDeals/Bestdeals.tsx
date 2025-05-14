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
       reviewStars="3"
       reviewCount={234}
      imageurl={MousePad}
      name="Logitech G840 XL Gaming Mouse Pad"
      description="Ultra-wide gaming mousepad with a smooth cloth surface and anti-slip rubber base."
      price={39.99}
    />
  </div>

  <div className="border-b-2 border-r-2 border-gray-200">
    <ProductCards
       reviewStars="4"
      reviewCount={1183}
      imageurl={Controller}
      name="Xbox Wireless Controller – Carbon Black"
      description="Ergonomic design, textured grip, and seamless wireless connectivity for Xbox and PC."
      price={64.99}
    />
  </div>

  <div className="border-b-2 border-r-2 border-gray-200">
    <ProductCards
       reviewStars="5"
       reviewCount={958}
      imageurl={Headphones}
      name="SteelSeries Arctis 7 Wireless Gaming Headset"
      description="Lossless wireless audio, 24-hour battery life, and DTS surround sound for immersive play."
      price={149.99}
    />
  </div>

  <div className="border-b-2 border-gray-200">
    <ProductCards
       reviewStars="5"
       reviewCount={3201}
      imageurl={Smartphone}
      name="iPhone 14 Pro – 128GB Deep Purple Edition"
      description="Latest Apple smartphone with A16 Bionic chip and dynamic island display design."
      price={999.99}
    />
  </div>

  <div className="border-r-2 border-gray-200">
    <ProductCards
       reviewStars="4"
       reviewCount={341}
      imageurl={Charger}
      name="Anker 737 GaNPrime 120W Charger Version"
      description="High-speed USB-C wall charger for laptops, phones, and tablets with triple port output."
      price={89.99}
    />
  </div>

  <div className="border-r-2 border-gray-200">
    <ProductCards
       reviewStars="4"
       reviewCount={872}
      imageurl={Keyboard}
      name="Keychron K6 Wireless Mechanical Keyboard"
      description="Compact 65% layout with hot-swappable keys and RGB backlighting."
      price={89.99}
    />
  </div>

  <div className="border-r-2 border-gray-200">
    <ProductCards
       reviewStars="5"
       reviewCount={1264}
      imageurl={Mice}
      name="Logitech G502 Hero Wired Gaming Mouse"
      description="Precision sensor with customizable DPI and 11 programmable buttons."
      price={49.99}
    />
  </div>

  <div className="border-gray-200">
    <ProductCards
       reviewStars="4"
       reviewCount={413}
      imageurl={Ultrawide}
      name="Samsung Odyssey G9 49” Curved Ultrawide Monitor"
      description="Super ultrawide QHD display with 240Hz refresh rate and G-Sync support."
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
