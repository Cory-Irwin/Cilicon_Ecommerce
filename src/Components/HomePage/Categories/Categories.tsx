import {NavLink} from "react-router-dom";
import Arrow from "../../../assets/Categories/CaretDown.svg";
import Track from "../../../assets/Categories/MapPinLine.svg";
import Compare from "../../../assets/Categories/ArrowsCounterClockwise.svg";
import CustomerSupport from "../../../assets/Categories/Headphones.svg";
import Help from "../../../assets/Categories/Info.svg";
import Dropdown from "./categoriesComponent"
const Categories = () => {
    return (
        <section className="w-full bg-white border-b border-gray-200">
            <div
                className="max-w-screen-xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Left Section (Categories + Navigation) */}
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 w-full">
                    {/* Categories Section */}
                    <Dropdown/>

                    {/* Navigation Links */}
                    <nav className="flex flex-wrap gap-x-6 gap-y-2 items-center text-gray-500 text-sm uppercase">
                        <div className="flex items-center gap-2">
                            <NavLink to="/TrackOrderPage" className="hover:text-gray-400">
                                Track Order
                            </NavLink>
                            <img src={Track} alt="track" className="w-4 h-4"/>
                        </div>

                        <div className="flex items-center gap-2">
                            <NavLink to="/ComparePage" className="hover:text-gray-400">
                                Compare
                            </NavLink>
                            <img src={Compare} alt="compare" className="w-4 h-4"/>
                        </div>

                        <div className="flex items-center gap-2">
                            <NavLink to="/FaqPage" className="hover:text-gray-400">
                                FAQ
                            </NavLink>
                            <img src={CustomerSupport} alt="faq" className="w-4 h-4"/>
                        </div>

                        <div className="flex items-center gap-2">
                            <NavLink to="/customerSupportPage" className="hover:text-gray-400">
                                Need Help?
                            </NavLink>
                            <img src={Help} alt="help" className="w-4 h-4"/>
                        </div>
                    </nav>
                </div>

                {/* Right Section (Contact Info) */}
                <div className="text-center sm:text-right w-full sm:w-auto">
                    <h1 className="text-base sm:text-lg font-semibold">
                        +1-202-555-0104
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default Categories;
