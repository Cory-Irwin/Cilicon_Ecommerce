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
      <div className="flex flex-start relative p-2 flex-row-reverse">
        <div className="bg-blue-500 p-2 text-white w-25 ">
          <button>Add To Cart</button>
        </div>
      </div>
      <div className="items-center flex flex-col p-2 h- justify-center ">
        <div className="">
          <img
            src={props.imageurl}
            alt=""
            className="h-40 max-w-50  object-contain"
          />
        </div>{" "}
      </div>
      <div className="flex p-2 flex-row gap-2">
        <p>{props.reviewStars}</p>
        <p className="text-gray-400">({props.reviewCount})</p>
      </div>
<div className="p-2">
      <p className="overflow-hidden text-ellipsis text-sm ">{props.name}</p>
      </div>
      <div className="flex flex-start bottom-2 p-2 ">
        <h1 className="text-xl text-green-400  font-extrabold">${props.price}</h1>
      </div>
    </>
  );
};

export default CatProductCards;
