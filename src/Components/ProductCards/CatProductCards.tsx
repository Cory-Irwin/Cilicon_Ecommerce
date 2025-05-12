import Heart from "../../assets/bigBestDealProductCard/Heart.svg";
import Eyes from "../../assets/bestdeals/Eye.svg";

type CatProductCards = {
  imageurl: string;
  price: number;
  title: string;
  linkUrl: string;
  tagText?: string;
  reviewStars?: string;
  reviewCount?: number;
};

const CatProductCards = (props: any) => {
  return (
    <>
      <div className="   relative w-56 h-85">
        <div className="items-center flex  flex-col p-2  justify-center">
          <div className="">
            <img
              src={props.imageurl}
              alt=""
              className="h-40 max-w-50  object-contain"
            />
          </div>{" "}
        </div>
        {/* <div className="flex p-1  px-2 flex-row gap-2">
          <p>{props.reviewStars}</p>
           <p className="text-gray-400">({props.reviewCount})</p>
        </div> */}
        <div className="p-1 px-2">
          <p className="line-clamp-3 ">{props.name}</p>
        </div>
        <div className="flex justify-center p-4">
          <div className="p-4 flex items-center  h-15  w-55 justify-center">
            <div className="flex flex-row justify-center mt-5  w-full gap-3 ">
              <div className="bg-yellow-400   p-4">
                <img src={Heart} alt="" />
              </div>
              <div className="bg-blue-500  text-white font-bold justify-center items-center p-4 ">
                <button>
                  <a href="">Add to Cart</a>
                </button>
              </div>
              <div className="bg-yellow-400   p-4">
                <img src={Eyes} alt="" />
              </div>
            </div>
            <div className="  p-1  px-2">
              <h1 className="absolute top-85 left-2 text-xl text-green-900 font-semibold">
                ${props.price}
              </h1>
            </div>{" "}
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default CatProductCards;
