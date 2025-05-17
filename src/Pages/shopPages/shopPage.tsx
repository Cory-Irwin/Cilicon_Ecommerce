import React from "react";
import Header from "../../Components/HomePage/Header/Header";
import Categories from "../../Components/HomePage/Categories/Categories";
import Footer from "../../Components/HomePage/Footer/Footer";
import FeaturedProductCards from "../../Components/ProductCards/FeaturedProductCard";
import MousePad from "../../assets/Misc/Mousepad.png";
import Headphones from "../../assets/misc/headphones.png";
import Controller from "../../assets/misc/IMAC.png";
import Smartphone from "../../assets/misc/iphone.png";
import Mice from "../../assets/misc/Mice.png";
import Ultrawide from "../../assets/misc/ultrawide.png";
import Keyboard from "../../assets/misc/keyboard.png";
import Charger from "../../assets/misc/charger.png";
import MainItem from "../../assets/ShopPage/drone.svg";
import Shopping from "../../assets/bestdeals/ShoppingCartSimple.svg";
import ArrowRight from "../../assets/LandingPage/ArrowRight.svg";

const ShopPage = () => {
  return (
    <>
      <Header />
      <Categories />
      <div className="mx-auto max-w-screen-xl my-10 px-4">
        <div className="grid grid-cols-2 lg:grid-cols-[300px_1fr] grid-rows-1 gap-4">
          <div>
            <h1 className="text-2xl font-bold">Category</h1>
            <div>
              <div className="flex flex-col space-y-2">
                <label className="inline-flex items-center space-x-2">
                  <input
                    type="radio"
                    name="option"
                    value="1"
                    className="accent-blue-600 w-4 h-4"
                  />
                  <span className="text-gray-800">Electronic Devices</span>
                </label>

                <label className="inline-flex items-center space-x-2">
                  <input
                    type="radio"
                    name="option"
                    value="2"
                    className="accent-blue-600 w-4 h-4"
                  />
                  <span className="text-gray-800">Computers & Laptops</span>
                </label>

                <label className="inline-flex items-center space-x-2">
                  <input
                    type="radio"
                    name="option"
                    value="3"
                    className="accent-blue-600 w-4 h-4"
                  />
                  <span className="text-gray-800">Computer Accessories</span>
                </label>
                <label className="inline-flex items-center space-x-2">
                  <input
                    type="radio"
                    name="option"
                    value="3"
                    className="accent-blue-600 w-4 h-4"
                  />
                  <span className="text-gray-800">Smartphones</span>
                </label>
                <label className="inline-flex items-center space-x-2">
                  <input
                    type="radio"
                    name="option"
                    value="3"
                    className="accent-blue-600 w-4 h-4"
                  />
                  <span className="text-gray-800">Headphones</span>
                </label>
                <label className="inline-flex items-center space-x-2">
                  <input
                    type="radio"
                    name="option"
                    value="3"
                    className="accent-blue-600 w-4 h-4"
                  />
                  <span className="text-gray-800">Mobile Accessories</span>
                </label>
                <label className="inline-flex items-center space-x-2">
                  <input
                    type="radio"
                    name="option"
                    value="3"
                    className="accent-blue-600 w-4 h-4"
                  />
                  <span className="text-gray-800">Gaming Consoles</span>
                </label>
                <label className="inline-flex items-center space-x-2">
                  <input
                    type="radio"
                    name="option"
                    value="3"
                    className="accent-blue-600 w-4 h-4"
                  />
                  <span className="text-gray-800">Cameras</span>
                </label>
                <label className="inline-flex items-center space-x-2">
                  <input
                    type="radio"
                    name="option"
                    value="3"
                    className="accent-blue-600 w-4 h-4"
                  />
                  <span className="text-gray-800">TV & Home Appliances</span>
                </label>
                <label className="inline-flex items-center space-x-2">
                  <input
                    type="radio"
                    name="option"
                    value="3"
                    className="accent-blue-600 w-4 h-4"
                  />
                  <span className="text-gray-800">GPS & Navigation</span>
                </label>
              </div>
            </div>

            <div className="mt-10">
              <h1 className="text-2xl font-bold">Price Range</h1>
              <div>
                <h1>pricerangegoeshesre</h1>
                <div>
                  <h1>Min Price</h1>
                </div>
                <div>
                  <h1>Max Price</h1>
                </div>
              </div>
              <ul>
                <li>All Price</li>
                <li>Under $20</li>
                <li>$25 to $100</li>
                <li>$100 to $300</li>
                <li>$300 to $500</li>
                <li>$500 to $1000</li>
                <li>$1000 to $10,000</li>
              </ul>
            </div>
            <div>
              <h1>POPULAR BRANDS</h1>
              <div>
                <ul>
                  <li>Apple</li>
                  <li>Microsoft</li>
                  <li>Dell</li>
                  <li>Symphony</li>
                  <li>Sony</li>
                  <li>LG</li>
                  <li>One Plus</li>
                  <li>Google</li>
                  <li>Samsung</li>
                  <li>HP</li>
                  <li>Xiaomi</li>
                  <li>Panasonic</li>
                  <li>Intel</li>
                </ul>
              </div>
              <h1>POPULAR TAGS</h1>
              <div className="flex  flex-wrap gap-2">
                <span className="border-2 border-gray-200 px-3 py-1 rounded">
                  iPhone
                </span>
                <span className="border-2 border-gray-200 px-3 py-1 rounded">
                  TV
                </span>
                <span className="border-2 border-gray-200 px-3 py-1 rounded">
                  Game
                </span>
                <span className="border-2 border-gray-200 px-3 py-1 rounded">
                  Asus Laptops
                </span>
                <span className="border-2 border-gray-200 px-3 py-1 rounded">
                  Macbook
                </span>
                <span className="border-2 border-gray-200 px-3 py-1 rounded">
                  SSD
                </span>
                <span className="border-2 border-gray-200 px-3 py-1 rounded">
                  Graphics Card
                </span>
              </div>
              <div className="border-2 border-gray-200  h-155 mt-5">
                <div className="flex justify-center">
                  <img src={MainItem} alt="" className="w-100 h-auto" />
                </div>
                <div className="flex justify-items-center  font-semibold flex-col text-center">
                  <h1 className="text-4xl">Drone Kit</h1>
                  <h1 className="text-2xl">w/ Controller</h1>
                </div>
                <div className="flex flex-row justify-center gap-2 my-2">
                  <div className="text-white bg-black p-2 flex justify-center items-center">
                    <h1>OFFER ENDS IN:</h1>
                  </div>
                  <div className="bg-white   text-1xl p-1 py-2 font-semibold text-black ">
                    <p>10:45:12</p>
                  </div>
                </div>{" "}
                <div className="flex flex-row gap-2 items-center justify-center">
                  <div>
                    {" "}
                    <h1 className="text-2xl">Only For:</h1>
                  </div>
                  <div className="bg-yellow-400 text-2xl font-extrabold w-40 text-center p-2">
                    <h1>$199 AUD</h1>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div
                    className="bg-gray-200 w-60 text-center flex mt-5 justify-center items-center 
                  hover:bg-gray-300 p-4 h-14"
                  >
                    <button className="">
                      <div className=" gap-1 flex flex-row items-center text-center">
                        <div>
                          <img src={Shopping} alt="" />
                        </div>
                        <div>
                          <h1>ADD TO CART</h1>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div
                    className="bg-gray-200 w-60 text-center flex mt-5 justify-center items-center 
                  hover:bg-gray-300 p-4 h-14"
                  >
                    <button className="">
                      <div className=" gap-1 flex flex-row items-center text-center">
                        <div className="gap-6">
                          <h1>VIEW DETAILS</h1>
                        </div>{" "}
                        <div>
                          <img src={ArrowRight} alt="" />
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex p-2 flex-row gap-24 justify-between">
              <div className="bg-amber-50 ">
                <h1>Search</h1>
              </div>
              <div className="flex flex-row gap-6">
                <h1>Sort by</h1>
                <h1>Most Popular</h1>
              </div>
            </div>
            <div>
              <div className="flex bg-gray-200 flex-row p-2 gap-24 justify-between">
                <div className=" flex flex-row gap-4 ">
                  <div>
                    <h1>Active Filters:</h1>
                  </div>
                  <div>
                    <h1>Electronic Devices</h1>
                  </div>
                  <div>
                    <h1>5 Star Rating</h1>
                  </div>
                </div>
                <div className="flex flex-row gap-6">
                  <h1>5000 results found</h1>
                </div>
              </div>
              <div className="flex flex-row justify-between gap-y-6 flex-wrap">
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
            <div className="flex justify-center  py-10  gap-6 flex-row">
              <div className="border-2 rounded-full p-2 w-12 h-12 items-center text-center border-gray-200 flex justify-center">
                1
              </div>
              <div className="border-2 rounded-full p-2 w-12 h-12 items-center text-center border-gray-200 flex justify-center">
                2
              </div>
              <div className="border-2 rounded-full p-2 w-12 h-12 items-center text-center border-gray-200 flex justify-center">
                3
              </div>
              <div className="border-2 rounded-full p-2 w-12 h-12 items-center text-center border-gray-200 flex justify-center">
                4
              </div>
              <div className="border-2 rounded-full p-2 w-12 h-12 items-center text-center border-gray-200 flex justify-center">
                5
              </div>
              <div className="border-2 rounded-full p-2 w-12 h-12 items-center text-center border-gray-200 flex justify-center">
                6
              </div>
              <div className="border-2 rounded-full p-2 w-12 h-12 items-center text-center border-gray-200 flex justify-center">
                7
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShopPage;
