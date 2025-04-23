import React from "react";
import Footer from "../../Components/Footer/Footer";
import Categories from "../../Components/Categories/Categories";
import Header from "../../Components/Header/Header";
import BlackFriday from "../../Components/BlackFriday/BlackFriday";
import DashboardList from "../../Components/DashboardList/dashboardList";
import { Toggle } from "rsuite";
import BestProductCards from "../../Components/ProductCards/BestProductCards";

const browsingHistory = () => {
  return (
    <>
      <BlackFriday />
      <Header />
      <Categories />
      <div className="mx-auto max-w-screen-xl my-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-20">
          <DashboardList />
          <div className="">
            <div className="w-full flex flex-row justify-between">
              <h1>Browsing History</h1>
              <div className="flex-row justify-between items-center flex gap-2">
                <h1>Turn Browsing History on/off </h1>
                <Toggle />
              </div>
            </div>
            <div className="gap-12">
              <input
                className="border-2 border-gray-200 p-2 w-70"
                type="text"
                placeholder="Search in browser history"
              />
              <input
                className="border-2 border-gray-200 p-2 w-40"
                type="text"
                placeholder="DD/MM/YY"
              />
            </div>

            <div className="grid mt-10 grid-cols-4 grid-rows-2 border-2 border-gray-200 gap-4">
              <div className="col-span-4">
                <h1 className="border-gray-200 border-b-2">April 17, 2025</h1>
              </div>
              <div className="row-start-2">
                {" "}
                <BestProductCards />
              </div>
              <div className="row-start-2">
                {" "}
                <BestProductCards />
              </div>
              <div className="row-start-2">
                {" "}
                <BestProductCards />
              </div>
              <div className="row-start-2">
                {" "}
                <BestProductCards />
              </div>
            </div>
            
            <div className="grid mt-10 grid-cols-4 grid-rows-2 border-2 border-gray-200 gap-4">
              <div className="col-span-4">
                <h1 className="border-gray-200 border-b-2">April 2, 2025</h1>
              </div>
              <div className="row-start-2">
                {" "}
                <BestProductCards />
              </div>
              <div className="row-start-2">
                {" "}
                <BestProductCards />
              </div>
              <div className="row-start-2">
                {" "}
                <BestProductCards />
              </div>
              <div className="row-start-2">
                {" "}
                <BestProductCards />
              </div>
            </div>
            
            <div className="grid mt-10 grid-cols-4 grid-rows-2 border-2 border-gray-200 gap-4">
              <div className="col-span-4">
                <h1 className="border-gray-200 border-b-2">January 17, 2025</h1>
              </div>
              <div className="row-start-2">
                {" "}
                <BestProductCards />
              </div>
              <div className="row-start-2">
                {" "}
                <BestProductCards />
              </div>
              <div className="row-start-2">
                {" "}
                <BestProductCards />
              </div>
              <div className="row-start-2">
                {" "}
                <BestProductCards />
              </div>
            </div>
            <div className="grid mt-10 grid-cols-4 grid-rows-2 border-2 border-gray-200 gap-4">
              <div className="col-span-4">
                <h1 className="border-gray-200 border-b-2">November 17, 2024</h1>
              </div>
              <div className="row-start-2">
                {" "}
                <BestProductCards />
              </div>
              <div className="row-start-2">
                {" "}
                <BestProductCards />
              </div>
              <div className="row-start-2">
                {" "}
                <BestProductCards />
              </div>
              <div className="row-start-2">
                {" "}
                <BestProductCards />
              </div>
            </div>
            <div className="grid mt-10 grid-cols-4 grid-rows-2 border-2 border-gray-200 gap-4">
              <div className="col-span-4">
                <h1 className="border-gray-200 border-b-2">March 17, 2024</h1>
              </div>
              <div className="row-start-2">
                {" "}
                <BestProductCards />
              </div>
              <div className="row-start-2">
                {" "}
                <BestProductCards />
              </div>
              <div className="row-start-2">
                {" "}
                <BestProductCards />
              </div>
              <div className="row-start-2">
                {" "}
                <BestProductCards />
              </div>
            </div>
            <div className="flex items-center justify-center mt-10">
            <button className="border-2 bg-orange-200">LOAD MORE</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default browsingHistory;
