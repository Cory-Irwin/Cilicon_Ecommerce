import Imac from "../../../assets/ProductPage/Main Image Macbook.svg";
import ArrowBigLeft from "../../../assets/shopwithcat/ArrowLeft.svg";
import ArrowRight2 from "../../../assets/shopwithcat/ArrowRight.svg";

const IndividualProductCard2 = () => {
  return (
    <div className="mx-auto max-w-screen-xl my-10 px-4">
      <div className="grid grid-cols-2 grid-rows-1 gap-4">
        <div>
          <div className="border-gray-200 border-2">
            <img src={Imac} alt="" />
          </div>
          <div className="flex flex-row relative mt-5 justify-between gap-2">
            
            <div className="border-2 border-gray-200">
              <img src={Imac} alt="" className="w-35 h-auto" />
              <div className="bg-green-900 rounded-4xl h-12 w-12 flex top-3 right-150 absolute items-center justify-center">
              <img src={ArrowBigLeft} alt="" className="w-7 h-7 " />
            </div>
            </div>
            <div className="border-2 border-gray-200">
              <img src={Imac} alt="" className="w-35 h-auto" />
                </div>
                <div className="border-2 border-gray-200">
              <img src={Imac} alt="" className="w-35 h-auto" />
            </div>
            <div className="border-2 border-gray-200">
              <img src={Imac} alt="" className="w-35 h-auto" />
            </div>
            <div className="border-2 border-gray-200">
              <img src={Imac} alt="" className="w-35 h-auto" />
            </div>
            <div className="border-2 border-gray-200">
              <img src={Imac} alt="" className="w-35 h-auto" />
              <div className="bg-green-900 rounded-4xl h-12 w-12 flex absolute top-3 left-150 items-center justify-center">
                <img src={ArrowRight2} alt="" className="w-7 h-7" />
              </div>{" "}
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex flex-row gap-4">
            <div>
                <h1>4.7 Star Rating</h1>
            </div>
            <div>
              <h1>(21,671 User feedback)</h1>
            </div>
            </div>
       <div>
          <h1>2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray</h1>
        </div> </div>
        
      </div>
    </div>
  );
};

export default IndividualProductCard2;
