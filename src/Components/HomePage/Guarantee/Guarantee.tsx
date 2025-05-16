import React from 'react'
import Package from '../../../assets/Guarentee/Package.svg'
import Trophy from '../../../assets/Guarentee/Trophy.svg'
import Card from '../../../assets/Guarentee/CreditCard.svg'
import Headphone from '../../../assets/Guarentee/Headphones.svg'
import Line from '../../../assets/Guarentee/Line 4.svg'
const Guarantee = () => {
  return (
    <div className='relative z-10 bg-white  p-4 text-black max-w-screen-xl mx-auto px-4  flex'>
      <div className='flex flex-row gap-12 border-2 border-solid  border-gray-200 h-30 w-full items-center justify-center'>
        <div className='bg-white p-1 gap-2 flex justify-between'>
          <div>
              <img src={Package} alt="" />
            </div> 
            <div className=''>
            <h1>FAST DELIVERY</h1>
            <p className='text-gray-400'>Delivery in 24/7</p>
            </div>
           
        </div> 
        <div>
               <img src={Line} alt="" />
        </div>
        <div className='bg-white p-1 gap-5 flex items-center justify-between'>
          <div>
            <img src={Trophy} alt="" />
          </div>
          <div>
            <h1>24 HOURS RETURN</h1>
            <p className='text-gray-400'>100% Money back Guarentee</p>
          </div>
        </div>
        <div>
               <img src={Line} alt="" />
        </div>
        <div className='bg-white p-1 gap-5 flex items-center justify-between'>
        <div>
            <img src={Card} alt="" />
          </div>
          <div>
            <h1>SECURE PAYMENT</h1>
            <p className='text-gray-400'>Your money is safe</p>
          </div>
        </div>
        <div>
              <img src={Line} alt="" />
        </div>
        <div className='bg-white p-1  gap-5 flex items-center justify-between'>
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
