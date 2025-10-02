import React, { useState, useEffect } from "react";
import arrow from "../../../../assets/Categories/CaretDown.svg";
import Xbox1 from "../../../../assets/misc/xbone.png"
import Xbox2 from "../../../../assets/misc/xbone.png";
import Xbox3 from "../../../../assets/misc/xbone.png";

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

    return (
        <div className="relative w-full overflow-hidden col-span-2 row-span-2">
            {/* Track (this moves left/right) */}
            <div
                className="flex transition-all duration-700 ease-in-out"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    width: `${products.length * 100}%`, // make room for all slides
                }}
            >//brb
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="w-full h-132  flex-shrink-0 flex justify-between items-center p-6 bg-gray-100 rounded-lg"
                    >
                        {/* Text Section */}
                        <div className="w-120">
                            <h1 className="text-blue-500 text-2xl">{product.title}</h1>
                            <h1 className="text-6xl font-bold mb-2">{product.description}</h1>
                            <p className="text-2xl text-gray-700">{product.text}</p>

                            <button
                                className="mt-3 bg-yellow-400 border-6 border-teal-900 cursor-pointer 
                  text-black py-6 px-20 font-bold text-3xl shadow-md hover:bg-yellow-200"
                            >
                                <div className="flex items-center flex-row justify-between gap-4">
                                    <div>BUY NOW</div>
                                    <div>
                                        <img src={arrow} alt="" className="h-10 w-auto" />
                                    </div>
                                </div>
                            </button>
                        </div>


                        {/* Image Section */}
                        <div className="flex justify-end items-center relative w-88 h-auto">
                            <img
                                src={product.image}
                                alt="Xbox Console"
                                className="w-full h-full object-contain relative right-405 "
                            />

                            {/* Price Tag */}
                            <div className="absolute right-425">
                                <div
                                    className="absolute bottom-25 right-2 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-black border-4 border-teal-900 text-xl shadow-lg">
                                    {product.price}
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

            {/* Dots Navigation */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
                {products.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-4 h-4 rounded-full ${index === currentIndex ? "bg-blue-500" : "bg-gray-400"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default XboxCarousel;
