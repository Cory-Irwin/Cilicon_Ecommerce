import React from "react";
import BlackFriday from "../../Components/BlackFriday/BlackFriday";

import Categories from "../../Components/Categories/Categories";
import DashboardList from "../../Components/DashboardList/dashboardList";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Penguin3 from "../../assets/PenguinCrew/penguin3.jpg";

const dashboardSetting = () => {
  return (
    <>
      <BlackFriday />
      <Header />
      <Categories />
      <div className="mx-auto max-w-screen-xl my-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-20">
          <div>
            <DashboardList />
          </div>
          <div>
            <div className="flex-col-3 flex-row-3 gap-6 flex border-2 border-gray-200">
              <div>
                <img src={Penguin3} alt="" />
              </div>
              <div className=" gap-6">
                <h1>Display Name</h1>
                <input
                  type="text"
                  className="border-2 w-90   border-gray-200"
                />
                <h1>Full Name</h1>
                <input type="text" className="border-2 w-90 p-2  h-8 border-gray-200" />
                <h1>Secondary Email</h1>
                <input type="text" className="border-2 w-90 h-8 border-gray-200" />
                <h1>Country/Region</h1>
                <input type="text" className="border-2 w-90 h-8 border-gray-200" />
                <button className="bg-blue-500 text-white">Save Changes</button>
              </div>
              <div className="gap-6 pr-4">
                <h1>UserName</h1>
                <input type="text" className="border-2 w-90  h-8  border-gray-200" />
                <h1>Email</h1>
                <input type="text" className="border-2 w-90 h-8  border-gray-200" />
                <h1>Phone Number</h1>
                <input type="text" className="border-2 w-90 h-8   border-gray-200" />
                <div className="flex justify-between gap-4">
                  <div className="w-[50%] ">
                    <h1>States</h1>
                    <input type="text" className="border-2 w-45 border-gray-200" />
                  </div>
                  <div className="w-[50%]">
                    <h1>Zip Code</h1>
                    <input type="text" className="border-2 w-41 border-gray-200" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex-col-2 flex flex-1 mt-5">
                <div className="border-2 w-[50%] p-4 border-gray-200">
                  <div>
                    <h1>Billing Address</h1>
                  </div>
                  <div className="w-[50%] gap-4 flex justify-between">
                    <div className="">
                      <h1>First Name</h1>
                      <input type="text" className="border-2 border-gray-200" />
                    </div>
                    <div className="">
                      <h1>Last Name</h1>
                      <input type="text" className="border-2 border-gray-200" />
                    </div>
                  </div>
                  <div className="w-full">
                    <h1>Company Name</h1>
                    <input type="text" className="border-2 w-98 border-gray-200" />
                  </div>
                  <div className="w-full">
                    <h1>Address</h1>
                    <input type="text" className="border-2 w-98 border-gray-200" />
                  </div>
                  <div className="w-full">
                    <h1>Country</h1>
                    <input type="text" className="border-2 w-98 border-gray-200" />
                  </div>
                  <div className="w-full">
                    <h1>Region/State</h1>
                    <input type="text" className="border-2 w-98 border-gray-200" />
                  </div>
                  <div className="w-[50%] flex gap-4 justify-between">
                    <div className="">
                      <h1>City</h1>
                      <input type="text" className="border-2 border-gray-200" />
                    </div>
                    <div className="">
                      <h1>Zip code</h1>
                      <input type="text" className="border-2 border-gray-200" />
                    </div>
                  </div>
                  <div className="w-full">
                    <h1>Email</h1>
                    <input type="text" className="border-2 w-98 border-gray-200" />
                  </div>
                  <div className="w-full">
                    <h1>Phone Number</h1>
                    <input type="text" className="border-2 w-98 border-gray-200" />
                  </div>
                  <button className="bg-blue-500 text-white">
                    Save Changes
                  </button>
                </div>
                <div className="border-2   p-4 border-gray-200">
                  <h1>Shipping Address</h1>

                  <div className="w-[50%] gap-4 flex justify-between">
                    <div className="">
                      <h1>First Name</h1>
                      <input type="text" className="border-2  border-gray-200" />
                    </div>
                    <div className="">
                      <h1>Last Name</h1>
                      <input type="text" className="border-2 border-gray-200" />
                    </div>
                  </div>
                  <div className="w-full">
                    <h1>Company Name</h1>
                    <input type="text" className="border-2 w-98 border-gray-200" />
                  </div>
                  <div className="w-full">
                    <h1>Address</h1>
                    <input type="text" className="border-2 w-98 border-gray-200" />
                  </div>
                  <div className="w-full">
                    <h1>Country</h1>
                    <input type="text" className="border-2 w-98 border-gray-200" />
                  </div>
                  <div className="w-full">
                    <h1>Region/State</h1>
                    <input type="text" className="border-2 w-98 border-gray-200" />
                  </div>
                  <div className="w-[50%] gap-4 flex justify-between">
                    <div className="">
                      <h1>City</h1>
                      <input type="text" className="border-2 border-gray-200" />
                    </div>
                    <div className="">
                      <h1>Zip code</h1>
                      <input type="text" className="border-2 border-gray-200" />
                    </div>
                  </div>
                  <div className="w-full">
                    <h1>Email</h1>
                    <input type="text" className="border-2 w-98 border-gray-200" />
                  </div>
                  <div className="w-full">
                    <h1>Phone Number</h1>
                    <input type="text" className="border-2 w-98 border-gray-200" />
                  </div>
                  <button className="bg-blue-500 text-white">
                    Save Changes
                  </button>
                </div>
              </div>
              <div className="border-2 border-gray-200">
                <div>
                  <h1>CHANGE PASSWORD</h1>
                </div>

                <div className="p-4">
                  <h1>Password</h1>
                  <input type="text" className="border-2 w-210 h-10 border-gray-200" />
                </div>
                <div className="p-4">
                  <h1>Current Password</h1>
                  <input type="text" className="border-2 w-210 h-10 border-gray-200" />
                </div>
                <div className="p-4">
                  <h1>New Password</h1>
                  <input type="text" className="border-2 w-210 h-10 border-gray-200" />
                </div>
                <div className="p-4">
                  <h1>Confirm Password</h1>
                  <input type="text" className="border-2 w-210 h-10 border-gray-200" />
                </div>
                <button className="bg-blue-500 text-white">
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default dashboardSetting;

{
  /* <div className="border-gray-200 border-2 ">
            <h1>Account Settings</h1>{" "}
            <div>
              <div className="grid grid-cols-2 grid-rows-3 gap-4">
                <div className="col-span-2 border-gray-200 flex flex-row justify-between border-t-2 border-b-2">
                  <div>
                    <img src={Penguin3} alt="" />
                  </div>
                  <div className=" gap-6">
                    <h1>Display Name</h1>
                    <input type="text" className="border-2 w-95   border-gray-200" />
                    <h1>Full Name</h1>
                    <input type="text" className="border-2 w-95  border-gray-200" />
                    <h1>Secondary Email</h1>
                    <input type="text" className="border-2 w-95  border-gray-200" />
                    <h1>Country/Region</h1>
                    <input type="text" className="border-2 w-95  border-gray-200" />
                    <button className="bg-blue-500 text-white">Save Changes</button>
                  </div>
                  <div>
                    <h1>UserName</h1>
                    <input type="text" className="border-2 w-95  border-gray-200" />
                    <h1>Email</h1>
                    <input type="text" className="border-2 w-95  border-gray-200" />
                    <h1>Phone Number</h1>
                    <input type="text" className="border-2 w-95  border-gray-200" />
                    <div className="flex justify-between ">
                      <div className="w-[50%]">
                        <h1>States</h1>
                        <input
                          type="text"
                          className="border-2 border-gray-200"
                        />
                      </div>
                      <div className="w-[50%]">
                        <h1>Zip Code</h1>
                        <input
                          type="text"
                          className="border-2 border-gray-200"
                        />
                      </div>
                    </div>
                  </div>
              
                </div>
                <div className="row-start-2">
                  <div>
                    <h1>Billing Address</h1>
                  </div>
                  <div>
                  <h1>Display Name</h1>
                    <input type="text" className="border-2 w-95   border-gray-200" />
                    <h1>Full Name</h1>
                    <input type="text" className="border-2 w-95  border-gray-200" />
                  </div>
                  <div>
                  <h1>Full Name</h1>
                  <input type="text" className="border-2 w-95  border-gray-200" />
                  <h1>Full Name</h1>
                  <input type="text" className="border-2 w-95  border-gray-200" />
                  <h1>Full Name</h1>
                  <input type="text" className="border-2 w-95  border-gray-200" />
                  <h1>Full Name</h1>
                  <input type="text" className="border-2 w-95  border-gray-200" />
                  </div>
                  <div>
                  <h1>Display Name</h1>
                    <input type="text" className="border-2 w-95   border-gray-200" />
                    <h1>Full Name</h1>
                    <input type="text" className="border-2 w-95  border-gray-200" />
                  </div>
                  <div>
                  <h1>Full Name</h1>
                  <input type="text" className="border-2 w-95  border-gray-200" />
                  <h1>Full Name</h1>
                  <input type="text" className="border-2 w-95  border-gray-200" />
                  <button>Save Changes</button>
                  </div>
                </div>
                <div className="row-start-2">
                <div className="row-start-2">
                  <div>
                    <h1>Shipping Address</h1>
                  </div>
                  <div>
                  <h1>Display Name</h1>
                    <input type="text" className="border-2 w-95   border-gray-200" />
                    <h1>Full Name</h1>
                    <input type="text" className="border-2 w-95  border-gray-200" />
                  </div>
                  <div>
                  <h1>Full Name</h1>
                  <input type="text" className="border-2 w-95  border-gray-200" />
                  <h1>Full Name</h1>
                  <input type="text" className="border-2 w-95  border-gray-200" />
                  <h1>Full Name</h1>
                  <input type="text" className="border-2 w-95  border-gray-200" />
                  <h1>Full Name</h1>
                  <input type="text" className="border-2 w-95  border-gray-200" />
                  </div>
                  <div>
                  <h1>Display Name</h1>
                    <input type="text" className="border-2 w-95   border-gray-200" />
                    <h1>Full Name</h1>
                    <input type="text" className="border-2 w-95  border-gray-200" />
                  </div>
                  <div>
                  <h1>Full Name</h1>
                  <input type="text" className="border-2 w-95  border-gray-200" />
                  <h1>Full Name</h1>
                  <input type="text" className="border-2 w-95  border-gray-200" />
                  <button>Save Changes</button>
                  </div>
                </div>
                </div>
                <div className="col-span-2">4</div>
              </div>
            </div>
          </div>
      */
}
