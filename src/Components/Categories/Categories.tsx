import { NavLink } from "react-router-dom";


const Categories = () => {
  return (
    <section className='w-full bg-white  top-[200px] left-0 z-40 shadow-md'>
    <div className='max-w-screen-xl mx-auto px-4 py-2 flex items-center justify-between'>
      
      {/* Left Section (Categories + Navigation) */}
      <div className="flex items-center gap-x-8">
        {/* Categories Section */}
        <div className='bg-gray-100 p-2'>
          <h1 className="text-lg font-semibold">All Categories</h1>
        </div>
  
        {/* Navigation Links */}
        <nav className="flex gap-x-8 text-gray-500 text-sm uppercase">
          <NavLink to={"/TrackOrderPage"}> <a href="#" className="hover:text-gray-400">Track Order ▾</a></NavLink>
          <NavLink to={"/ComparePage"}>  <a href="#" className="hover:text-gray-400">Compare</a></NavLink>
          <NavLink to={"/FaqPage"}>  <a href="#" className="hover:text-gray-400">FAQ</a></NavLink>
          <NavLink to={"CustomerSupportPage"}>  <a href="#" className="hover:text-gray-400">Need Help?</a></NavLink>
        </nav>
      </div>
  
      {/* Right Section (Contact Info) */}
      <div>
        <h1 className='text-lg font-semibold'>+1-202-555-0104</h1>
      </div>
  
    </div>
  </section>
  
  );
}

export default Categories;
