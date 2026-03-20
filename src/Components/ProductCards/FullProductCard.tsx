import arrow from "../../assets/LandingPage/ArrowRight.svg";
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
    <div className="flex flex-col lg:flex-row p-5 px-20 items-center">
      
      <div className="flex  items-center lg:items-start flex-col">
        {/* Savings up Box */}
        <div className="bg-blue-400 p-2 w-65  text-center">
          <h1 className="text-2xl font-semibold text-white">{props.savings}</h1>
        </div>
        <h1 className="text-6xl text-white font-extrabold  mt-5">{props.name}</h1>
        <h2 className="font-bold pb-5 text-2xl text-white text-center lg:text-start mt-4">{props.description}</h2>
        {/* Rounded Price Label */}
        
        {/* Shop Now Button */}
        <div className="p-2  bg-yellow-400 hover:bg-yellow-200
         w-60 gap-4  justify-center h-15 items-center flex flex-row text-xl text-white ">
          <div className="">
            {" "}
            <a href="">
              <h1 className="text-center text-black font-extrabold">
                SHOP NOW
              </h1>
            </a>
          </div>
          <div>
            {" "}
            <img src={arrow} alt="" className="w-10" />{" "}
          </div>
        </div>
        {/* Colour Selectors x3 */}
        <div className="flex lg:flex-row pt-20 gap-6">
          {" "}
          <div className="w-30 h-30 relative bottom-15 bg-gray-400 hover:border-teal-500 hover:border-6 rounded-full"></div>
          <div className="w-30 h-30 relative bottom-15 bg-gray-100 hover:border-teal-500 hover:border-6 rounded-full"></div>
          <div className="w-30 h-30 relative bottom-15 bg-gray-900 hover:border-teal-500 hover:border-6 rounded-full"></div>
        </div>
        
      </div>

      {/* Big Image */}
        <div className="flex relative">

        <div className="">
        <div className="flex absolute lg:right-100 lg:bottom-60  right-120 bottom-75 border-6 border-teal-900
         bg-yellow-400 p-4 text-center justify-center w-25 h-25  items-center rounded-full">
          <h3 className=" text-2xl text-center text-black">${props.price}</h3>
        </div>
          <img src={props.imageurl} alt="" className="h-auto object-contain w-150" />

        </div>
        </div>
    </div>
  );
};

export default FullProductCards;
