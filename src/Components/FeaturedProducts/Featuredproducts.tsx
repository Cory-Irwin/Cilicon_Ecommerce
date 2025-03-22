import React from 'react'
import BestProductCards from '../ProductCards/BestProductCards'
import Controller from '../../assets/IMAC.png'
const Featuredproducts = () => {
  return (
    <div className='mx-auto max-w-screen-xl my-20 px-4'>

        <div className="grid grid-cols-5 grid-rows-3 gap-4">
            <div className="row-span-3 bg-yellow-200"></div>
            <div className="col-span-4 bg-gray-400"></div>
            <div className="col-span-1 bg-gray-400"><BestProductCards imageurl={Controller} name='Xbox One Controller' description='no' price={99}/></div>
            <div className="col-span-1 bg-gray-400"><BestProductCards imageurl={Controller} name='Xbox One Controller' description='no' price={99}/></div>
            <div className="col-span-1 bg-gray-400"><BestProductCards imageurl={Controller} name='Xbox One Controller' description='no' price={99}/></div>
            <div className="col-span-1 bg-gray-400"><BestProductCards imageurl={Controller} name='Xbox One Controller' description='no' price={99}/></div>
            <div className="col-span-1 bg-gray-400"><BestProductCards imageurl={Controller} name='Xbox One Controller' description='no' price={99}/></div>
            <div className="col-span-1 bg-gray-400"><BestProductCards imageurl={Controller} name='Xbox One Controller' description='no' price={99}/></div>
            <div className="col-span-1 bg-gray-400"><BestProductCards imageurl={Controller} name='Xbox One Controller' description='no' price={99}/></div>
            <div className="col-span-1 bg-gray-400"><BestProductCards imageurl={Controller} name='Xbox One Controller' description='no' price={99}/></div>
            
           
           

        </div>
    
      </div>

  )
}

export default Featuredproducts