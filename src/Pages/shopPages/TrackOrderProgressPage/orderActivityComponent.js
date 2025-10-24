import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const orderActivityComponent = (props) => {
    return (_jsx("div", { className: "flex flex-col", children: _jsxs("div", { className: "flex flex-row p-2 gap-2", children: [_jsx("div", { children: _jsx("img", { src: props.imgVisual, alt: "" }) }), _jsxs("div", { children: [_jsx("h1", { children: props.productState }), _jsxs("h1", { children: [" ", props.dateDay, " ", props.dateMonth, " ", props.dateYear, " at", " ", props.timeOrdered, " "] })] })] }) }));
};
export default orderActivityComponent;
