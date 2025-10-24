import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
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
    const langRef = useRef(null);
    const curRef = useRef(null);
    useEffect(() => {
        const handler = (e) => {
            if (langRef.current &&
                !langRef.current.contains(e.target) &&
                curRef.current &&
                !curRef.current.contains(e.target)) {
                setLanguageOpen(false);
                setCurrencyOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);
    return (_jsx("header", { className: "w-full bg-teal-900 text-white z-40", children: _jsxs("div", { className: "max-w-screen-xl mx-auto px-4 py-4 flex flex-col gap-4", children: [_jsxs("div", { className: "flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-6", children: [_jsx("p", { className: "text-sm sm:text-base text-center sm:text-left", children: "Welcome to Tech Online eCommerce store" }), _jsxs("div", { className: "flex flex-wrap items-center justify-center gap-3 sm:gap-4", children: [_jsx("p", { className: "hidden sm:block", children: "Follow Us:" }), _jsx("div", { className: "flex gap-2", children: [Twitter, Facebook, Pintrest, Reddit, Youtube, Instagram].map((icon, i) => (_jsx("img", { src: icon, alt: "social", className: "w-5 h-5 hover:scale-110 transition-transform cursor-pointer" }, i))) }), _jsx("span", { className: "hidden sm:block text-white text-lg mx-2", children: "|" }), _jsxs("div", { className: "relative", ref: langRef, children: [_jsxs("button", { onClick: () => setLanguageOpen(!languageOpen), className: "flex items-center gap-1 hover:opacity-80", children: [selectedLanguage, " ", _jsx("span", { children: "\u25BC" })] }), languageOpen && (_jsx("div", { className: "absolute right-0 mt-1 bg-white text-black p-2 rounded shadow-md z-50", children: ["ENG", "SPA", "FRA"].map((lang) => (_jsx("p", { onClick: () => {
                                                    setSelectedLanguage(lang);
                                                    setLanguageOpen(false);
                                                }, className: "cursor-pointer hover:bg-gray-100 px-2 py-1", children: lang }, lang))) }))] }), _jsxs("div", { className: "relative", ref: curRef, children: [_jsxs("button", { onClick: () => setCurrencyOpen(!currencyOpen), className: "flex items-center gap-1 hover:opacity-80", children: [selectedCurrency, " ", _jsx("span", { children: "\u25BC" })] }), currencyOpen && (_jsx("div", { className: "absolute right-0 mt-1 bg-white text-black p-2 rounded shadow-md z-50", children: ["USD", "EUR", "GBP"].map((cur) => (_jsx("p", { onClick: () => {
                                                    setSelectedCurrency(cur);
                                                    setCurrencyOpen(false);
                                                }, className: "cursor-pointer hover:bg-gray-100 px-2 py-1", children: cur }, cur))) }))] })] })] }), _jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-4", children: [_jsx(Link, { to: "/", children: _jsx("img", { src: Logo, alt: "Logo", className: "w-32 sm:w-40" }) }), _jsx("div", { className: "w-full sm:max-w-lg bg-white", children: _jsx("input", { type: "text", placeholder: "Search...", className: "w-full p-2 sm:p-3 rounded-lg text-black shadow focus:outline-none" }) }), _jsxs("div", { className: "flex gap-4 sm:gap-6", children: [_jsx(Link, { to: "/cartPage", children: _jsx("button", { className: "relative cursor-pointer hover:invert", children: _jsx("img", { src: CartIcon, alt: "Cart", className: "w-7 h-7 sm:w-8 sm:h-8" }) }) }), _jsx(Link, { to: "/WishListPage", children: _jsxs("button", { className: "relative cursor-pointer ", children: [_jsx("img", { src: LikedIcon, alt: "Liked", className: "w-7 h-7 sm:w-8 sm:h-8 hover:invert" }), _jsx("span", { className: "absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1", children: "5" })] }) }), _jsx(Link, { to: "/dashboardPage", children: _jsx("button", { className: " cursor-pointer hover:invert", children: _jsx("img", { src: ProfileIcon, alt: "Profile", className: "w-7 h-7 sm:w-8 sm:h-8 rounded-full" }) }) })] })] })] }) }));
};
export default Header;
