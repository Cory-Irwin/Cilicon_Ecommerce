import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Footer from "../../../Components/HomePage/Footer/Footer";
import BlackFriday from "../../../Components/HomePage/BlackFriday/BlackFriday";
import Header from "../../../Components/HomePage/Header/Header";
import Categories from "../../../Components/HomePage/Categories/Categories";
import WishListPageComponent from "../../../Pages/shopPages/WishListPage/wishListPageComponent";
import EarBuds from "../../../assets/misc/airpods.webp";
const WishListPage = () => {
    return (_jsxs(_Fragment, { children: [_jsx(BlackFriday, {}), _jsx(Header, {}), _jsx(Categories, {}), _jsx("div", { className: "max-w-screen-xl mx-auto px-6 my-10", children: _jsx(WishListPageComponent, { imgValue: EarBuds, itemdescription: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear Headphones for Workouts and Running, Triple Black", priceTotal: 399.99, stockStatus: "In Stock" }) }), _jsx(Footer, {})] }));
};
export default WishListPage;
