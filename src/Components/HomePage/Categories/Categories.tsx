import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Track from "../../../assets/Categories/MapPinLine.svg";
import Compare from "../../../assets/Categories/ArrowsCounterClockwise.svg";
import CustomerSupport from "../../../assets/Categories/Headphones.svg";
import Help from "../../../assets/Categories/Info.svg";
import Phone from "../../../assets/Categories/PhoneCall.svg"

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown if click happens outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("click", handleClickOutside);
        }

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div ref={dropdownRef} className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 text-gray-500"
            >
                Categories
                <span className="text-gray-200">{isOpen ? "▲" : "▼"}</span>
            </button>

            {isOpen && (
                <><div className="absolute top-full z-100 left-0 mt-2 w-72 bg-white border shadow-md rounded hover:text-gray-300 cursor-pointer ">
                    <ul className="flex flex-col">
                        <li className="px-4 py-2 hover:bg-gray-100">Computer & Laptop</li>
                        <li className="px-4 py-2 hover:bg-gray-100">Computer Accessories</li>
                        <li className="px-4 py-2 hover:bg-gray-100">Category 3</li>
                        <li className="px-4 py-2 hover:bg-gray-100">Category 3</li>
                        <li className="px-4 py-2 hover:bg-gray-100">Category 3</li>
                        <li className="px-4 py-2 hover:bg-gray-100">Category 3</li>
                        <li className="px-4 py-2 hover:bg-gray-100">Category 3</li>
                        <li className="px-4 py-2 hover:bg-gray-100">Category 3</li>
                        <li className="px-4 py-2 hover:bg-gray-100">Category 3</li>
                        <li className="px-4 py-2 hover:bg-gray-100">Category 3</li>
                        <li className="px-4 py-2 hover:bg-gray-100">Category 3</li>
                    </ul>
                </div><div className="absolute top-full z-100 left-50 mt-2 h- w-96 bg-white border shadow-md rounded hover:text-gray-300 cursor-pointer ">
                        <ul className="flex flex-col">
                            <li className="px-4 py-2 hover:bg-gray-100">Category 1</li>
                            <li className="px-4 py-2 hover:bg-gray-100">Category 2</li>
                            <li className="px-4 py-2 hover:bg-gray-100">Category 3</li>
                        </ul>
                    </div></>
            )}
        </div>
    );
};

const Categories = () => {
    return (
        <section className="w-full bg-white border-b border-gray-200  max-w-screen-xl mx-auto px-6 lex items-center">
            <div className="max-w-screen-xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Left Section (Categories + Navigation) */}
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 w-full">
                    {/* Categories Section */}
                    <Dropdown />

                    {/* Navigation Links */}
                    <nav className="flex flex-wrap gap-x-6 gap-y-2 items-center text-gray-500 text-sm uppercase">
                        <div className="flex items-center gap-2">
                            <NavLink to="/TrackOrderPage" className="hover:text-gray-400">
                                Track Order
                            </NavLink>
                            <img src={Track} alt="track" className="w-4 h-4" />
                        </div>

                        <div className="flex items-center gap-2">
                            <NavLink to="/ComparePage" className="hover:text-gray-400">
                                Compare
                            </NavLink>
                            <img src={Compare} alt="compare" className="w-4 h-4" />
                        </div>

                        <div className="flex items-center gap-2">
                            <NavLink to="/FaqPage" className="hover:text-gray-400">
                                FAQ
                            </NavLink>
                            <img src={CustomerSupport} alt="faq" className="w-4 h-4" />
                        </div>

                        <div className="flex items-center gap-2">
                            <NavLink to="/customerSupportPage" className="hover:text-gray-400">
                                Need Help?
                            </NavLink>
                            <img src={Help} alt="help" className="w-4 h-4" />
                        </div>
                    </nav>
                </div>

                {/* Right Section (Contact Info) */}
                <div className="text-center sm:text-right w-full sm:w-auto flex justify-between ">
                    <img src={Phone} alt="" className="size-8" />
                    <h1 className="text-base sm:text-lg font-semibold">+1-202-555-0104</h1>
                </div>
            </div>
        </section>
    );
};

export default Categories;

