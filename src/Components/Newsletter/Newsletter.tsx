import React from "react";
import Sponsors from "../../assets/news/Company Logo.svg";
const Newsletter = () => {
  return (
    <div className="items-center h-100   bg-teal-900">
      <div className="mx-auto max-w-screen-xl  px-4">
        <div className="justify-center flex text-center flex-col ">
          <h1 className="text-6xl font-bold mt-10 text-bold  text-white ">
            Subscribe to our newsletter
          </h1>
          <h1 className="text-2xl mt-5 text-white ">
            Our newspaper is a fantastic way of keeping up to date on what Appy
            Ecommerce is up to.
          </h1>
          <h1 className="text-2xl text-white ">
            {" "}
            Enter your email to recieve updated about latest blog posts, product
            updates, sales and more...
          </h1>
          <div className=" justify-center w-180 h-20 text-black bg-white flex relative left-65 mt-10">
            <input
              type="text"
              placeholder="Email Addresss..."
              className="w-180 p-4 items-center  rounded-lg  focus:outline-none"
            />
            <div className="bg-yellow-200 p-4 w-40 h-15 relative right-3  top-3 flex justify-center items-center">
              <a href="">
                <button className="text-gray-500">SUBSCRIBE</button>
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
