import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Arrow from "../../../assets/Categories/CaretDown.svg";
export default function CategoriesDropdown() {
    const [open, setOpen] = useState(false);
    return (_jsxs("div", { className: "relative inline-block text-left z-100", children: [_jsxs("div", { onClick: () => setOpen(!open), className: "bg-gray-100 px-4 py-2 flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start rounded-md cursor-pointer", children: [_jsx("h1", { className: "text-base sm:text-lg font-semibold", children: "All Categories" }), _jsx("img", { src: Arrow, alt: "caret", className: `w-4 h-4 transform transition-transform ${open ? "rotate-180" : ""}` })] }), open && (_jsx("div", { className: "absolute mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-10", children: _jsxs("ul", { className: "py-1", children: [_jsx("li", { className: "px-4 py-2 hover:bg-gray-100 cursor-pointer", children: "Technology" }), _jsx("li", { className: "px-4 py-2 hover:bg-gray-100 cursor-pointer", children: "Business" }), _jsx("li", { className: "px-4 py-2 hover:bg-gray-100 cursor-pointer", children: "Health" }), _jsx("li", { className: "px-4 py-2 hover:bg-gray-100 cursor-pointer", children: "Education" })] }) }))] }));
}
