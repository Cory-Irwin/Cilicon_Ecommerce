import React from 'react'
import BestProductCards from '../ProductCards/BestProductCards'
import alienwaredesktop from '../../assets/alienwaredesktop.png'
import extendedgamingpc from '../../assets/extendgamingpc.png'
import canonprinter from '../../assets/canonprinter.png'
import xaomiairpods from '../../assets/AIRPHONESXAOMI.svg'
const ComputerAccessories = () => {
  return (
    <div className='mx-auto max-w-screen-xl  my-20 px-4'>
      <div className="grid grid-cols-5 grid-rows-1  gap-4">
        <div className="col-span-4 ">
          <div className="col-span-4 row-span-1 flex items-center justify-between px-4 shadow-md">
            <h1 className="text-xl font-bold">Computer Accessories</h1>

            {/* Product Categories */}
            <div className="flex items-center gap-6 text-sm">
              <h1>All Products</h1>
              <h1>Smart Phone</h1>
              <h1>Laptop</h1>
              <h1>Headphones</h1>
              <h1>TV</h1>
              <h1 className="font-semibold text-blue-600">Browse All Products</h1>
            </div>
          </div>
        </div>
        <div className="row-span-2 col-start-5  bg-yellow-400">
          <div>
            <img src={xaomiairpods} alt="" />
          </div>
        </div>

        <div className="col-start-4 row-start-2 "><BestProductCards imageurl={extendedgamingpc} name='Xbox One Controller' description='no' price={99} /></div>
        <div className="col-start-3 row-start-2 "><BestProductCards imageurl={extendedgamingpc} name='Xbox One Controller' description='no' price={99} /></div>
        <div className="col-start-2 row-start-2 "><BestProductCards imageurl={extendedgamingpc} name='Xbox One Controller' description='no' price={99} /></div>
        <div className="col-start-1 row-start-2 "><BestProductCards imageurl={alienwaredesktop} name='Xbox One Controller' description='no' price={99} /></div>
        <div className="row-start-3"><BestProductCards imageurl={extendedgamingpc} name='Xbox One Controller' description='no' price={99} /></div>
        <div className="row-start-3"><BestProductCards imageurl={extendedgamingpc} name='Xbox One Controller' description='no' price={99} /></div>
        <div className="row-start-3"><BestProductCards imageurl={extendedgamingpc} name='Xbox One Controller' description='no' price={99} /></div>
        <div className="row-start-3"><BestProductCards imageurl={extendedgamingpc} name='Xbox One Controller' description='no' price={99} /></div>

        <div className="row-start-3 bg-blue-900">11</div>
      </div>
    </div>
  )
}

export default ComputerAccessories