import React, { useState, useEffect, useRef } from "react";
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
import { Link } from "react-router-dom";

const Header = () => {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("ENG");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  // Close dropdown if clicked outside
  const langRef = useRef<HTMLDivElement>(null);
  const curRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        langRef.current &&
        !langRef.current.contains(e.target as Node) &&
        curRef.current &&
        !curRef.current.contains(e.target as Node)
      ) {
        setLanguageOpen(false);
        setCurrencyOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="w-full bg-teal-900 text-white z-40">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex flex-col gap-4">
        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-6">
          {/* Left */}
          <p className="text-sm sm:text-base text-center sm:text-left">
            Welcome to Tech Online eCommerce store
          </p>

          {/* Right */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <p className="hidden sm:block">Follow Us:</p>
            <div className="flex gap-2">
              {[Twitter, Facebook, Pintrest, Reddit, Youtube, Instagram].map(
                (icon, i) => (
                  <img
                    key={i}
                    src={icon}
                    alt="social"
                    className="w-5 h-5 hover:scale-110 transition-transform cursor-pointer"
                  />
                )
              )}
            </div>

            <span className="hidden sm:block text-white text-lg mx-2">|</span>

            {/* Language */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLanguageOpen(!languageOpen)}
                className="flex items-center gap-1 hover:opacity-80"
              >
                {selectedLanguage} <span>&#9660;</span>
              </button>
              {languageOpen && (
                <div className="absolute right-0 mt-1 bg-white text-black p-2 rounded shadow-md z-50">
                  {["ENG", "SPA", "FRA"].map((lang) => (
                    <p
                      key={lang}
                      onClick={() => {
                        setSelectedLanguage(lang);
                        setLanguageOpen(false);
                      }}
                      className="cursor-pointer hover:bg-gray-100 px-2 py-1"
                    >
                      {lang}
                    </p>
                  ))}
                </div>
              )}
            </div>

            {/* Currency */}
            <div className="relative" ref={curRef}>
              <button
                onClick={() => setCurrencyOpen(!currencyOpen)}
                className="flex items-center gap-1 hover:opacity-80"
              >
                {selectedCurrency} <span>&#9660;</span>
              </button>
              {currencyOpen && (
                <div className="absolute right-0 mt-1 bg-white text-black p-2 rounded shadow-md z-50">
                  {["USD", "EUR", "GBP"].map((cur) => (
                    <p
                      key={cur}
                      onClick={() => {
                        setSelectedCurrency(cur);
                        setCurrencyOpen(false);
                      }}
                      className="cursor-pointer hover:bg-gray-100 px-2 py-1"
                    >
                      {cur}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-32 sm:w-40" />
          </Link>
          {/* Search Bar */}
          <div className="w-full sm:max-w-lg bg-white">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 sm:p-3 rounded-lg text-black shadow focus:outline-none"
            />
          </div>

          {/* Icons */}
          <div className="flex gap-4 sm:gap-6">
            <Link to="/cartPage">
              <button className="relative cursor-pointer hover:invert">
                <img
                  src={CartIcon}
                  alt="Cart"
                  className="w-7 h-7 sm:w-8 sm:h-8"
                />
              </button>
            </Link>
            <Link to="/WishListPage">
              <button className="relative cursor-pointer ">
                <img
                  src={LikedIcon}
                  alt="Liked"
                  className="w-7 h-7 sm:w-8 sm:h-8 hover:invert"
                />
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                  5
                </span>
              </button>
            </Link>
            <Link to="/dashboardPage">
              <button className=" cursor-pointer hover:invert">
                <img
                  src={ProfileIcon}
                  alt="Profile"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full"
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
