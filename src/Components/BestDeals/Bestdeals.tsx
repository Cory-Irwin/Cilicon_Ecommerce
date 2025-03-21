import React from 'react'
import ProductCards from '../ProductCards/ProductCards'
import Controller from '../../assets/controller.png'
import MousePad from '../../assets/Mousepad.png'
import Headphones from '../../assets/headphones.png'
import Smartphone from '../../assets/iphone.png'
import Mice from '../../assets/Mice.png'
import Ultrawide from '../../assets/ultrawide.png'
import Keyboard from '../../assets/keyboard.png'
import Charger from '../../assets/charger.png'
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

        <div className="row-span-4 h-100 bg-blue-500 shadow-md"></div>
        
        <div className="row-span-2  ">
        <ProductCards imageurl={MousePad} name='MousePad' description='no' price={500}/>
        </div>
        <div className="row-span-2 "> <ProductCards imageurl={Controller} name='Xbox One Controller' description='no' price={99}/></div>
        <div className="row-span-2 "> <ProductCards imageurl={Headphones} name='HeadPhones' description='no' price={500}/></div>
        <div className="row-span-2 "> <ProductCards imageurl={Smartphone} name='Iphone' description='no' price={500}/></div>
        <div className="row-span-2 "> <ProductCards imageurl={Charger} name='charger' description='no' price={500}/></div>

        <div className="row-span-2 "> <ProductCards imageurl={Keyboard} name='Keyboard' description='no' price={500}/></div>

        <div className="row-span-2 "> <ProductCards imageurl={Mice} name='G902 Mice' description='no' price={500}/></div>

        <div className="row-span-2 "> <ProductCards imageurl={Ultrawide} name='G9 Odessy' description='no' price={500}/></div>
       
    
      </div>

      </div>
  </section>
  )
}

export default Bestdeals