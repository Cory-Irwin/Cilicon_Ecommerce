import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import arrow from "../../../../assets/Categories/CaretDown.svg";
import Xbox1 from "../../../../assets/misc/xbone.png";
const products = [
    {
        title: "The Best Place to Play.",
        description: "Xbox Consoles",
        text: "Experience next-gen gaming with Xbox. Powerful performance, immersive visuals, and the best games.",
        price: "$299",
        image: Xbox1,
    },
    {
        title: "Unleash the Power.",
        description: "Xbox Series X",
        text: "4K gaming, faster load times, and the ultimate performance console.",
        price: "$499",
        image: Xbox1,
    },
    {
        title: "Compact and Mighty.",
        description: "Xbox Series S",
        text: "Next-gen performance in the smallest Xbox ever.",
        price: "$249",
        image: Xbox1,
    },
];
const XboxCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    // Auto slide every 5s
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % products.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    return (_jsxs("div", { className: "relative w-full overflow-hidden col-span-2 row-span-2 rounded-lg", children: [_jsx("div", { className: "flex transition-all duration-700 ease-in-out relative w-full h-full", style: {
                    transform: `translateX(-${currentIndex * 100}%)`,
                    width: `${products.length * 100}%`, // make room for all slides
                }, children: products.map((product, index) => (_jsxs("div", { className: "w-full h-132  flex-shrink-0 flex justify-between items-center p-6 bg-gray-100 rounded-lg", children: [_jsxs("div", { className: "w-120", children: [_jsx("h1", { className: "text-blue-500 text-2xl", children: product.title }), _jsx("h1", { className: "text-6xl font-bold mb-2", children: product.description }), _jsx("p", { className: "text-2xl text-gray-700", children: product.text }), _jsx("button", { className: "mt-3 bg-yellow-400 border-6 border-teal-900 cursor-pointer \n                  text-black py-6 px-20 font-bold text-3xl shadow-md hover:bg-yellow-200", children: _jsxs("div", { className: "flex items-center flex-row justify-between gap-4", children: [_jsx("div", { children: "BUY NOW" }), _jsx("div", { children: _jsx("img", { src: arrow, alt: "", className: "h-10 w-auto" }) })] }) })] }), _jsxs("div", { className: "relative w-full h-auto", children: [_jsx("img", { src: product.image, alt: "Xbox Console", className: "w-auto h-100 object-contain absolute left-20 -top-40" }), _jsx("div", { className: "absolute z-20 w-20 h-20 left-22 -top-36 bg-yellow-400 rounded-full flex items-center justify-center text-black border-4 border-teal-900 text-xl shadow-lg", children: product.price })] })] }, index))) }), _jsx("div", { className: "absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3", children: products.map((_, index) => (_jsx("button", { onClick: () => setCurrentIndex(index), className: `w-4 h-4 rounded-full ${index === currentIndex ? "bg-blue-500" : "bg-gray-400"}` }, index))) })] }));
};
export default XboxCarousel;
