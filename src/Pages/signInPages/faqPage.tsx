
import Footer from '../../Components/Footer/Footer'
import Categories from '../../Components/Categories/Categories'
import Header from '../../Components/Header/Header'
import BlackFriday from '../../Components/BlackFriday/BlackFriday'
const faqPage = () => {
  return (
    <>
      <BlackFriday />
      <Header />
      <Categories />

      <div className="mx-auto max-w-screen-xl  my-20 px-4 ">
        <div className="grid grid-cols-2  grid-rows-5 gap-2 h- my-50">
          <div className='border-2 border-gray-400'><div>
            <h1>Frequently Asked Questions</h1>
          </div></div>
          <div className="col-start-1 border-2 border-gray-400 row-start-2">
            <div className=''></div>
          </div>
          <div className="col-start-1 row-start-3 border-2 border-gray-400">3</div>
          <div className="col-start-1 row-start-4 border-2 border-gray-400">4</div>
          <div className="col-start-1 row-start-5 border-2 border-gray-400">5</div>
          <div className="row-span-3 col-start-2 row-start-1  bg-amber-100 p-10">
            <div className='h-auto '>
              <h1 className='text-bold text-start pb-10'>Don't find your answer. Ask For support</h1>
              <p className='pb-10'>Our friendly team will happily answer all questions over email. Please provide your question below
                and we will respond to you within 2 days
              </p>
              {/* Email Input */}

              <div className='bg-white'>
                <div className="mb-4 ">

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>
                {/* Email Input */}
                <div className="mb-4">

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>
                {/* Email Input */}
                <div className="mb-4">

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>


              </div>
            </div><button className="w-full my-2 bg-blue-500 text-white py-2 rounded-md hover:bg-orange-600 transition">
              Send Code →
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default faqPage