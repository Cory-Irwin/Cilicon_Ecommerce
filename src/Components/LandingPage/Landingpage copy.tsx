import React from 'react';
import Xbox1 from '../../assets/xbone.png'; // Ensure the path is correct
import Iphone from '../../assets/iphone.png';
import Airpods from '../../assets/airpods.webp';

const LandingpageCopy = () => {
    return (
        <div className=' mx-auto max-w-screen-xl my-auto p-70 h-100 px-4'>
          <div className=''>
            <div className="grid grid-cols-3 h-100 bg-blue-500 grid-rows-2 gap-4">
                <div className="col-span-2 row-span-2 bg-blue-500 ">1</div>
                <div className="col-start-3 bg-blue-500 ">2</div>
                <div className="col-start-3 bg-blue-500 row-start-2">3</div>
            </div>
         </div>


        </div>
    );
};

export default LandingpageCopy;
