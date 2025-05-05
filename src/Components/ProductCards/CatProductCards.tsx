type CatProductCards = {
  imageurl: string;
  price: number;
  title: string;
  linkUrl: string;
  tagText?: string;
  reviewStars?: number;
  reviewCount?: number;
};

const CatProductCards = (props: any) => {
  return (
    <>
      <div className="items-center flex flex-col p-2 justify-center ">
        <div className="">
        <img
          src={props.imageurl}
          alt=""
          className="h-40 max-w-50  object-contain"
        />
        </div>
        <p className="overflow-hidden text-ellipsis text-sm">{props.name}</p>
        <div className="bg-blue-500 p-2 text-white w-25 flex relative bottom-52 left-19">
          <button>Add To Cart</button>
        </div>
      </div>
      <div className="flex relative bottom-10 left-1 ">
        <h1 className="my-2 text-2xl text-green-300">${props.price}</h1>
      </div>
    </>
  );
};

export default CatProductCards;
