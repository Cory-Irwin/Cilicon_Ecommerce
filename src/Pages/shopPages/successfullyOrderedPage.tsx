import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/HomePage/Header/Header';
import Categories from '../../Components/HomePage/Categories/Categories';

const OrderSuccess = () => {
    return (
        <>
            <Header />
            <Categories />
            <div className="flex flex-col items-center justify-center min-h-screen px-4">
                <div className="bg-white shadow-lg rounded-lg p-8 text-center max-w-md">
                    <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <h1 className="text-2xl font-semibold mb-4">Order Successfully Submitted!</h1>
                    <p className="text-gray-600 mb-6">Thank you for your purchase. Your order has been placed successfully.</p>
                    <Link to="/" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg">Return to Home</Link>
                </div>
            </div>
        </>
    );
}

export default OrderSuccess;
