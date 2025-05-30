
import Footer from '../../Components/HomePage/Footer/Footer'
import Categories from '../../Components/HomePage/Categories/Categories'
import Header from '../../Components/HomePage/Header/Header'
import BlackFriday from '../../Components/HomePage/BlackFriday/BlackFriday'

const emailVerifyPage = () => {
  return (
    <>
    <BlackFriday />
    <Header />
        <Categories />
        <div className="flex flex-col items-center justify-center min-h-[40vh] w-full px-4">
            <div className='bg-white  shadow-lg p-8  w-full max-w-md mx-auto'>
                <div className='text-center '>
                    <h1 className='text-2xl '>Verify Your Email Address</h1>
                    <p className='mt-2 text-gray-500'>Enter the verification code sent to your email.</p>
                </div>


                {/* Email Input */}
               
                <div className="mb-4 mt-5 ">
                    <div className='justify-between flex'>
                    <label className="block text-gray-600  mb-2">Verification Code</label>
                    <a href="" className='text-blue-500'>Resend Code</a>
                    </div>
                    
                    <input
                        type="password"
                        placeholder="Enter Code Here"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                    />

                    
                </div>

                {/* Sign In Button */}
                <button className="w-full bg-teal-900 text-white py-2 rounded-md hover:bg-teal-600 transition">
                    Reset Password →
                </button>

                

                <hr className='py-2' />
               
            </div>
        </div>
<Footer />
    </>
  )
}

export default emailVerifyPage