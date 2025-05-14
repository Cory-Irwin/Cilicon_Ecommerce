import arrow from "../../assets/shopwithcat/ArrowRight.svg";
type FullProductCards = {
  imageurl: string;
  price: number;
  title: string;
  linkUrl: string;
  tagText?: string;
  reviewStars?: number;
  reviewCount?: number;
  savings: string;
};

const FullProductCards = (props: any) => {
  return (
    <div className="flex justify-between p-2 px-20 items-center">
      <div className="">
        <div className="bg-yellow-400 p-2 w-60 text-center">
          <h1 className="text-2xl font-semibold text-black">{props.savings}</h1>
        </div>
        <h1 className="text-6xl text-white font-extrabold  mt-5">
          {props.name}
        </h1>
        <h2 className="font-bold text-2xl text-white mt-4">
          {props.description}
        </h2>
        <div className="flex relative left-135 bottom-35 bg-yellow-400 p-4 text-center justify-center 
        w-28 h-28 border-4 border-white items-center rounded-full">
          <h3 className="font-bold text-3xl text-center text-black">
            ${props.price}
          </h3>
        </div>
        <div></div>{" "}
        <div className="flex flex-row gap-6">
          {" "}
          <div className="w-30 h-30 relative bottom-15 bg-gray-400 rounded-full"></div>
          <div className="w-30 h-30 relative bottom-15 bg-gray-100 rounded-full"></div>
          <div className="w-30 h-30 relative bottom-15 bg-gray-900 rounded-full"></div>
        </div>
        <div className="p-6 bg-yellow-400 w-60 gap-4  justify-center h-20 items-center flex flex-row text-xl text-white ">
          <div className="">
            {" "}
            <a href="">
              <h1 className="text-center font-extrabold">SHOP NOW</h1>
            </a>
          </div>
          <div>
            {" "}
            <img src={arrow} alt="" className="w-10" />{" "}
          </div>
        </div>
      </div>
      <div>
        <img src={props.imageurl} alt="" className="h-150 w-200" />
      </div>
    </div>
  );
};

export default FullProductCards;
