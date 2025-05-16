import React from 'react'
import Footer from '../../Components/HomePage/Footer/Footer'
import BlackFriday from '../../Components/HomePage/BlackFriday/BlackFriday'
import Header from '../../Components/HomePage/Header/Header'
import Categories from '../../Components/HomePage/Categories/Categories'
import appleairpods from '../../assets/misc/airpods.webp'
import xaomiairpods from '../../assets/misc/AIRPHONESXAOMI.svg'
import IMAC from '../../assets/misc/IMAC.png'

const products = [
  {
    name: "Apple AirPods",
    originalPrice: "$249.99",
    price: "$199.99",
    stock: "In Stock",
    brand: "Apple",
    image: appleairpods
  },
  {
    name: "Xiaomi Airphones",
    originalPrice: "$250.00",
    price: "$220.00",
    stock: "Out of Stock",
    brand: "Xiaomi",
    image: xaomiairpods
  },
  {
    name: "Apple iMac",
    originalPrice: "$1,499.00",
    price: "$1,299.00",
    stock: "In Stock",
    brand: "Apple",
    image: IMAC
  }
]

const WishListPage = () => {
  return (
    <>
      <BlackFriday />
      <Header />
      <Categories />

      <div className="max-w-screen-xl mx-auto px-6 my-10">
        <h1 className="text-2xl font-bold mb-6">Wishlist</h1>

        {/* HEADER ROW */}
        <div className="grid grid-cols-5 font-semibold bg-gray-100 py-3 px-4 rounded-t-md text-left border-b">
          <div>Products</div>
          <div>Price</div>
          <div>Stock Status</div>
          <div>Brand</div>
          <div className="text-center">Actions</div>
        </div>

        {/* PRODUCT LIST */}
        {products.map((item, index) => (
          <div key={index} className="grid grid-cols-5 items-center border-b py-4 px-4 text-left">
            {/* Product Name + Image */}
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-contain" />
              <span className="text-sm">{item.name}</span>
            </div>

            {/* Price with strikethrough */}
            <div>
              <span className="text-gray-400 line-through mr-2">{item.originalPrice}</span>
              <span className="font-bold">{item.price}</span>
            </div>

            {/* Stock Status with color coding */}
            <div className={item.stock === "In Stock" ? "text-green-500 font-semibold" : "text-red-500 font-semibold"}>
              {item.stock}
            </div>

            {/* Brand */}
            <div>{item.brand}</div>

            {/* Action Button */}
            <div className="text-center">
              <button
                className={`px-4 py-2 font-semibold text-white rounded flex items-center justify-center gap-2 ${
                  item.stock === "In Stock" ? "bg-orange-500 hover:bg-orange-600" : "bg-gray-400 cursor-not-allowed"
                }`}
                disabled={item.stock !== "In Stock"}
              >
                Add to Cart 🛒
              </button>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  )
}

export default WishListPage
