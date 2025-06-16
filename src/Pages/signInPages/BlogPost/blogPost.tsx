import React from "react";
import Footer from "../../../Components/HomePage/Footer/Footer";
import Categories from "../../../Components/HomePage/Categories/Categories";
import Header from "../../../Components/HomePage/Header/Header";
import BlackFriday from "../../../Components/HomePage/BlackFriday/BlackFriday";
import LatestBlog from "../../../assets/BlogPost/lastestblogsvg.svg";
import BlogPostComponent from "./blogPostComponent";
import ArrowRight from "../../../assets/LandingPage/ArrowRight.svg";
import ArrowBigLeft from "../../../assets/shopwithcat/ArrowLeft.svg";
import ArrowRight2 from "../../../assets/shopwithcat/ArrowRight.svg";
import MagGlass from "../../../assets/ShopPage/MagnifyingGlass.svg";
import GalleryComponent from "./BlogDetails/galleryComponent";


const blogPost = () => {
  return (
    <>
      <BlackFriday />
      <Header />
      <Categories />
      <div className="mx-auto max-w-screen-xl h-auto my-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6">
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Category Section */}
            <div className="border-2 border-gray-200 p-4">
              <h1 className="text-lg font-bold mb-2">Category</h1>
              <div className="space-y-1">
                <label>
                  <input type="radio" name="category" /> All
                </label>
                <label>
                  <input type="radio" name="category" /> Electronic Devices
                </label>
              </div>
            </div>

            {/* Latest Blog Section */}
            <div className="border-2 border-gray-200 p-4">
              <h2 className="text-lg font-bold mb-2">Latest Blog</h2>
              {[1, 2, 3].map((_, i) => (
                <div className="flex gap-3 mb-3" key={i}>
                  <img
                    src={LatestBlog}
                    alt=""
                    className="h-16 w-16 object-cover"
                  />
                  <div>
                    <h3 className="text-sm font-semibold">
                      Blog title goes here
                    </h3>
                    <p className="text-xs text-gray-500">25 Nov, 2025</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Gallery */}
           <GalleryComponent articleImage1={""} articleImage2={""} articleImage3={""} articleImage4={""} articleImage5={""} articleImage6={""} articleImage7={""} articleImage8={""}/>
          </div>

          {/* Blog posts */}
          <div>
            <div className="flex py-2 flex-row gap-24 justify-between">
              <div className=" flex relative flex-row gap-6">
                <input
                  type="text"
                  placeholder="Search brands..."
                  className="w-112.5 px-4 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="absolute right-5 top-3 h-15 w-auto">
                  <img src={MagGlass} alt="" />
                </div>
              </div>
              <div className="flex flex-row text-center items-center gap-6">
                <h1 className="">Sort by:</h1>{" "}
                <select className="w-full md:w-60 px-4 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Sort by</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="name-asc">Name: A-Z</option>
                  <option value="name-desc">Name: Z-A</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-12 ">
              <div className="flex flex-row gap-6  mb-6 justify-between">
                <BlogPostComponent
                  imgurl={LatestBlog}
                  name={
                    "Appy Store"
                  }
                  date={"12"}
                  comments={220}
                  title={"Site-Wide Cart Upgrade Cuts Abandoned Orders"}
                  description={
                    "After months of customer feedback and UX testing, ShopDropper has rolled out its biggest cart update yet — and the numbers are already speaking. The new sticky cart feature, now live on both desktop and mobile, allows users to view, modify, and even save items from any page without needing to jump to checkout. The feature also comes with real-time stock alerts and a simplified “quick buy” option that skips redundant "
                  }
                />
                <BlogPostComponent
                  imgurl={LatestBlog}
                  name={
                    "Appy Store"
                  }
                  date={"12"}
                  comments={220}
                  title={"Night Mode Activated: ShopDropper "}
                  description={
                    "After months of customer feedback and UX testing, ShopDropper has rolled out its biggest cart update yet — and the numbers are already speaking. The new sticky cart feature, now live on both desktop and mobile, allows users to view, modify, and even save items from any page without needing to jump to checkout. The feature also comes with real-time stock alerts and a simplified “quick buy” option that skips redundant "
                  }
                />
              </div>
              
            </div>
            
              
         
           
            <div className="flex flex-col">
              <div className="flex flex-row gap-6  mb-6 justify-between">
                <BlogPostComponent
                  imgurl={LatestBlog}
                  name={
                    "Appy Store"
                  }
                  date={"12"}
                  comments={220}
                  title={"Site-Wide Cart Upgrade Cuts Abandoned Orders"}
                  description={
                    "After months of customer feedback and UX testing, ShopDropper has rolled out its biggest cart update yet — and the numbers are already speaking. The new sticky cart feature, now live on both desktop and mobile, allows users to view, modify, and even save items from any page without needing to jump to checkout. The feature also comes with real-time stock alerts and a simplified “quick buy” option that skips redundant "
                  }
                />
                <BlogPostComponent
                  imgurl={LatestBlog}
                  name={
                    "Appy Store"
                  }
                  date={"12"}
                  comments={220}
                  title={"Night Mode Activated: ShopDropper "}
                  description={
                    "After months of customer feedback and UX testing, ShopDropper has rolled out its biggest cart update yet — and the numbers are already speaking. The new sticky cart feature, now live on both desktop and mobile, allows users to view, modify, and even save items from any page without needing to jump to checkout. The feature also comes with real-time stock alerts and a simplified “quick buy” option that skips redundant "
                  }
                />
              </div>
              
            </div>
            <div className="flex flex-col  ">
              <div className="flex flex-row gap-6   mb-6 justify-between">
                <BlogPostComponent
                  imgurl={LatestBlog}
                  name={
                    "Appy Store"
                  }
                  date={"12"}
                  comments={220}
                  title={"Site-Wide Cart Upgrade Cuts Abandoned Orders"}
                  description={
                    "After months of customer feedback and UX testing, ShopDropper has rolled out its biggest cart update yet — and the numbers are already speaking. The new sticky cart feature, now live on both desktop and mobile, allows users to view, modify, and even save items from any page without needing to jump to checkout. The feature also comes with real-time stock alerts and a simplified “quick buy” option that skips redundant "
                  }
                />
                <BlogPostComponent
                  imgurl={LatestBlog}
                  name={
                    "Appy Store"
                  }
                  date={"12"}
                  comments={220}
                  title={"Night Mode Activated: ShopDropper "}
                  description={
                    "After months of customer feedback and UX testing, ShopDropper has rolled out its biggest cart update yet — and the numbers are already speaking. The new sticky cart feature, now live on both desktop and mobile, allows users to view, modify, and even save items from any page without needing to jump to checkout. The feature also comes with real-time stock alerts and a simplified “quick buy” option that skips redundant "
                  }
                />
              </div>
              
            </div><div className="flex justify-center  py-10  gap-6 flex-row">
              <div className="bg-green-900 rounded-4xl h-12 w-12 flex items-center justify-center">
                <img src={ArrowBigLeft} alt="" className="w-7 h-7" />
              </div>
              <div className="border-2 rounded-full hover:bg-gray-200 p-2 w-12 h-12 items-center text-center border-gray-200 flex justify-center">
                1
              </div>
              <div className="border-2 rounded-full hover:bg-gray-200 p-2 w-12 h-12 items-center text-center border-gray-200 flex justify-center">
                2
              </div>
              <div className="border-2 rounded-full hover:bg-gray-200 p-2 w-12 h-12 items-center text-center border-gray-200 flex justify-center">
                3
              </div>
              <div className="border-2 rounded-full hover:bg-gray-200 p-2 w-12 h-12 items-center text-center border-gray-200 flex justify-center">
                4
              </div>
              <div className="border-2 rounded-full hover:bg-gray-200 p-2 w-12 h-12 items-center text-center border-gray-200 flex justify-center">
                5
              </div>
              <div className="border-2 rounded-full hover:bg-gray-200 p-2 w-12 h-12 items-center text-center border-gray-200 flex justify-center">
                6
              </div>
              <div className="border-2 rounded-full hover:bg-gray-200 p-2 w-12 h-12 items-center text-center border-gray-200 flex justify-center">
                7
              </div>
              <div className="bg-green-900 rounded-4xl h-12 w-12 flex items-center justify-center">
                <img src={ArrowRight2} alt="" className="w-7 h-7" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default blogPost;

// <div className="mx-auto max-w-screen-xl my-20 px-4 ">
//
//     <div className="grid grid-cols-3 grid-rows-6 gap-4">
//       <div className='border-2  border-gray-200'>
//         <div className='flex-col flex '>
//           <h1>Category</h1>
//           <input type="radio" name="all" />
//           <input type="radio" name="Electronic Devices" />
//           <input type="radio" name="Computer & Laptop" />
//           <input type="radio" name="Computer Accessories" />
//           <input type="radio" name="SmartPhone" />
//           <input type="radio" name="Headphone" />
//           <input type="radio" name="Mobile Accessories" />
//           <input type="radio" name="Gaming Console" />
//           <input type="radio" name="Camera & Photo" />
//         </div>
//       </div>

//       <div className="col-start-1 row-start-2">2
//         <div className="grid grid-cols-1 grid-rows-3 gap-4 ">
//           <div className='border-2 border-gray-200'>
//             <div>LATEST BLOG</div>
//             <div className='justify-between flex flex-row p-2 ' >

//               <div><img src={LatestBlog} alt="" className='h-25 w-75 ' /></div>
//               <div><h1>Now this is a story all about how my life got flipped turned upside down</h1>
//                 <h1>25 Nov, 2025</h1>
//               </div>
//             </div>

//             <div >
//               <div className='justify-between flex flex-row p-2 ' >

//                 <div><img src={LatestBlog} alt="" className='h-25 w-75 ' /></div>
//                 <div><h1>Now this is a story all about how my life got flipped turned upside down</h1>
//                   <h1>25 Nov, 2025</h1>
//                 </div>
//               </div>
//             </div>
//             <div >
//               <div className='justify-between flex flex-row p-2 ' >

//                 <div><img src={LatestBlog} alt="" className='h-25 w-75 ' /></div>
//                 <div><h1>Now this is a story all about how my life got flipped turned upside down</h1>
//                   <h1>25 Nov, 2025</h1>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="col-start-1 row-start-3">
//         <h1>Gallery</h1>

//           <div className="grid grid-cols-4 grid-rows-2 gap-4">
//               <div >1</div>
//               <div >2</div>
//               <div >3</div>
//               <div >4</div>
//               <div >5</div>
//               <div >6</div>
//               <div >7</div>
//               <div >8</div>
//           </div>

//       </div>
//       <div className="col-span-2 col-start-2 row-start-1">4</div>
//       <div className="col-start-2 row-start-2">5</div>
//       <div className="col-start-3 row-start-2">6</div>
//       <div >7</div>
//       <div className="row-start-3">8</div>
//       <div className="col-start-2">9</div>
//       <div className="col-start-3 row-start-4">10</div>
//       <div className="col-start-2 row-start-5">11</div>
//       <div className="col-start-3 row-start-5">12</div>
//       <div className="col-span-2 col-start-2 row-start-6">13</div>
//     </div>
//   </div>
//   <Footer />
// </div>
