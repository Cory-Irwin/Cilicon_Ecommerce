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
        <div className="flex p-1  px-2 flex-row gap-2">
          <p>{props.reviewStars}</p>
          <p className="text-gray-400">({props.reviewCount})</p>
        </div>
        <div className="p-1 px-2">
          <p className="line-clamp-3 ">{props.name}</p>
        </div>
        <div className="  p-1 px-2">
  <h1 className="absolute bottom-2 left-2 text-xl text-green-900 font-extrabold">
    ${props.price}
  </h1>
</div>

      </div>
    </>
  );
};

export default CatProductCards;
