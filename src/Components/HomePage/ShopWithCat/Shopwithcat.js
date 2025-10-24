import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import Assessories from "../../../assets/misc/computeraccessories.png";
import Desktop from "../../../assets/misc/extendgamingpc.png";
import Phone from "../../../assets/misc/catphones.png";
import Laptop from "../../../assets/misc/msilaptop.png";
import ArrowBigLeft from "../../../assets/shopwithcat/ArrowLeft.svg";
import ArrowRight from "../../../assets/shopwithcat/ArrowRight.svg";
import Camera from "../../../assets/shopwithcat/pngwing.com.png";
const categories = [
    { name: "SmartPhones", img: Phone },
    { name: "Accessories", img: Assessories },
    { name: "Desktop PC", img: Desktop },
    { name: "Cameras", img: Camera },
    { name: "Laptops", img: Laptop },
];
const Shopwithcat = () => {
    const scrollRef = useRef(null);
    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
            scrollRef.current.scrollTo({
                left: scrollLeft + scrollAmount,
                behavior: "smooth",
            });
        }
    };
    return (_jsxs("div", { className: "mx-auto max-w-screen-xl my-10 flex flex-col mt-100 lg:mt-20 items-center", children: [_jsx("h1", { className: "text-4xl font-semibold pb-10", children: "Shop with Categories" }), _jsxs("div", { className: "relative w-full", children: [_jsx("button", { onClick: () => scroll("left"), className: "absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-green-900 p-3 rounded-full shadow-md", children: _jsx("img", { src: ArrowBigLeft, alt: "Left", className: "w-6 h-6" }) }), _jsx("div", { ref: scrollRef, className: "flex overflow-x-auto scroll-smooth gap-8 px-16 no-scrollbar", children: categories.map((cat, i) => (_jsxs("div", { className: "flex-shrink-0 border-2 w-72 h-80 flex flex-col items-center justify-center border-gray-200 rounded-lg", children: [_jsx("img", { src: cat.img, alt: cat.name, className: "h-44 w-auto mb-4" }), _jsx("h1", { className: "text-xl", children: cat.name })] }, i))) }), _jsx("button", { onClick: () => scroll("right"), className: "absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-green-900 p-3 rounded-full shadow-md", children: _jsx("img", { src: ArrowRight, alt: "Right", className: "w-6 h-6" }) })] })] }));
};
export default Shopwithcat;
