import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Dashboard from "../../../assets/DashboardPage/Stack.svg";
import OrderHistory from "../../../assets/DashboardPage/OrderHistory.svg";
import TrackOrder from "../../../assets/DashboardPage/Shopping.svg";
import Wishlist from "../../../assets/DashboardPage/Wishlist.svg";
import Compare from "../../../assets/DashboardPage/Wishlist.svg";
import Cards from "../../../assets/DashboardPage/Cards.svg";
import Browsing from "../../../assets/DashboardPage/Browsing.svg";
import Settings from "../../../assets/DashboardPage/Setting.svg";
import Shopping from "../../../assets/DashboardPage/Shopping.svg";
import LogOut from "../../../assets/DashboardPage/LogOut.svg";
const dashboardList = () => {
    return (_jsx("div", { className: "", children: _jsxs("div", { className: "grid grid-cols-1 grid-rows-10 py-5 gap-4 shadow-lg  ", children: [_jsxs("div", { className: 'flex flex-row gap-2 p-2 px-5  hover:bg-teal-900 hover:text-white', children: [_jsx("img", { src: Dashboard, alt: "" }), _jsx("h1", { children: "Dashboard" })] }), _jsxs("div", { className: 'flex flex-row gap-2 p-2 px-5  hover:bg-teal-900 hover:text-white', children: [_jsx("img", { src: OrderHistory, alt: "" }), _jsx("h1", { children: "Order History" })] }), _jsxs("div", { className: 'flex flex-row gap-2 p-2 px-5  hover:bg-teal-900 hover:text-white', children: [_jsx("img", { src: TrackOrder, alt: "" }), _jsx("h1", { children: "Track Order" })] }), _jsxs("div", { className: 'flex flex-row gap-2 p-2 px-5  hover:bg-teal-900 hover:text-white', children: [_jsx("img", { src: Shopping, alt: "" }), _jsx("h1", { children: "Shopping cart" })] }), _jsxs("div", { className: 'flex flex-row gap-2 p-2 px-5  hover:bg-teal-900 hover:text-white', children: [_jsx("img", { src: Wishlist, alt: "" }), _jsx("h1", { children: "Wishlist" })] }), _jsxs("div", { className: 'flex flex-row gap-2 p-2 px-5  hover:bg-teal-900 hover:text-white', children: [_jsx("img", { src: Compare, alt: "" }), _jsx("h1", { children: "Compare" })] }), _jsxs("div", { className: 'flex flex-row gap-2 p-2 px-5  hover:bg-teal-900 hover:text-white', children: [_jsx("img", { src: Cards, alt: "" }), _jsx("h1", { children: "Cards & Address" })] }), _jsxs("div", { className: 'flex flex-row gap-2 p-2 px-5  hover:bg-teal-900 hover:text-white', children: [_jsx("img", { src: Browsing, alt: "" }), _jsx("h1", { children: "Browsing History" })] }), _jsxs("div", { className: 'flex flex-row gap-2 p-2 px-5  hover:bg-teal-900 hover:text-white', children: [_jsx("img", { src: Settings, alt: "" }), _jsx("h1", { children: "Settings" })] }), _jsxs("div", { className: 'flex flex-row gap-2 p-2 px-5  hover:bg-teal-900 hover:text-white', children: [_jsx("img", { src: LogOut, alt: "" }), _jsx("h1", { children: "Log Out" })] })] }) }));
};
export default dashboardList;
