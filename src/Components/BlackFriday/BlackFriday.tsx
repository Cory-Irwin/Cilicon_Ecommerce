import React from 'react';

const BlackFriday = () => {
  return (
    <section className='w-full bg-black  top-0 left-0 z-50'>
      <div className='max-w-screen-xl mx-auto px-4 py-2 flex justify-between items-center
       text-white'>
        {/* Logo Section */}
        <div className='flex gap-2 items-center '>
          <h1 className='text-black bg-red-400 text-2xl -rotate-12 px-2 py-1'>Black</h1>
          <h1 className='text-white text-2xl'>Friday</h1>
        </div>

        {/* Discount Section */}
        <div className='flex gap-2 text-2xl items-center'>
          <h1 className='text-white text-sm'>Up to</h1>
          <h1 className='text-red-400 text-5xl font-bold'>59%</h1>
          <h1 className='text-white text-lg'>OFF</h1>
        </div>

        {/* CTA Section */}
        <a href="/shop" className='cursor-pointer ' aria-label="Shop now">
         <div className='bg-red-400 px-6 p-2'>
           <h1 className='text-2xl font-bold text-black '>Shop now -{'>'}</h1>
         </div>
        </a>
      </div>
    </section>
  );
};

export default BlackFriday;
