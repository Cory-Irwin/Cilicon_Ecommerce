import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Header from "../../../Components/HomePage/Header/Header";
import TrackOrderProgressComponent from "../TrackOrderProgressPage/trackOrderProgressPageComponent";
import BlackFriday from "../../../Components/HomePage/BlackFriday/BlackFriday";
import Categories from "../../../Components/HomePage/Categories/Categories";
import Footer from "../../../Components/HomePage/Footer/Footer";
const TrackOrder = () => {
    return (_jsxs(_Fragment, { children: [_jsx(BlackFriday, {}), _jsx(Header, {}), _jsx(Categories, {}), _jsx(TrackOrderProgressComponent, { productHash: "784765947", productQuantity: 4, dateDay: "12", dateMonth: "Dec", dateYear: "", orderExpectedDay: 0, orderExpectedMonth: 0, orderExpectedYear: 0, totalAmmount: 1299.99, timeOrdered: "12:42PM" }), _jsx(Footer, {})] }));
};
export default TrackOrder;
