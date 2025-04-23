import React from "react";
import Footer from "../../Components/Footer/Footer";
import Categories from "../../Components/Categories/Categories";
import Header from "../../Components/Header/Header";
import BlackFriday from "../../Components/BlackFriday/BlackFriday";

const dashboardOrderHistoryPage = () => {
  return (
    <>
      {" "}
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
