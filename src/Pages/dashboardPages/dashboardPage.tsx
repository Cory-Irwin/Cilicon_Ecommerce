import React from "react";
import Footer from "../../Components/Footer/Footer";
import Categories from "../../Components/Categories/Categories";
import Header from "../../Components/Header/Header";
import BlackFriday from "../../Components/BlackFriday/BlackFriday";
import Penguin1 from "../../assets/PenguinCrew/penguin2.jpg";

import Icon1 from "../../assets/DashboardPage/icon1.svg";
import Icon2 from "../../assets/DashboardPage/icon2.svg";
import Icon3 from "../../assets/DashboardPage/icon3.svg";
import BestProductCards from "../../Components/ProductCards/BestProductCards";

const dashboardPage = () => {
  return (
    <>
      <BlackFriday />
      <Header />
      <Categories />
      <div className="mx-auto max-w-screen-xl my-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-20">
          <div className="">
            <div className="grid grid-cols-1 grid-rows-10 gap-4 shadow-lg ">
              <div>
                <h1>Dashboard</h1>
              </div>
              <div>
                <h1>Order History</h1>
              </div>
              <div>
                <h1>Track Order</h1>
              </div>
              <div>
                <h1>Shopping cart</h1>
              </div>
              <div>
                <h1>Wishlist</h1>
              </div>
              <div>
                <h1>Compare</h1>
              </div>
              <div>
                <h1>Cards & Address</h1>
              </div>
              <div>
                <h1>Browsing History</h1>
              </div>
              <div>
                <h1>Settings</h1>
              </div>
              <div>
                <h1>Log Out</h1>
              </div>
            </div>
          </div>
          <div className="">
            <div>
              <h1>Hello Kevin</h1>
              <p>
                From your account dashboard. you can easily check & view your
                Recent Orders, manage your Shipping and Billing Addresses and
                edit your Password and Account Details.
              </p>
            </div>
            <div>
              <div className="grid grid-cols-3 grid-rows-1 gap-4 ">
                <div>
                  <div className="border-2 h border-gray-200 p-2 text-2xl">
                    <h1>Account Info</h1>
                  </div>
                  <div className="border-2 border-gray-200">
                    <div className="flex items-center ">
                      <img
                        src={Penguin1}
                        className="rounded-full w-20 h-20   flex"
                        alt=""
                      />
                      <div>
                        <h1>Appy Store</h1>
                        <p>123 Appland</p>
                      </div>
                    </div>

                    <div>
                      <p className="pt-2">Email: </p>
                      <p className="pt-2">Email2: </p>
                      <p className="pt-2">Phone: </p>
                    </div>
                    <div className="pt-4">
                      <button className="border-2 border-blue-200 p-2 text-blue-400">
                        Edit Account
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="border-2 p-2  text-2xl border-gray-200">
                    <h1>Billing Address</h1>
                  </div>
                  <div className="border-2 pt-2 border-gray-200">
                    <h1 className="pt-2">Appy Store</h1>
                    <p className="pt-2">
                      East Tejturi Bazar, Word No. 04, Road No. 13/x, House no.
                      1320/C, Flat No. 5D, Dhaka - 1200, Bangladesh
                    </p>
                    <p className="pt-2">Email: </p>
                    <p className="pt-2">Phone: </p>
                    <div className="pt-14">
                      <button className="border-2 border-blue-200 p-2 text-blue-400">
                        Edit Address
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-blue-100 items-center p-4 flex">
                    <img src={Icon1} alt="" />
                    <div className="p-2">
                      <h1>154</h1>
                      <p>Total Orders</p>
                    </div>
                  </div>
                  <div className="bg-red-100 items-center p-4 flex">
                    <img src={Icon1} alt="" />
                    <div className="p-2">
                      <h1>154</h1>
                      <p>Total Orders</p>
                    </div>
                  </div>
                  <div className="bg-green-100 items-center p-4 flex">
                    <img src={Icon1} alt="" />
                    <div className="p-2">
                      <h1>154</h1>
                      <p>Total Orders</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex  justify-between border-1  pt-2 pb-2 mt-10 border-gray-200 ">
              <h1>Payment Option</h1>
              <button>Add Card</button>
            </div>

            <div className="grid grid-cols-3 grid-rows-1 gap-4">
              <div className="row-span-2 row-start-2  bg-blue-500  text-white">
                <div className="m-5 p-5">
                  <div className="flex justify-between">
                    <h1>$95, 400.00 USD</h1>
                    <button>...</button>
                  </div>
                  <h1>Card Number</h1>
                  <h1>**** **** **** 3814</h1>

                  <h1>Visa</h1>
                  <h1>Appy Store</h1>
                </div>
              </div>
              <div className="row-span-2 row-start-2  bg-green-500  text-white">
                <div className="m-5 p-5">
                  <div className="flex justify-between">
                    <h1>$95, 400.00 USD</h1>
                    <button>...</button>
                  </div>
                  <h1>Card Number</h1>
                  <h1>**** **** **** 3814</h1>

                  <h1>Visa</h1>
                  <h1>Appy Store</h1>
                </div>
              </div>
              <div className="row-span-2 row-start-2  bg-red-500  text-white">
                <div className="m-5 p-5">
                  <div className="flex justify-between">
                    <h1>$95, 400.00 USD</h1>
                    <button>...</button>
                  </div>
                  <h1>Card Number</h1>
                  <h1>**** **** **** 3814</h1>

                  <h1>Visa</h1>
                  <h1>Appy Store</h1>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-5 grid-rows-5  border-2 border-gray-200 mt-10 ">
              <div className="col-span-5">
                <div className="justify-between flex p-2">
                  <h1 className=" ">Recent Order</h1>
                  <h1>View All --</h1>
                </div>
              </div>
              <div className="row-start-2 bg-gray-200 flex items-center">
                <h1>Order ID</h1>
              </div>
              <div className="row-start-2 bg-gray-200 flex items-center">
                <h1>Status</h1>
              </div>
              <div className="row-start-2 bg-gray-200 flex items-center">
                <h1>Date</h1>
              </div>
              <div className="row-start-2 bg-gray-200 flex items-center">
                <h1>Total</h1>
              </div>
              <div className="row-start-2 bg-gray-200 flex items-center">
                <h1>Action</h1>
              </div>
              <div>
                <h1>View Details</h1>
              </div>
              <div className="row-start-3">
                <h1>#96459761</h1>
              </div>
              <div className="row-start-3">9</div>
              <div className="row-start-3">10</div>
              <div className="row-start-3">11</div>
              <div>
                <h1>View Details</h1>
              </div>
              <div className="row-start-4">
                <h1>#96459761</h1>
              </div>
              <div className="row-start-4">14</div>
              <div className="row-start-4">15</div>
              <div className="row-start-4">16</div>
              <div>
                <h1>View Details</h1>
              </div>
              <div className="row-start-5">
                <h1>#96459761</h1>
              </div>
              <div className="row-start-5">19</div>
              <div className="row-start-5">20</div>
              <div className="row-start-5">21</div>
            </div>

            <div className="flex  mt-10 justify-between border-1  pt-2 pb-2  border-gray-200 ">
              <h1>Browsing History</h1>
              <button>Add Card</button>
            </div>
            <div className="grid grid-cols-3  grid-rows-2 gap-4">
              <div className="col-span-4"></div>

              <div className="row-start-1 justify-evenly flex">
                <BestProductCards />
              </div>
              <div className="row-start-1 justify-evenly flex">
                <BestProductCards />
              </div>
              <div className="row-start-1 justify-evenly flex">
                <BestProductCards />
              </div>
              <div className="col-span-4 row-start-2">ARROW ARROW</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default dashboardPage;

{
  /* <div className="grid grid-cols-5 grid-rows-5 gap-4 mt-10">
                <div className="col-span-5">
                  <div className="justify-between flex border-2 border-gray-200 p-2">
                  <h1 className=" ">Recent Order</h1>
                  <h1>View All --</h1>
                </div>
                <div className=" bg-gray-200 flex border-2 border-gray-200 p-2">
                <div className="row-start-2"></div>
                <div className="row-start-2">3</div>
                <div className="row-start-2">4</div>
                <div className="row-start-2">5</div>
                <div className="row-start-2">6</div>
                </div>
                </div>
                
                <div className="row-start-2"></div>
                <div className="row-start-2">3</div>
                <div className="row-start-2">4</div>
                <div className="row-start-2">5</div>
                <div className="row-start-2">6</div>
                <div>7</div>
                <div className="row-start-3">8</div>
                <div className="row-start-3">9</div>
                <div className="row-start-3">10</div>
                <div className="row-start-3">11</div>
              </div> */
}
{
  /* <div>
              <div className="grid grid-cols-3 grid-rows-3 ">
                <div>
                  <h1>Account Info</h1>
                </div>
                <div className="border-2 border-gray-200">
                  <h1>Billing Address</h1>
                </div>
                <div className="row-span-2 col-start-1 row-start-2">
                  <h1>Appy Store</h1>
                  <p>123 Appland</p>
                  <p>Email: </p>
                  <p>Phone: </p>
                  <button>Edit Account</button>
                </div>
                <div className="row-span-2 col-start-2 row-start-2 border-gray-200 border-2">
                  <h1>Appy Store</h1>
                  <p>Appyland 1321</p>
                  <p>Email: </p>
                  <p>Phone: </p>
                  <button>Edit Address</button>
                </div>

                <div className="col-start-3 row-start-1 bg-blue-200 gap-10 p-5">
                  <h1>154</h1>
                  <p>Total orders</p>
                </div>
                <div className="bg-orange-200 gap-5 p-5">
                  <h1>05</h1>
                  <p>Pending Orders</p>
                </div>
                <div className="col-start-3 bg-green-200 gap-5 p-5 ">
                  <h1>157</h1>
                  <p>Completed orders</p>
                </div>
              </div>
            </div> */
}

{
  /* <div className="grid grid-cols-3 grid-rows-1 gap-4  border-2 border-gray-200 p-2">
                <div className="col-span-3">
                  <div className="flex justify-between  border-2 border-gray-200">
                    <h1>Payment Option</h1>
                    <button>Add Card</button>
                
                </div>
                <div className="row-start-2 bg-blue-500  text-white">
                  <div className="m-5 p-5">
                    <div className="flex justify-between">
                      <h1>$95, 400.00 USD</h1>
                      <button>...</button>
                    </div>
                    <h1>Card Number</h1>
                    <h1>**** **** **** 3814</h1>

                    <h1>Visa</h1>
                    <h1>Appy Store</h1>
                  </div>
                </div>
                <div className="row-start-2 bg-red-500 text-white">
                  <div className="m-5 p-2">
                    <div className="flex justify-between">
                      <h1>$95, 400.00 USD</h1>
                      <button>...</button>
                    </div>
                    <h1>Card Number</h1>
                    <h1>**** **** **** 3814</h1>

                    <h1>Visa</h1>
                    <h1>Appy Store</h1>
                  </div>
                </div>
                <div className="row-start-2 bg-green-500 text-white">
                  <div className="m-5 p-2">
                    <div className="flex justify-between">
                      <h1>$95, 400.00 USD</h1>
                      <button>...</button>
                    </div>
                    <h1>Card Number</h1>
                    <h1>**** **** **** 3814</h1>

                    <h1>Visa</h1>
                    <h1>Appy Store</h1>
                  </div>
                </div>
              </div>
            </div> */
}
