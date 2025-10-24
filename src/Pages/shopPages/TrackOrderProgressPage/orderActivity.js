import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import PaySucceed from "../../../assets/TrackOrderProgress/paysuccessicon.svg";
import OrderActivityComponent from "../../../Pages/shopPages/TrackOrderProgressPage/orderActivityComponent";
const orderActivity = (props) => {
    return (_jsxs("div", { className: "mx-auto max-w-screen-md my-2 px-4 ", children: [_jsx("div", { className: "p-2", children: _jsx("h1", { children: "Order Activity" }) }), _jsx("div", { className: "flex flex-col", children: _jsxs("div", { className: "flex flex-row p-2 gap-2", children: [_jsx("div", { children: _jsx("img", { src: PaySucceed, alt: "" }) }), _jsxs("div", { children: [_jsx("h1", { children: props.productState }), _jsxs("h1", { children: [" ", props.dateDay, " ", props.dateMonth, " ", props.dateYear, " at", " ", props.timeOrdered, " "] })] })] }) }), _jsx(OrderActivityComponent, { productState: "", productHash: "", productQuantity: 0, dateDay: "", dateMonth: "", dateYear: "", orderExpectedDay: 0, orderExpectedMonth: 0, orderExpectedYear: 0, imgVisual: "" })] }));
};
export default orderActivity;
