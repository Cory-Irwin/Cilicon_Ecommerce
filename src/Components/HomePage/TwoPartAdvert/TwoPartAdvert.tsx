import React from 'react';
import HalfProductCard from '../../ProductCards/HalfProductCard'; 
import HalfProductCardBlack from '../../ProductCards/HalfProductCardBlack'; 
import ipodmini from '../../../assets/misc/podmini.svg';
import Iphone from '../../../assets/misc/iphone.png';

const TwoPartAdvert = () => {
  return (
    <div className="mx-auto max-w-screen-xl my-20 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* iPod Mini Ad */}
      
          <HalfProductCard
            imageurl={ipodmini}
            name="New Apple HomePod Mini"
            description="Jam-packed with innovation, HomePod mini delivers unexpectedly powerful sound."
          />
       

        {/* Xiaomi Ad */}
        <div className='bg-black text-white'>
          <HalfProductCardBlack
            imageurl={Iphone}
            name="iPhone 16 12GB+256GB"
            description="Powerful performance and sleek design at an unbeatable price."
          />
        </div>
      </div>
    </div>
  );
};

export default TwoPartAdvert;
