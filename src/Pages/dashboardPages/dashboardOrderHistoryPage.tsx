import React from "react";
import Footer from "../../Components/HomePage/Footer/Footer";
import Categories from "../../Components/HomePage/Categories/Categories";
import Header from "../../Components/HomePage/Header/Header";
import BlackFriday from "../../Components/HomePage/BlackFriday/BlackFriday";
import DashboardList from "../../Components/HomePage/DashboardList/dashboardList";

const dashboardOrderHistoryPage = () => {
  return (
    <>
      {" "}
      <BlackFriday />
      <Header />
      <Categories />
      <div className="mx-auto max-w-screen-xl my-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-20">

           <DashboardList/>
      

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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default dashboardOrderHistoryPage;
