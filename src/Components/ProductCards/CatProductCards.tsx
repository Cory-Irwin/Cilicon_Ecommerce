import Heart from "../../assets/bigBestDealProductCard/Heart.svg";
import Eyes from "../../assets/bestdeals/Eye.svg";
import Shopping from "../../assets/bestdeals/ShoppingCartSimple.svg";
import StarRating from "../../Components/RatingStars/fiveStarRating";

type CatProductCardsProps = {
  imageurl: string;
  price: number;
  name: string;
  reviewStars?: number;      
  reviewCount?: number;
};

const CatProductCards = (props: CatProductCardsProps) => {
  return (
    <div className="relative   h-full text-sm">
      <div className="flex items-center p-2 justify-center">
        <img
          src={props.imageurl}
          alt={props.name}
          className="h-40 max-w-50 object-contain"
        />
      </div>

      <div className="flex p-1 px-2 flex-row gap-2 items-center">
        <StarRating rating={props.reviewStars || 0} />
        <p className="text-gray-400 text-sm">({props.reviewCount || 0})</p>
      </div>

      <div className="p-1 px-2">
        <p className="line-clamp-3">{props.name}</p>
    
      </div>

      <div className="p-1 px-2">
        <h1 className="text-xl text-green-900 font-semibold">
          ${props.price.toFixed(2)}
        </h1>
      </div>

      <div className="my-2 flex justify-center">
        <div className="flex gap-4">
          <div className="bg-yellow-400 hover:bg-yellow-200 p-4">
            <img src={Heart} alt="Favorite" />
          </div>
          <div className="bg-gray-200 hover:bg-gray-300 p-4 h-14">
            <button>
              <img src={Shopping} alt="Add to Cart" />
            </button>
          </div>
          <div className="bg-yellow-400 hover:bg-yellow-200 p-4">
            <img src={Eyes} alt="View" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatProductCards;
