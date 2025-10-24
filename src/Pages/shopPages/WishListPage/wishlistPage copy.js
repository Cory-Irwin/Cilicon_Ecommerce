import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Footer from "../../../Components/HomePage/Footer/Footer";
import BlackFriday from "../../../Components/HomePage/BlackFriday/BlackFriday";
import Header from "../../../Components/HomePage/Header/Header";
import Categories from "../../../Components/HomePage/Categories/Categories";
import appleairpods from "../../../assets/misc/airpods.webp";
import xaomiairpods from "../../../assets/misc/AIRPHONESXAOMI.svg";
import IMAC from "../../../assets/misc/IMAC.png";
const products = [
    {
        name: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear Headphones for Workouts and Running, Triple Black",
        originalPrice: "$249.99",
        price: "$199.99",
        stock: "In Stock",
        brand: "Apple",
        image: appleairpods,
        minOrder: 1,
        maxOrder: 5,
    },
    {
        name: "Xiaomi Airphones - High Fidelity Audio, Long Battery Life, Ergonomic Fit for Extended Use",
        originalPrice: "$250.00",
        price: "$220.00",
        stock: "Out of Stock",
        brand: "Xiaomi",
        image: xaomiairpods,
        minOrder: 1,
        maxOrder: 3,
    },
    {
        name: "Apple iMac 24-inch (2023) with M3 Chip, 4.5K Retina Display - Blue",
        originalPrice: "$1,499.00",
        price: "$1,299.00",
        stock: "In Stock",
        brand: "Apple",
        image: IMAC,
        minOrder: 1,
        maxOrder: 2,
    },
];
const WishListPage = () => {
    return (_jsxs(_Fragment, { children: [_jsx(BlackFriday, {}), _jsx(Header, {}), _jsx(Categories, {}), _jsxs("div", { className: "max-w-screen-xl mx-auto px-6 my-10", children: [_jsx("h1", { className: "text-2xl font-bold mb-6", children: "Wishlist" }), _jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "w-full table-auto border-collapse", children: [_jsx("thead", { className: "bg-gray-100 border-b", children: _jsxs("tr", { children: [_jsx("th", { className: "text-left p-4 w-1/3", children: "Product" }), _jsx("th", { className: "text-left p-4", children: "Price" }), _jsx("th", { className: "text-left p-4", children: "Stock" }), _jsx("th", { className: "text-left p-4", children: "Quantity" }), _jsx("th", { className: "text-center p-4", children: "Action" })] }) }), _jsx("tbody", { children: products.map((item, index) => (_jsxs("tr", { className: "border-b", children: [_jsx("td", { className: "p-4", children: _jsxs("div", { className: "flex gap-4 items-start", children: [_jsx("img", { src: item.image, alt: item.name, className: "w-16 h-16 object-contain flex-shrink-0" }), _jsx("span", { className: "text-sm break-words", children: item.name })] }) }), _jsxs("td", { className: "p-4", children: [_jsx("span", { className: "text-gray-400 line-through mr-2", children: item.originalPrice }), _jsx("span", { className: "font-bold", children: item.price })] }), _jsx("td", { className: "p-4", children: _jsx("span", { className: item.stock === "In Stock"
                                                        ? "text-green-600 font-semibold"
                                                        : "text-red-500 font-semibold", children: item.stock }) }), _jsx("td", { className: "p-4", children: item.stock === "In Stock" ? (_jsx("input", { type: "number", min: item.minOrder, max: item.maxOrder, defaultValue: item.minOrder, className: "border px-2 py-1 rounded w-20" })) : (_jsx("span", { className: "text-gray-400", children: "\u2014" })) }), _jsx("td", { className: "p-4 text-center", children: _jsx("button", { className: `px-6 py-2 font-semibold text-white rounded-md ${item.stock === "In Stock"
                                                        ? "bg-teal-900 hover:bg-teal-700"
                                                        : "bg-gray-400 cursor-not-allowed"}`, disabled: item.stock !== "In Stock", children: "Add to Cart \uD83D\uDED2" }) })] }, index))) })] }) })] }), _jsx(Footer, {})] }));
};
export default WishListPage;
