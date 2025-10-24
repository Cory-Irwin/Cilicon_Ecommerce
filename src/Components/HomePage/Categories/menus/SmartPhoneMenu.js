import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Flashcard from "../../../ProductCards/flashcard";
import Smartphone from "../../../../assets/misc/iphone.png";
import CategoriesMainAdvertCard from "../../Categories/categoriesMainAdvertCard";
export default function SmartPhoneMenu() {
    return (_jsxs("div", { className: "flex justify-between", children: [_jsx("div", { className: "", children: _jsxs("ul", { className: "flex flex-col", children: [_jsx("li", { className: "px-4 py-2 hover:bg-gray-100", children: "All" }), _jsx("li", { className: "px-4 py-2 hover:bg-gray-100", children: "Category 2" }), _jsx("li", { className: "px-4 py-2 hover:bg-gray-100", children: "Category 3" })] }) }), _jsxs("div", { className: "flex flex-col gap-2 justify-center ", children: [_jsx("h1", { children: "Featured Products" }), _jsx(Flashcard, { imageurl: Smartphone, name: "Samsung Galaxy S21 5G", description: "8K video, 120Hz AMOLED, 64MP camera.", price: 799.99 }), _jsx(Flashcard, { imageurl: Smartphone, name: "Samsung Galaxy S21 5G", description: "8K video, 120Hz AMOLED, 64MP camera.", price: 799.99 }), _jsx(Flashcard, { imageurl: Smartphone, name: "Samsung Galaxy S21 5G", description: "8K video, 120Hz AMOLED, 64MP camera.", price: 799.99 })] }), _jsx("div", { children: _jsx(CategoriesMainAdvertCard, {}) })] }));
}
