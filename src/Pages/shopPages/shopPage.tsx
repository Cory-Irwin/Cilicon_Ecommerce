import React from 'react';
import Header from '../../Components/Header/Header';
import Categories from '../../Components/Categories/Categories';
import Footer from '../../Components/Footer/Footer';

const ShopPage = () => {
    return (
        <>
            <Header />
            <Categories/>
            <div className="mx-auto max-w-screen-xl my-10 px-4">
                <div className="grid grid-cols-5 gap-6">
                    {/* Sidebar */}
                    <div className="col-span-1 border p-4 bg-gray-100">
                        <h2 className="font-semibold mb-4">Category</h2>
                        <ul className="space-y-2">
                            <li>Electronics Devices</li>
                            <li>Laptops</li>
                            <li>Computer Accessories</li>
                            <li>Smartphones</li>
                        </ul>

                        <h2 className="font-semibold mt-6 mb-4">Price Range</h2>
                        <input type="range" className="w-full" />
                        <p>$100 - $1000</p>

                        <h2 className="font-semibold mt-6 mb-4">Popular Brands</h2>
                        <ul className="space-y-2">
                            <li>Apple</li>
                            <li>Samsung</li>
                            <li>Dell</li>
                            <li>HP</li>
                        </ul>
                    </div>

                    {/* Products Grid */}
                    <div className="col-span-4">
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-2xl font-semibold">Shop</h1>
                            <select className="border p-2">
                                <option>Most Popular</option>
                                <option>Lowest Price</option>
                                <option>Highest Price</option>
                            </select>
                        </div>

                        <div className="grid grid-cols-4 gap-4">
                            <div className="border p-4 border-gray-200 bg-white shadow-sm text-center">
                                <h3 className="text-lg font-semibold">Product 1</h3>
                                <p className="text-gray-500">$100</p>
                                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
                            </div>
                            <div className="border p-4 bg-white border-gray-200 shadow-sm text-center">
                                <h3 className="text-lg font-semibold">Product 1</h3>
                                <p className="text-gray-500">$100</p>
                                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer/>
          
        </>
    );
}

export default ShopPage;