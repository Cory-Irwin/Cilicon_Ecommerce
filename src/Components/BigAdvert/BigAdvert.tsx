import React from 'react'
import macbookpro from '../../assets/macbookpro.png'
import FullProductCards from '../ProductCards/FullProductCard'
const BigAdvert = () => {
  return (
    <div className='mx-auto max-w-screen-xl my-20 px-4'>
                
        <div className="grid grid-cols-1 h-100 grid-rows-1 gap-4">
            <div className='bg-orange-100' >
            <FullProductCards imageurl={macbookpro} name='Xbox One Controller' description='no' price={99}/>
        </div>
                     
    </div>
    </div>
  )
}

export default BigAdvert