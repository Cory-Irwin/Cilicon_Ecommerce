import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Medal from "../../../assets/ProductPage/Features/Medal.svg";
import CreditCard from "../../../assets/ProductPage/Features/CreditCard.svg";
import Handshake from "../../../assets/ProductPage/Features/Handshake.svg";
import Headphones from "../../../assets/ProductPage/Features/Headphones.svg";
import Truck from "../../../assets/ProductPage/Features/Truck.svg";
import LineThing from "../../../assets/ProductPage/Features/Line 19.svg"

export default () => (
  <div className="mx-auto max-w-screen-xl my-10 px-4">
    <div className="flex border-2 border-gray-200 justify-center items-center">
      <Tabs>
        <div className="flex flex-center items-center justify-center">
          <TabList>
            <Tab>DESCRIPTION</Tab>
            <Tab>ADDITIONAL INFORMATION</Tab>
            <Tab>SPECIFICATIONS</Tab>
            <Tab>REVIEWS</Tab>
          </TabList>
        </div>
        <div>
          <TabPanel>
            <div className="flex flex-row gap-24 p-4 justify-between">
              <div className=" w-110">
                <h2 className="line-clamp-8 break-normal">
                  The most powerful MacBook Pro ever is here. With the
                  blazing-fast M1 Pro or M1 Max chip — the first Apple silicon
                  designed for pros — you get groundbreaking performance and
                  amazing battery life. Add to that a stunning Liquid Retina XDR
                  display, the best camera and audio ever in a Mac notebook, and
                  all the ports you need. The first notebook of its kind, this
                  MacBook Pro is a beast. M1 Pro takes the exceptional
                  performance of the M1 architecture to a whole new level for
                  pro users.
                </h2>
              </div>
              <div className="">
                <h2 className="font-bold">Features</h2>
                <ul>
                  <li>
                    <div className="flex gap-2 py-2 flex-row">
                       <div>
                        <img src={Medal} alt="" />
                      </div>
                      <div>
                        <h1>Free 1 Year Warranty</h1>{" "}
                      </div>
                     
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-2 py-2 flex-row">
                       <div>
                        <img src={Truck} alt="" />
                      </div>
                      <div>
                        <h1>Free Shipping & Fasted Delivery</h1>{" "}
                      </div>
                     
                    </div>
                  </li>    <li>
                    <div className="flex gap-2 py-2 flex-row">
                       <div>
                        <img src={Handshake} alt="" />
                      </div>
                      <div>
                        <h1>100% Money-back guarantee</h1>{" "}
                      </div>
                     
                    </div>
                  </li>    <li>
                    <div className="flex gap-2 py-2 flex-row">
                       <div>
                        <img src={Headphones} alt="" />
                      </div>
                      <div>
                        <h1>24/7 Customer support</h1>{" "}
                      </div>
                     
                    </div>
                  </li>    <li>
                    <div className="flex gap-2 py-2 flex-row">
                       <div>
                        <img src={CreditCard} alt="" />
                      </div>
                      <div>
                        <h1>Secure payment method</h1>{" "}
                      </div>
                     
                    </div>
                  </li>
                </ul>
              </div>
              {/* <img src={LineThing} alt="" /> */}
              <div>
                <div>
                  <h2 className=" font-bold">Shipping Information</h2>
                  <ul>
                    <div>
                      <li>
                        <div className="flex py-2 gap-2 flex-row">
                        <div><h1 className="font-bold">Courier:</h1></div>
                        <div><h1 className="text-gray-400">2-4 days. free shipping</h1></div>
                        </div>
                      </li>
                    </div>
                   <div>
                      <li>
                        <div className="flex py-2 gap-2 flex-row">
                        <div><h1 className="font-bold">Local Shipping:</h1></div>
                        <div><h1 className="text-gray-400"> up to one week, $19.00</h1></div>
                        </div>
                      </li>
                    </div>
                   <div>
                      <li>
                        <div className="flex py-2 gap-2 flex-row">
                        <div><h1 className="font-bold">UPS Ground Shipping:</h1></div>
                        <div><h1 className="text-gray-400"> 4 - 6 days, $29.00
</h1></div>
                        </div>
                      </li>
                    </div>
                    <div>
                      <li>
                        <div className="flex gap-2 py-2 flex-row">
                        <div><h1 className="font-bold">Unishop Global Export:</h1></div>
                        <div><h1 className="text-gray-400"> 3 - 4 days, $39.00</h1></div>
                        </div>
                      </li>
                    </div>
                   
                  </ul>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  </div>
);

// export default () => (
//   <Tabs>
//     <TabList>
//       <Tab>Title 1</Tab>
//       <Tab>Title 2</Tab>
//     </TabList>

//     <TabPanel>
//       <h2>Any content 1</h2>
//     </TabPanel>
//     <TabPanel>
//       <h2>Any content 2</h2>
//     </TabPanel>
//   </Tabs>
// );
