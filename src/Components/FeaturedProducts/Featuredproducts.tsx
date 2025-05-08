import React from "react";
import BestProductCards from "../ProductCards/BestProductCards";
import Controller from "../../assets/IMAC.png";
import ComputerAccessories from "../../assets/computeraccessories.png";
import ProductCards from "../ProductCards/CatProductCards";
import arrow from "../../assets/shopwithcat/ArrowRight.svg";
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
        <div className="grid grid-cols-5 grid-rows-1 gap-4">
          <div className="row-span-3 bg-gradient-to-r  from-yellow-400 to-yellow-500 col-span-1 ">
            <div className=" row-span-3  p-4">
              <div className="flex flex-col items-center text-center justify-center ">
                <h1 className="text-1xl">Computers & Accessories</h1>
                <h2 className="text-3xl font-bold py- text-bla-600">
                  32% Discount
                </h2>
                <p className="py-2">For all electronic products</p> <img src={ComputerAccessories} alt="" />
                <div className="flex my-2">
                  <div className="bg-black text-white font-bold p-4">
                    <h1>OFFER ENDS IN:</h1>
                  </div>
                </div>{" "}
                <div className="bg-black p-4 text-white ">
                  <p>10Day:12HR:46Min:12Sec</p>
                </div>
                <div className="  mt-2 p-4 text-1xl w-50 gap-4 items-center flex flex-row
                 bg-black text-white text-1xl  justify-between font-extrabold ">
                  <h1>SHOP NOW</h1>
                  <img src={arrow} alt="" className="w-10" />
                </div>{" "}
                <div className="my-4 h-2 w-59">
                  <img src={bigphoto} alt="" />
                </div>
               
                <div className="flex ">
                  <div className="from-yellow-800 to-yellow-500 p-4 font-extrabold">
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 h-10 ">
            <div className="col-span-4 row-span-1 flex items-center justify-between  ">
              <h1 className="text-xl font-bold">Featured Products</h1>

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
          <div className="col-span-4  h-190 row-span-2 col-start-2 row-start-2">
            <div className="flex flex-col   h-full">
              <div className="flex h-auto border-2  border-gray-200 ">
                <div className="border-r-2 border-gray-200 w-1/4  ">
                  <ProductCards reviewStars="⭐⭐⭐" reviewCount={426} 
                    imageurl={MousePad}
                    name="Logitech G Powerplay Wireless Charging Mouse Pad"
                    description="no"
                    price={500}
                  />
                </div>
                <div className="border-r-2 border-gray-200 w-1/4">
                  <ProductCards reviewStars="⭐⭐⭐⭐" reviewCount={4}
                    imageurl={Controller}
                    name="Microsoft Xbox One Wireless Controller – Carbon Black "
                    description="no"
                    price={99}
                  />
                </div>
                <div className="border-r-2 border-gray-200 w-1/4">
                  <ProductCards reviewStars="⭐⭐⭐⭐⭐" reviewCount={52}
                    imageurl={Headphones}
                    name="Sony WH-1000XM5 Wireless  Leading Noise Canceling Headphones "
                    description="no"
                    price={500}
                  />
                </div>
                <div className="w-1/4">
                  <ProductCards reviewStars="⭐⭐⭐" reviewCount={672}
                    imageurl={Smartphone}
                    name="Samsung Electronics Samsung Galaxy S21 5G Smartphone – Phantom Gray"
                    description="no"
                    price={500}
                  />
                </div>
              </div>

              <div className="flex  border-b-2 border-l-2 border-r-2 border-gray-200 h-1/2">
                <div className="border-r-2  border-gray-200 w-1/4">
                  <ProductCards reviewStars="⭐⭐⭐⭐" reviewCount={733}
                    imageurl={Charger}
                    name="Anker PowerPort III 65W USB-C Fast Charger – GaN Technology"
                    description="no"
                    price={500}
                  />
                </div>
                <div className="border-r-2 border-gray-200 w-1/4">
                  <ProductCards reviewStars="⭐⭐⭐⭐" reviewCount={982}
                    imageurl={Keyboard}
                    name="Razer Huntsman Elite Opto-Mechanical Gaming Keyboard – RGB "
                    description="no"
                    price={500}
                  />
                </div>
                <div className="border-r-2 border-gray-200 w-1/4">
                  <ProductCards reviewStars="⭐⭐⭐⭐⭐" reviewCount={426}
                    imageurl={Mice}
                    name="Logitech G902 Lightspeed Wireless Gaming Mouse – HERO 25K Sensor"
                    description="no"
                    price={500}
                  />
                </div>
                <div className="w-1/4">
                  <ProductCards reviewStars="⭐⭐⭐⭐" reviewCount={16}
                    imageurl={Ultrawide}
                    name="Odyssey G9 Gaming Monitor – QHD 240Hz Curved Display"
                    description="no"
                    price={500}
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

// <div className="mx-auto max-w-screen-xl my-20 px-4">
//         <div className="grid grid-cols-5 grid-rows-[auto,0.5fr,1fr] gap-x-4 gap-y-4">
//           {/* Left Side - Discount Section */}
//           <div className="col-span-1 row-span-3 bg-blue-200 p-4">
//             <div className="flex flex-col justify-center items-start">
//               <h1 className="text-2xl">Computers & Accessories</h1>
//               <h2 className="text-3xl font-bold text-red-600">32% Discount</h2>

//               <p>For all electronic products</p>
//               <p>Offers end in:</p>

//               <div className="flex items-center">
//                 <div className="bg-white p-2">
//                   <p>ENDS CHRISTMAS</p>
//                 </div>
//               </div>
//               <div className="bg-blue-500 items-center justify-center">
//                 <h1>Shop Now</h1>
//                 <img src={ComputerAccessories} alt="" />
//               </div>
//             </div>
//           </div>

//           {/* Featured Products Header */}
//           <div className="col-span-4 row-span-1 flex items-center justify-between  ">
//             <h1 className="text-xl font-bold">Featured Products</h1>

//             {/* Product Categories */}
//             <div className="flex items-center gap-6 text-sm">
//               <h1>All Products</h1>
//               <h1>Smart Phone</h1>
//               <h1>Laptop</h1>
//               <h1>Headphones</h1>
//               <h1>TV</h1>
//               <h1 className="font-semibold text-blue-600">
//                 Browse All Products
//               </h1>
//             </div>
//           </div>

//           <div className="flex-col-2 flex  border-gray-200  border-2 flex-1 h-full ">
//             <div className="  border-b-2 border-r-2 border-gray-200 max-w-65">
//               <ProductCards
//                 imageurl={MousePad}
//                 name="Logitech Mouspad gaming workplace matt."
//                 description="no"
//                 price={500}
//               />
//             </div>
//             <div className=" border-b-2 border-r-2  border-gray-200 ">
//               {" "}
//               <ProductCards
//                 imageurl={Controller}
//                 name="Xbox One Controller Logitech Mouspad gaming workplace matt."
//                 description="no"
//                 price={99}
//               />
//             </div>
//             <div className="border-b-2 border-r-2 border-gray-200 ">
//               {" "}
//               <ProductCards
//                 imageurl={Headphones}
//                 name="HeadPhones Logitech Mouspad gaming workplace matt. "
//                 description="no"
//                 price={500}
//               />
//             </div>
//             <div className="border-b-2  border-gray-200 ">
//               {" "}
//               <ProductCards
//                 imageurl={Smartphone}
//                 name="Iphone Logitech Mouspad gaming workplace matt. "
//                 description="no"
//                 price={500}
//               />
//             </div>
//             <div className=" border-r-2 border-gray-200  ">
//               {" "}
//               <ProductCards
//                 imageurl={Charger}
//                 name="charger Logitech Mouspad gaming workplace matt. "
//                 description="no"
//                 price={500}
//               />
//             </div>

//             <div className=" border-r-2 border-gray-200 ">
//               {" "}
//               <ProductCards
//                 imageurl={Keyboard}
//                 name="Keyboard Logitech Mouspad gaming workplace matt. "
//                 description="no"
//                 price={500}
//               />
//             </div>

//             <div className=" border-r-2 border-gray-200  ">
//               {" "}
//               <ProductCards
//                 imageurl={Mice}
//                 name="G902 Mice Logitech Mouspad gaming workplace matt. "
//                 description="no"
//                 price={500}
//               />
//             </div>

//             <div className=" border-gray-200  ">
//               {" "}
//               <ProductCards
//                 imageurl={Ultrawide}
//                 name="G9 Odessy Logitech Mouspad gaming workplace matt. "
//                 description="no"
//                 price={500}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
/* <div className="col-span-1 border-2 border-gray-200">
          <ProductCards imageurl={Controller} name="Xbox One Controller Xbox One Controller Xbox One Controller Logitech Mouspad gaming workplace matt." description="no" price={99} />
        </div>
        <div className="col-span-1 border-2 border-gray-200">
          <ProductCards imageurl={Controller} name="Xbox One Controller Xbox One Controller Xbox One Controller Logitech Mouspad gaming workplace matt." description="no" price={99} />
        </div>
        <div className="col-span-1 border-2 border-gray-200">
          <ProductCards imageurl={Controller} name="Xbox One Controller Xbox One Controller Xbox One Controller Logitech Mouspad gaming workplace matt." description="no" price={99} />
        </div>
        <div className="col-span-1 border-2 border-gray-200">
          <ProductCards imageurl={Controller} name="Xbox One Controller Xbox One Controller Xbox One Controller Logitech Mouspad gaming workplace matt." description="no" price={99} />
        </div>
        <div className="col-span-1 border-2 border-gray-200">
          <ProductCards imageurl={Controller} name="Xbox One Controller Xbox One Controller Xbox One Controller Logitech Mouspad gaming workplace matt." description="no" price={99} />
        </div>
        <div className="col-span-1 border-2 border-gray-200">
          <ProductCards imageurl={Controller} name="Xbox One Controller Xbox One Controller Xbox One Controller Logitech Mouspad gaming workplace matt." description="no" price={99} />
        </div>
        <div className="col-span-1 border-2 border-gray-200">
          <ProductCards imageurl={Controller} name="Xbox One Controller Xbox One Controller Logitech Mouspad gaming workplace matt." description="no" price={99} />
        </div>
        <div className="col-span-1 border-2 border-gray-200">
          <ProductCards imageurl={Controller} name="Xbox One Controller Xbox One Controller Xbox One Controller Logitech Mouspad gaming workplace matt." description="no" price={99} />
        </div> */
