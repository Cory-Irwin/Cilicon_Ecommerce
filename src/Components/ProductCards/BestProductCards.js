import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const BestProductCards = (props) => {
    return (_jsx("div", { className: 'items-center shadow-md flex justify-center ', children: _jsxs("div", { className: "", children: [_jsx("img", { src: props.imageurl, alt: "", className: "h-30 w-30" }), _jsx("h1", { children: props.name }), _jsx("h2", { children: props.description }), _jsx("h3", { children: props.price })] }) }));
};
export default BestProductCards;
