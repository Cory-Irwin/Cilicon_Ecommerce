import React from 'react'
import Footer from '../../Components/HomePage/Footer/Footer'
import Categories from '../../Components/HomePage/Categories/Categories'
import Header from '../../Components/HomePage/Header/Header'
import BlackFriday from '../../Components/HomePage/BlackFriday/BlackFriday'

const ResetPasswordPage = () => {
  return (
    <>
    <BlackFriday />
    <Header />
        <Categories />
        <div className="flex flex-col items-center justify-center min-h-[40vh] w-full px-4">
            <div className='bg-white  shadow-lg p-8  w-full max-w-md mx-auto'>
                <div className='text-center '>
                    <h1 className='text-2xl'>Reset Password</h1>
                    <p>Enter the email address or mobile phone number associated with your
                        Clicon account.</p>
                </div>


                {/* Email Input */}
                <div className="mb-4">
                    <label className="block text-gray-600 mb-1">Password</label>
                    <input
                        type="password"
                        placeholder="Enter your Password"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 mb-1">Confirm Password</label>
                    <input
                        type="password"
                        placeholder="Re-enter Password"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                </div>

                {/* Sign In Button */}
                <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-orange-600 transition">
                    Reset Password →
                </button>

                

                <hr className='py-2' />
                <p>You may contact <a href="" className='text-blue-900'>Customer Serivce</a> for help restoring access to your account</p>
            </div>
        </div>
<Footer />
    </>
  )
}

export default ResetPasswordPage