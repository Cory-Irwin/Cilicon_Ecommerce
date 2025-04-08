import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Eye, EyeOff } from 'lucide-react';

import Footer from '../../Components/Footer/Footer'
import Categories from '../../Components/Categories/Categories'
import Header from '../../Components/Header/Header'
import BlackFriday from '../../Components/BlackFriday/BlackFriday'

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <BlackFriday />
      <Header />
      <Categories />
      
      <div className="flex flex-col items-center justify-center min-h-[40vh] w-full px-4">
        <div className="bg-white shadow-lg p-8  w-full max-w-md mx-auto">

          {/* Sign In & Sign Up Toggle */}
          <div className="flex justify-between border-b pb-3 mb-5">
            <h2 className="text-lg font-semibold border-b-2 border-orange-500 pb-1">Sign In</h2>
            <h2 className="text-lg text-gray-400 cursor-pointer">Sign Up</h2>
          </div>

          {/* Email Input */} 
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Password Input with Eye Icon */}
          <div className="mb-4 relative">
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
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
          <button className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition">
            SIGN IN →
          </button>

          {/* OR Divider */}
          <div className="my-5 text-center text-gray-400 text-sm">or</div>

          {/* Social Logins */}
          <button className="w-full flex items-center justify-center border py-2 rounded-md mb-3 hover:bg-gray-100 transition">
            <FcGoogle size={20} className="mr-2" /> Login with Google
          </button>
          <button className="w-full flex items-center justify-center border py-2 rounded-md hover:bg-gray-100 transition">
            <FaApple size={20} className="mr-2" /> Login with Apple
          </button>
        </div>
      </div>
      
      <Footer/>
    </>
  );
};

export default SignInPage;
