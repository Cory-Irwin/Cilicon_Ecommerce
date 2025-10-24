import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import Copy from "../../assets/DashboardPage/Copy.svg";
import VISA from "../../assets/DashboardPage/VISA.svg";
const creditCardComponent = (props) => {
    return (_jsxs("div", { className: "h-45 flex-col w-1/3 rounded-sm flex p-2 px-4 bg-gradient-to-r from-slate-500 to-slate-800  text-white", children: [_jsxs("div", { className: "flex mt-2  flex-row justify-between w-full", children: [_jsxs("div", { children: [" ", _jsxs("h1", { className: "text-xl ", children: ["$", props.accountBalance, props.commaThousand] })] }), _jsxs("div", { children: [" ", _jsx("button", { className: "text-xl text-center items-center px-5", children: "..." })] })] }), _jsx("div", { children: _jsx("h1", { className: "mt-5 text-sm", children: "Card Number" }) }), _jsxs("div", { className: "flex flex-row gap-2", children: [" ", _jsxs("h1", { className: "text-xl", children: ["**** **** **** ", props.cardNumber] }), _jsx("img", { src: Copy, alt: "", className: "w-6 h-auto" })] }), _jsxs("div", { className: "flex mt-5 flex-row gap-20 ", children: [_jsx("img", { src: VISA, alt: "", className: "w-auto h-5" }), _jsx("h1", { children: props.fullName })] })] }));
};
export default creditCardComponent;
