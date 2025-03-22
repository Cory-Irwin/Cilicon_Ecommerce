import React from 'react'
import HalfProductCards from '../ProductCards/HalfProductCard'
import ipodmini from '../../assets/podmini.svg'
import Xaomi from '../../assets/xaomiphone.svg'
const TwoPartAdvert = () => {
  return (
    <div className='mx-auto max-w-screen-xl my-20 px-4'>
 <div className="grid grid-cols-2 grid-rows-1 gap-4">
    <div className="row-span-3 bg-gray-100"><HalfProductCards imageurl={ipodmini} name='IpodMini' description='no' price={99}/></div>
    <div className="row-span-3 text-white bg-gray-900"><HalfProductCards imageurl={Xaomi} name='Xaomi' description='no' price={99}/></div>
</div>
</div>
  )
}

export default TwoPartAdvert