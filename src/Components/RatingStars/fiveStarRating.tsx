import React from "react";
import { Star } from "lucide-react";

type ProductRatingProps = {
  rating: number; // Ex: 4.2
  maxStars?: number; // Defaults to 5
};

const ProductRating: React.FC<ProductRatingProps> = ({
  rating,
  maxStars = 5,
}) => {
  return (
    <div className="flex items-center space-x-1">
      {Array.from({ length: maxStars }, (_, index) => {
        const starValue = index + 1;

        let fillClass = "stroke-gray-300";
        if (rating >= starValue) {
          fillClass = "fill-yellow-400 stroke-yellow-500";
        } else if (rating >= starValue - 0.5) {
          fillClass = "fill-yellow-400 stroke-yellow-500"; // Treat as half if needed
        }

        return <Star key={starValue} className={`w-5 h-5 ${fillClass}`} />;
      })}
    </div>
  );
};

export default ProductRating;
