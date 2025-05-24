import React from "react";
import Footer from "../../../Components/HomePage/Footer/Footer";
import BlackFriday from "../../../Components/HomePage/BlackFriday/BlackFriday";
import Header from "../../../Components/HomePage/Header/Header";
import Categories from "../../../Components/HomePage/Categories/Categories";
import appleairpods from "../../../assets/misc/airpods.webp";
import xaomiairpods from "../../../assets/misc/AIRPHONESXAOMI.svg";
import IMAC from "../../../assets/misc/IMAC.png";

const products = [
  {
    name: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear Headphones for Workouts and Running, Triple Black",
    originalPrice: "$249.99",
    price: "$199.99",
    stock: "In Stock",
    brand: "Apple",
    image: appleairpods,
    minOrder: 1,
    maxOrder: 5,
  },
  {
    name: "Xiaomi Airphones - High Fidelity Audio, Long Battery Life, Ergonomic Fit for Extended Use",
    originalPrice: "$250.00",
    price: "$220.00",
    stock: "Out of Stock",
    brand: "Xiaomi",
    image: xaomiairpods,
    minOrder: 1,
    maxOrder: 3,
  },
  {
    name: "Apple iMac 24-inch (2023) with M3 Chip, 4.5K Retina Display - Blue",
    originalPrice: "$1,499.00",
    price: "$1,299.00",
    stock: "In Stock",
    brand: "Apple",
    image: IMAC,
    minOrder: 1,
    maxOrder: 2,
  },
];

const WishListPage = () => {
  return (
    <>
      <BlackFriday />
      <Header />
      <Categories />

      <div className="max-w-screen-xl mx-auto px-6 my-10">
        <h1 className="text-2xl font-bold mb-6">Wishlist</h1>

        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="text-left p-4 w-1/3">Product</th>
                <th className="text-left p-4">Price</th>
                <th className="text-left p-4">Stock</th>
                <th className="text-left p-4">Quantity</th>
                <th className="text-center p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item, index) => (
                <tr key={index} className="border-b">
                  {/* Product Name & Image */}
                  <td className="p-4">
                    <div className="flex gap-4 items-start">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-contain flex-shrink-0"
                      />
                      <span className="text-sm break-words">{item.name}</span>
                    </div>
                  </td>

                  {/* Price */}
                  <td className="p-4">
                    <span className="text-gray-400 line-through mr-2">{item.originalPrice}</span>
                    <span className="font-bold">{item.price}</span>
                  </td>

                  {/* Stock */}
                  <td className="p-4">
                    <span
                      className={
                        item.stock === "In Stock"
                          ? "text-green-600 font-semibold"
                          : "text-red-500 font-semibold"
                      }
                    >
                      {item.stock}
                    </span>
                  </td>

                  {/* Quantity Input */}
                  <td className="p-4">
                    {item.stock === "In Stock" ? (
                      <input
                        type="number"
                        min={item.minOrder}
                        max={item.maxOrder}
                        defaultValue={item.minOrder}
                        className="border px-2 py-1 rounded w-20"
                      />
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>

                  {/* Add to Cart Button */}
                  <td className="p-4 text-center">
                    <button
                      className={`px-6 py-2 font-semibold text-white rounded-md ${
                        item.stock === "In Stock"
                          ? "bg-teal-900 hover:bg-teal-700"
                          : "bg-gray-400 cursor-not-allowed"
                      }`}
                      disabled={item.stock !== "In Stock"}
                    >
                      Add to Cart 🛒
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default WishListPage;
