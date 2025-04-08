import React from 'react';
import Header from '../../Components/Header/Header';

const TrackOrder = () => {
    return (
        <>
            <Header />
            <div className="mx-auto max-w-screen-md my-10 px-4">
                <h1 className="text-2xl font-semibold text-center mb-4">Track Your Order</h1>
                <p className="text-gray-600 text-center mb-6">Enter your order number below to track the status of your shipment.</p>
                <div className="text-center">
                    <input 
                        type="text" 
                        placeholder="Enter Order Number" 
                        className="border p-2 w-full max-w-md mb-4" 
                    />
                    <button className="bg-blue-500 text-white px-6 py-2 rounded">Track Order</button>
                </div>
                
                <div className="bg-gray-100 p-6 mt-8 rounded-lg">
                    <h2 className="text-lg font-semibold mb-2">Order #96459761</h2>
                    <p className="text-gray-600">4 Products • Order Placed on 17 Jan, 2024 at 7:32 PM</p>
                    <p className="text-blue-500 font-bold text-xl mt-2">$1199.00</p>
                </div>

                <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-2">Order Progress</h3>
                    <div className="flex justify-between items-center text-gray-500 text-sm">
                        <div className="text-green-500">Order Placed</div>
                        <div className="text-orange-500">Packaging</div>
                        <div>On The Road</div>
                        <div>Delivered</div>
                    </div>
                    <div className="w-full bg-gray-300 h-1 my-2 relative">
                        <div className="bg-orange-500 h-1 w-1/4"></div>
                    </div>
                </div>

                <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-2">Order Activity</h3>
                    <ul className="text-gray-600">
                        <li className="mb-2">✅ Your order has been delivered. Thank you for shopping at Clicon! (23 Jan, 2024 - 7:32 PM)</li>
                        <li className="mb-2">🚚 Our delivery man picked up your order. (23 Jan, 2024 - 2:00 PM)</li>
                        <li className="mb-2">📦 Your order reached the last mile hub. (22 Jan, 2024 - 8:00 AM)</li>
                        <li className="mb-2">🚚 Your order is on its way to the hub. (21 Jan, 2024 - 5:32 AM)</li>
                        <li className="mb-2">✅ Your order is successfully verified. (20 Jan, 2024 - 7:32 PM)</li>
                        <li className="mb-2">✅ Your order has been confirmed. (19 Jan, 2024 - 2:46 PM)</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default TrackOrder;
