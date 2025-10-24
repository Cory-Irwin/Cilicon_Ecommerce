import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import ProgressBar from "../../../Pages/shopPages/TrackOrderProgressPage/trackOrderProgressLine";
import OrderActivity from "../TrackOrderProgressPage/orderActivityComponent";
const TrackOrder = (props) => {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "mx-auto max-w-screen-md my-10 px-4 border-2 border-gray-200", children: [_jsxs("div", { className: "flex flex-col", children: [_jsx("div", { children: _jsx("div", { children: _jsxs("h1", { children: ["#", props.productHash] }) }) }), _jsx("div", { className: "flex text-end justify-end", children: _jsxs("h1", { children: ["$", props.totalAmmount] }) }), _jsx("div", { className: "flex flex-row gap-2", children: _jsx("div", { children: _jsxs("h1", { children: [props.productQuantity, " Products \u2022 Order placed in", " ", props.dateDay, " ", props.dateMonth, ", ", props.dateYear, " at", " ", props.timeOrdered] }) }) })] }), " ", _jsx(ProgressBar, { step: 1 }), _jsx(OrderActivity, { imgVisual: "", productHash: "", timeOrdered: "7:32PM", productQuantity: 0, dateDay: "23", dateMonth: "DEC", dateYear: "2025", orderExpectedDay: 0, orderExpectedMonth: 0, orderExpectedYear: 0, productState: " Your order has been delivered. Thank you for shopping at Appycon!" })] }) }));
};
export default TrackOrder;
