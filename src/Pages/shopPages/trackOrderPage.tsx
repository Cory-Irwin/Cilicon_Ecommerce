import React from "react";
import Header from "../../Components/HomePage/Header/Header";
import BlackFriday from "../../Components/HomePage/BlackFriday/BlackFriday";
import Categories from "../../Components/HomePage/Categories/Categories";
import Footer from "../../Components/HomePage/Footer/Footer";
import Information from "../../assets/TrackOrderPage/Info.svg";

const TrackOrder = () => {
  return (
    <>
      <BlackFriday />
      <Header />
      <Categories />
      <div className="mx-auto max-w-screen-md my-10 px-4 ">
        <h1 className="text-2xl font-semibold mb-4">Track Your Order</h1>
        <p className="text-gray-600 mb-6">
          To track your order please enter your order ID in the input field
          below and press the Track Order button. This was given to you on your
          receipt and in the confirmation email you should have received.
        </p>
        <div className="flex flex-row gap-6 ">
          {" "}
          <div className="flex flex-col">
            <div>
              <h1>Order ID</h1>
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter Order Number"
                className="border border-gray-200 p-2  py-2 w-100 "
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div>
              <h1>Billing Email</h1>
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter Order Number"
                className="border border-gray-200 py-2 p-2 w-100 "
              />
            </div>
          </div>
        </div>{" "}
        <div className="py-5">
          <div>
            <img src="" alt="" />
          </div>
          <div className="flex gap-2  flex-row">
            <div>
              <img src={Information} alt="" />
            </div>
            <div>
              <h1>Order ID that we sended to your in your email address.</h1>
            </div>
          </div>
        </div>
        <button className="bg-teal-900 hover:bg-teal-400 text-white px-6 py-2 ">
          Track Order
        </button>
      </div>

      <Footer />
    </>
  );
};

export default TrackOrder;
