import Footer from "../../Components/HomePage/Footer/Footer";
import Categories from "../../Components/HomePage/Categories/Categories";
import Header from "../../Components/HomePage/Header/Header";
import BlackFriday from "../../Components/HomePage/BlackFriday/BlackFriday";
import icon1 from "../../assets/CustomerSupport/icon1.svg";
import icon2 from "../../assets/CustomerSupport/icon2.svg";
import Truck from "../../assets/CustomerSupport/Truck.svg";
import LockOpen from "../../assets/CustomerSupport/LockOpen.svg";
import CreditCard from "../../assets/CustomerSupport/CreditCard.svg";
import User from "../../assets/CustomerSupport/User.svg";
import Stack from "../../assets/CustomerSupport/Stack.svg";
import Storefront from "../../assets/CustomerSupport/Storefront.svg";
import Notepad from "../../assets/CustomerSupport/Notepad.svg";
import Penguin from "../../assets/PenguinCrew/penguin2.jpg";
import MagGlass from "../../assets/ShopPage/MagnifyingGlass.svg";
import Arrow from "../../assets/Arrows/ArrowRightWhite.svg"

const customerSupport = () => {
  return (
    <>
      <BlackFriday />
      <Header />
      <Categories />

      <div className="mx-auto max-w-screen-xl  my-20 px-4 ">
        <div className="flex justify-between">
          <div className="">
            <div className="bg-yellow-400 w-35 font-semibold text-center p-2">
              <h1>HELP CENTER</h1>
            </div>
            <h1 className="text-4xl font-bold mt-5">How we can help you!</h1>
            <div className=" flex relative mt-5 h-15 flex-row gap-6">
              <input
                type="text"
                placeholder="Search brands..."
                className="w-150 px-12 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <div className="bg-teal-900 p-3 top-1.5 hover:bg-teal-500 absolute text-white right-1.5">
                SEARCH
              </div>
              <div className="absolute left-5 top-5 h-15 w-auto">
                <img src={MagGlass} alt="" />
              </div>
            </div>
          </div>

          <div></div>
          <div>
            <img src={Penguin} alt="" className="w-auto h-100" />
          </div>
        </div>

        <div className="grid grid-cols-4 grid-rows-3 gap-4   ">
          <div className="col-span-4 ">
            <h1 className="flex justify-center text-4xl ">
              What can we assist you with today?
            </h1>
          </div>
          <div className=" mt-10 flex col row-start-2 border-1 gap-4 p-4 hover:border-2 hover:border-teal-900 border-gray-100">
            <div className="flex justify-center items-center ">
              <img
                src={Truck}
                className="rounded-full h-10 w-auto   flex"
                alt=""
              />
            </div>
            <div className="text-center flex items-center justify-items-center">
              <h1 className="">Track Order</h1>
            </div>
          </div>
          <div className=" flex col row-start-2 border-1 gap-4 p-4 hover:border-2 hover:border-teal-900 border-gray-100">
            <div className="flex justify-center items-center ">
              <img
                src={LockOpen}
                className="rounded-full h-10 w-auto   flex"
                alt=""
              />
            </div>
            <div className="text-center flex items-center justify-items-center">
              <h1 className="">Reset Password</h1>
            </div>
          </div>
          <div className=" flex col row-start-2 border-1 gap-4 p-4 hover:border-2 hover:border-teal-900 border-gray-100">
            <div className="flex justify-center items-center ">
              <img
                src={CreditCard}
                className="rounded-full h-10 w-auto   flex"
                alt=""
              />
            </div>
            <div className="text-center flex items-center justify-items-center">
              <h1 className="">Payment Options</h1>
            </div>
          </div>
          <div className=" flex col row-start-2 border-1 gap-4 p-4 hover:border-2 hover:border-teal-900 border-gray-100">
            <div className="flex justify-center items-center ">
              <img
                src={User}
                className="rounded-full h-10 w-auto   flex"
                alt=""
              />
            </div>
            <div className="text-center flex items-center justify-items-center">
              <h1 className="">User & Account</h1>
            </div>
          </div>
          <div className=" flex col row-start-3 border-1 gap-4 p-4 hover:border-2 hover:border-teal-900 border-gray-100">
            <div className="flex justify-center items-center ">
              <img
                src={Stack}
                className="rounded-full h-10 w-auto   flex"
                alt=""
              />
            </div>
            <div className="text-center flex items-center justify-items-center">
              <h1 className="">Wishlist & Compare</h1>
            </div>
          </div>
          <div className=" flex col row-start-3 border-1 gap-4 p-4 hover:border-2 hover:border-teal-900 border-gray-100">
            <div className="flex justify-center items-center ">
              <img
                src={Notepad}
                className="rounded-full h-10 w-auto   flex"
                alt=""
              />
            </div>
            <div className="text-center flex items-center justify-items-center">
              <h1 className="">Shipping & Billing</h1>
            </div>
          </div>{" "}
          <div className=" flex col row-start-3 border-1 gap-4 p-4 hover:border-2 hover:border-teal-900 border-gray-100">
            <div className="flex justify-center items-center ">
              <img
                src={CreditCard}
                className="rounded-full h-10 w-auto   flex"
                alt=""
              />
            </div>
            <div className="text-center flex items-center justify-items-center">
              <h1 className="">Shopping Cart & Wallet</h1>
            </div>
          </div>{" "}
          <div className=" flex col row-start-3 border-1 gap-4 p-4 hover:border-2 hover:border-teal-900 border-gray-100">
            <div className="flex justify-center items-center ">
              <img
                src={Storefront}
                className="rounded-full h-10 w-auto   flex"
                alt=""
              />
            </div>
            <div className="text-center flex items-center justify-items-center">
              <h1 className="">Sell On AppyCon</h1>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3  grid-rows-2 gap-4">
          <div className="col-span-3">
            <div className="flex text-center text-4xl justify-center mt-10 py-20">
              <h1>Popular Topics</h1>
            </div>
          </div>
          <div className="row-start-2 text-xl text-gray-600">
            <p className="">• How do I return my item?</p>
            <p className="mt-5">• What is Clicons Returns Policy?</p>
            <p className="mt-5">• How long is the refund process?</p>
          </div>
          <div className="row-start-2  text-xl text-gray-600">
            <p className="">• What are the 'Delivery Timelines'?</p>
            <p className="mt-5">
              • What is 'Discover Your Daraz Campaign 2022'?
            </p>
            <p className="mt-5">
              • What is the Voucher & Gift Offer in this Campaign?
            </p>
          </div>
          <div className="row-start-2 text-xl text-gray-600">
            <p>• How to cancel Clicon Order.</p>
            <p className="mt-5">• Ask the Digital and Device Community</p>
            <p className="mt-5">• How to change my shop name?</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 p-12 ">
        <div>
          <div className="mx-auto max-w-screen-xl  my-20 px-4 ">
            <div className="flex justify-center  flex-col  items-center">
              <div className="bg-blue-500 p-2 text-white text-center  w-35">
                <h1>CONTACT US</h1>
              </div>
              <div className=" text-4xl font-semibold text-center mt-5">
                <div className="">
                  <h1>Didn't find your answer?</h1>
                </div>
                <div className="">
                  <h1>Get In contact</h1>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 grid-rows-1 mt-10 gap-24">
              <div className="bg-white p-6">
                <div className="flex flex-row gap-4">
                  <div>
                    <img src={icon2} alt="" className="h-auto w-30" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-semibold">Call Us now</h1>
                    <p className="text-gray-600 mt-2">
                      We are available online from 9:00 AM to 5:00 PM (GMT95:45)
                      Talk with use now
                    </p>
                    <div>
                      <p className="mt-2 text-3xl font-semibold">+1-202-555-0126</p>
                    </div>
                   <div className="flex flex-row gap-2 relative">
                      <button className="bg-teal-900 mt-2 text-white p-4 w-60 hover:bg-teal-500 text-xl"><div className="flex flex-row gap-6 items-center justify-center text-center"><div>CALL NOW</div><div><img src={Arrow} alt=""  /></div></div></button>
                 
                    </div>
                  </div>{" "}
                </div>
              </div>

              <div className="bg-white p-6">
                <div className="flex flex-row gap-4">
                  <div>
                    <img src={icon1} alt="" className="h-auto w-30" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-semibold">Chat with Us </h1>
                    <p className="text-gray-600 mt-2">
                      We are available online from 9:00 AM to 5:00 PM (GMT95:45)
                      Talk with use now
                    </p>
                    <div>
                      <p className="mt-2 text-3xl font-semibold">Support@appycon.com</p>
                    </div>
                    <div className="flex flex-row gap-2 relative">
                      <button className="bg-teal-500 mt-2 text-white p-4 w-60 hover:bg-teal-900 text-xl"><div className="flex flex-row gap-6 items-center justify-center text-center"><div>CALL NOW</div><div><img src={Arrow} alt=""  /></div></div></button>
                 
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
      <Footer />
    </>
  );
};

export default customerSupport;
