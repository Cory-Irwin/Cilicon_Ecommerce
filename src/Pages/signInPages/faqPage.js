import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import Footer from "../../Components/HomePage/Footer/Footer";
import Categories from "../../Components/HomePage/Categories/Categories";
import Header from "../../Components/HomePage/Header/Header";
import BlackFriday from "../../Components/HomePage/BlackFriday/BlackFriday";
const faqData = [
    {
        question: "How to create an account?",
        answer: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    },
    {
        question: "How can I make payment using Paypal?",
        answer: "Paypal payments are supported. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
        question: "Can I cancel my plan?",
        answer: "Yes, you can cancel your plan anytime. Velit officia consequat duis enim velit mollit.",
    },
    {
        question: "How can I reach to support?",
        answer: "You can reach out to our support team via email or chat. Amet minim mollit non deserunt ullamco.",
    },
];
const faqPage = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const toggleFAQ = (index) => {
        setActiveIndex((prev) => (prev === index ? null : index));
    };
    return (_jsxs(_Fragment, { children: [_jsx(BlackFriday, {}), _jsx(Header, {}), _jsx(Categories, {}), _jsx("main", { className: "mx-auto max-w-screen-xl my-20 px-4", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [_jsx("section", { children: _jsxs("div", { className: "px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl", children: [_jsxs("div", { className: "max-w-2xl mx-auto text-center", children: [_jsx("h2", { className: "text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl", children: "Frequently Asked Questions" }), _jsx("p", { className: "max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600", children: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do" })] }), _jsx("div", { className: "max-w-3xl mx-auto mt-8 space-y-4 md:mt-16", children: faqData.map((faq, index) => (_jsxs("div", { className: "transition-all duration-200 bg-white border border-gray-200 shadow-lg hover:bg-gray-50", children: [_jsxs("button", { type: "button", className: "flex items-center justify-between w-full px-4 py-5 sm:p-6", onClick: () => toggleFAQ(index), children: [_jsx("span", { className: "flex text-lg font-semibold text-black", children: faq.question }), _jsx("svg", { className: `w-6 h-6 text-gray-400 transform transition-transform duration-200 ${activeIndex === index ? "rotate-180" : ""}`, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })] }), activeIndex === index && (_jsx("div", { className: "px-4 pb-5 sm:px-6 sm:pb-6", children: _jsx("p", { className: "text-gray-700", children: faq.answer }) }))] }, index))) }), _jsxs("p", { className: "text-center text-gray-600 text-base mt-9", children: ["Didn\u2019t find the answer you are looking for?", " ", _jsx("a", { href: "#", title: "", className: "font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline", children: "Contact our support" })] })] }) }), _jsxs("aside", { className: "bg-amber-100 p-6  h-fit", children: [_jsx("h2", { className: "text-2xl font-semibold mb-4", children: "Can't find your answer? Ask for Support." }), _jsx("p", { className: "mb-6 text-gray-800", children: "Our friendly team is happy to help. Send us your question and we\u2019ll get back to you within 2 business days." }), _jsxs("form", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "block text-sm font-medium mb-1" }), _jsx("input", { id: "email", type: "email", placeholder: "Enter your email", className: "w-full px-3 bg-white py-2 border  focus:outline-none focus:ring-2 focus:ring-teal-400", required: true })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "block text-sm font-medium mb-1" }), _jsx("input", { id: "email", type: "email", placeholder: "Subject", className: "w-full px-3 bg-white py-2 border  focus:outline-none focus:ring-2 focus:ring-teal-400", required: true })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "question", className: "block text-sm font-medium mb-1" }), _jsx("textarea", { id: "question", rows: 4, placeholder: "Type your question here...", className: "w-full px-3 bg-white py-2 border  focus:outline-none focus:ring-2 focus:ring-teal-400", required: true })] }), _jsx("button", { type: "submit", className: "w-full bg-teal-900 text-white py-2  hover:bg-teal-600 transition", children: "Send Message \u2192" })] })] })] }) }), _jsx(Footer, {})] }));
};
export default faqPage;
