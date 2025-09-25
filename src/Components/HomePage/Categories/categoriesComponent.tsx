import { useState } from "react";

import Arrow from "../../../assets/Categories/CaretDown.svg";

export default function CategoriesDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left z-100">
      {/* Button */}
      <div
        onClick={() => setOpen(!open)}
        className="bg-gray-100 px-4 py-2 flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start rounded-md cursor-pointer"
      >
        <h1 className="text-base sm:text-lg font-semibold">
          All Categories
        </h1>
        <img
          src={Arrow}
          alt="caret"
          className={`w-4 h-4 transform transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-10">
          <ul className="py-1">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Technology</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Business</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Health</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Education</li>
          </ul>
        </div>
      )}
    </div>
  );
}
