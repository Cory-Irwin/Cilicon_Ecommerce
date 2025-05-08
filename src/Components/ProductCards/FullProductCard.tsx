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
          <h1 className="text-2xl">{props.savings}</h1>
        </div>
        <h1 className="text-6xl text-white font-extrabold  mt-5">{props.name}</h1>
        <h2 className="font-bold text-2xl text-white mt-5">
          {props.description}
        </h2>
        <div className="flex relative left-145 bottom-40 bg-yellow-400 p-4 text-center justify-center w-28 h-28 border-4 border-white items-center rounded-full">
          <h3 className="font-bold text-3xl text-center text-black">
            ${props.price}
          </h3>
        </div>
        <div className="p-6 bg-yellow-400 w-135 gap-6  justify-center items-center flex flex-row text-6xl  text-white ">
          <div className="">
          {" "}
          <a href="">
            <h1 className="text-center font-extrabold">SHOP NOW</h1>
          </a>
        </div>
        <div>
          {" "}
          <img src={arrow} alt="" className="w-20" />{" "} 
        </div>
        </div>
      </div>
      <div>
        <img src={props.imageurl} alt="" className="h-150 w-150" />
      </div>
    </div>
  );
};

export default FullProductCards;
