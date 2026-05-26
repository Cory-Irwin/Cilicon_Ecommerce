import React from "react";
import Footer from "../../Components/HomePage/Footer/Footer";
import Categories from "../../Components/HomePage/Categories/Categories";
import Header from "../../Components/HomePage/Header/Header";
import BlackFriday from "../../Components/HomePage/BlackFriday/BlackFriday";
import Error404 from "../../assets/ErrorPage/error404.jpg";
import WhiteArrow from "../../assets/Arrows/WhiteArrowLeft.svg";
import Home from "../../assets/Arrows/House.svg";
import { NavLink } from "react-router-dom";
const errorPage = () => {
  return (
    <>
      <BlackFriday />
      <Header />
      <Categories />
      <div className="mx-auto max-w-screen-xl   px-4 ">
        <div className="p-20">
          <div className="flex justify-center text-8xl items-center flex-col p-10">
            <img src={Error404} alt="" className="h-125 w-auto" />
            <h1 className="text-6xl">Error 404</h1>
          </div>
          <div className="justify-center flex margin-20">
            <p>
              Something went wrong. It’s look that your requested could not be
              found. It’s look like the link is broken or the page is removed.
            </p>
          </div>
          <div className="flex flex-row  items-center mt-10 justify-center gap-6">
            <button className="bg-teal-900 hover:bg-teal-400 text-xl p-10  text-white px-12 py-6 ">
              <div className="flex text-center justify-center items-center  flex-row gap-2">
                <img src={WhiteArrow} className="h-10 w-auto" alt="" />
               <div><NavLink to={"/"}><a href=""><h1 className="text-3xl">GO BACK</h1></a><NavLink/></NavLink></div>
              </div>
            </button>
          

          <button className="bg-teal-900 hover:bg-teal-400 text-xl p-10  text-white px-12 py-6 ">
            <div className="flex flex-row text-center justify-center items-center  gap-2">
              <div><img src={Home} className="h-12 w-auto top-1 relative" alt="" /></div>
              <div><NavLink to={"/"}><a href=""><h1 className="text-3xl">GO TO HOME</h1></a><NavLink/></NavLink></div>
            </div>
          </button>
        </div></div>
      </div>{" "}
      <Footer />
    </>
  );
};

export default errorPage;
