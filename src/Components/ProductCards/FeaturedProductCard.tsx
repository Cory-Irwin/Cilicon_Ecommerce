import StarRating from "../../Components/RatingStars/fiveStarRating";
import DiscountBadge from "../../Components/ProductCards/ProductBoxes/yellowPercentBox";

type FeaturedProductCardsProps = {
  imageurl: string;
  title: string;
  reviewStars?: number;
  reviewCount?: number;
  originalPrice?: number;
  newPrice?: number;
  description?: string;
  tagText?: string;
  linkUrl?: string;
  percentOff?: number;
};

const FeaturedProductCards = (props: FeaturedProductCardsProps) => {
  return (
    <>
      <div className="border-2 relative border-gray-100 w-56 h-85">
        <div className="items-center flex flex-col p-2 justify-center">
          <div>
            <img
              src={props.imageurl}
              alt=""
              className="h-40 max-w-50 object-contain"
            />
          </div>
        </div>

        {/* Rating Section */}
        <div className="flex p-1 px-2 flex-row gap-2">
          <StarRating rating={props.reviewStars || 0} />
          <p className="text-gray-400">({props.reviewCount})</p>
        </div>

        {/* Title */}
        <div className="p-1 px-2">
          <p className="line-clamp-3">{props.title}</p>
        </div>

        {/* Prices */}
        <div className="p-1 px-2 absolute bottom-2 left-2 flex flex-row gap-2 
        items-center">
          {props.originalPrice !== undefined && props.originalPrice > 0 && (
            <h1 className="line-through text-xl text-gray-400 font-semibold">
              ${props.originalPrice}
            </h1>
          )}

          <h1 className="text-xl text-green-900 font-semibold">
            ${props.newPrice}
          </h1>
        </div>

        {/* Discount Badge (only visible if percentOff exists) */}
        {props.percentOff && (
          <div className="absolute top-2 left-2 z-10">
            <DiscountBadge percentOff={props.percentOff} />
          </div>
        )}
      </div>
    </>
  );
};

export default FeaturedProductCards;
