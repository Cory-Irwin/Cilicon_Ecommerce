import React from 'react'
import samsung from '../../../assets/misc/iphone.png'
import keyboard from '../../../assets/misc/keyboard.png'
import IMAC from '../../../assets/Misc/IMAC.png'
import Footer from '../../../Components/HomePage/Footer/Footer';
import BlackFriday from '../../../Components/HomePage/BlackFriday/BlackFriday';
import Header from '../../../Components/HomePage/Header/Header';
import Categories from '../../../Components/HomePage/Categories/Categories';

const products = [
  {
    id: 1,
    image: "https://via.placeholder.com/150", // Replace with actual image
    name: "Gamdias ARES M2 Gaming Keyboard, Mouse and Mouse Mat Combo",
    price: "$899.00",
    brand: "Gamdias",
    stock: "IN STOCK",
    weight: "650 g (2.44 oz)",
    rating: 4.5,
  },
  {
    id: 2,
    image: "https://via.placeholder.com/150",
    name: "Apple iMac 24” 4K Retina Display M1 8-Core CPU, 256GB SSD",
    price: "$1,699.00",
    brand: "Apple",
    stock: "IN STOCK",
    weight: "240 g (8.47 oz)",
    rating: 4.7,
  },
  {
    id: 3,
    image: "https://via.placeholder.com/150",
    name: "Samsung Galaxy S21 FE 5G 128GB 120Hz Display",
    price: "$699.99",
    brand: "Samsung",
    stock: "OUT OF STOCK",
    weight: "177 g (6.24 oz)",
    rating: 4.6,
  },
];
const ComparePage = () => {
  return (
    <>
    <BlackFriday/>
    <Header/>
    <Categories/>
      <div className="relative z-10 bg-white text-black max-w-screen-xl mx-auto px-4 p-10 mt-0">
        <h2 className="text-2xl font-semibold text-center mb-6">Compare Products</h2>
        
        {/* Grid Layout */}
        <div className="grid grid-cols-4   border border-gray-300 rounded-lg shadow-lg p-4">
          {/* Header Row */}
          <div className="font-bold p-4 shadow-md"></div>
          <div className="font-bold p-4 shadow-md text-center flex justify-center flex-col items-center">
            <img src={keyboard} className="w-50 h-50" />
            <p>Gamdias ARES M2 Gaming Keyboard, Mouse and Mouse Mat Combo</p>
            <div className="bg-blue-400 p-2 w-30 h-10 flex justify-center items-center">
              <button>Add to Cart</button>
            </div>
          </div>

          <div className="font-bold p-4 shadow-md text-center flex justify-center flex-col items-center">
            <img src={IMAC} className="w-50 h-50" alt="" />
            <p>Gamdias ARES M2 Gaming Keyboard, Mouse and Mouse Mat Combo</p>
            <div className="bg-blue-400 p-2 w-30 h-10 flex justify-center items-center">
              <button>Add to Cart</button>
            </div>
          </div>

          <div className="font-bold p-4 shadow-md text-center flex justify-center flex-col items-center">
            <img src={samsung} className="w-50 h-50" alt="" />
            <p>Gamdias ARES M2 Gaming Keyboard, Mouse and Mouse Mat Combo</p>
            <div className="bg-blue-400 p-2 w-30 h-10 flex justify-center items-center">
              <button>Add to Cart</button>
            </div>
          </div>

          {/* Rows */}
          <div className="p-4 font-semibold bg-gray-100">Customer Feedback:</div>
          <div className="p-4 text-center bg-gray-100"></div>
          <div className="p-4 text-center bg-gray-100"></div>
          <div className="p-4 text-center bg-gray-100"></div>

          <div className="p-4 font-semibold ">Price</div>
          <div className="p-4 text-center ">$899.00</div>
          <div className="p-4 text-center ">$1,699.00</div>
          <div className="p-4 text-center ">$699.99</div>

          <div className="p-4 font-semibold bg-gray-100">Brand</div>
          <div className="p-4 text-center bg-gray-100">Gamdias</div>
          <div className="p-4 text-center bg-gray-100">Apple</div>
          <div className="p-4 text-center bg-gray-100">Samsung</div>

          <div className="p-4 font-semibold ">Model</div>
          <div className="p-4 text-center ">Iphone</div>
          <div className="p-4 text-center ">Xaomi</div>
          <div className="p-4 text-center">Samsung</div>

          <div className="p-4 font-semibold bg-gray-100">Stock</div>
          <div className="p-4 text-center bg-gray-100 text-green-500">IN STOCK</div>
          <div className="p-4 text-center bg-gray-100 text-green-500">IN STOCK</div>
          <div className="p-4 text-center bg-gray-100 text-red-500">OUT OF STOCK</div>

          <div className="p-4 font-semibold ">Size</div>
          <div className="p-4 text-center">12x12x2</div>
          <div className="p-4 text-center">24x25.1x3</div>
          <div className="p-4 text-center">19x2x24</div>

          <div className="p-4 font-semibold bg-gray-100">Weight</div>
          <div className="p-4 text-center bg-gray-100">650 g</div>
          <div className="p-4 text-center bg-gray-100">240 g</div>
          <div className="p-4 text-center bg-gray-100">177 g</div>
        </div>
      </div>
      <Footer />
    </>);
};





export default ComparePage