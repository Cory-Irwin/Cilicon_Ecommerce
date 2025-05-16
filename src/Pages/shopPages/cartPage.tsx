import React from 'react';
import Header from '../../Components/HomePage/Header/Header';
import Categories from '../../Components/HomePage/Categories/Categories';

const CartPage = () => {
    return (
        <>
            <Header />
            <Categories />
            <div className="mx-auto max-w-screen-xl my-20 px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Shopping Cart Section */}
                    <div className="md:col-span-2 border border-gray-200 p-6 rounded-lg">
                        <h1 className="text-xl font-semibold mb-4">Shopping Cart</h1>
                        <div className="border-b border-gray-300 py-2 font-medium">Products</div>
                        <div className="py-4">Your cart is currently empty.</div>
                        <div className="flex justify-between items-center mt-6">
                            <button className="border border-gray-300 px-4 py-2 rounded-lg">Return to Shop</button>
                            <button className="border border-gray-300 px-4 py-2 rounded-lg">Update Cart</button>
                        </div>
                    </div>

                    {/* Cart Totals Section */}
                    <div className="border border-gray-200 p-6 rounded-lg">
                        <h2 className="text-lg font-semibold mb-4">Cart Totals</h2>
                        <div className="space-y-2">
                            <p className="flex justify-between">Sub-total: <span>$0.00</span></p>
                            <p className="flex justify-between">Shipping: <span>Free</span></p>
                            <p className="flex justify-between">Discount: <span>$0.00</span></p>
                            <p className="flex justify-between">Tax: <span>$0.00</span></p>
                        </div>
                        <hr className="my-4" />
                        <h1 className="text-lg font-semibold flex justify-between">Total: <span>$0.00</span></h1>
                        <button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg">Proceed to Checkout</button>
                    </div>

                    {/* Coupon Code Section */}
                    <div className="border border-gray-200 p-6 rounded-lg md:col-start-3">
                        <h2 className="text-lg font-semibold mb-4">Apply Coupon</h2>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Coupon Code</label>
                        <input 
                            type="text" 
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your coupon code" 
                        />
                        <button className="w-full mt-4 bg-gray-800 text-white px-4 py-2 rounded-lg">Apply</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartPage;
