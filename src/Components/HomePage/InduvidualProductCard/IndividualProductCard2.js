import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ShopDescription from "../../ProductCards/ShopPageProductCard/shopPageitem";
import ShopMainItem from "../../ProductCards/ShopPageProductCard/shopPageMainItem";
const IndividualProductCard2 = () => {
    return (_jsx("div", { className: "mx-auto max-w-screen-xl my-10 px-4", children: _jsxs("div", { className: "grid grid-cols-2 grid-rows-1 gap-4", children: [_jsx(ShopMainItem, {}), _jsx(ShopDescription, { name: "2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray", price: 1600, originalPrice: 1999, ratingStars: 4.7, discount: 21, Availability: "In Stock", brand: "Apple", Category: "Electronic Devices", sku: "A264671", feedback: 120, reviewStars: 4.6, reviewCount: 110 })] }) }));
};
export default IndividualProductCard2;
