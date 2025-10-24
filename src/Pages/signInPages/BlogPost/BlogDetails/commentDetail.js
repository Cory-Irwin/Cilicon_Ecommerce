import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const commentDetail = (props) => {
    return (_jsxs("div", { className: "flex flex-row gap-6", children: [_jsx("div", { className: "rounded-full    flex", children: _jsx("img", { src: props.imgurl, alt: "", className: "h-15 p-1 border-2  rounded-full w-auto" }) }), _jsxs("div", { children: [_jsxs("div", { className: "flex flex-row gap-1", children: [_jsxs("h1", { children: [props.name, "\u2022"] }), _jsx("h1", { children: props.dateDay }), _jsx("h1", { children: props.dateMonth }), _jsx("h1", { children: "," }), _jsx("h1", { children: props.dateYear })] }), _jsx("div", { className: "w-210", children: _jsx("h1", { children: props.commentText }) }), _jsx("hr", { className: "w-full bg-gray-200 mt-5 " }), " "] })] }));
};
export default commentDetail;
