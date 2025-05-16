import React from "react";
import Header from "../../Components/HomePage/Header/Header";
import Categories from "../../Components/HomePage/Categories/Categories";
import Footer from "../../Components/HomePage/Footer/Footer";
import FeaturedProductCards from "../../Components/ProductCards/FeaturedProductCard";

const ShopPage = () => {
  return (
    <>
      <Header />
      <Categories />
      <div className="mx-auto max-w-screen-xl my-10 px-4">
        <div className="grid grid-cols-2 lg:grid-cols-[300px_1fr] grid-rows-1 gap-4">
          <div>
            <h1>Category</h1>
            <div>
              <ul>
                <li>Electronic Devices</li>
                <li>Computers & Laptops</li>
                <li>Computer Accessories</li>
                <li>Smartphones</li>
                <li>Headphones</li>
                <li>Mobile Accessories</li>
                <li>Gaming Consoles</li>
                <li>Cameras</li>
                <li>TV & Home Appliances</li>
                <li>GPS & Navigation</li>
              </ul>
            </div>

            <div>
              <h1>Price Range</h1>
              <div>
                <h1>pricerangegoeshesre</h1>
                <div>
                  <h1>Min Price</h1>
                </div>
                <div>
                  <h1>Max Price</h1>
                </div>
              </div>
              <ul>
                <li>All Price</li>
                <li>Under $20</li>
                <li>$25 to $100</li>
                <li>$100 to $300</li>
                <li>$300 to $500</li>
                <li>$500 to $1000</li>
                <li>$1000 to $10,000</li>
              </ul>
            </div>
            <div>
              <h1>POPULAR BRANDS</h1>
              <div>
                <ul>
                  <li>Apple</li>
                  <li>Microsoft</li>
                  <li>Dell</li>
                  <li>Symphony</li>
                  <li>Sony</li>
                  <li>LG</li>
                  <li>One Plus</li>
                  <li>Google</li>
                  <li>Samsung</li>
                  <li>HP</li>
                  <li>Xiaomi</li>
                  <li>Panasonic</li>
                  <li>Intel</li>
                </ul>
              </div>
              <h1>POPULAR TAGS</h1>
              <div className="flex flex-wrap gap-2">
                <span className="border-2 px-3 py-1 rounded">Game</span>
                <span className="border-2 px-3 py-1 rounded">iPhone</span>
                <span className="border-2 px-3 py-1 rounded">TV</span>
                <span className="border-2 px-3 py-1 rounded">Asus Laptops</span>
                <span className="border-2 px-3 py-1 rounded">Macbook</span>
                <span className="border-2 px-3 py-1 rounded">SSD</span>
                <span className="border-2 px-3 py-1 rounded">
                  Graphics Card
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-row gap-24 justify-between">
              <div className="bg-amber-50 ">
                <h1>Search</h1>
              </div>
              <div className="flex flex-row gap-6">
                <h1>Sort by</h1>
                <h1>Most Popular</h1>
              </div>
            </div>
            <div>
            <div className="flex bg-gray-200 flex-row gap-24 justify-between">
              <div className=" flex flex-row gap-4 ">
                <div><h1>Active Filters:</h1></div>
                <div><h1>Electronic Devices</h1></div>
                <div><h1>5 Star Rating</h1></div>
              </div>
              <div className="flex flex-row gap-6">
                <h1>Sort by</h1>
                <h1>Most Popular</h1>
              </div>
            </div>
            <div className="flex flex-row justify-between gap-y-6 flex-wrap">
                <FeaturedProductCards imageurl={""} title={""}/>
                <FeaturedProductCards imageurl={""} title={""}/>
                <FeaturedProductCards imageurl={""} title={""}/>
                <FeaturedProductCards imageurl={""} title={""}/>
                <FeaturedProductCards imageurl={""} title={""}/>
                <FeaturedProductCards imageurl={""} title={""}/>
                <FeaturedProductCards imageurl={""} title={""}/>
                <FeaturedProductCards imageurl={""} title={""}/>
            </div>
          </div>
          </div>
          
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShopPage;
