import React from 'react';
import Header from '../../Components/Header/Header';
import Categories from '../../Components/Categories/Categories';

const BillingPage = () => {
    return (
        <>
            <Header />
            <Categories />
            <div className="mx-auto max-w-screen-xl my-20 px-4">
                <h1 className="text-2xl font-semibold mb-6">Billing Details</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Billing Form */}
                    <div className="border border-gray-200 p-6 rounded-lg">
                        <h2 className="text-lg font-semibold mb-4">Billing Information</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-sm font-medium">Full Name</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="John Doe" required />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium">Email Address</label>
                                <input type="email" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="john.doe@example.com" required />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium">Address</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="123 Main St, City, Country" required />
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-sm font-medium">City</label>
                                    <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Postal Code</label>
                                    <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" required />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium">Country</label>
                                <select className="w-full p-2 border border-gray-300 rounded-lg" required>
                                    <option value="">Select Country</option>
                                    <option value="USA">USA</option>
                                    <option value="Canada">Canada</option>
                                    <option value="UK">UK</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    
                    {/* Order Summary */}
                    <div className="border border-gray-200 p-6 rounded-lg">
                        <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                        <div className="space-y-2">
                            <p className="flex justify-between">Subtotal: <span>$0.00</span></p>
                            <p className="flex justify-between">Shipping: <span>Free</span></p>
                            <p className="flex justify-between">Tax: <span>$0.00</span></p>
                        </div>
                        <hr className="my-4" />
                        <h1 className="text-lg font-semibold flex justify-between">Total: <span>$0.00</span></h1>
                        <button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg">Proceed to Payment</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BillingPage;
