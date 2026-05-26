import React from "react";
import Header from "../../Components/HomePage/Header/Header";
import Categories from "../../Components/HomePage/Categories/Categories";
import CashOnDel from "../../assets/BillingPage/CashonDeliver.svg";
import Separator from "../../assets/BillingPage/LineSeparator.svg";
import Venmo from "../../assets/BillingPage/venmo.svg";
import PayPal from "../../assets/BillingPage/penpal.svg";
import Amazon from "../../assets/BillingPage/amazon.svg";
import CreditCard from "../../assets/BillingPage/creditcard.svg";
import Arrow from "../../assets/Arrows/ArrowRightWhite.svg";
const BillingPage = () => {
  return (
    <>
      <Header />
      <Categories />
      <div className="mx-auto max-w-screen-xl my-20 px-4">
        <h1 className="text-2xl font-semibold mb-6">Billing Details</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_300px] gap-6">
          {/* Billing Form */}
          <div className="">
            <h2 className="text-lg font-semibold mb-4">Billing Information</h2>
            <form>
              <div className="flex flex-row gap-6">
                <div className="mb-4">
                  <label className="block text-sm font-medium">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 "
                    placeholder="John "
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium">Last Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 "
                    placeholder=" Doe"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="w-120 p-2 border  border-gray-300 "
                    placeholder=" "
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Address</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 "
                  placeholder="123 Main St, City, Country"
                  required
                />
              </div>
              <div className="flex flex-row  w-full gap-4">
                <div className="mb-4">
                  <label className="block text-sm font-medium">
                    Company Name
                  </label>
                  <select
                    className="w-45 p-2 border border-gray-300 "
                    required
                  >
                    <option value="">Select Country</option>
                    <option value="USA">USA</option>
                    <option value="Canada">Canada</option>
                    <option value="UK">UK</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium">
                    Company Name
                  </label>
                  <select
                    className="w-45 p-2 border border-gray-300 "
                    required
                  >
                    <option value="">Select Country</option>
                    <option value="USA">USA</option>
                    <option value="Canada">Canada</option>
                    <option value="UK">UK</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium">
                    Company Name
                  </label>
                  <select
                    className="w-45 p-2 border border-gray-300 "
                    required
                  >
                    <option value="">Select Country</option>
                    <option value="USA">USA</option>
                    <option value="Canada">Canada</option>
                    <option value="UK">UK</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="w-84 p-2 border  border-gray-300 "
                    placeholder=" "
                    required
                  />
                </div>
              </div>
              <div className="flex flex-row gap-4"></div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium">Email</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 "
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 "
                    required
                  />
                </div>
              </div>
            </form><div className="border border-gray-200 p-6 mt-10 w-231">
          <h2 className="text-lg font-semibold mb-4">Payment Options</h2>
        </div>
        <div className="border border-gray-200 p-6  w-231">
          <div className="flex-row flex gap-2 justify-between items-center">
            <div className="flex items-center gap-2  flex-col">
              <img src={CashOnDel} alt="" />
              <h1>Cash on Delivery</h1>

              <div className="flex items-center mb-4">
                <input
                  disabled
                  id="disabled-radio-1"
                  type="radio"
                  value=""
                  name="disabled-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500
     dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="disabled-radio-1"
                  className="ms-2 text-sm font-medium text-gray-400
     dark:text-gray-500"
                ></label>
              </div>
            </div>
            <div className="flex flex-row">
              <img src={Separator} alt="" />
            </div>
            <div className="flex items-center gap-2  flex-col">
              <img src={Venmo} alt="" />
              <h1>Venmo</h1>

              <div className="flex items-center mb-4">
                <input
                  disabled
                  id="disabled-radio-1"
                  type="radio"
                  value=""
                  name="disabled-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500
     dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="disabled-radio-1"
                  className="ms-2 text-sm font-medium text-gray-400
     dark:text-gray-500"
                ></label>
              </div>
            </div>
            <div className="flex flex-row">
              <img src={Separator} alt="" />
            </div>
            <div className="flex items-center gap-2 flex-col">
              <img src={PayPal} alt="" />
              <h1>Paypal</h1>

              <div className="flex items-center mb-4">
                <input
                  disabled
                  id="disabled-radio-1"
                  type="radio"
                  value=""
                  name="disabled-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500
     dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="disabled-radio-1"
                  className="ms-2 text-sm font-medium text-gray-400
     dark:text-gray-500"
                ></label>
              </div>
            </div>
            <div className="flex flex-row">
              <img src={Separator} alt="" />
            </div>
            <div className="flex items-center gap-2 flex-col">
              <img src={Amazon} alt="" />
              <h1>Amazon</h1>

              <div className="flex items-center mb-4">
                <input
                  disabled
                  id="disabled-radio-1"
                  type="radio"
                  value=""
                  name="disabled-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500
     dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="disabled-radio-1"
                  className="ms-2 text-sm font-medium text-gray-400
     dark:text-gray-500"
                ></label>
              </div>
            </div>
            <div className="flex flex-row">
              <img src={Separator} alt="" />
            </div>
            <div className="flex items-center gap-2 flex-col">
              <img src={CreditCard} alt="" />
              <h1>Credit/Debit Card</h1>

              <div className="flex items-center mb-4">
                <input
                  disabled
                  id="disabled-radio-1"
                  type="radio"
                  value=""
                  name="disabled-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500
     dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="disabled-radio-1"
                  className="ms-2 text-sm font-medium text-gray-400
     dark:text-gray-500"
                ></label>
              </div>
            </div>
           
          </div>

        <div className="">
        <div className="mb-4">
                <label className="block text-sm font-medium">Name on Card</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 "
                  placeholder="123 Main St, City, Country"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Card Number</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 "
                  placeholder="123 Main St, City, Country"
                  required
                />
              </div>
              <div className="w-auto flex flex-row gap-6 items-center ">
                <div className="mb-4">
                <label className="block text-sm font-medium">Expire Date</label>
                <input
                  type="text"
                  className="w-106 p-2 border  border-gray-300 "
                  placeholder="123 Main St, City, Country"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">CVC</label>
                <input
                  type="text"
                  className="w-106 p-2 border border-gray-300 "
                  placeholder="123 Main St, City, Country"
                  required
                />
              </div>
              </div>
          </div>
          <div>       
          </div>
             <h2 className="text-lg font-semibold mb-4">Additional information</h2>
             <h1>Order Notes (Optional)</h1>
             <input
                  type="text"
                  className="w-full  border h-30 border-gray-300 "
                  placeholder="123 Main St, City, Country"
                  required
                />
          </div>
</div>
          {/* Order Summary */}
          <div className="border border-gray-200 h-100 p-6 ">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2">
              <p className="flex justify-between">
                Subtotal: <span>$0.00</span>
              </p>
              <p className="flex justify-between">
                Shipping: <span>Free</span>
              </p>
              <p className="flex justify-between">
                Tax: <span>$0.00</span>
              </p>
            </div>
            <hr className="my-4" />
            <h1 className="text-lg font-semibold flex justify-between">
              Total: <span>$0.00</span>
            </h1>
            <div className="flex flex-row">
            <button
              className="w-full mt-4 bg-teal-900 hover:bg-teal-600
             text-white px-4 py-2 "
            >
              <div className="flex flex-row gap-2 justify-center">
            <div>
              Place Order</div>
              <div>
              <img src={Arrow} alt="" />
            </div></div>
            </button>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default BillingPage;
