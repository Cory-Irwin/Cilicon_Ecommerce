import ArrowRight from "../../../assets/shopwithcat/ArrowRight.svg";
import ArrowRight2 from "../../../assets/LandingPage/ArrowRight.svg";
import MousePad from "../../../assets/misc/Mousepad.png";
import Headphones from "../../../assets/misc/headphones.png";
import Controller from "../../../assets/misc/IMAC.png";
import Smartphone from "../../../assets/misc/iphone.png";
import Mice from "../../../assets/misc/Mice.png";
import Ultrawide from "../../../assets/misc/ultrawide.png";
import Keyboard from "../../../assets/misc/keyboard.png";
import Charger from "../../../assets/misc/charger.png";
import FeaturedProductCards from "../../ProductCards/FeaturedProductCard";

const ComputerAccessories = () => {
  return (
    <div className="mx-auto max-w-screen-xl my-20  px-4">
      <div className="grid  grid-cols-4">
        {/* Header and Category Tabs */}
        <div className="col-span-4 w-255 ">
          <div className="flex items-center gap-12 py-4 bg-white">
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
              <FeaturedProductCards
                reviewStars={5}
                reviewCount={426}
                imageurl={MousePad}
                title="Logitech G Powerplay Wireless Charging Mouse Pad"
                originalPrice={129.99}
                newPrice={89.99}
                percentOff={Math.round(((129.99 - 89.99) / 129.99) * 100)} // ~31% off
              />
              <FeaturedProductCards
                reviewStars={4}
                reviewCount={4}
                imageurl={Controller}
                title="Macbook Pro 2024 Edition 1TB SSD i7-7700k CPU 27 inch"
                originalPrice={1299.99}
                newPrice={999.99}
                percentOff={Math.round(((1299.99 - 999.99) / 1299.99) * 100)} // ~23% off
              />

              <FeaturedProductCards
                reviewStars={5}
                reviewCount={52}
                imageurl={Headphones}
                title="Sony WH-1000XM5 Wireless Noise Canceling Headphones"
                originalPrice={349.99}
                newPrice={299.99}
                percentOff={Math.round(((349.99 - 299.99) / 349.99) * 100)} // ~14% off
              />

              <FeaturedProductCards
                reviewStars={4}
                reviewCount={672}
                imageurl={Smartphone}
                title="Samsung Galaxy S21 5G – Phantom Gray"
                newPrice={1999.99}
                // no originalPrice or discount, so no percentOff
              />
            </div>

            <div className="flex gap-4">
              <FeaturedProductCards
                reviewStars={4}
                reviewCount={733}
                imageurl={Charger}
                title="Anker PowerPort III 65W USB-C Fast Charger"
                newPrice={19.99}
              />

              <FeaturedProductCards
                reviewStars={5}
                reviewCount={982}
                imageurl={Keyboard}
                title="Razer Huntsman Elite Gaming Keyboard – RGB"
                newPrice={199.99}
              />

              <FeaturedProductCards
                reviewStars={5}
                reviewCount={426}
                imageurl={Mice}
                title="Logitech G902 Lightspeed Wireless Gaming Mouse"
                newPrice={249.99}
              />

              <FeaturedProductCards
                reviewStars={5}
                reviewCount={16}
                imageurl={Ultrawide}
                title="Odyssey G9 Gaming Monitor – QHD 240Hz Curved Display"
                newPrice={1799.99}
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
                  <div className="bg-black font-extrabold text-4xl  text-yellow-400 px-4 py-1">
                    $129.99
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
                <div className="bg-white hover:bg-gray-200 flex w-70 h-15 text-center justify-center items-center px-4 py-2">
                  <h1 className="text-black font-bold mr-2">SHOP NOW</h1>
                  <img src={ArrowRight2} alt="" />
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
