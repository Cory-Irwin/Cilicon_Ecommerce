import { useState } from "react";

import Imac from '../../assets/macbookpro.png';
import Heart from '../../assets/heartlove.svg'
import Arrow from '../../assets/ArrowsClockwise.svg'
import CopyCat from '../../assets/copycat.svg'
import Facebook from '../../assets/Facebook.svg'
import twitter from '../../assets/Twitter.svg'
import pintrest from '../../assets/Pinterest.svg'
import grey1 from '../../assets/grey01.svg'
import grey2 from '../../assets/grey02.svg'
import payment from '../../assets/Payment Method.svg'
import airpod from '../../assets/airpods.webp'

const mainProduct = {
    name: "2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray",
    image: Imac,
    price: 1600,
    originalPrice: 1999,
    discount: "21% Off",
    Availability: "In stock",
    brand: "Apple",
    Category: "Electronic Devices",
    rating: "⭐⭐⭐⭐⭐ 4.7 Star Rating (21,000 User feedback)",
    sku: "A264671"
};


const InduvidualProductCard = () => {
    const [product] = useState(mainProduct);
    return (
        <div className='mx-auto max-w-screen-xl my-10 px-4'>
            <div className="grid grid-cols-10 grid-rows-2 gap-4">

                {/* Left Side - Image */}
                <div className="col-span-5 h-75 flex justify-center items-center shadow-md">
                    <img src={product.image} className='h-150 w-150' alt={product.name} />
                </div>

                {/* Right Side - Product Info */}
                <div className="col-span-5 h-175 col-start-6 row-span-2 shadow-md  p-4">
                    <h1>
                        {typeof product.rating === "string" ? product.rating : " 4.7 Star Rating (21,000 User feedback)"}
                    </h1>

                    <h1 className='text-2xl text-black '>
                        {product.name}
                    </h1>


                    {/* SKU & Availability on the same row */}
                    <div className="flex justify-between items-center my-1">
                        <div className="flex gap-2">
                            <p className="text-gray-500">Sku:</p>
                            <p className="text-black">{product.sku}</p>
                        </div>
                        <div className="flex gap-2">
                            <p className="text-gray-500">Availability:</p>
                            <p className="text-green-300">{product.Availability}</p>
                        </div>
                    </div>

                    <div className="flex justify-between items-center my-1">
                        <div className="flex gap-2">
                            <p className="text-gray-500">Brand:</p>
                            <p className="text-black">{product.brand}</p>
                        </div>
                        <div className="flex gap-2">
                            <p className="text-gray-500">Category:</p>
                            <p className="text-black"><p>{product.Category}</p></p>
                        </div>
                    </div>

                    <div className=' flex gap-2 items-center my-4'>
                        <h1 className='text-green-600 text-2xl'>${product.price}</h1>
                        <h1>${product.originalPrice}</h1>
                        <div className='bg-yellow-500 p-1'>{product.discount}</div>
                    </div>

                    <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                    <div className='flex  justify-between items-center my-1'>
                        <p>Color</p>

                        <p>Size</p>

                        <div className='bg-gray-400'></div>
                    </div>
                    <div className="flex items-center my-5">
                        {/* Wrap images together to keep their spacing tight */}
                        <div className="flex gap-2">
                            <img src={grey1} alt="" />
                            <img src={grey2} alt="" />
                        </div>


                        <div className="shadow-md p-4 ml-55">
                            <p>Product size</p>
                        </div>
                    </div>




                    <div className='bg-gray-100'></div>

                    <div className='flex justify-between items-center my-12'>
                        <p>Memory</p>
                        <p>Storage</p>
                        <div className='bg-gray-400'></div>
                    </div>

                    <div className="flex justify-between items-center my-12 gap-4">
                        {/* Quantity Selector */}
                        <div className="border-2 flex items-center gap-2 p-2">
                            <button className="px-2">-</button>
                            <p>01</p>
                            <button className="px-2">+</button>
                        </div>



                        {/* Add to Cart Button (Takes up the most space) */}
                        <div className="bg-orange-300 p-3 items-center justify-center flex-1 text-center">
                            <a href="#" className="font-medium  hover:underline">Add to Cart</a>

                        </div>

                        {/* Buy Now Button */}
                        <div className="border-2 bg-orange-300 p-2">
                            <a href="#" className="font-medium justify-items-center  hover:underline">Buy Now</a>
                            <button></button>
                        </div>
                    </div>
                    <div className='flex justify-center my-4 gap-4'>
                        <button><img src={Heart} alt="" /></button><p>Add to Wishlist</p>
                        <button><img src={Arrow} alt="" /></button><p>Add to Compare</p>
                        <p>Share product:</p>

                        <button><img src={CopyCat} alt="" /></button>
                        <button> <img src={Facebook} alt="" /></button>
                        <button>  <img src={twitter} alt="" /></button>
                        <button> <img src={pintrest} alt="" /></button>

                    </div>

                    <div className=''>
                        <p>100% Guarantee Safe Checkout</p>
                        <img src={payment} alt="" className='my-4' />
                    </div>
                </div>

                {/* Additional Boxes in Row 2 */}
                <div className="col-start-5 h-25 row-start-2 ">  <img src={product.image} className='h-50 w-50' alt="MacBook Pro" /></div>
                <div className="col-start-4 h-25 row-start-2 ">  <img src={product.image} className='h-50 w-50' alt="MacBook Pro" /></div>
                <div className="col-start-3 h-25 row-start-2 ">  <img src={product.image} className='h-50 w-50' alt="MacBook Pro" /></div>
                <div className="col-start-2 h-25 row-start-2 ">  <img src={product.image} className='h-50 w-50' alt="MacBook Pro" /></div>
                <div className="col-start-1 h-25 row-start-2 ">  <img src={product.image} className='h-50 w-50' alt="MacBook Pro" /></div>
            </div>

            <div className="grid grid-cols-3 shadow-md gap-4">
                <div className="col-span-3 flex justify-center gap-10 items-center py-10">
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


    );
};

export default InduvidualProductCard;
