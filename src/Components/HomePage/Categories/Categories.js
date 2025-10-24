import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Track from "../../../assets/Categories/MapPinLine.svg";
import Compare from "../../../assets/Categories/ArrowsCounterClockwise.svg";
import CustomerSupport from "../../../assets/Categories/Headphones.svg";
import Help from "../../../assets/Categories/Info.svg";
import Phone from "../../../assets/Categories/PhoneCall.svg";
import SmartPhoneMenu from "./menus/SmartPhoneMenu";
import ComputerLaptopMenu from "./menus/ComputerLaptopMenu";
const MenuCategories = [
    {
        title: 'Computer & Laptop',
        menu: _jsx(ComputerLaptopMenu, {})
    },
    {
        title: 'Computer Accessories',
        menu: _jsx("div", { children: "Computer Accessories" })
    },
    {
        title: 'Smart Phone',
        menu: _jsx(SmartPhoneMenu, {})
    },
    {
        title: 'Headphones',
        menu: _jsx("div", { children: "Headphones" })
    },
    {
        title: 'Mobile Accessories',
        menu: _jsx("div", { children: "Mobile Accessories" })
    },
    {
        title: 'Gaming Console',
        menu: _jsx("div", { children: "Gaming Console" })
    },
    {
        title: 'Camera & Photo',
        menu: _jsx("div", { children: "Camera & Photo" })
    },
    {
        title: 'TV & Home Accessories',
        menu: _jsx("div", { children: "TV & Home Accessories" })
    },
    {
        title: 'Waches & Accessories',
        menu: _jsx("div", { children: "Waches & Accessories" })
    },
    {
        title: 'GPS & Navigation',
        menu: _jsx("div", { children: "GPS & Navigation" })
    },
    {
        title: 'Warable Techology',
        menu: _jsx("div", { children: "Warable Techology" })
    }
];
const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [activeMenu, setActiveMenu] = useState(null);
    // Close dropdown if click happens outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current &&
                !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        if (isOpen) {
            document.addEventListener("click", handleClickOutside);
        }
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isOpen]);
    return (_jsxs("div", { ref: dropdownRef, className: "relative", children: [_jsxs("button", { onClick: () => setIsOpen(!isOpen), className: "flex items-center gap-2 text-gray-500", children: ["Categories", _jsx("span", { className: "text-gray-200", children: isOpen ? "▲" : "▼" })] }), isOpen && (_jsxs(_Fragment, { children: [_jsx("div", { className: "absolute top-full z-100 left-0 mt-2 w-72 bg-white border shadow-md rounded hover:text-gray-300 cursor-pointer ", children: _jsx("ul", { className: "flex flex-col", children: MenuCategories.map(cat => _jsx("li", { className: "px-4 py-2 hover:bg-gray-100", onMouseOver: () => setActiveMenu(cat.menu), children: cat.title }, cat.title)) }) }), _jsx("div", { className: "absolute top-full z-100  left-75 mt-2 h-111 w-220  bg-white border shadow-md rounded hover:text-gray-300 cursor-pointer ", children: activeMenu ?? false })] }))] }));
};
const Categories = () => {
    return (_jsx("section", { className: "w-full bg-white border-b border-gray-200  max-w-screen-xl mx-auto px-6 lex items-center", children: _jsxs("div", { className: "max-w-screen-xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-4", children: [_jsxs("div", { className: "flex flex-col sm:flex-row items-center gap-4 sm:gap-8 w-full", children: [_jsx(Dropdown, {}), _jsxs("nav", { className: "flex flex-wrap gap-x-6 gap-y-2 items-center text-gray-500 text-sm uppercase", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(NavLink, { to: "/TrackOrderPage", className: "hover:text-gray-400", children: "Track Order" }), _jsx("img", { src: Track, alt: "track", className: "w-4 h-4" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(NavLink, { to: "/ComparePage", className: "hover:text-gray-400", children: "Compare" }), _jsx("img", { src: Compare, alt: "compare", className: "w-4 h-4" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(NavLink, { to: "/FaqPage", className: "hover:text-gray-400", children: "FAQ" }), _jsx("img", { src: CustomerSupport, alt: "faq", className: "w-4 h-4" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(NavLink, { to: "/customerSupportPage", className: "hover:text-gray-400", children: "Need Help?" }), _jsx("img", { src: Help, alt: "help", className: "w-4 h-4" })] })] })] }), _jsxs("div", { className: "text-center sm:text-right w-full sm:w-auto flex justify-between ", children: [_jsx("img", { src: Phone, alt: "", className: "size-8" }), _jsx("h1", { className: "text-base sm:text-lg font-semibold", children: "+1-202-555-0104" })] })] }) }));
};
export default Categories;
