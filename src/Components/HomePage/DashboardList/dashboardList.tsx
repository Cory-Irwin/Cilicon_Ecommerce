import React from 'react'
import Dashboard from "../../../assets/DashboardPage/Stack.svg"
import OrderHistory from "../../../assets/DashboardPage/OrderHistory.svg"
import TrackOrder from "../../../assets/DashboardPage/Shopping.svg"
import Wishlist from "../../../assets/DashboardPage/Wishlist.svg"
import Compare from "../../../assets/DashboardPage/Wishlist.svg"
import Cards from "../../../assets/DashboardPage/Cards.svg"
import Browsing from "../../../assets/DashboardPage/Browsing.svg"
import Settings from "../../../assets/DashboardPage/Setting.svg"
import Shopping from "../../../assets/DashboardPage/Shopping.svg"
import LogOut from "../../../assets/DashboardPage/LogOut.svg"
const dashboardList = () => {
  return (
    <div className="">
    <div className="grid grid-cols-1 grid-rows-10 py-5 gap-4 shadow-lg  ">
      <div className='flex flex-row gap-2 p-2 px-5  hover:bg-teal-900 hover:text-white'>
        <img src={Dashboard} alt="" />
        <h1>Dashboard</h1>
      </div>
      <div className='flex flex-row gap-2 p-2 px-5  hover:bg-teal-900 hover:text-white'>
         <img src={OrderHistory} alt="" />
        <h1>Order History</h1>
      </div>
      <div className='flex flex-row gap-2 p-2 px-5  hover:bg-teal-900 hover:text-white'>
         <img src={TrackOrder} alt="" />
        <h1>Track Order</h1>
      </div>
      <div className='flex flex-row gap-2 p-2 px-5  hover:bg-teal-900 hover:text-white'>
         <img src={Shopping} alt="" />

        <h1>Shopping cart</h1>
      </div>
      <div className='flex flex-row gap-2 p-2 px-5  hover:bg-teal-900 hover:text-white'>
         <img src={Wishlist} alt="" />

        <h1>Wishlist</h1>
      </div>
      <div className='flex flex-row gap-2 p-2 px-5  hover:bg-teal-900 hover:text-white'>
         <img src={Compare} alt="" />

        <h1>Compare</h1>
      </div>
      <div className='flex flex-row gap-2 p-2 px-5  hover:bg-teal-900 hover:text-white'>
         <img src={Cards} alt="" />

        <h1>Cards & Address</h1>
      </div>
      <div className='flex flex-row gap-2 p-2 px-5  hover:bg-teal-900 hover:text-white'>
         <img src={Browsing} alt="" />

        <h1>Browsing History</h1>
      </div>
      <div className='flex flex-row gap-2 p-2 px-5  hover:bg-teal-900 hover:text-white'>
            <img src={Settings} alt="" />
        <h1>Settings</h1>
      </div>
      <div className='flex flex-row gap-2 p-2 px-5  hover:bg-teal-900 hover:text-white'>
        <img src={LogOut} alt="" />
        <h1>Log Out</h1>
      </div>
    </div>

  </div>
  )
}

export default dashboardList