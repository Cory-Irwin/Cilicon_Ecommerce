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
      

              <div className="relative overflow-x-auto shadow-md mt-10">
              <table className="w-full text-sm text-left">
                <thead className="text-xs uppercase bg-gray-50">
                  <tr>
                    <th className="px-6 py-3">Product Name</th>
                    <th className="px-6 py-3">Color</th>
                    <th className="px-6 py-3">Category</th>
                    <th className="px-6 py-3">Price</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {props.recentOrders.map((order, index) => (
                    <tr key={index} className="bg-white border-b">
                      <td className="px-6 py-4 font-medium text-black whitespace-nowrap">
                        {order.productName}
                      </td>
                      <td className="px-6 py-4">{order.color}</td>
                      <td className="px-6 py-4">{order.category}</td>
                      <td className="px-6 py-4">{order.price}</td>
                      <td className="px-6 py-4">{order.status}</td>
                      <td className="px-6 py-4 text-right">
                        <a
                          href="#"
                          className="font-medium text-blue-600 hover:underline"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default dashboardOrderHistoryPage;
