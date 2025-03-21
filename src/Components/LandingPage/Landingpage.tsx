import React from 'react';
import Xbox1 from '../../assets/xbone.png'; // Ensure the path is correct
import Iphone from '../../assets/iphone.png';
import Airpods from '../../assets/airpods.webp';

const Landingpage = () => {
    return (
        <div className='relative z-10 bg-white text-black max-w-screen-xl mx-auto px-4 p-10 mt-0 flex items-center'>
            <div className='grid grid-cols-3 grid-rows-[auto,auto] gap-6 w-full'>

                {/* Xbox Section (2x2) */}
                <div className="bg-gray-100 rounded-lg shadow-xl col-span-2 row-span-2 flex justify-between items-center p-6 relative">

                    {/* Text Section */}
                    <div className='w-1/2'>
                        <h1 className='text-3xl font-bold mb-2'>Xbox One</h1>
                        <p className='text-sm text-gray-700'>
                            Experience next-gen gaming with Xbox One.
                            Powerful performance, immersive visuals, and the best games.
                        </p>
                        <button className='mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700'>
                            Buy Now
                        </button>
                    </div>

                    {/* Image Section */}
                    <div className='w-1/2 h-full flex justify-end items-center relative'>
                        <img src={Xbox1} alt="Xbox Console" className='w-full h-full object-contain' />

                        {/* Price Tag */}
                        <div className='absolute top-2 right-2 w-14 h-14 bg-blue-900 rounded-full 
                        flex items-center justify-center text-white font-bold text-lg shadow-lg'>
                            $299
                        </div>
                    </div>
                </div>

                {/* iPhone Section (Top Right - 1x1) */}
                <div className="bg-gray-500 text-white rounded-lg shadow-xl h-[250px] flex flex-col justify-between p-4 relative">

                    {/* Text */}
                    <div className="flex justify-between">
                        <div>
                            <h1 className="text-md font-bold">Summer Sales</h1>
                            <h1 className="text-sm">New iPhone 16</h1>
                        </div>

                        {/* Price Tag */}
                        <div className='absolute top-2 right-2 w-14 h-14 bg-green-900 rounded-full 
                        flex items-center justify-center text-white font-bold text-lg shadow-lg'>
                            $299
                        </div>
                    </div>

                    {/* Image */}
                    <div className='w-full h-full flex relative  left-20 bottom-10 justify-center items-center'>
                        <img src={Iphone} alt="iPhone" className='w-full h-full object-contain' />
                    </div>
                </div>

                {/* AirPods Section (Bottom Right - 1x1) */}
                {/* AirPods Section (Bottom Right - 1x1) */}
                <div className="bg-gray-300 rounded-lg shadow-xl h-[250px] p-4 flex flex-row relative">

                    {/* Text Section (Left) */}
                    <div className='w-1/2 flex flex-col justify-center items-start p-4'>
                        <h1 className="text-md font-bold">Apple AirPods Pro</h1>
                        <h1 className="text-sm font-semibold text-gray-700">$499</h1>
                        <button className='mt-2 bg-blue-500 text-white px-3 py-1 rounded-lg shadow-md hover:bg-blue-600 text-sm'>
                            Shop Now
                        </button>
                    </div>

                    {/* Image Section (Right) */}
                    <div className='w-1/2 flex justify-center items-center'>
                        <img src={Airpods} alt="AirPods" className='w-[80%] h-auto object-contain' />
                    </div>



                    {/* Product Info & Button */}

                </div>

            </div>
        </div>
    );
};

export default Landingpage;
