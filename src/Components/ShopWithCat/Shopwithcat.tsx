import React from 'react'
import Imac from '../../assets/IMAC.png'
import catphone from '../../assets/catphones.png'
import CatProductCards from '../ProductCards/CatProductCards'
const Shopwithcat = () => {
  return (
    <div className='mx-auto max-w-screen-xl px-4'>
         <div className="grid grid-flow-col grid-rows-1 gap-2">
         <div className="... row-span-4   shadow-md"><CatProductCards imageurl={Imac} name='Apple Products' description='no' price={99}/></div>
         <div className="... row-span-4   shadow-md"><CatProductCards imageurl={Imac} name='Smartphones' description='no' price={99}/></div>
         <div className="... row-span-4   shadow-md"><CatProductCards imageurl={Imac} name='Headphones' description='no' price={99}/></div>
         <div className="... row-span-4  shadow-md"><CatProductCards imageurl={Imac} name='Accessories' description='no' price={99}/></div>
         <div className="... row-span-4   shadow-md"><CatProductCards imageurl={Imac} name='Cameras' description='no' price={99}/></div>
         <div className="... row-span-4   shadow-md"><CatProductCards imageurl={Imac} name='TV' description='no' price={99}/></div>
         
         
         </div>
    </div>
  )
}

export default Shopwithcat