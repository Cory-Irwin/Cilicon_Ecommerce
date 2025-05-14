import ArrowRight from "../../assets/shopwithcat/ArrowRight.svg";
import MousePad from "../../assets/Mousepad.png";
import Headphones from "../../assets/headphones.png";
import Controller from "../../assets/IMAC.png";
import Smartphone from "../../assets/iphone.png";
import Mice from "../../assets/Mice.png";
import Ultrawide from "../../assets/ultrawide.png";
import Keyboard from "../../assets/keyboard.png";
import Charger from "../../assets/charger.png";
import ProductCards from "../ProductCards/FeaturedProductCard";

const ComputerAccessories = () => {
  return (
    <div className="mx-auto max-w-screen-xl my-20  px-4">
      <div className="grid  grid-cols-4">
        {/* Header and Category Tabs */}
        <div className="col-span-4 w-255 ">
          <div className="flex items-center gap-12 py-15 bg-white">
            <h1 className="text-3xl font-bold">Computer Accessories</h1>
            <div className="flex text-center justify-center items-center gap-4 text-sm">
              <h1>All Products</h1>
              <h1>Smart Phone</h1>
              <h1>Laptop</h1>
              <h1>Headphones</h1>
              <h1>TV</h1>
              <div className="flex justify-between gap-2">
                <h1 className="font-semibold text-blue-600">
                  Browse All Products
                </h1>
                <img src={ArrowRight} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="col-span-4 row-span-2 col-start-1 row-start-2">
          <div className="flex flex-col gap-6">
            <div className="flex gap-4">
              <ProductCards
                reviewStars="5"
                reviewCount={426}
                imageurl={MousePad}
                name="Logitech G Powerplay Wireless Charging Mouse Pad"
                description="no"
                price={89.99}
              />
              <ProductCards
                reviewStars="4"
                reviewCount={4}
                imageurl={Controller}
                name="Macbook Pro 2024 Edition 1TB SSD i7-7700k CPU 27 inch"
                description="no"
                price={999.99}
              />
              <ProductCards
                reviewStars="5"
                reviewCount={52}
                imageurl={Headphones}
                name="Sony WH-1000XM5 Wireless Noise Canceling Headphones"
                description="no"
                price={299.99}
              />
              <ProductCards
                reviewStars="4"
                reviewCount={672}
                imageurl={Smartphone}
                name="Samsung Galaxy S21 5G – Phantom Gray"
                description="no"
                price={1999.99}
              />
            </div>

            <div className="flex gap-4">
              <ProductCards
                reviewStars="4"
                reviewCount={733}
                imageurl={Charger}
                name="Anker PowerPort III 65W USB-C Fast Charger"
                description="no"
                price={19.99}
              />
              <ProductCards
                reviewStars="5"
                reviewCount={982}
                imageurl={Keyboard}
                name="Razer Huntsman Elite Gaming Keyboard – RGB"
                description="no"
                price={199.99}
              />
              <ProductCards
                reviewStars="5"
                reviewCount={426}
                imageurl={Mice}
                name="Logitech G902 Lightspeed Wireless Gaming Mouse"
                description="no"
                price={249.99}
              />
              <ProductCards
                reviewStars="5"
                reviewCount={16}
                imageurl={Ultrawide}
                name="Odyssey G9 Gaming Monitor – QHD 240Hz Curved Display"
                description="no"
                price={1799.99}
              />
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="row-span-3 col-start-5 row-start-1 w-80">
          <div className="flex flex-col gap-6">
            <div className="h-[480px] bg-linear-to-r from-black to-teal-900 p-4 rounded">
              <div className="flex flex-col items-center  text-black text-center">
                <img src={Mice} alt="" className="h-40 w-auto" />
                <h1 className="text-4xl text-white font-bold">
                  Logitech G502 Gaming Mice
                </h1>
                <p className="text-lg mt-2 text-white">
                  Experience gaming responsiveness like never before.
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <h1 className="text-white">Only For</h1>
                  <div className="bg-white font-bold text-xl  text-black px-4 py-1">
                    $129 AUD
                  </div>
                </div>
                <div className="mt-5 flex items-center gap-2">
                  <div className="bg-black hover:bg-gray-500   flex w-70 h-15 text-center justify-center items-center px-4 py-2">
                    <h1 className="text-white font-bold   mr-2">SHOP NOW</h1>
                    <img src={ArrowRight} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-700 p-4 rounded text-white text-center">
              <div className="bg-yellow-400  text-black  py-1 px-3 w-fit mx-auto font-bold mb-4">
                SUMMER SALES
              </div>
              <h1 className="text-3xl font-bold mb-2">40% Discount</h1>
              <p className="text-lg">
                Only for smartphone products at selected retailers.
              </p>
              <div className="mt-5 flex items-center gap-2">
                <div className="bg-black hover:bg-gray-500 flex w-70 h-15 text-center justify-center items-center px-4 py-2">
                  <h1 className="text-white font-bold mr-2">SHOP NOW</h1>
                  <img src={ArrowRight} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComputerAccessories;
