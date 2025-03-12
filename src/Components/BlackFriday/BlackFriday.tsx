import React from 'react';

const BlackFriday = () => {
  return (
    <section className='w-full bg-black fixed top-0 left-0 z-50'>
      <div className='max-w-screen-xl mx-auto px-4 py-2 flex justify-between items-center text-white'>
        {/* Logo Section */}
        <div className='flex gap-2'>
          <h1 className='text-black bg-white px-2 py-1'>Black</h1>
          <h1 className='text-white'>Friday</h1>
        </div>

        {/* Discount Section */}
        <div className='flex gap-2 items-center'>
          <h1 className='text-white'>Up to</h1>
          <h1 className='text-white text-2xl font-bold'>59%</h1>
          <h1 className='text-white'>off</h1>
        </div>

        {/* CTA Section */}
        <a href="/shop" className='cursor-pointer underline' aria-label="Shop now">
          Shop now
        </a>
      </div>
    </section>
  );
};

export default BlackFriday;
