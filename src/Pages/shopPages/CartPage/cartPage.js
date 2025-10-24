import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import Header from "../../../Components/HomePage/Header/Header";
import Categories from "../../../Components/HomePage/Categories/Categories";
import Headphones from "../../../assets/misc/headphones.png";
const CartPage = () => {
    const [cart, setCart] = useState([
        {
            id: 1,
            title: "Wireless Headphones",
            image: Headphones,
            price: 59.99,
            quantity: 1,
        },
    ]);
    const [coupon, setCoupon] = useState("");
    const [subtotal, setSubtotal] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [tax, setTax] = useState(0);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        const newSubtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const newDiscount = coupon === "SAVE10" ? newSubtotal * 0.1 : 0;
        const newTax = (newSubtotal - newDiscount) * 0.1;
        const newTotal = newSubtotal - newDiscount + newTax;
        setSubtotal(newSubtotal);
        setDiscount(newDiscount);
        setTax(newTax);
        setTotal(newTotal);
    }, [cart, coupon]);
    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };
    const updateQuantity = (id, newQty) => {
        if (newQty < 1)
            return;
        setCart(cart.map((item) => item.id === id ? { ...item, quantity: newQty } : item));
    };
    const applyCoupon = () => {
        // The coupon logic is handled in useEffect above
        alert("Coupon applied!");
    };
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsx(Categories, {}), _jsx("div", { className: "mx-auto max-w-screen-xl my-20 px-4", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [_jsxs("div", { className: "md:col-span-2 border border-gray-200 p-6 rounded-lg", children: [_jsx("h1", { className: "text-xl font-semibold mb-4", children: "Shopping Cart" }), _jsx("div", { className: "border-b border-gray-300 py-2 font-medium", children: "Products" }), cart.length === 0 ? (_jsx("div", { className: "py-4", children: "Your cart is currently empty." })) : (_jsx("div", { className: "space-y-4 py-4", children: cart.map((item) => (_jsxs("div", { className: "flex items-center justify-between border-b pb-4", children: [_jsx("button", { className: "text-red-500 font-bold text-xl mr-4", onClick: () => removeFromCart(item.id), children: "\u00D7" }), _jsx("img", { src: item.image, alt: item.title, className: "w-16 h-16 object-cover rounded" }), _jsxs("div", { className: "flex-1 px-4", children: [_jsx("p", { className: "font-medium", children: item.title }), _jsxs("p", { className: "text-sm text-gray-500", children: ["$", item.price.toFixed(2)] })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("button", { onClick: () => updateQuantity(item.id, item.quantity - 1), className: "px-2 py-1 border rounded", children: "\u2212" }), _jsx("span", { children: item.quantity }), _jsx("button", { onClick: () => updateQuantity(item.id, item.quantity + 1), className: "px-2 py-1 border rounded", children: "+" })] }), _jsxs("div", { className: "font-semibold w-20 text-right", children: ["$", (item.quantity * item.price).toFixed(2)] })] }, item.id))) })), _jsxs("div", { className: "flex justify-between items-center mt-6", children: [_jsx("button", { className: "border border-gray-300 px-4 py-2 rounded-lg", children: "Return to Shop" }), _jsx("button", { className: "border border-gray-300 px-4 py-2 rounded-lg", children: "Update Cart" })] })] }), _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "border border-gray-200 p-6 rounded-lg", children: [_jsx("h2", { className: "text-lg font-semibold mb-4", children: "Cart Totals" }), _jsxs("div", { className: "space-y-2 text-sm", children: [_jsxs("p", { className: "flex justify-between", children: ["Sub-total: ", _jsxs("span", { children: ["$", subtotal.toFixed(2)] })] }), _jsxs("p", { className: "flex justify-between", children: ["Shipping: ", _jsx("span", { children: "Free" })] }), _jsxs("p", { className: "flex justify-between", children: ["Discount: ", _jsxs("span", { children: ["$", discount.toFixed(2)] })] }), _jsxs("p", { className: "flex justify-between", children: ["Tax (10%): ", _jsxs("span", { children: ["$", tax.toFixed(2)] })] })] }), _jsx("hr", { className: "my-4" }), _jsxs("h1", { className: "text-lg font-semibold flex justify-between", children: ["Total: ", _jsxs("span", { children: ["$", total.toFixed(2)] })] }), _jsx("button", { className: "w-full mt-4 h-15 text-xl bg-teal-900 hover:bg-teal-600 text-white px-4 py-2 ", children: "Proceed to Checkout" })] }), _jsxs("div", { className: "border border-gray-200 p-6 rounded-lg", children: [_jsx("h2", { className: "text-lg font-semibold mb-4", children: "Apply Coupon" }), _jsx("label", { className: "block mb-2 text-sm font-medium text-gray-900", children: "Coupon Code" }), _jsx("input", { type: "text", value: coupon, onChange: (e) => setCoupon(e.target.value), className: "w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500", placeholder: "Enter your coupon code" }), _jsx("button", { onClick: applyCoupon, className: "w-full mt-4 bg-gray-800 text-white px-4 py-2 rounded-lg", children: "Apply" })] })] })] }) })] }));
};
export default CartPage;
