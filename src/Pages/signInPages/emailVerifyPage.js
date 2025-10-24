import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Footer from '../../Components/HomePage/Footer/Footer';
import Categories from '../../Components/HomePage/Categories/Categories';
import Header from '../../Components/HomePage/Header/Header';
import BlackFriday from '../../Components/HomePage/BlackFriday/BlackFriday';
const emailVerifyPage = () => {
    return (_jsxs(_Fragment, { children: [_jsx(BlackFriday, {}), _jsx(Header, {}), _jsx(Categories, {}), _jsx("div", { className: "flex flex-col items-center justify-center min-h-[40vh] w-full px-4", children: _jsxs("div", { className: 'bg-white  shadow-lg p-8  w-full max-w-md mx-auto', children: [_jsxs("div", { className: 'text-center ', children: [_jsx("h1", { className: 'text-2xl ', children: "Verify Your Email Address" }), _jsx("p", { className: 'mt-2 text-gray-500', children: "Enter the verification code sent to your email." })] }), _jsxs("div", { className: "mb-4 mt-5 ", children: [_jsxs("div", { className: 'justify-between flex', children: [_jsx("label", { className: "block text-gray-600  mb-2", children: "Verification Code" }), _jsx("a", { href: "", className: 'text-blue-500', children: "Resend Code" })] }), _jsx("input", { type: "password", placeholder: "Enter Code Here", className: "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400" })] }), _jsx("button", { className: "w-full bg-teal-900 text-white py-2 rounded-md hover:bg-teal-600 transition", children: "Reset Password \u2192" }), _jsx("hr", { className: 'py-2' })] }) }), _jsx(Footer, {})] }));
};
export default emailVerifyPage;
