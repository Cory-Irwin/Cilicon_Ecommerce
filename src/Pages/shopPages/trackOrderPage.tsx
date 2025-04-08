import React from 'react';
import Header from '../../Components/Header/Header';

const TrackOrder = () => {
    return (
        <>
            <Header />
            <div className="mx-auto max-w-screen-md my-10 px-4 text-center">
                <h1 className="text-2xl font-semibold mb-4">Track Your Order</h1>
                <p className="text-gray-600 mb-6">Enter your order number below to track the status of your shipment.</p>
                <input 
                    type="text" 
                    placeholder="Enter Order Number" 
                    className="border p-2 w-full max-w-md mb-4" 
                />
                <button className="bg-blue-500 text-white px-6 py-2 rounded">Track Order</button>
            </div>
        </>
    );
}

export default TrackOrder;
