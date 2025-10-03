import React from 'react'
import Package from '../../../assets/Guarentee/Package.svg'
import Trophy from '../../../assets/Guarentee/Trophy.svg'
import Card from '../../../assets/Guarentee/CreditCard.svg'
import Headphone from '../../../assets/Guarentee/Headphones.svg'
import Line from '../../../assets/Guarentee/Line 4.svg'
const Guarantee = () => {
  return (
    <div className='relative z-10 bg-white  p-4 text-black max-w-screen-xl mx-auto px-4  flex'>
      <div className='flex flex-row flex-wrap gap-12 sm:p-8 sm:h-100 sm:justifiy-center sm:border-2  lg:border-2 lg:border-solid 
       border-gray-200 lg:h-25 lg:w-full lg:p-2 lg:items-center lg:justify-evenly'>
        <div className='bg-white p-1 gap-5 lg:w-1/5 sm:w-1/2 flex lg:items-center lg:justify-between'>
          <div>
            <img src={Package} alt="" />
          </div>
          <div className=''>
            <h1>FAST DELIVERY</h1>
            <p className='text-gray-400'>Delivery in 24/7</p>
          </div>
          <div className='sm:hidden lg:visible'>
            <img src={Line} alt="" className='' />
          </div>
        </div>

        <div className='bg-white p-1 gap-5 lg:w-1/5 sm:w-1/2  flex lg:items-center lg:justify-between'>
          <div>
            <img src={Trophy} alt="sm:hidden" />
          </div>
          <div>
            <h1>24 HOURS RETURN</h1>
            <p className='text-gray-400'>100% Money back Guarentee</p>
          </div>

        <div>
          <img src={Line} alt=" sm:hidden" />
        </div>
        </div>

        <div>
          <img src={Line} alt="" className='sm:hidden' />
        </div>
        <div className='bg-white p-1 lg:w-1/5 sm:w-1/2 gap-5 flex lg:items-center lg:justify-between'>
          <div>
            <img src={Card} alt="" />
          </div>
          <div>
            <h1>SECURE PAYMENT</h1>
            <p className='text-gray-400'>Your money is safe</p>
          </div>
        </div>

        <div>
          <img src={Line} alt="sm:hidden" />
        </div>
        <div className='bg-white p-1 lg:w-1/5 sm:w-1/2 gap-5 flex lg:items-center lg:justify-between'>
          <div>
            <img src={Headphone} alt="" />
          </div>
          <div>
            <h1>SUPPORT 24/7</h1>
            <p className='text-gray-400'>Live contact/message </p>
            
          </div>
          
        </div>
      </div>



      
    </div>

    
  )
}

export default Guarantee
