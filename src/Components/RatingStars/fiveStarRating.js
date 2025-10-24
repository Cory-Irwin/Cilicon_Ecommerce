import { jsx as _jsx } from "react/jsx-runtime";
import { Star } from "lucide-react";
const ProductRating = ({ rating, maxStars = 5, }) => {
    return (_jsx("div", { className: "flex items-center space-x-1", children: Array.from({ length: maxStars }, (_, index) => {
            const starValue = index + 1;
            let fillClass = "stroke-gray-300";
            if (rating >= starValue) {
                fillClass = "fill-yellow-400 stroke-yellow-500";
            }
            else if (rating >= starValue - 0.5) {
                fillClass = "fill-yellow-400 stroke-yellow-500"; // Treat as half if needed
            }
            return _jsx(Star, { className: `w-5 h-5 ${fillClass}` }, starValue);
        }) }));
};
export default ProductRating;
