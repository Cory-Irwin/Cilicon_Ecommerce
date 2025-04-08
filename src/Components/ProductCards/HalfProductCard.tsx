import React from 'react';

type HalfProductCardProps = {
  imageurl: string;
  name: string;
  description: string;
};

const HalfProductCard: React.FC<HalfProductCardProps> = ({ imageurl, name, description }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-10  shadow-lg rounded-lg h-full">
      {/* Left Side: Text Content */}
      <div className="text-left max-w-md ">
        <div className="bg-blue-500 text-white px-4 py-1 inline-block rounded-md">
          <h2 className="text-sm font-semibold">Introducing</h2>
        </div>
        <h1 className="text-2xl font-bold mt-3">{name}</h1>
        <p className="text-gray-600 mt-2">{description}</p>
        <button className="mt-4 bg-orange-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-orange-600">
          Shop Now
        </button>
      </div>

      {/* Right Side: Product Image */}
      <div className="mt-6 md:mt-0">
        <img src={imageurl} alt={name} className="h-auto w-auto object-contain" />
      </div>
    </div>
  );
};

export default HalfProductCard; 