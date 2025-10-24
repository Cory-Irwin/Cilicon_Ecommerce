import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Heart from "../../assets/bigBestDealProductCard/Heart.svg";
import Eyes from "../../assets/bestdeals/Eye.svg";
import Shopping from "../../assets/bestdeals/ShoppingCartSimple.svg";
import StarRating from "../../Components/RatingStars/fiveStarRating";
const CatProductCards = (props) => {
    return (_jsxs("div", { className: "relative   h-full text-sm", children: [_jsx("div", { className: "flex items-center p-2 justify-center", children: _jsx("img", { src: props.imageurl, alt: props.name, className: "h-40 max-w-50 object-contain" }) }), _jsxs("div", { className: "flex p-1 px-2 flex-row gap-2 items-center", children: [_jsx(StarRating, { rating: props.reviewStars || 0 }), _jsxs("p", { className: "text-gray-400 text-sm", children: ["(", props.reviewCount || 0, ")"] })] }), _jsx("div", { className: "p-1 px-2", children: _jsx("p", { className: "line-clamp-3", children: props.name }) }), _jsx("div", { className: "p-1 px-2", children: _jsxs("h1", { className: "text-xl text-green-900 font-semibold", children: ["$", props.price.toFixed(2)] }) }), _jsx("div", { className: "my-2 flex justify-center", children: _jsxs("div", { className: "flex gap-4", children: [_jsx("div", { className: "bg-yellow-400 hover:bg-yellow-200 p-4", children: _jsx("img", { src: Heart, alt: "Favorite" }) }), _jsx("div", { className: "bg-gray-200 hover:bg-gray-300 p-4 h-14", children: _jsx("button", { children: _jsx("img", { src: Shopping, alt: "Add to Cart" }) }) }), _jsx("div", { className: "bg-yellow-400 hover:bg-yellow-200 p-4", children: _jsx("img", { src: Eyes, alt: "View" }) })] }) })] }));
};
export default CatProductCards;
