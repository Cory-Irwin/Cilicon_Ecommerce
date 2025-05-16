import React, { useState } from "react";
import SocialIcons from "../../assets/Social Icon.svg";
import ProfileIcon from "../../../assets/misc/User.svg";
import LikedIcon from "../../../assets/misc/Heart.svg";
import CartIcon from "../../../assets/misc/Cart.svg";
import Logo from "../../../assets/misc/Logo.svg";
import Twitter from "../../../assets/Header/Twitter.svg";
import Facebook from "../../../assets/Header/Facebook.svg";
import Pintrest from "../../../assets/Header/Pinterest.svg";
import Reddit from "../../../assets/Header/Reddit.svg";
import Youtube from "../../../assets/Header/Youtube.svg";
import Instagram from "../../../assets/Header/Instagram.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);

  return (
    <header className="w-full bg-teal-900 h-auto top-[40px] left-0 z-40">
      <div className="max-w-screen-xl mx-auto px-4 py-6 flex flex-col text-white">
        {/* Top Section: Welcome Text and Social Icons */}
        <div className="flex justify-between items-center mb-4">
          {/* Left Section: Welcome Text */}
          <div>
            <p className="text-left">Welcome to Appys Online eCommerce store</p>
          </div>

          {/* Right Section: Social Icons, Language and Currency Dropdowns */}
          <div className="flex items-center gap-4">
            {/* Social Icons */}
            <p className="flex-shrink-0">Follow Us:</p>
            <img src={Twitter} alt="Social icons" className="w-6" />
            <img src={Facebook} alt="Social icons" className="w-6" />
            <img src={Pintrest} alt="Social icons" className="w-6" />
            <img src={Reddit} alt="Social icons" className="w-6" />
            <img src={Youtube} alt="Social icons" className="w-6" />
            <img src={Instagram} alt="Social icons" className="w-6" />

            {/* Divider */}
            <span className="text-white text-2xl mx-2">|</span>

            {/* Language Dropdown (ENG) */}
            <div className="relative">
              <button
                onClick={() => setLanguageOpen(!languageOpen)}
                className="flex items-center gap-2 text-white cursor-pointer"
              >
                ENG <span>&#9660;</span>
              </button>
              {languageOpen && (
                <div className="absolute bg-white text-black p-2 rounded shadow-lg">
                  <p className="cursor-pointer">ENG</p>
                  <p className="cursor-pointer">SPA</p>
                  <p className="cursor-pointer">FRA</p>
                </div>
              )}
            </div>

            {/* Currency Dropdown (USD) */}
            <div className="relative">
              <button
                onClick={() => setCurrencyOpen(!currencyOpen)}
                className="flex items-center gap-2 text-white cursor-pointer"
              >
                USD <span>&#9660;</span>
              </button>
              {currencyOpen && (
                <div className="absolute bg-white text-black p-2 rounded shadow-lg">
                  <p className="cursor-pointer">USD</p>
                  <p className="cursor-pointer">EUR</p>
                  <p className="cursor-pointer">GBP</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Below the Top Section: Logo and Search Bar */}
        <div className="flex gap-40  my-auto">
          {/* Logo */}
          {/* Adjust the size of the logo */}

          <img src={Logo} alt="" className=" w-50" />

          {/* Search Bar */}
          <div className="max-w-2xl items-center  text-black bg-white flex mb-2">
            <input
              type="text"
              placeholder="Search..."
              className="w-150 p-3 items-center  space-evenly rounded-lg shadow-lg focus:outline-none"
            />
          </div>

          {/* Right Section: Cart, Liked Items, and Profile Icons */}
          <div className="flex justify-end w-full max-w-2xl gap-6">
            {/* Cart Icon */}
            <button className="relative">
              <img src={CartIcon} alt="Cart Icon" className="w-8 h-8" />
            </button>

            {/* Liked Items Icon */}
            <button className="relative">
              <img src={LikedIcon} alt="Liked Items" className="w-8 h-8" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                5
              </span>{" "}
              {/* Example count */}
            </button>

            {/* Profile Icon */}
            <button>
              <img
                src={ProfileIcon}
                alt="Profile Icon"
                className="w-8 h-8 rounded-full"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
