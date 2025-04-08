import React from 'react';
import BestProductCards from '../ProductCards/BestProductCards';
import Controller from '../../assets/IMAC.png';
import ComputerAccessories from '../../assets/computeraccessories.png';

const Featuredproducts = () => {
  return (
    <div className="mx-auto max-w-screen-xl my-20 px-4">
      <div className="grid grid-cols-5 grid-rows-[auto,0.5fr,1fr] gap-x-4 gap-y-4">

        {/* Left Side - Discount Section */}
        <div className="col-span-1 row-span-3 bg-blue-200 p-4">
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-2xl">Computers & Accessories</h1>
            <h2 className="text-3xl font-bold text-red-600">32% Discount</h2>

            <p>For all electronic products</p>
            <p>Offers end in:</p>

            <div className='flex items-center'>
              <div className='bg-white p-2'>
                <p>ENDS CHRISTMAS</p>
              </div>
            </div>
          <div className='bg-blue-500 items-center justify-center'>
            <h1>Shop Now</h1>
            <img src={ComputerAccessories} alt="" />
          </div>
          </div>
        </div>


        {/* Featured Products Header */}
        <div className="col-span-4 row-span-1 flex items-center justify-between px-4 shadow-md">
          <h1 className="text-xl font-bold">Featured Products</h1>

          {/* Product Categories */}
          <div className="flex items-center gap-6 text-sm">
            <h1>All Products</h1>
            <h1>Smart Phone</h1>
            <h1>Laptop</h1>
            <h1>Headphones</h1>
            <h1>TV</h1>
            <h1 className="font-semibold text-blue-600">Browse All Products</h1>
          </div>
        </div>

        {/* Product Cards */}
        <div className="col-span-1 shadow-md">
          <BestProductCards imageurl={Controller} name="Xbox One Controller" description="no" price={99} />
        </div>
        <div className="col-span-1 shadow-md">
          <BestProductCards imageurl={Controller} name="Xbox One Controller" description="no" price={99} />
        </div>
        <div className="col-span-1 shadow-md">
          <BestProductCards imageurl={Controller} name="Xbox One Controller" description="no" price={99} />
        </div>
        <div className="col-span-1 shadow-md">
          <BestProductCards imageurl={Controller} name="Xbox One Controller" description="no" price={99} />
        </div>
        <div className="col-span-1 shadow-md">
          <BestProductCards imageurl={Controller} name="Xbox One Controller" description="no" price={99} />
        </div>
        <div className="col-span-1 shadow-md">
          <BestProductCards imageurl={Controller} name="Xbox One Controller" description="no" price={99} />
        </div>
        <div className="col-span-1 shadow-md">
          <BestProductCards imageurl={Controller} name="Xbox One Controller" description="no" price={99} />
        </div>
        <div className="col-span-1 shadow-md">
          <BestProductCards imageurl={Controller} name="Xbox One Controller" description="no" price={99} />
        </div>

      </div>
    </div>
  );
}

export default Featuredproducts;
