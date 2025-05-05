import React from "react";
import BestProductCards from "../ProductCards/BestProductCards";
import Controller from "../../assets/IMAC.png";
import ComputerAccessories from "../../assets/computeraccessories.png";
import ProductCards from "../ProductCards/CatProductCards";


import BigBestDealProductCard from "../ProductCards/bigBestDealProductCard";

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
          <div className="row-span-3 bg-blue-200 col-span-1 ">
            <div className=" row-span-3  p-4">
              <div className="flex flex-col  justify-center items-start">
                <h1 className="text-2xl">Computers & Accessories</h1>
                <h2 className="text-3xl font-bold text-red-600">
                  32% Discount
                </h2>

                <p>For all electronic products</p>
                <p>Offers end in:</p>

                <div className="flex items-center">
                  <div className="bg-white p-2">
                    <p>ENDS CHRISTMAS</p>
                  </div>
                </div>
                <div className="bg-blue-500 items-center justify-center">
                  <h1>Shop Now</h1>
                  <img src={ComputerAccessories} alt="" />
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
          <div className="col-span-4  h-150 row-span-2 col-start-2 row-start-2">
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
