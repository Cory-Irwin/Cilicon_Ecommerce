import Controller from "../../../assets/misc/IMAC.png";
import ComputerAccessories from "../../../assets/FeaturedProducts/caa.png";
import ProductCards from "../../../Components/ProductCards/FeaturedProductCard";
import arrow from "../../../assets/shopwithcat/ArrowRight.svg";
import arrow2 from "../../../assets/computeraccessories/ArrowRight.svg";
import MousePad from "../../../assets/misc/Mousepad.png";
import Headphones from "../../../assets/misc/headphones.png";
import Smartphone from "../../../assets/misc/iphone.png";
import Mice from "../../../assets/misc/Mice.png";
import Ultrawide from "../../../assets/misc/ultrawide.png";
import Keyboard from "../../../assets/misc/keyboard.png";
import Charger from "../../../assets/misc/charger.png";

const Featuredproducts = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-xl my-20 px-4 h-auto">
        <div className="">
          <div className="w-full  flex flex-col lg:flex-row  ">
            {/*promotional item */}

            <div className="bg-teal-900  gap-6 flex flex-1 p-6 lg:justify-center ">
              <div className="lg:min-w-75 justify-between  lg:items-center flex flex-col w-1/2 ">
                
                <h1 className="text-white  font-bold text-5xl lg:text-4xl">Computers & Accessories</h1>
                <h2 className="text-2xl text-white">32% Discount</h2>
                <p className=" text-yellow-300 font-bold  text-2xl">For all electronic products</p>
                <div className="flex flex-row gap-2  ">
                  <div className="text-white flex justify-center items-center">
                    <h1>OFFER ENDS IN:</h1>
                  </div>
                  <div className="bg-white p-1  font-semibold text-black ">
                    <p>10:45:12</p>
                  </div>
                </div>
                <div
                  className="  mt-2 p-4 text-1xl  text-center gap-4 items-center flex flex-row
                 bg-black text-white justify-center  hover:invert font-extrabold"
                >
                  {" "}
                  <h1>SHOP NOW</h1>
                  <img src={arrow} alt="" className="w-10 " />
                </div>
              </div>
              <div className="w-1/2">
                <img src={ComputerAccessories} className=" my-10" alt="" />
              </div>
            </div>

            {/*Second layer*/}
            <div className=" gap-3 justify-between flex flex-row flex-wrap ">
                  <div className="flex justify-between flex-1">
                  {" "}
                  {/*header */}
                  <div>
                    <h1 className="font-bold lg: p-2 text-xl">Featured Products</h1>
                  </div>
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
             
           

                {/*Products */}
                <div className="grid lg:grid-cols-4 sm:grid-cols-2  ">
                  <div className=" ">
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
                  <div className=" ">
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
                  <div className="  ">
                    <ProductCards
                      reviewStars={5}
                      reviewCount={52}
                      imageurl={Headphones}
                      title="Sony WH-1000XM5 Wireless Noise Canceling Headphones"
                      originalPrice={349.99}
                      newPrice={299.99}
                      percentOff={Math.round(
                        ((349.99 - 299.99) / 349.99) * 100
                      )} // ~14% off
                    />
                  </div>
                  <div className=" ">
                    <ProductCards
                      reviewStars={4}
                      reviewCount={672}
                      imageurl={Smartphone}
                      title="Samsung Galaxy S21 5G – Phantom Gray"
                      newPrice={1999.99}
                      // no originalPrice or discount, so no percentOff
                    />
                  </div>

                  <div className="">
                    <ProductCards
                      reviewStars={4}
                      reviewCount={733}
                      imageurl={Charger}
                      title="Anker PowerPort III 65W USB-C Fast Charger"
                      newPrice={19.99}
                    />
                  </div>
                  <div className="">
                    <ProductCards
                      reviewStars={5}
                      reviewCount={982}
                      imageurl={Keyboard}
                      title="Razer Huntsman Elite Gaming Keyboard – RGB"
                      newPrice={199.99}
                    />
                  </div>
                  <div className=" ">
                    <ProductCards
                      reviewStars={5}
                      reviewCount={426}
                      imageurl={Mice}
                      title="Logitech G902 Lightspeed Wireless Gaming Mouse"
                      newPrice={249.99}
                    />
                  </div>
                  <div className="">
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
