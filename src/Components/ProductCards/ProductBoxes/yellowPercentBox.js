import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
export default function DiscountBadge({ percentOff }) {
    if (percentOff === undefined)
        return null;
    return (_jsx("div", { className: "absolute bg-yellow-400 border-2\n     border-teal-900 w-25 text-center top-2 left-2 p-2", children: _jsxs("h1", { children: [percentOff, "% OFF"] }) }));
}
