import React from "react";
import Footer from "../../../Components/HomePage/Footer/Footer";
import BlackFriday from "../../../Components/HomePage/BlackFriday/BlackFriday";
import Header from "../../../Components/HomePage/Header/Header";
import Categories from "../../../Components/HomePage/Categories/Categories";
import appleairpods from "../../../assets/misc/airpods.webp";
import xaomiairpods from "../../../assets/misc/AIRPHONESXAOMI.svg";
import IMAC from "../../../assets/misc/IMAC.png";
import WishListPageComponent from "../../../Pages/shopPages/WishListPage/wishListPageComponent";
import EarBuds from "../../../assets/misc/airpods.webp";

const WishListPage = () => {
  return (
    <>
      <BlackFriday />
      <Header />
      <Categories />

      <div className="max-w-screen-xl mx-auto px-6 my-10">
       <WishListPageComponent imgValue={EarBuds} itemdescription={"Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear Headphones for Workouts and Running, Triple Black"} priceTotal={399.99} stockStatus={"In Stock"}/>
      </div>

      <Footer />
    </>
  );
};

export default WishListPage;
