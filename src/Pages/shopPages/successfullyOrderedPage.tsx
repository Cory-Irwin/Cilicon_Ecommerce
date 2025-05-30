import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/HomePage/Header/Header";
import Categories from "../../Components/HomePage/Categories/Categories";
import Footer from "../../Components/HomePage/Footer/Footer";
import CheckedTick from "../../assets/SuccessfullyOrderedPage/CheckCircle.svg";
import Dashboard from "../../assets/SuccessfullyOrderedPage/dashboard.svg";
import WhiteArrow from "../../assets/Arrows/ArrowRightWhite.svg";
const OrderSuccess = () => {
  return (
    <>
      <Header />
      <Categories />
      <div className="flex flex-col items-center justify-center px-4 mt-20 mb-20">
        <div className="bg-white shadow-lg rounded-lg p-8 items-center flex  flex-col text-center ">
          <img src={CheckedTick} alt="" />

          <h1 className="text-2xl font-semibold mb-4">
            Order Successfully Submitted!
          </h1>
          <p className="text-gray-600 mb-6">
            Thank you for your purchase. Your order has been placed
            successfully.
          </p>
          <div className="flex flex-row  gap-6">
            {" "}
            <div className="flex text-center flex-row gap-2 bg-teal-900 hover:bg-teal-600 text-white px-6 py-2">
              <div className="">
                <img src={Dashboard} alt="" />
              </div>
              <div>
                <Link
                  to="/"
                  className=" "
                >
                  Return to Home
                </Link>
              </div>
            </div>
            <div className="flex text-center flex-row gap-2 bg-teal-900 hover:bg-teal-600 text-white px-6 py-2">
              <div>
                <Link
                  to="/"
                  className=" "
                >
                  Return to Dashboard
                </Link>
              </div>
              <div>
                <img src={WhiteArrow} alt="" />
              </div>
            </div>{" "}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default OrderSuccess;
