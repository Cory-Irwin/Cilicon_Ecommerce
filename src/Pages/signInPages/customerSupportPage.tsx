
import Footer from '../../Components/HomePage/Footer/Footer'
import Categories from '../../Components/HomePage/Categories/Categories'
import Header from '../../Components/HomePage/Header/Header'
import BlackFriday from '../../Components/HomePage/BlackFriday/BlackFriday'
import Penguin1 from '../../assets/PenguinCrew/penguin.jpg'
import Penguin2 from '../../assets/PenguinCrew/penguin1.webp'
import Penguin3 from '../../assets/PenguinCrew/penguin2.jpg'
import Penguin4 from '../../assets/PenguinCrew/penguin3.jpg'
import Penguin5 from '../../assets/PenguinCrew/penguin4.jpg'
import Penguin6 from '../../assets/PenguinCrew/penguin5.png'
import Penguin7 from '../../assets/PenguinCrew/penguin6.jpg'
import Penguin8 from '../../assets/PenguinCrew/penguin7.webp'
import icon1 from '../../assets/CustomerSupport/icon1.svg'
import icon2 from '../../assets/CustomerSupport/icon2.svg'

const customerSupport = () => {
  return (<>
    <BlackFriday />
    <Header />
    <Categories />

    <div className="mx-auto max-w-screen-xl  my-20 px-4 ">
      <div className='flex justify-between'>
        <div className=''>

          <div className='bg-yellow-200'>
            <h1>Help Center</h1>
          </div>
          <h1>How we can help you!</h1>
        </div>
        <div>

        </div>
        <div>
          <img src={Penguin1} alt="" />
        </div>
      </div>



      <div className="grid grid-cols-4 grid-rows-3 gap-4   ">
        <div className="col-span-4 ">
          <h1 className='flex justify-center text-4xl'>What can we assist you with today?</h1>
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

      <div className="grid grid-cols-3 grid-rows-2 gap-4">
        <div className="col-span-3">
          <div className='flex text-center text-4xl justify-center py-10'>
            <h1>Popular Topics</h1>
          </div>
        </div>
        <div className="row-start-2">
          <p>How do I return my item?
          </p>
          <p>What is Clicons Returns Policy?
          </p>
          <p>How long is the refund process?
          </p>
        </div>
        <div className="row-start-2">
          <p>What are the 'Delivery Timelines'?</p>
          <p>What is 'Discover Your Daraz Campaign 2022'?</p>
          <p>What is the Voucher & Gift Offer in this Campaign?</p>
        </div>
        <div className="row-start-2">
          <p>How to cancel Clicon Order.</p>
          <p>Ask the Digital and Device Community</p>
          <p>How to change my shop name?</p>
        </div>
      </div>
</div>
    <div className='bg-gray-200 p-12 '>
      <div>
        <div className="mx-auto max-w-screen-xl  my-20 px-4 ">
          <div className='flex justify-center shadow-md items-center'>
            <div className=' '>
              <div><h1>Didn't find your answer?</h1></div>
              <div><h1>Contact Us</h1></div>
            </div>
          </div>
          <div className="grid grid-cols-2 grid-rows-1 gap-24">
            <div className='bg-white'>
              <div><img src={icon1} alt="" /></div>
              <div ><h1>Call Us now</h1></div>
              <div><p>we are available online from 9:00 AM to 5:00 PM (GMT95:45) Talk with use now</p></div>
              <div><p>+1-202-555-0126</p></div>
              <div><button className='bg-blue-500 p-2'>Call Now</button></div>
            </div>
            <div className='bg-white ' >
              <div><img src={icon1} alt="" /></div>
              <div><h1>Chat with Us</h1></div></div>
          </div>
        </div>
      </div>  </div>
    <Footer />
  </>
  )
}

export default customerSupport