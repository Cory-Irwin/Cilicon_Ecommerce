import React from "react";
import Footer from "../../Components/HomePage/Footer/Footer";
import Categories from "../../Components/HomePage/Categories/Categories";
import Header from "../../Components/HomePage/Header/Header";
import BlackFriday from "../../Components/HomePage/BlackFriday/BlackFriday";
import Icon1 from "../../assets/DashboardPage/icon1.svg";
import ProductCards from "../../Components/ProductCards/FeaturedProductCard";
import DashboardList from "../../Components/HomePage/DashboardList/dashboardList";
import CreditCardComponent from "./creditCardComponent";
import ArrowTeal from "../../assets/Arrows/TealArrowRight.svg";
import Smartphone from "../../assets/misc/iphone.png";

type OrderStatus = "In Progress" | "Completed" | "Canceled";

type Order = {
  productName: string;
  color: string;
  category: string;
  price: string;
  status: OrderStatus;
};

type DashboardPageProps = {
  firstName: string;
  lastName: string;
  addressNumber: number;
  addressName: string;
  profilePicture: string;
  mainEmail: string;
  secondaryEmail: string;
  phoneNumber: number;
  phoneOrigin: number;
  totalOrders: number;
  pendingOrders: number;
  completedOrders: number;
  billingPhone: number;
  billingEmail: string;
  billingAddress: string;
  billingPhoneOrigin: string;
  recentOrders: Order[];
};

const DashboardPage = (props: DashboardPageProps) => {
  return (
    <>
      <BlackFriday />
      <Header />
      <Categories />

      <div className="mx-auto max-w-screen-xl my-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-20">
          <DashboardList />

          <div>
            <div className="mb-5">
              <h1 className="text-2xl font-bold mb-5">
                Hello, {props.firstName}
              </h1>
              <p>
                From your account dashboard, you can easily check & view your
                Recent Orders, manage your Shipping and Billing Addresses, and
                edit your Password and Account Details.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {/* Account Info */}
              <div>
                <div className="border-2 border-gray-100 p-2">
                  <h1 className="p-1 px-2 font-semibold">ACCOUNT INFO</h1>
                </div>
                <div className="border-2 border-gray-100 p-4 space-y-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={props.profilePicture}
                      alt="Profile"
                      className="rounded-full w-20 h-20"
                    />
                    <div>
                      <h1>
                        {props.firstName} {props.lastName}
                      </h1>
                      <p>
                        {props.addressNumber} {props.addressName}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p>Email: {props.mainEmail}</p>
                    <p>Email2: {props.secondaryEmail}</p>
                    <p>
                      Phone: +{props.phoneOrigin} {props.phoneNumber}
                    </p>
                  </div>

                  <button className="border-2 border-blue-200 p-2 hover:text-white hover:bg-teal-900 text-teal-400 font-bold w-full">
                    EDIT ACCOUNT
                  </button>
                </div>
              </div>

              {/* Billing Address */}
              <div>
                <div className="border-2 border-gray-100 p-2">
                  <h1 className="p-1 px-2 font-semibold">BILLING ADDRESS</h1>
                </div>
                <div className="border-2 border-gray-100 p-4 space-y-2">
                  <h1>Appy Store</h1>
                  <p>{props.billingAddress}</p>
                  <p>Email: {props.billingEmail}</p>
                  <p>
                    Phone: {props.billingPhoneOrigin} {props.billingPhone}
                  </p>

                  <button className="border-2 mt-4 border-blue-200 p-2 hover:text-white hover:bg-teal-900 text-teal-400 font-bold w-full">
                    EDIT ADDRESS
                  </button>
                </div>
              </div>

              {/* Order Stats */}
              <div className="space-y-5">
                <div className="bg-blue-100 flex items-center gap-2 p-4 h-24.5">
                  <img src={Icon1} alt="" className="w-12 h-auto" />
                  <div>
                    <h1 className="text-xl font-semibold">
                      {props.totalOrders}
                    </h1>
                    <p className="text-gray-700">Total Orders</p>
                  </div>
                </div>
                <div className="bg-red-100 flex items-center gap-2 p-4 h-24.5">
                  <img src={Icon1} alt="" className="w-12 h-auto" />
                  <div>
                    <h1 className="text-xl font-semibold">
                      {props.pendingOrders}
                    </h1>
                    <p className="text-gray-700">Pending Orders</p>
                  </div>
                </div>
                <div className="bg-green-100 flex items-center gap-2 p-4 h-24.5">
                  <img src={Icon1} alt="" className="w-12 h-auto" />
                  <div>
                    <h1 className="text-xl font-semibold">
                      {props.completedOrders}
                    </h1>
                    <p className="text-gray-700">Completed Orders</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Options */}
            <div className="flex justify-between items-center border-2 border-gray-200 p-6 mt-10 text-teal-900 font-bold">
              <h1>Payment Options</h1>
              <div className="flex items-center gap-4">
                <button className="w-20">Add Card</button>
                <img src={ArrowTeal} alt="" />
              </div>
            </div>

            {/* Credit Card */}
            <div className="border-2 border-gray-200 gap-6 p-6 flex">
              <CreditCardComponent
                accountBalance={20000}
                cardNumber={4205}
                cardHolderName="Appy Store"
                commaThousand={false}
                fullName="Appy Store"
              />
            </div>

            {/* Recent Orders Table */}
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

            {/* Browsing History */}
            <div className="flex mt-10 justify-between border-t pt-2 pb-2 border-gray-100">
              <h1>Browsing History</h1>
              <button>Add Card</button>
            </div>

            <div className="grid grid-cols-3 grid-rows-2 gap-4">
              <div className=" gap-4">
                <ProductCards
                  reviewStars={4}
                  reviewCount={672}
                  imageurl={Smartphone}
                  title="Samsung Galaxy S21 5G – Phantom Gray"
                  newPrice={1999.99}
                  // no originalPrice or discount, so no percentOff
                />
              </div>
              <div className=" gap-4">
                <ProductCards
                  reviewStars={4}
                  reviewCount={672}
                  imageurl={Smartphone}
                  title="Samsung Galaxy S21 5G – Phantom Gray"
                  newPrice={1999.99}
                  // no originalPrice or discount, so no percentOff
                />
              </div>
              <div className=" gap-4">
                <ProductCards
                  reviewStars={4}
                  reviewCount={672}
                  imageurl={Smartphone}
                  title="Samsung Galaxy S21 5G – Phantom Gray"
                  newPrice={1999.99}
                  // no originalPrice or discount, so no percentOff
                />
              </div>
              <div className="col-span-4 row-start-2 text-center">
                ARROW ARROW
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DashboardPage;
