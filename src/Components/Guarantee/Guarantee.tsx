import React from 'react'

const Guarantee = () => {
  return (
    <div className='relative z-10 bg-white my-5 p-5 text-black max-w-screen-xl mx-auto px-4  flex'>
      <div className='grid grid-cols-7 gap-4 border-2 border-solid h-20 w-full text-center items-center justify-center'>
        <div className='bg-white'>
          <div>
            <h1>Fast Delivery</h1>
            <p>Delivery in 24/7</p>
            </div>
        </div>
        <div>
              <h1>|</h1>
        </div>
        <div className='bg-white'>
          <div>
            <h1>24 HOURS RETURN</h1>
            <p>100% Money back Guarentee</p>
          </div>
        </div>
        <div>
              <h1>|</h1>
        </div>
        <div className='bg-white'>
          <div>
            <h1>Secure Payment</h1>
            <p>Your money is safe</p>
          </div>
        </div>
        <div>
              <h1>|</h1>
        </div>
        <div className='bg-white'>
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
