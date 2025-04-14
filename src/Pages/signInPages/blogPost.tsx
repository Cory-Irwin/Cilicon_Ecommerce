import React from "react";
import Footer from "../../Components/Footer/Footer";
import Categories from "../../Components/Categories/Categories";
import Header from "../../Components/Header/Header";
import BlackFriday from "../../Components/BlackFriday/BlackFriday";
import LatestBlog from "../../assets/BlogPost/lastestblogsvg.svg";
const blogPost = () => {
  return (
    <>
      <BlackFriday />
      <Header />
      <Categories />
      <div className="mx-auto max-w-screen-xl my-10 px-4">
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
            <div>
              <h2 className="text-lg font-bold mb-2">Gallery</h2>
              <div className="grid grid-cols-4 gap-2">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="h-16 bg-gray-200">
                    IMG
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Blog posts */}
          <div>
            <div className="flex justify-between mb-4">
              <input
                type="text"
                placeholder="Search..."
                className="border px-3 border-gray-200 py-1 rounded"
              />
              <select className="border border-gray-200 px-3 py-1 rounded">
                <option>Most Popular</option>
                <option>Newest</option>
              </select>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {[...Array(9)].map((_, i) => (
                <div className="border border-gray-200 p-4" key={i}>
                  <img
                    src={LatestBlog}
                    alt=""
                    className="w-full h-40 object-cover mb-2"
                  />
                  <h3 className="text-lg font-semibold">Blog Post Title</h3>
                  <p className="text-sm text-gray-600">
                    Short summary of the blog post goes here.
                  </p>
                  <button className="mt-2 text-orange-500 font-semibold">
                    Read More →
                  </button>
                </div>
              ))}
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
