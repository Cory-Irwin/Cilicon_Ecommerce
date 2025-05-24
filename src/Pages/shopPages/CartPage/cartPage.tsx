import React, { useState, useEffect } from "react";
import Header from "../../../Components/HomePage/Header/Header";
import Categories from "../../../Components/HomePage/Categories/Categories";
import Headphones from "../../../assets/Misc/headphones.png"

const CartPage = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      title: "Wireless Headphones",
      image: Headphones,
      price: 59.99,
      quantity: 1,
    },
  ]);
  const [coupon, setCoupon] = useState("");
  const [subtotal, setSubtotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newSubtotal = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const newDiscount = coupon === "SAVE10" ? newSubtotal * 0.1 : 0;
    const newTax = (newSubtotal - newDiscount) * 0.1;
    const newTotal = newSubtotal - newDiscount + newTax;

    setSubtotal(newSubtotal);
    setDiscount(newDiscount);
    setTax(newTax);
    setTotal(newTotal);
  }, [cart, coupon]);

  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, newQty: number) => {
    if (newQty < 1) return;
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: newQty } : item
      )
    );
  };

  const applyCoupon = () => {
    // The coupon logic is handled in useEffect above
    alert("Coupon applied!");
  };

  return (
    <>
      <Header />
      <Categories />
      <div className="mx-auto max-w-screen-xl my-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Shopping Cart Section */}
          <div className="md:col-span-2 border border-gray-200 p-6 rounded-lg">
            <h1 className="text-xl font-semibold mb-4">Shopping Cart</h1>
            <div className="border-b border-gray-300 py-2 font-medium">
              Products
            </div>

            {cart.length === 0 ? (
              <div className="py-4">Your cart is currently empty.</div>
            ) : (
              <div className="space-y-4 py-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border-b pb-4"
                  >
                    {/* Remove Button */}
                    <button
                      className="text-red-500 font-bold text-xl mr-4"
                      onClick={() => removeFromCart(item.id)}
                    >
                      ×
                    </button>

                    {/* Image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded"
                    />

                    {/* Title and Price */}
                    <div className="flex-1 px-4">
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-gray-500">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-2 py-1 border rounded"
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-1 border rounded"
                      >
                        +
                      </button>
                    </div>

                    {/* Subtotal */}
                    <div className="font-semibold w-20 text-right">
                      ${(item.quantity * item.price).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="flex justify-between items-center mt-6">
              <button className="border border-gray-300 px-4 py-2 rounded-lg">
                Return to Shop
              </button>
              <button className="border border-gray-300 px-4 py-2 rounded-lg">
                Update Cart
              </button>
            </div>
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
              <button className="w-full mt-4 h-15 text-xl bg-teal-900 hover:bg-teal-600 text-white px-4 py-2 ">
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
    </>
  );
};

export default CartPage;
