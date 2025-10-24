import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Flashcard = (props) => {
    return (_jsxs("div", { className: "flex justify-between p-6 border-2  gap-2 border-gray-100 hover:bg-gray-200 items-center", children: [_jsx("div", { className: "flex-end", children: _jsx("img", { src: props.imageurl, alt: "", className: "h-20 w-20 object-contain" }) }), _jsxs("div", { className: "text-left max-w-[10rem]", children: [" ", _jsx("h1", { className: "text-base font-semibold truncate overflow-hidden  whitespace-nowrap", title: props.name, children: props.name }), _jsx("p", { children: props.reviewStars }), _jsx("p", { children: props.reviewCount }), _jsx("h2", { className: "text-sm text-gray-600 truncate overflow-hidden whitespace-nowrap", title: props.description, children: props.description }), _jsxs("h3", { className: "text-lg font-semibold py-2 text-green-900", children: ["$", props.price] })] })] }));
};
export default Flashcard;
