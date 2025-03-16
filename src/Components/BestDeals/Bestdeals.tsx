import React from 'react'

const Bestdeals = () => {
  return (
    <section className='w-full bg-white left-0 z-40 '>
      <div className='max-w-screen-xl mx-auto px-4 py-2 flex justify-between items-center'>

        {/* Categories Section */}
        <div className=' p-2 '>
          <h1 className="text-xl font-semibold">Best Deals</h1>
          <h1>Deals end in 10 Days</h1>
        </div>
        {/* Contact Info */}
        <div>
          <h1 className=''>See More...</h1>
        </div>
      </div>

      <div className='mx-auto max-w-screen-xl  px-4'>
        <div className="grid grid-flow-col grid-rows-5 gap-2">
        <div className="... row-span-4 h-100 bg-blue-500 shadow-md">01</div>
        <div className="... row-span-2 bg-gray-500">02</div>
        <div className="... row-span-2 bg-gray-500">02</div>
        <div className="... row-span-2 bg-gray-500">03</div>
        <div className="... row-span-2 bg-gray-500">03</div>

        <div className="... row-span-2 bg-gray-500">03</div>

        <div className="... row-span-2 bg-gray-500">03</div>

        <div className="... row-span-2 bg-gray-500">03</div>

        <div className="... row-span-2 bg-gray-500">03</div>
      </div>

      </div>
  </section>
  )
}

export default Bestdeals