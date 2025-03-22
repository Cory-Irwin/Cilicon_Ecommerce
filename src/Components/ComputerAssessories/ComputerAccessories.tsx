import React from 'react'
import BestProductCards from '../ProductCards/BestProductCards'
import alienwaredesktop from '../../assets/alienwaredesktop.png'
import extendedgamingpc from '../../assets/extendgamingpc.png'
import canonprinter from '../../assets/canonprinter.png'
const ComputerAccessories = () => {
  return (
    <div className='mx-auto max-w-screen-xl my-20 px-4'>
<div className="grid grid-cols-5 grid-rows-1  gap-4">
    <div className="col-span-4 h-20 bg-gray-200">1</div>
    <div className="row-span-2 col-start-5 bg-yellow-100">2</div>

    <div className="col-start-4 row-start- "><BestProductCards imageurl={extendedgamingpc} name='Xbox One Controller' description='no' price={99}/></div>
    <div className="col-start-3 row-start-2 "><BestProductCards imageurl={extendedgamingpc} name='Xbox One Controller' description='no' price={99}/></div>
    <div className="col-start-2 row-start-2 "><BestProductCards imageurl={extendedgamingpc} name='Xbox One Controller' description='no' price={99}/></div>
    <div className="col-start-1 row-start-2 "><BestProductCards imageurl={alienwaredesktop} name='Xbox One Controller' description='no' price={99}/></div>
    <div className="row-start-3"><BestProductCards imageurl={extendedgamingpc} name='Xbox One Controller' description='no' price={99}/></div>
    <div className="row-start-3"><BestProductCards imageurl={extendedgamingpc} name='Xbox One Controller' description='no' price={99}/></div>
    <div className="row-start-3"><BestProductCards imageurl={extendedgamingpc} name='Xbox One Controller' description='no' price={99}/></div>
    <div className="row-start-3"><BestProductCards imageurl={extendedgamingpc} name='Xbox One Controller' description='no' price={99}/></div>

    <div className="row-start-3 bg-red-200">11</div>
</div>
</div>
  )
}

export default ComputerAccessories