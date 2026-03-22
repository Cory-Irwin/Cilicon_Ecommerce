import React from "react";
import Sponsors from "../../../assets/news/Company Logo.svg";
const Newsletter = () => {
  return (
    <div className="items-center h-auto   bg-teal-900">
      <div className="mx-auto max-w-screen-xl  px-4">
        <div className="justify-center flex items-center text-center flex-col ">
          <h1 className="text-3xl lg:text-6xl font-bold mt-10 text-bold  text-white ">
            Subscribe to our newsletter
          </h1>
          <h1 className="text-md lg:text-2xl mt-5 text-gray-300 w-150 ">
            Our newspaper is a fantastic way of keeping up to date on what Appy
            Ecommerce is up to. Enter your email to recieve updated about latest blog posts, product
            updates, sales and more...
          </h1>
          <div className="  w-180 h-20 text-black bg-white justify-center flex  mt-10">
            <input
              type="text"
              placeholder="Email Addresss..."
              className="w-180 p-4 items-center  rounded-lg text-2xl focus:outline-none"
            />
            <div className="bg-yellow-200 hover:bg-yellow-400 p-4 w-40 h-15 relative right-3  top-3 flex justify-center items-center">
              <a href="">
                <button className="text-gray-500">Subscribe</button>
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={Sponsors} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
