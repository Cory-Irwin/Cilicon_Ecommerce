import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Footer from "../../Components/HomePage/Footer/Footer";
import Categories from "../../Components/HomePage/Categories/Categories";
import Header from "../../Components/HomePage/Header/Header";
import BlackFriday from "../../Components/HomePage/BlackFriday/BlackFriday";
import Error404 from "../../assets/ErrorPage/error404.jpg";
import WhiteArrow from "../../assets/Arrows/WhiteArrowLeft.svg";
import Home from "../../assets/Arrows/House.svg";
import { NavLink } from "react-router-dom";
const errorPage = () => {
    return (_jsxs(_Fragment, { children: [_jsx(BlackFriday, {}), _jsx(Header, {}), _jsx(Categories, {}), _jsx("div", { className: "mx-auto max-w-screen-xl   px-4 ", children: _jsxs("div", { className: "p-20", children: [_jsxs("div", { className: "flex justify-center text-8xl items-center flex-col p-10", children: [_jsx("img", { src: Error404, alt: "", className: "h-125 w-auto" }), _jsx("h1", { className: "text-6xl", children: "Error 404" })] }), _jsx("div", { className: "justify-center flex margin-20", children: _jsx("p", { children: "Something went wrong. It\u2019s look that your requested could not be found. It\u2019s look like the link is broken or the page is removed." }) }), _jsxs("div", { className: "flex flex-row  items-center mt-10 justify-center gap-6", children: [_jsx("button", { className: "bg-teal-900 hover:bg-teal-400 text-xl p-10  text-white px-12 py-6 ", children: _jsxs("div", { className: "flex text-center justify-center items-center  flex-row gap-2", children: [_jsx("img", { src: WhiteArrow, className: "h-10 w-auto", alt: "" }), _jsx("div", { children: _jsxs(NavLink, { to: "/", children: [_jsx("a", { href: "", children: _jsx("h1", { className: "text-3xl", children: "GO BACK" }) }), _jsx(NavLink, {})] }) })] }) }), _jsx("button", { className: "bg-teal-900 hover:bg-teal-400 text-xl p-10  text-white px-12 py-6 ", children: _jsxs("div", { className: "flex flex-row text-center justify-center items-center  gap-2", children: [_jsx("div", { children: _jsx("img", { src: Home, className: "h-12 w-auto top-1 relative", alt: "" }) }), _jsx("div", { children: _jsxs(NavLink, { to: "/", children: [_jsx("a", { href: "", children: _jsx("h1", { className: "text-3xl", children: "GO TO HOME" }) }), _jsx(NavLink, {})] }) })] }) })] })] }) }), " ", _jsx(Footer, {})] }));
};
export default errorPage;
