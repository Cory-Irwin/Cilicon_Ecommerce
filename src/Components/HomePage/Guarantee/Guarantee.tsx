import Package from '../../../assets/Guarentee/Package.svg'
import Trophy from '../../../assets/Guarentee/Trophy.svg'
import Card from '../../../assets/Guarentee/CreditCard.svg'
import Headphone from '../../../assets/Guarentee/Headphones.svg'

const Guarantee = () => {
  return (
    <div className='relative z-10 bg-white p-4 text-black max-w-screen-xl mx-auto flex text-center lg:text-left'>

      <div className='min-h-30 lg:border-gray-200 lg:w-full lg:h-full lg:flex lg:flex-row lg:flex-1 lg:justify-between 
          w-full h-auto flex flex-col justify-between items-center lg:border-2 border-gray-200'>
        <div className='flex-1 flex justify-center flex-col lg:flex-row gap-2 items-center border-2 p-2 border-gray-200 w-full border-b-0 lg:border-none '>
          <div>
            <img src={Package} alt="" />
          </div>
          <div className=''>
            <h1 className='text-sm'>FAST DELIVERY</h1>
            <p className='text-gray-400 text-sm'>Delivery in 24/7</p>
          </div>
        </div>

        <div className='hidden lg:block h-14 w-[2px] rounded-full mx-2 bg-gray-100' />

        <div className='flex-1 flex justify-center flex-col lg:flex-row gap-2 items-center border-2 p-2 border-gray-200 w-full border-b-0 lg:border-none '>
          <div>
            <img src={Trophy} alt="" />
          </div>
          <div>
            <h1 className='text-sm'>24 HOURS RETURN</h1>
            <p className='text-gray-400 text-sm'>100% Money back Guarentee</p>

          </div>
    
        </div>

        <div className='hidden lg:block h-14 w-[2px] rounded-full mx-2 bg-gray-100' />


        <div className='flex-1 flex justify-center flex-col lg:flex-row gap-2 items-center border-2 p-2 border-gray-200 w-full border-b-0 lg:border-none '>

          <div>
            <img src={Card} alt="" />
          </div>
          <div>
            <h1 className='text-sm'>SECURE PAYMENT</h1>
            <p className='text-gray-400 text-sm'>Your money is safe</p>
          </div>

        </div>

        <div className='hidden lg:block h-14 w-[2px] rounded-full mx-2 bg-gray-100' />

        <div className='flex-1 flex justify-center flex-col lg:flex-row gap-2 items-center border-2 p-2 border-gray-200 w-full lg:border-none '>
          {/* <div>
            <img src={Line} alt="" className='sm:hidden'/>
          </div> */}

          <div>
            <img src={Headphone} alt="" />
          </div>
          <div>
            <h1 className='text-sm'>SUPPORT 24/7</h1>
            <p className='text-gray-400 text-sm'>Live contact/message </p>

          </div>

    {/* <div className=''>
            <img src={Line} alt="" className='sm:hidden' />
          </div> */}
        
        </div>
      </div>
    </div>


  )
}

export default Guarantee
