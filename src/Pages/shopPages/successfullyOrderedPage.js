import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import Header from "../../Components/HomePage/Header/Header";
import Categories from "../../Components/HomePage/Categories/Categories";
import Footer from "../../Components/HomePage/Footer/Footer";
import CheckedTick from "../../assets/SuccessfullyOrderedPage/CheckCircle.svg";
import Dashboard from "../../assets/SuccessfullyOrderedPage/dashboard.svg";
import WhiteArrow from "../../assets/Arrows/ArrowRightWhite.svg";
const OrderSuccess = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsx(Categories, {}), _jsx("div", { className: "flex flex-col items-center justify-center px-4 mt-20 mb-20", children: _jsxs("div", { className: "bg-white shadow-lg rounded-lg p-8 items-center flex  flex-col text-center ", children: [_jsx("img", { src: CheckedTick, alt: "" }), _jsx("h1", { className: "text-2xl font-semibold mb-4", children: "Order Successfully Submitted!" }), _jsx("p", { className: "text-gray-600 mb-6", children: "Thank you for your purchase. Your order has been placed successfully." }), _jsxs("div", { className: "flex flex-row  gap-6", children: [" ", _jsxs("div", { className: "flex text-center flex-row gap-2 bg-teal-900 hover:bg-teal-600 text-white px-6 py-2", children: [_jsx("div", { className: "", children: _jsx("img", { src: Dashboard, alt: "" }) }), _jsx("div", { children: _jsx(Link, { to: "/", className: " ", children: "Return to Home" }) })] }), _jsxs("div", { className: "flex text-center flex-row gap-2 bg-teal-900 hover:bg-teal-600 text-white px-6 py-2", children: [_jsx("div", { children: _jsx(Link, { to: "/", className: " ", children: "Return to Dashboard" }) }), _jsx("div", { children: _jsx("img", { src: WhiteArrow, alt: "" }) })] }), " "] })] }) }), _jsx(Footer, {})] }));
};
export default OrderSuccess;
