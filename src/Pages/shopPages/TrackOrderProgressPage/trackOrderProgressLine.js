import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Handshake from "../../../assets/TrackOrderProgress/Handshake.svg";
import Notebook from "../../../assets/TrackOrderProgress/Notebook.svg";
import Package from "../../../assets/TrackOrderProgress/Package.svg";
import Truck from "../../../assets/TrackOrderProgress/Truck.svg";
const trackOrderProgressLine = ({ step }) => {
    const totalSteps = 4;
    const progressPercent = (step / (totalSteps - 1)) * 100;
    return (_jsxs("div", { className: "w-full px-24 py-6", children: [_jsxs("div", { className: "relative w-full h-2 bg-gray-300 rounded-full", children: [_jsx("div", { className: "absolute h-2 bg-blue-500 rounded-full transition-all duration-300", style: { width: `${progressPercent}%` } }), _jsx("div", { className: "absolute top-1/2 left-0 w-full flex justify-between transform -translate-y-1/2", children: [...Array(totalSteps)].map((_, index) => (_jsx("div", { className: `w-6 h-6 rounded-full flex items-center justify-center 
                ${index <= step
                                ? "bg-blue-500"
                                : "bg-white border-2 border-gray-400"}
              `, children: _jsx("div", { className: "w-3 h-3 rounded-full bg-white" }) }, index))) })] }), _jsxs("div", { className: "flex gap-13 flex-row", children: [_jsx("div", { className: "flex relative", children: _jsxs("div", { className: "flex relative right-1.5 flex-col", children: [_jsx("div", { className: "py-5 flex", children: _jsx("img", { src: Notebook, alt: "" }) }), _jsx("div", { className: "relative right-8 bottom-3", children: _jsx("h1", { children: "Order Placed" }) })] }) }), _jsx("div", { className: "flex relative", children: _jsxs("div", { className: "flex relative left-5.5 flex-col", children: [_jsx("div", { className: "py-5 flex", children: _jsx("img", { src: Package, alt: "" }) }), _jsx("div", { className: "relative right-6 bottom-3", children: _jsx("h1", { children: "Packaging" }) })] }) }), _jsx("div", { className: "flex relative", children: _jsxs("div", { className: "flex relative left-17 flex-col", children: [_jsx("div", { className: "py-5 flex", children: _jsx("img", { src: Truck, alt: "" }) }), _jsx("div", { className: "relative right-8 bottom-3", children: _jsx("h1", { children: "On the Road" }) })] }) }), _jsx("div", { className: "flex relative", children: _jsxs("div", { className: "flex relative left-24 flex-col", children: [_jsx("div", { className: "py-5 flex", children: _jsx("img", { src: Handshake, alt: "" }) }), _jsx("div", { className: "relative right-6 bottom-3", children: _jsx("h1", { children: "Delievered" }) })] }) })] })] }));
};
export default trackOrderProgressLine;
