import React from 'react'
import Footer from '../../Components/HomePage/Footer/Footer'
import Categories from '../../Components/HomePage/Categories/Categories'
import Header from '../../Components/HomePage/Header/Header'
import BlackFriday from '../../Components/HomePage/BlackFriday/BlackFriday'
const forgotPasswordPage = () => {
    return (
        <>
            <BlackFriday />
               <Header />
             <Categories />
                    <div className="flex flex-col items-center justify-center min-h-[40vh] w-full px-4">
                        <div className='bg-white  shadow-lg p-8  w-full max-w-md mx-auto'>
                            <div className='text-center '>
                                <h1 className='text-2xl'>Forgot Password</h1>
                                <p>Enter the email address or mobile phone number associated with your
                                    Clicon account.</p>
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

                            {/* Sign In Button */}
                            <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-orange-600 transition">
                                Send Code →
                            </button>

                            <div className='justify-between py-2'>
                                <p className='py-2'>Already have account? <a href="">Sign In</a></p>
                                
                                <p className='py-2'>Don't Have account? <a href="">Sign Up</a></p>
                                
                            </div>

                            <hr className='py-2' />
                            <p>You may contact <a href="" className='text-blue-900'>Customer Serivce</a> for help restoring access to your account</p>
                        </div>
                    </div>
           <Footer />
                </>
            );
        };

export default forgotPasswordPage