import Phone from "../../../assets/misc/xaomiphone.svg"
import ArrowRight2 from "../../../assets/LandingPage/ArrowRight.svg";

const categoriesMainAdvertCard = () => {
  return (
    <div className='flex pt-8 p-4 bg-amber-200 items-center h-97 text-center flex-col'>
      <img src={Phone} alt="" className="size-30 pb-3"/>
      <h1 className="font-bold text-3xl pb-3">21% discount</h1>
      <h1 className="pb-">Escape the noise, It's time to hear the magic with Xiaomi Earbuds.</h1>
      <div className="flex text-center items-center  justify-center">
        <div className=""><h1 >Starting Price: </h1></div>
        <div className="bg-white p-2">
          <h1>$99 AUD</h1>
          </div>
      </div>
        <button className="pt-2 pb-11">
          
              <div className="mt-5 flex items-center gap-2">
                <div className="bg-white hover:bg-gray-200 flex w-70 h-15 text-center justify-center items-center px-4 py-2">
                  <h1 className="text-black font-bold mr-2">SHOP NOW</h1>
                  <img src={ArrowRight2} alt="" />
                </div>
              </div>
           
        </button>
    </div>
  )
}

export default categoriesMainAdvertCard