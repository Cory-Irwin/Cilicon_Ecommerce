
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
                    <h1 className='text-2xl'>Verify Your Email Address</h1>
                    <p>Enter the verification code sent to your email.</p>
                </div>


                {/* Email Input */}
               
                <div className="mb-4 ">
                    <div className='justify-between flex'>
                    <label className="block text-gray-600 mb-1">Verification Code</label>
                    <a href="">Resend Code</a>
                    </div>
                    
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
               
            </div>
        </div>
<Footer />
    </>
  )
}

export default emailVerifyPage