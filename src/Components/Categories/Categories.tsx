import React from 'react';

const Categories = () => {
  return (
    <section className='w-full bg-white  top-[200px] left-0 z-40 shadow-md'>
      <div className='max-w-screen-xl mx-auto px-4 py-2 flex justify-between items-center'>
        
        {/* Categories Section */}
        <div className='bg-gray-100 p-2'>
          <h1 className="text-lg font-semibold">All Categories</h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex gap-x-8 text-sm uppercase">
          <a href="#" className="hover:text-gray-400">Solutions ▾</a>
          <a href="#" className="hover:text-gray-400">Zero-Loss Failover</a>
          <a href="#" className="hover:text-gray-400">Multi-Tenant</a>
          <a href="#" className="hover:text-gray-400">Enterprise NNI</a>
        </nav>

        {/* Contact Info */}
        <div><h1 className=''>+1-202-555-0104</h1></div>
      
      </div>
    </section>
  );
}

export default Categories;
