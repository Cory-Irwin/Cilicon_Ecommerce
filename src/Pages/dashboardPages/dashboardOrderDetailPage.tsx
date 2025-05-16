import React from "react";
import Footer from "../../Components/HomePage/Footer/Footer";
import Categories from "../../Components/HomePage/Categories/Categories";
import Header from "../../Components/HomePage/Header/Header";
import BlackFriday from "../../Components/HomePage/BlackFriday/BlackFriday";
import Penguin1 from "../../assets/PenguinCrew/penguin.jpg";
const dashboardOrderDetailPage = () => {
  return (
    <>
      <BlackFriday />
      <Header />
      <Categories />

      <div className="mx-auto max-w-screen-xl my-10 px-4 h-300">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-20">
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
          <div className="border-2 border-gray-200 ">
            <div className="flex justify-between border-2 border-gray-200 p-4">
              <h1>Order details</h1>
              <h1>Leave</h1>
            </div>
            <div className="shadow-md h-150">
              <div className="bg-yellow-200 flex p-4 border-2 border-gray-200 justify-between">
                <div>
                  <h1>#96459761</h1>
                  <div className="flex-1 flex">
                    <h1> 4 Products </h1>
                    <h1>.</h1>
                    <h1>Order Placed in 17 Jan, 2021 at 7:32 PM</h1>
                  </div>
                </div>
                <div className="items-center flex justify-center text-4xl text-blue-500">
                  <h1>$1199.00</h1>
                </div>
              </div>
              <div className="mt-6 border-2 border-gray-200 p-2">
                <h3 className="text-lg font-semibold mb-2">Order Progress</h3>
                <div className="flex justify-between items-center m-10 text-gray-500 text-sm">
                  <div className="text-green-900">Order Placed</div>
                  <div className="text-orange-500">Packaging</div>
                  <div>On The Road</div>
                  <div>Delivered</div>
                </div>
                <div className="w-full bg-gray-300 h-3 my-2 relative">
                  <div className="bg-orange-500 h-3 w-1/4"></div>
                </div>
              </div>
              <div className="border-2 h-80 border-gray-200">
                <h1>Order Activity</h1>

                <div className="grid grid-cols-1 grid-rows-1 gap-4">
                  <div className="flex ">
                    <img src={Penguin1} alt="" className="h-15 w-15" />
                    <div className="flex-col">
                      <h1>
                        Your order has been delivered. Thank you for shopping at
                        Clicon!
                      </h1>
                      <p>23 Jan, 2021 at 7:32 PM</p>
                    </div>
                  </div>
                </div>

                <div className="flex ">
                  <img src={Penguin1} alt="" className="h-15 w-15" />
                  <div className="flex-col">
                    <h1>
                      Your order has been delivered. Thank you for shopping at
                      Clicon!
                    </h1>
                    <p>23 Jan, 2021 at 7:32 PM</p>
                  </div>
                </div>
                <div className="flex ">
                  <img src={Penguin1} alt="" className="h-15 w-15" />
                  <div className="flex-col">
                    <h1>
                      Your order has been delivered. Thank you for shopping at
                      Clicon!
                    </h1>
                    <p>23 Jan, 2021 at 7:32 PM</p>
                  </div>
                </div>
                <div className="flex ">
                  <img src={Penguin1} alt="" className="h-15 w-15" />
                  <div className="flex-col">
                    <h1>
                      Your order has been delivered. Thank you for shopping at
                      Clicon!
                    </h1>
                    <p>23 Jan, 2021 at 7:32 PM</p>
                  </div>
                </div>

                <div className="flex ">
                  <img src={Penguin1} alt="" className="h-15 w-15" />
                  <div className="flex-col">
                    <h1>
                      Your order has been delivered. Thank you for shopping at
                      Clicon!
                    </h1>
                    <p>23 Jan, 2021 at 7:32 PM</p>
                  </div>
                </div>
              </div>
              <table className="table-auto">
                <thead>
                  <tr>
                    <th>Song</th>
                    <th>Artist</th>
                    <th>Year</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    <td>Malcolm Lockyer</td>
                    <td>1961</td>
                  </tr>
                  <tr>
                    <td>Witchy Woman</td>
                    <td>The Eagles</td>
                    <td>1972</td>
                  </tr>
                  <tr>
                    <td>Shining Star</td>
                    <td>Earth, Wind, and Fire</td>
                    <td>1975</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default dashboardOrderDetailPage;
