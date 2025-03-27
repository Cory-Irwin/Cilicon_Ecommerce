import React from 'react'
import Imac from '../../assets/macbookpro.png'
import airpod from '../../assets/airpods.webp'
const InduvidualProductCard = () => {
    return (
        <div className='mx-auto max-w-screen-xl px-4'>
            <div className="grid grid-cols-2 h-200 grid-rows-1 gap-4">
                <div className=''><div className="row-span-4 shadow-md"><img src={Imac} alt="" />
                </div>

                    <div className="grid grid-cols-5 *:shadow-md grid-rows-1 h-45 gap-4">
                        <div className='' >1</div>
                        <div className=''>2</div>
                        <div className=''>3</div>
                        <div className=''>4</div>
                        <div className=''>5</div>
                    </div>

                </div>
                <div className='shadow-md my-2' >
                    <div className=''>
                        <h1>⭐⭐⭐⭐⭐ 4.7 Star Rating (21000 User feedback)</h1>
                        <h2 className='text-2xl'>2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray</h2>

                    </div>
                    

                    <div className=''>
                        <div className='flex  flex-start'>
                                <p className='text-gray-500'>Sku:</p>
                                <p className='text-black'>A264671</p>
                        </div>
                        <div>
                         <div className=' flex flex-end '>
                                <p className='text-gray-500'>Availability: </p>
                                <p className='text-green-300'>In Stock</p>
                        </div>
                    </div> 
                     


                        <div className='flex  justify-between flex-wrap'>
                              <p>Brand: Apple</p>
                               <p>Category: Electronics Devices</p>
                       </div>

                        <div className='justify-between flex my-4'>
                            <h1 className='text-green-600 text-2xl'>$1699</h1>
                            <h1>$1999.00</h1>
                            <div className='bg-yellow-200'>21% Off</div>
                        </div>

                        <div className='flex justify-between  my-4'>
                            <p>Color</p>
                            <p>Size</p>
                            <div className='bg-gray-400'></div>
                        </div>

                        <div className='flex justify-between my-20'>
                            <p>Memory</p>
                            <p>Storage</p>
                        </div>
                        <div className='justify-between flex gap-6 my-4'>
                            <div><button>Quantity</button></div>
                            <div><button>Add to Cart</button></div>
                            <div><button>Buy Now</button></div>

                            <div><button>Add to Wishlist</button> <button>Add to Compare</button> <p>Share Product</p></div>
                            <div><h1>100% Garentee safe checkout</h1></div>
                        </div>
                    </div>
                </div>



            </div>
            <div className="grid grid-cols-3 shadow-md gap-4">
                <div className="col-span-3 flex justify-center gap-10 items-center my-10">
                    <button>Description</button>
                    <button>Additional Information</button>
                    <button>Specification</button>
                    <button>Review</button>
                </div>

                <div className="col-span-3 flex gap-4">
                    <div className="w-1/2 p-4 shadow-md">
                        <h1>Description</h1>
                        <p>The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip
                            — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life.
                            Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook,
                            and all the ports you need. The first notebook of its kind, this MacBook Pro is a beast.
                            M1 Pro takes the exceptional performance of the M1 architecture to a whole new level for pro users.
                        </p>
                    </div>

                    <div className="w-1/4 p-4 shadow-md">
                        <h1>Feature</h1>
                        <ul>
                            <li>Free 1 Year Warranty</li>
                            <li>Free Shipping & Fasted Delivery</li>
                            <li>100% Money-back guarantee</li>
                            <li>24/7 Customer support</li>
                            <li>Secure payment method</li>
                        </ul>
                    </div>

                    <div className="w-1/4 p-4 shadow-md">
                        <h1>Shipping Information</h1>
                        <ul>
                            <li>Courier: 2 - 4 days, free shipping</li>
                            <li>Local Shipping: up to one week, $19.00</li>
                            <li>UPS Ground Shipping: 4 - 6 days, $29.00</li>
                            <li>Unishop Global Export: 3 - 4 days, $39.00</li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="grid grid-cols-4 justify-center gap-4 items-center grid-rows-4 ">
                <div className="flex justify-between gap-10  my-5 col-span-4">
                    <h1>Related Product</h1>
                    <h1>Product Accessories</h1>
                    <h1>Apple Products</h1>
                    <h1>Featured Products</h1>
                </div>
                <div className="col-start-4 row-start-2 ">
                    <div className='flex justify-around items-center mx-auto '>
                        <img src={airpod} alt="" className='h-25 w-25 ' />
                        <p>Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</p>
                        <p>1500</p>
                    </div>
                </div>
                <div className="col-start-4 row-start-3 ">
                    <div className='flex justify-between items-center mx-auto '>
                        <img src={airpod} alt="" className='h-25 w-25 ' />
                        <p>Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</p>
                        <p>1500</p>
                    </div>
                </div>
                <div className="col-start-4 row-start-4 ">
                    <div className='flex justify-between items-center mx-auto '>
                        <img src={airpod} alt="" className='h-25 w-25 ' />
                        <p>Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</p>
                        <p>1500</p>
                    </div>
                </div>

                <div className="col-start-3 row-start-2">
                    <div className='flex justify-between items-center mx-auto '>
                        <img src={airpod} alt="" className='h-25 w-25 ' />
                        <p>Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</p>
                        <p>1500</p>
                    </div>
                </div>

                <div className="col-start-3 row-start-3">
                    <div className='flex justify-between items-center mx-auto '>
                        <img src={airpod} alt="" className='h-25 w-25 ' />
                        <p>Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</p>
                        <p>1500</p>
                    </div>
                </div>

                <div className="col-start-3 row-start-4">
                    <div className='flex justify-between items-center mx-auto '>
                        <img src={airpod} alt="" className='h-25 w-25 ' />
                        <p>Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</p>
                        <p>1500</p>
                    </div>
                </div>

                <div className="col-start-2 row-start-2">
                    <div className='flex justify-between items-center mx-auto '>
                        <img src={airpod} alt="" className='h-25 w-25 ' />
                        <p>Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</p>
                        <p>1500</p>
                    </div>
                </div>

                <div className="col-start-2 row-start-3">
                    <div className='flex justify-between items-center mx-auto '>
                        <img src={airpod} alt="" className='h-25 w-25 ' />
                        <p>Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</p>
                        <p>1500</p>
                    </div>
                </div>

                <div className="col-start-2 row-start-4">
                    <div className='flex justify-between items-center mx-auto '>
                        <img src={airpod} alt="" className='h-25 w-25 ' />
                        <p>Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</p>
                        <p>1500</p>
                    </div>
                </div>

                <div className="col-start-1 row-start-2">
                    <div className='flex justify-between items-center mx-auto '>
                        <img src={airpod} alt="" className='h-25 w-25 ' />
                        <p>Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</p>
                        <p>1500</p>
                    </div>
                </div>

                <div className="col-start-1 row-start-3">
                    <div className='flex justify-between items-center mx-auto '>
                        <img src={airpod} alt="" className='h-25 w-25 ' />
                        <p>Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</p>
                        <p>1500</p>
                    </div>
                </div>


                <div className="col-start-1 row-start-4">
                    <div className='flex justify-between items-center mx-auto '>
                        <img src={airpod} alt="" className='h-25 w-25 ' />
                        <p>Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</p>
                        <p>1500</p>
                    </div>
                </div>



            </div>

        </div>
    )
}

export default InduvidualProductCard