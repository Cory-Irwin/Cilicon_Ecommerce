import { NavLink } from "react-router-dom";
import Arrow from "../../../assets/Categories/CaretDown.svg";
import Track from "../../../assets/Categories/MapPinLine.svg";
import Compare from "../../../assets/Categories/ArrowsCounterClockwise.svg";
import CustomerSupport from "../../../assets/Categories/Headphones.svg";
import Help from "../../../assets/Categories/Info.svg";

const Categories = () => {
  return (
    <section className="w-full bg-white  top-[200px] left-0 z-4  ">
      <div className="max-w-screen-xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Left Section (Categories + Navigation) */}
        <div className="flex items-center gap-x-8">
          {/* Categories Section */}
          <div className="bg-gray-100 p-4 justify-between flex gap-2">
            <h1 className="text-lg font-semibold">All Categories</h1>
            <img src={Arrow} alt="" />
          </div>

          {/* Navigation Links */}
          <nav className="flex gap-x-8 flex-row items-center text-gray-500 text-sm uppercase">
            <div className="flex-row gap-3 flex justify-around">
              <NavLink to={"/TrackOrderPage"}>
                <a href="#" className="hover:text-gray-400">
                  Track Order ▾
                </a>
              </NavLink>{" "}
              <img src={Track} alt="" />
              <NavLink to={"/ComparePage"}>
                <a href="#" className="hover:text-gray-400">
                  Compare
                </a>
              </NavLink>{" "}
              <img src={Compare} />
              <NavLink to={"/FaqPage"}>
                <a href="#" className="hover:text-gray-400">
                  FAQ
                </a>
              </NavLink>{" "}
              <img src={CustomerSupport} alt="" />
              <NavLink to={"CustomerSupportPage"}>
                <a href="#" className="hover:text-gray-400">
                  Need Help?
                </a>
              </NavLink>{" "}
              <img src={Help} alt="" />
            </div>
          </nav>
        </div>

        {/* Right Section (Contact Info) */}
        <div>
          <h1 className="text-lg font-semibold">+1-202-555-0104</h1>
        </div>
      </div>
    </section>
  );
};

export default Categories;
