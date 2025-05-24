import React, { useState } from "react";
import Footer from "../../../Components/HomePage/Footer/Footer";
import BlackFriday from "../../../Components/HomePage/BlackFriday/BlackFriday";
import Header from "../../../Components/HomePage/Header/Header";
import Categories from "../../../Components/HomePage/Categories/Categories";
import appleairpods from "../../../assets/misc/airpods.webp";
import xaomiairpods from "../../../assets/misc/AIRPHONESXAOMI.svg";
import IMAC from "../../../assets/misc/IMAC.png";

const initialProducts = [
  {
    id: 1,
    name: "Bose Sport Earbuds - Wireless Earphones",
    price: 199.99,
    image: appleairpods,
    quantity: 1,
  },
  {
    id: 2,
    name: "Xiaomi Airphones - High Fidelity Audio",
    price: 220.0,
    image: xaomiairpods,
    quantity: 1,
  },
  {
    id: 3,
    name: "Apple iMac 24-inch (2023) with M3 Chip",
    price: 1299.0,
    image: IMAC,
    quantity: 1,
  },
];

const ShoppingCartPage = () => {
  const [cart, setCart] = useState(initialProducts);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const handleRemove = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id: number, delta: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const getSubtotal = (item: { price: number; quantity: number }) =>
    (item.price * item.quantity).toFixed(2);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const tax = subtotal * 0.1; // Example: 10% tax
  const shipping = 0; // Free shipping
  const total = subtotal + tax - discount;

  const applyCoupon = () => {
    if (coupon.toLowerCase() === "save10") {
      setDiscount(10);
    } else {
      setDiscount(0);
    }
  };

  return (
    <>
      <BlackFriday />
      <Header />
      <Categories />

      <div className="mx-auto max-w-screen-xl my-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cart Table */}
          <div className="md:col-span-2 border border-gray-200 p-6 rounded-lg overflow-x-auto">
            <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
            <table className="w-full table-auto border-collapse">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="text-left p-4">Remove</th>
                  <th className="text-left p-4">Product</th>
                  <th className="text-left p-4">Price</th>
                  <th className="text-left p-4">Quantity</th>
                  <th className="text-left p-4">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="p-4">
                      <button
                        className="text-red-500 hover:text-red-700 font-bold"
                        onClick={() => handleRemove(item.id)}
                      >
                        ×
                      </button>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-contain"
                        />
                        <span className="text-sm font-medium">{item.name}</span>
                      </div>
                    </td>
                    <td className="p-4">${item.price.toFixed(2)}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleQuantityChange(item.id, -1)}
                          className="px-2 py-1 border rounded hover:bg-gray-200"
                        >
                          −
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.id, 1)}
                          className="px-2 py-1 border rounded hover:bg-gray-200"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="p-4 font-semibold">${getSubtotal(item)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Totals and Coupon */}
          <div className="space-y-6">
            {/* Cart Totals */}
            <div className="border border-gray-200 p-6 rounded-lg">
              <h2 className="text-lg font-semibold mb-4">Cart Totals</h2>
              <div className="space-y-2 text-sm">
                <p className="flex justify-between">
                  Sub-total: <span>${subtotal.toFixed(2)}</span>
                </p>
                <p className="flex justify-between">
                  Shipping: <span>Free</span>
                </p>
                <p className="flex justify-between">
                  Discount: <span>${discount.toFixed(2)}</span>
                </p>
                <p className="flex justify-between">
                  Tax (10%): <span>${tax.toFixed(2)}</span>
                </p>
              </div>
              <hr className="my-4" />
              <h1 className="text-lg font-semibold flex justify-between">
                Total: <span>${total.toFixed(2)}</span>
              </h1>
              <button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg">
                Proceed to Checkout
              </button>
            </div>

            {/* Coupon Code */}
            <div className="border border-gray-200 p-6 rounded-lg">
              <h2 className="text-lg font-semibold mb-4">Apply Coupon</h2>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Coupon Code
              </label>
              <input
                type="text"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your coupon code"
              />
              <button
                onClick={applyCoupon}
                className="w-full mt-4 bg-gray-800 text-white px-4 py-2 rounded-lg"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ShoppingCartPage;
