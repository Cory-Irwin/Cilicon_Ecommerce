
import StarRating from "../../Components/RatingStars/fiveStarRating";

type FeaturedProductCards = {

  imageurl: string;
  price: number;
  title: string;
  linkUrl: string;
  tagText?: string;
  reviewStars?: number;      
  reviewCount?: number;
};
const FeaturedProductCards = (props: any) => {
  return (
    <>
      {/* <div className="flex flex-start relative p-2 gap-12 flex-row-reverse">
        <div className="bg-blue-500 p-2 text-white w-25 ">
          <button>Add To Cart</button>
        </div>  </div> */}
      <div className="  border-2 relative border-gray-100 w-56 h-85">
        <div className="items-center flex  flex-col p-2  justify-center">
          <div className="">
            <img
              src={props.imageurl}
              alt=""
              className="h-40 max-w-50  object-contain"
            />
          </div>{" "}
        </div>
        <div className="flex p-1  px-2 flex-row gap-2">
          <StarRating rating={props.reviewStars || 0} />
          <p className="text-gray-400">({props.reviewCount})</p>
        </div>
        <div className="p-1 px-2">
          <p className="line-clamp-3">{props.name}</p>
        </div>
        <div className="  p-1 px-2">
  <h1 className="absolute bottom-2 left-2 text-xl text-green-900 font-semibold">
    ${props.price}
  </h1>
</div>

      </div>
    </>
  );
};

export default FeaturedProductCards;
