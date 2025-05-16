import Footer from '../../Components/HomePage/Footer/Footer'
import Categories from '../../Components/HomePage/Categories/Categories'
import Header from '../../Components/HomePage/Header/Header'
import BlackFriday from '../../Components/HomePage/BlackFriday/BlackFriday'
import PresidentBuisness from '../../assets/misc/presidentbuisness.svg'
import Banner from '../../assets/AboutUs/Banner.svg'
import Penguin1 from '../../assets/PenguinCrew/penguin.jpg'
import Penguin2 from '../../assets/PenguinCrew/penguin1.webp'
import Penguin3 from '../../assets/PenguinCrew/penguin2.jpg'
import Penguin4 from '../../assets/PenguinCrew/penguin3.jpg'
import Penguin5 from '../../assets/PenguinCrew/penguin4.jpg'
import Penguin6 from '../../assets/PenguinCrew/penguin5.png'
import Penguin7 from '../../assets/PenguinCrew/penguin6.jpg'
import Penguin8 from '../../assets/PenguinCrew/penguin7.webp'
import FlashSale from '../../Components/HomePage/FlashSale/Flashsale'
import Newsletter from '../../Components/HomePage/Newsletter/Newsletter'
const aboutUsPage = () => {
  return (<> <BlackFriday />
    <Header />
    <Categories />
    <div className="mx-auto max-w-screen-xl my-20 px-4 ">
      <div className="grid grid-cols-2 grid-rows-1 gap-4">
        <div className='justify-center items-center bg-blue-500'>
          <h1>Appy-Largest Electronics retail shop</h1>
          <p className=''>At appys shop, you will recieve the best possible support when
            finding electronic items. You will be able to order and track all
            products at their fastest possible shipping.
          </p>
          <div>
            <p>Great 24/7 Customer Service</p>
            <p>600+ Dedicated Employees</p>
            <p>60+ Branches Worldwide</p>
            <p>Over 1 Million Electronic Products</p>
          </div>
        </div>

        
          <div className='bg-red-500'>
            <img src={PresidentBuisness} alt="" className='w-100 flex flex-end h-100' />
          </div>
      </div>
      <div>

        <div className="grid grid-cols-4 grid-rows-3 gap-4   ">
          <div className="col-span-4 ">
            <h1 className='flex justify-center text-4xl'>Our Core Team</h1>
          </div>

          <div className=' flex col row-start-2 border-1 border-gray-100'>
            <div>
              <img src={Penguin1} className='rounded-full w-20 h-20   flex' alt="" />
            </div>
            <div>
              <h1 className='justify-between'>Appy Store</h1>
              <p>Category Manager</p>
            </div>
          </div>



          <div className=' flex col row-start-2 border-1 border-gray-100'>
            <div>
              <img src={Penguin2} className='rounded-full w-20 h-20   flex' alt="" />
            </div>
            <div>
              <h1 className='justify-between'>Appy Store</h1>
              <p>Category Manager</p>
            </div>
          </div>
          <div className=' flex col row-start-2 border-1 border-gray-100'>
            <div>
              <img src={Penguin3} className='rounded-full w-20 h-20   flex' alt="" />
            </div>
            <div>
              <h1 className='justify-between'>Appy Store</h1>
              <p>Category Manager</p>
            </div>
          </div>
          <div className=' flex col row-start-2 border-1 border-gray-100'>
            <div>
              <img src={Penguin4} className='rounded-full w-20 h-20   flex' alt="" />
            </div>
            <div>
              <h1 className='justify-between'>Appy Store</h1>
              <p>Category Manager</p>
            </div>
          </div>
          <div className=' flex col row-start-3 border-1 border-gray-100'>
            <div>
              <img src={Penguin5} className='rounded-full w-20 h-20   flex' alt="" />
            </div>
            <div>
              <h1 className='justify-between'>Appy Store</h1>
              <p>Category Manager</p>
            </div>
          </div>
          <div className=' flex col row-start-3 border-1 border-gray-100'>
            <div>
              <img src={Penguin6} className='rounded-full w-20 h-20   flex' alt="" />
            </div>
            <div>
              <h1 className='justify-between'>Appy Store</h1>
              <p>Category Manager</p>
            </div>
          </div> <div className=' flex col row-start-3 border-1 border-gray-100'>
            <div>
              <img src={Penguin7} className='rounded-full w-20 h-20   flex' alt="" />
            </div>
            <div>
              <h1 className='justify-between'>Appy Store</h1>
              <p>Category Manager</p>
            </div>
          </div> <div className=' flex col row-start-3 border-1 border-gray-100'>
            <div>
              <img src={Penguin8} className='rounded-full w-20 h-20   flex' alt="" />
            </div>
            <div>
              <h1 className='justify-between'>Appy Store</h1>
              <p>Category Manager</p>
            </div>
          </div>
        </div>

      </div>
      <div className='py-20'>
        <img src={Banner} alt="" />
      </div>
      <FlashSale/>
      <Newsletter/>
      <Footer />
    </div>
  </>
  )
}

export default aboutUsPage