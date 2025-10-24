import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const latestarticlecomponent = (props) => {
    return (_jsxs("div", { className: "border-2 border-gray-200 p-4", children: [_jsx("h2", { className: "text-lg font-bold mb-2", children: "Latest Articles" }), [1, 2, 3].map((_, i) => (_jsxs("div", { className: "flex gap-3 mb-3", children: [_jsx("div", { className: "h-16 w-16 bg-gray-200", children: _jsx("img", { src: props.articleImage, alt: "" }) }), _jsxs("div", { children: [_jsx("h3", { className: "text-sm font-semibold", children: props.articleTitle }), _jsxs("p", { className: "text-xs text-gray-500", children: [props.calenderDay, " ", props.calenderMonth, ",", props.calenderYear] })] })] }, i)))] }));
};
export default latestarticlecomponent;
