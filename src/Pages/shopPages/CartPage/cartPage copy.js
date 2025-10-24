import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import Footer from "../../../Components/HomePage/Footer/Footer";
import BlackFriday from "../../../Components/HomePage/BlackFriday/BlackFriday";
import Header from "../../../Components/HomePage/Header/Header";
import Categories from "../../../Components/HomePage/Categories/Categories";
import appleairpods from "../../../assets/misc/airpods.webp";
import xaomiairpods from "../../../assets/misc/AIRPHONESXAOMI.svg";
import IMAC from "../../../assets/misc/IMAC.png";
const initialProducts = [
    {
        id: 1,
        name: "Bose Sport Earbuds - Wireless Earphones",
        price: 199.99,
        image: appleairpods,
        quantity: 1,
    },
    {
        id: 2,
        name: "Xiaomi Airphones - High Fidelity Audio",
        price: 220.0,
        image: xaomiairpods,
        quantity: 1,
    },
    {
        id: 3,
        name: "Apple iMac 24-inch (2023) with M3 Chip",
        price: 1299.0,
        image: IMAC,
        quantity: 1,
    },
];
const ShoppingCartPage = () => {
    const [cart, setCart] = useState(initialProducts);
    const [coupon, setCoupon] = useState("");
    const [discount, setDiscount] = useState(0);
    const handleRemove = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };
    const handleQuantityChange = (id, delta) => {
        setCart((prevCart) => prevCart.map((item) => item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + delta) }
            : item));
    };
    const getSubtotal = (item) => (item.price * item.quantity).toFixed(2);
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const tax = subtotal * 0.1; // Example: 10% tax
    const shipping = 0; // Free shipping
    const total = subtotal + tax - discount;
    const applyCoupon = () => {
        if (coupon.toLowerCase() === "save10") {
            setDiscount(10);
        }
        else {
            setDiscount(0);
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx(BlackFriday, {}), _jsx(Header, {}), _jsx(Categories, {}), _jsx("div", { className: "mx-auto max-w-screen-xl my-12 px-4", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [_jsxs("div", { className: "md:col-span-2 border border-gray-200 p-6 rounded-lg overflow-x-auto", children: [_jsx("h1", { className: "text-2xl font-semibold mb-4", children: "Shopping Cart" }), _jsxs("table", { className: "w-full table-auto border-collapse", children: [_jsx("thead", { className: "bg-gray-100 border-b", children: _jsxs("tr", { children: [_jsx("th", { className: "text-left p-4", children: "Remove" }), _jsx("th", { className: "text-left p-4", children: "Product" }), _jsx("th", { className: "text-left p-4", children: "Price" }), _jsx("th", { className: "text-left p-4", children: "Quantity" }), _jsx("th", { className: "text-left p-4", children: "Subtotal" })] }) }), _jsx("tbody", { children: cart.map((item) => (_jsxs("tr", { className: "border-b", children: [_jsx("td", { className: "p-4", children: _jsx("button", { className: "text-red-500 hover:text-red-700 font-bold", onClick: () => handleRemove(item.id), children: "\u00D7" }) }), _jsx("td", { className: "p-4", children: _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("img", { src: item.image, alt: item.name, className: "w-16 h-16 object-contain" }), _jsx("span", { className: "text-sm font-medium", children: item.name })] }) }), _jsxs("td", { className: "p-4", children: ["$", item.price.toFixed(2)] }), _jsx("td", { className: "p-4", children: _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("button", { onClick: () => handleQuantityChange(item.id, -1), className: "px-2 py-1 border rounded hover:bg-gray-200", children: "\u2212" }), _jsx("span", { className: "w-8 text-center", children: item.quantity }), _jsx("button", { onClick: () => handleQuantityChange(item.id, 1), className: "px-2 py-1 border rounded hover:bg-gray-200", children: "+" })] }) }), _jsxs("td", { className: "p-4 font-semibold", children: ["$", getSubtotal(item)] })] }, item.id))) })] })] }), _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "border border-gray-200 p-6 rounded-lg", children: [_jsx("h2", { className: "text-lg font-semibold mb-4", children: "Cart Totals" }), _jsxs("div", { className: "space-y-2 text-sm", children: [_jsxs("p", { className: "flex justify-between", children: ["Sub-total: ", _jsxs("span", { children: ["$", subtotal.toFixed(2)] })] }), _jsxs("p", { className: "flex justify-between", children: ["Shipping: ", _jsx("span", { children: "Free" })] }), _jsxs("p", { className: "flex justify-between", children: ["Discount: ", _jsxs("span", { children: ["$", discount.toFixed(2)] })] }), _jsxs("p", { className: "flex justify-between", children: ["Tax (10%): ", _jsxs("span", { children: ["$", tax.toFixed(2)] })] })] }), _jsx("hr", { className: "my-4" }), _jsxs("h1", { className: "text-lg font-semibold flex justify-between", children: ["Total: ", _jsxs("span", { children: ["$", total.toFixed(2)] })] }), _jsx("button", { className: "w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg", children: "Proceed to Checkout" })] }), _jsxs("div", { className: "border border-gray-200 p-6 rounded-lg", children: [_jsx("h2", { className: "text-lg font-semibold mb-4", children: "Apply Coupon" }), _jsx("label", { className: "block mb-2 text-sm font-medium text-gray-900", children: "Coupon Code" }), _jsx("input", { type: "text", value: coupon, onChange: (e) => setCoupon(e.target.value), className: "w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500", placeholder: "Enter your coupon code" }), _jsx("button", { onClick: applyCoupon, className: "w-full mt-4 bg-gray-800 text-white px-4 py-2 rounded-lg", children: "Apply" })] })] })] }) }), _jsx(Footer, {})] }));
};
export default ShoppingCartPage;
