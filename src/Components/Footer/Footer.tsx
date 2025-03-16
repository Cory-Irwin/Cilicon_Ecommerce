import React from 'react'

const  Footer = () => {
  return (
    <div className='items-center h-100 bg-gray-500'>
        <div className="grid grid-cols-5 grid-rows-1 gap-4">
            <div >1</div>
            <div >2</div>
            <div >3</div>
            <div className="col-start-5 row-start-1">4</div>
            <div className="col-start-4 row-start-1">5</div>
        </div>
    </div>
  )
}

export default  Footer