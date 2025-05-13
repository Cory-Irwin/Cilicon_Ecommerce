import ArrowRight from "../../assets/LandingPage/ArrowRight.svg";

type HalfProductCardProps = {
  imageurl: string;
  name: string;
  description: string;
};

const HalfProductCard: React.FC<HalfProductCardProps> = ({ imageurl, name, description }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-10  shadow-lg rounded-lg h-90">
      {/* Left Side: Text Content */}
      <div className="text-left max-w-md ">
        <div className="bg-blue-500  px-4 py-1 inline-block">
          <h2 className="text-lg font-semibold text-white">INTRODUCING NEW</h2>
        </div>
        <h1 className="text-4xl mt-3">{name}</h1>
        <p className="text-gray-500 mt-2">{description}</p>
       
      <button className="mt-4 bg-gray-200  px-5 w-50 h-15 py-2 rounded-lg font-extrabold hover:bg-gray-400">
         <div className='flex flex-row gap-8'><h1>SHOP NOW</h1>
         <img src={ArrowRight} alt="" /></div>
        </button>

      </div>

      {/* Right Side: Product Image */}
      <div className="mt-6 md:mt-0 justify-center flex items-center">
        <img src={imageurl} alt={name} className="h-150 p-2  relative  w-auto left-5  object-contain" />
      </div>
    </div>
  );
};

export default HalfProductCard; 