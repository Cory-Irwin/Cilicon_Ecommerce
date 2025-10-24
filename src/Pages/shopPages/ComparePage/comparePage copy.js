import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import samsung from '../../../assets/misc/iphone.png';
import keyboard from '../../../assets/misc/keyboard.png';
import IMAC from '../../../assets/misc/IMAC.png';
import Footer from '../../../Components/HomePage/Footer/Footer';
import BlackFriday from '../../../Components/HomePage/BlackFriday/BlackFriday';
import Header from '../../../Components/HomePage/Header/Header';
import Categories from '../../../Components/HomePage/Categories/Categories';
const products = [
    {
        id: 1,
        image: "https://via.placeholder.com/150", // Replace with actual image
        name: "Gamdias ARES M2 Gaming Keyboard, Mouse and Mouse Mat Combo",
        price: "$899.00",
        brand: "Gamdias",
        stock: "IN STOCK",
        weight: "650 g (2.44 oz)",
        rating: 4.5,
    },
    {
        id: 2,
        image: "https://via.placeholder.com/150",
        name: "Apple iMac 24” 4K Retina Display M1 8-Core CPU, 256GB SSD",
        price: "$1,699.00",
        brand: "Apple",
        stock: "IN STOCK",
        weight: "240 g (8.47 oz)",
        rating: 4.7,
    },
    {
        id: 3,
        image: "https://via.placeholder.com/150",
        name: "Samsung Galaxy S21 FE 5G 128GB 120Hz Display",
        price: "$699.99",
        brand: "Samsung",
        stock: "OUT OF STOCK",
        weight: "177 g (6.24 oz)",
        rating: 4.6,
    },
];
const ComparePage = () => {
    return (_jsxs(_Fragment, { children: [_jsx(BlackFriday, {}), _jsx(Header, {}), _jsx(Categories, {}), _jsxs("div", { className: "relative z-10 bg-white text-black max-w-screen-xl mx-auto px-4 p-10 mt-0", children: [_jsx("h2", { className: "text-2xl font-semibold text-center mb-6", children: "Compare Products" }), _jsxs("div", { className: "grid grid-cols-4   border border-gray-300 rounded-lg shadow-lg p-4", children: [_jsx("div", { className: "font-bold p-4 shadow-md" }), _jsxs("div", { className: "font-bold p-4 shadow-md text-center flex justify-center flex-col items-center", children: [_jsx("img", { src: keyboard, className: "w-50 h-50" }), _jsx("p", { children: "Gamdias ARES M2 Gaming Keyboard, Mouse and Mouse Mat Combo" }), _jsx("div", { className: "bg-blue-400 p-2 w-30 h-10 flex justify-center items-center", children: _jsx("button", { children: "Add to Cart" }) })] }), _jsxs("div", { className: "font-bold p-4 shadow-md text-center flex justify-center flex-col items-center", children: [_jsx("img", { src: IMAC, className: "w-50 h-50", alt: "" }), _jsx("p", { children: "Gamdias ARES M2 Gaming Keyboard, Mouse and Mouse Mat Combo" }), _jsx("div", { className: "bg-blue-400 p-2 w-30 h-10 flex justify-center items-center", children: _jsx("button", { children: "Add to Cart" }) })] }), _jsxs("div", { className: "font-bold p-4 shadow-md text-center flex justify-center flex-col items-center", children: [_jsx("img", { src: samsung, className: "w-50 h-50", alt: "" }), _jsx("p", { children: "Gamdias ARES M2 Gaming Keyboard, Mouse and Mouse Mat Combo" }), _jsx("div", { className: "bg-blue-400 p-2 w-30 h-10 flex justify-center items-center", children: _jsx("button", { children: "Add to Cart" }) })] }), _jsx("div", { className: "p-4 font-semibold bg-gray-100", children: "Customer Feedback:" }), _jsx("div", { className: "p-4 text-center bg-gray-100" }), _jsx("div", { className: "p-4 text-center bg-gray-100" }), _jsx("div", { className: "p-4 text-center bg-gray-100" }), _jsx("div", { className: "p-4 font-semibold ", children: "Price" }), _jsx("div", { className: "p-4 text-center ", children: "$899.00" }), _jsx("div", { className: "p-4 text-center ", children: "$1,699.00" }), _jsx("div", { className: "p-4 text-center ", children: "$699.99" }), _jsx("div", { className: "p-4 font-semibold bg-gray-100", children: "Brand" }), _jsx("div", { className: "p-4 text-center bg-gray-100", children: "Gamdias" }), _jsx("div", { className: "p-4 text-center bg-gray-100", children: "Apple" }), _jsx("div", { className: "p-4 text-center bg-gray-100", children: "Samsung" }), _jsx("div", { className: "p-4 font-semibold ", children: "Model" }), _jsx("div", { className: "p-4 text-center ", children: "Iphone" }), _jsx("div", { className: "p-4 text-center ", children: "Xaomi" }), _jsx("div", { className: "p-4 text-center", children: "Samsung" }), _jsx("div", { className: "p-4 font-semibold bg-gray-100", children: "Stock" }), _jsx("div", { className: "p-4 text-center bg-gray-100 text-green-500", children: "IN STOCK" }), _jsx("div", { className: "p-4 text-center bg-gray-100 text-green-500", children: "IN STOCK" }), _jsx("div", { className: "p-4 text-center bg-gray-100 text-red-500", children: "OUT OF STOCK" }), _jsx("div", { className: "p-4 font-semibold ", children: "Size" }), _jsx("div", { className: "p-4 text-center", children: "12x12x2" }), _jsx("div", { className: "p-4 text-center", children: "24x25.1x3" }), _jsx("div", { className: "p-4 text-center", children: "19x2x24" }), _jsx("div", { className: "p-4 font-semibold bg-gray-100", children: "Weight" }), _jsx("div", { className: "p-4 text-center bg-gray-100", children: "650 g" }), _jsx("div", { className: "p-4 text-center bg-gray-100", children: "240 g" }), _jsx("div", { className: "p-4 text-center bg-gray-100", children: "177 g" })] })] }), _jsx(Footer, {})] }));
};
export default ComparePage;
