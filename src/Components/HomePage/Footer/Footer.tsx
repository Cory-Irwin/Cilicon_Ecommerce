import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 ">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-4 gap-6">
        {/* Logo & Contact */}
        <div>
          <h2 className="text-lg font-bold">AppyCon</h2>
          <p className="mt-2">Customer Support:</p>
          <p className="font-semibold">(629) 555-0129</p>
          <p>
            4517 Washington Ave.
            <br />
            Manchester, Kentucky 39495
          </p>
          <p className="mt-2">info@kinbo.com</p>
        </div>

        {/* Top Category */}
        <div>
          <h3 className="font-semibold mb-2">Top Category</h3>
          <ul className="space-y-1">
            <li>Computer & Laptop</li>
            <li>Smartphone</li>
            <li>Headphone</li>
            <li className="text-yellow-400">Accessories</li>
            <li>Camera & Photo</li>
            <li>TV & Homes</li>
            <li className="text-yellow-400">Browse All Products →</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>Shop Product</li>
            <li>Shopping Cart</li>
            <li>Wishlist</li>
            <li>Compare</li>
            <li>Track Order</li>
            <li>Customer Help</li>
            <li>About Us</li>
          </ul>
        </div>

        {/* Download App & Popular Tags */}
        <div>
          <h3 className="font-semibold mb-2">Download App</h3>
          <div className="space-y-2">
            <button className="bg-gray-800 px-4 py-2 rounded flex items-center">
              Get it now <span className="ml-2">Google Play</span>
            </button>
            <button className="bg-gray-800 px-4 py-2 rounded flex items-center">
              Get it now <span className="ml-2">App Store</span>
            </button>
          </div>
          <h3 className="font-semibold mt-6 mb-2">Popular Tags</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-800 px-3 py-1 rounded">Game</span>
            <span className="bg-gray-800 px-3 py-1 rounded">iPhone</span>
            <span className="bg-gray-800 px-3 py-1 rounded">TV</span>
            <span className="bg-gray-800 px-3 py-1 rounded">Asus Laptops</span>
            <span className="bg-gray-800 px-3 py-1 rounded">Macbook</span>
            <span className="bg-gray-800 px-3 py-1 rounded">SSD</span>
            <span className="bg-gray-800 px-3 py-1 rounded">Graphics Card</span>
          </div>
        </div>
      </div>
      <div className="text-center mt-6 text-gray-400">
        Kinbo eCommerce Template © 2021. Design by Templatecookie
      </div>
    </footer>
  );
};

export default Footer;
