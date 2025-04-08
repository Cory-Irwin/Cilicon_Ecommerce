import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Categories from '../../Components/Categories/Categories'
import Header from '../../Components/Header/Header'
import BlackFriday from '../../Components/BlackFriday/BlackFriday'
const errorPage = () => {
  return (
    <div className="mx-auto max-w-screen-xl  p-20my-20 px-4 ">
      <BlackFriday />
      <Header />
      <Categories />
      <div className='p-20'>
        <div className='flex justify-center text-8xl p-10'>
          <h1>Error 404</h1>
        </div>
        <div className='justify-center flex margin-20'>
          <p>Something went wrong. It’s look that your requested could not be found. 
            It’s look like the link is broken or the page is removed.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default errorPage