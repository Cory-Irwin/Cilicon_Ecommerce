import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Eye, EyeOff } from 'lucide-react';

import Footer from '../../Components/HomePage/Footer/Footer'
import Categories from '../../Components/HomePage/Categories/Categories'
import Header from '../../Components/HomePage/Header/Header'
import BlackFriday from '../../Components/HomePage/BlackFriday/BlackFriday'

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <BlackFriday />
      <Header />
      <Categories />
      
      <div className="flex flex-col items-center justify-center min-h-[40vh] w-full px-4">
        <div className="bg-white shadow-lg p-8 mt-20 mb-20  w-full max-w-md mx-auto">

    
          {/* Sign In & Sign Up Toggle */}
          <div className="flex justify-between border-b pb-3 mb-5">
            <h2 className="text-lg text-gray-400 cursor-pointer ">Sign In</h2>
            <h2 className="text-lg font-semibold border-b-2 border-teal-500 pb-1">Sign Up</h2>
          </div>


          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Name</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border  focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
          {/* Email Input */} 
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border  focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          {/* Password Input with Eye Icon */}
          <div className="mb-4 relative">
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full px-3 py-2 border  focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <button
              type="button"
              className="absolute right-3 top-9 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          

          <div className="mb-4 relative">
            <label className="block text-gray-600 mb-1">Confirm Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full px-3 py-2 border  focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <button
              type="button"
              className="absolute right-3 top-9 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Forgot Password */}
          <div className="text-right mb-4">
            <a href="#" className="text-blue-500 text-sm">Forgot Password?</a>
          </div>

          {/* Sign In Button */}
          <button className="w-full bg-teal-900 text-white py-2  hover:bg-teal-600 transition">
            SIGN UP →
          </button>

          {/* OR Divider */}
          <div className="my-5 text-center text-gray-400 text-xl">or</div>

          {/* Social Logins */}
          <button className="w-full flex items-center justify-center border py-2  mb-3 hover:bg-gray-100 transition">
            <FcGoogle size={20} className="mr-2" /> Sign Up with Google
          </button>
          <button className="w-full flex items-center justify-center border py-2  hover:bg-gray-100 transition">
            <FaApple size={20} className="mr-2" /> Sign Up with Apple
          </button>
        </div>
      </div>
      
      <Footer/>
    </>
  );
};

export default SignUpPage;
