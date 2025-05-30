import Footer from "../../Components/HomePage/Footer/Footer";
import Categories from "../../Components/HomePage/Categories/Categories";
import Header from "../../Components/HomePage/Header/Header";
import BlackFriday from "../../Components/HomePage/BlackFriday/BlackFriday";
import PresidentBuisness from "../../assets/misc/presidentbuisness.svg";
import Banner from "../../assets/AboutUs/Banner.svg";
import Penguin1 from "../../assets/PenguinCrew/penguin.jpg";
import Penguin2 from "../../assets/PenguinCrew/penguin1.webp";
import Penguin3 from "../../assets/PenguinCrew/penguin2.jpg";
import Penguin4 from "../../assets/PenguinCrew/penguin3.jpg";
import Penguin5 from "../../assets/PenguinCrew/penguin4.jpg";
import Penguin6 from "../../assets/PenguinCrew/penguin5.png";
import Penguin7 from "../../assets/PenguinCrew/penguin6.jpg";
import Penguin8 from "../../assets/PenguinCrew/penguin7.webp";
import Ticks from "../../assets/AboutUs/Checks.svg";
import FlashSale from "../../Components/HomePage/FlashSale/Flashsale";
import Newsletter from "../../Components/HomePage/Newsletter/Newsletter";
import Play from "../../assets/AboutUs/Play.svg"
const aboutUsPage = () => {
  return (
    <>
      {" "}
      <BlackFriday />
      <Header />
      <Categories />
      <div className="mx-auto max-w-screen-xl my-20 px-4 ">
        <div className="grid grid-cols-2 grid-rows-1 gap-12">
          <div className="justify-center items-center  ">
            <div className="bg-teal-900 text-white w-35 rounded-md text-center p-2">
              <h1 className="">WHO WE ARE</h1>
            </div>
            <h1 className="text-4xl font-bold mt-5">
              AppyCon - Largest Electronics retail shop in the world
            </h1>
            <p className="mt-5 text-xl">
              At appys shop, you will recieve the best possible support when
              finding electronic items. You will be able to order and track all
              products at their fastest possible shipping.
            </p>
            <div className="flex flex-col mt-10 text-2xl gap-6">
              <div className="flex flex-row gap-2">
                <img src={Ticks} alt="" />
                <p>Great 24/7 Customer Service</p>
              </div>
              <div className="flex flex-row gap-2">
                <img src={Ticks} alt="" />
                <p>600+ Dedicated Employees</p>
              </div>
              <div className="flex flex-row gap-2">
                <img src={Ticks} alt="" />
                <p>60+ Branches Worldwide</p>
              </div>
              <div className="flex flex-row gap-2">
                <img src={Ticks} alt="" />
                <p>Over 1 Million Electronic Products</p>
              </div>
            </div>
          </div>

          <div className="flex flex-end justify-end">
            <img
              src={PresidentBuisness}
              alt=""
              className="w-175 flex flex-end h-auto"
            />
          </div>
        </div>
        <div>
          {" "}
          <div className="mt-30 ">
            <h1 className="flex justify-center  text-4xl">Our Core Team</h1>
          </div>
          <div className="flex flex-row gap-6 mt-10">
            <div>
              <div className="flex flex-row gap-2 border-2 border-gray-100 p-2 w-73.5 ">
                <div>
                  <img src={Penguin1} alt="" className="w-auto h-25" />
                </div>
                <div className="flex justify-center flex-col ">
                  <h1 className="font-bold text-sm">Appy Store</h1>
                  <h1 className=" text-gray-600 text-sm">Category Manager</h1>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-row gap-2 border-2 border-gray-100 p-2 w-73.5 ">
                <div>
                  <img src={Penguin2} alt="" className="w-auto h-25" />
                </div>
                <div className="flex justify-center flex-col ">
                  <h1 className="font-bold text-sm">Appy Store</h1>
                  <h1 className=" text-gray-600 text-sm">Category Manager</h1>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-row gap-2 border-2 border-gray-100 p-2 w-73.5 ">
                <div>
                  <img src={Penguin3} alt="" className="w-auto h-25" />
                </div>
                <div className="flex justify-center flex-col ">
                  <h1 className="font-bold text-sm">Appy Store</h1>
                  <h1 className=" text-gray-600 text-sm">Category Manager</h1>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-row gap-2 border-2 border-gray-100 p-2 w-73.5 ">
                <div>
                  <img src={Penguin4} alt="" className="w-auto h-25" />
                </div>
                <div className="flex justify-center flex-col ">
                  <h1 className="font-bold text-sm">Appy Store</h1>
                  <h1 className=" text-gray-600 text-sm">Category Manager</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-6 mt-10">
          <div>
            <div className="flex flex-row gap-2 border-2 border-gray-100 p-2 w-73.5 ">
              <div>
                <img src={Penguin5} alt="" className="w-auto h-25" />
              </div>
              <div className="flex justify-center flex-col ">
                <h1 className="font-bold text-sm">Appy Store</h1>
                <h1 className=" text-gray-600 text-sm">Category Manager</h1>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-row gap-2 border-2 border-gray-100 p-2 w-73.5 ">
              <div>
                <img src={Penguin6} alt="" className="w-auto h-25" />
              </div>
              <div className="flex justify-center flex-col ">
                <h1 className="font-bold text-sm">Appy Store</h1>
                <h1 className=" text-gray-600 text-sm">Category Manager</h1>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-row gap-2 border-2 border-gray-100 p-2 w-73.5 ">
              <div>
                <img src={Penguin7} alt="" className="w-auto h-25" />
              </div>
              <div className="flex justify-center flex-col ">
                <h1 className="font-bold text-sm">Appy Store</h1>
                <h1 className=" text-gray-600 text-sm">Category Manager</h1>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-row gap-2 border-2 border-gray-100 p-2 w-73.5 ">
              <div>
                <img src={Penguin8} alt="" className="w-auto h-25" />
              </div>
              <div className="flex justify-center flex-col ">
                <h1 className="font-bold text-sm">Appy Store</h1>
                <h1 className=" text-gray-600 text-sm">Category Manager</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="py-20">
          <div className="relative">
            <div className="absolute">
              <h1 className="absolute top-15 text-4xl font-semibold px-20">
                Your trusted and
              </h1>{" "}
              <h1 className="absolute top-25 text-4xl font-semibold px-20">
                reliable retail shop
              </h1>
              <img src={Banner} alt="" />
            </div>
            <div className="relative">
              <p className="absolute top-35 px-20">We have been functioning since 2005 as a highly
              </p>
              <p  className="absolute top-40 px-20"> professional retail deparment
                With several annual </p>
                <p  className="absolute top-45 px-20">awards for quality service and customer satisfaction. </p>
                <div className="bg-teal-900 hover:bg-teal-500 relative top-55 left-18 rounded-full h-15 w-15"><img src={Play} alt="" className="absolute top-4.5 left-4.5" /></div>
            </div>
          </div>
        </div>
        <div className="mt-70">
         
        </div>{" "}
      </div> <FlashSale />
          <Newsletter />
          <Footer />
    </>
  );
};

export default aboutUsPage;
