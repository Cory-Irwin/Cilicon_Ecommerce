import React from 'react'
import Package from '../../assets/Guarentee/Package.svg'
import Trophy from '../../assets/Guarentee/Trophy.svg'
import Card from '../../assets/Guarentee/CreditCard.svg'
import Headphone from '../../assets/Guarentee/Headphones.svg'
const Guarantee = () => {
  return (
    <div className='relative z-10 bg-white my-5 p-4 text-black max-w-screen-xl mx-auto px-4  flex'>
      <div className='flex flex-row gap-16 border-2 border-solid  border-gray-200 h-30 w-full items-center justify-center'>
        <div className='bg-white p-1 gap-5 flex justify-between'>
          <div>
              <img src={Package} alt="" />
            </div> 
            <div className=''>
            <h1>Fast Delivery</h1>
            <p>Delivery in 24/7</p>
            </div>
           
        </div>
        <div>
              <h1>|</h1>
        </div>
        <div className='bg-white p-1 gap-5 flex items-center justify-between'>
          <div>
            <img src={Trophy} alt="" />
          </div>
          <div>
            <h1>24 HOURS RETURN</h1>
            <p>100% Money back Guarentee</p>
          </div>
        </div>
        <div>
              <h1>|</h1>
        </div>
        <div className='bg-white p-1 gap-5 flex items-center justify-between'>
        <div>
            <img src={Card} alt="" />
          </div>
          <div>
            <h1>Secure Payment</h1>
            <p>Your money is safe</p>
          </div>
        </div>
        <div>
              <h1>|</h1>
        </div>
        <div className='bg-white p-1  gap-5 flex items-center justify-between'>
        <div>
            <img src={Headphone} alt="" />
          </div>
          <div>
            <h1>Support 24/7</h1>
            <p>Contact Anytime  </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Guarantee
