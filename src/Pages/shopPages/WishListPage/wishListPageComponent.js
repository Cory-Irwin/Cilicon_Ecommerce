import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const wishListPageComponent = (props) => {
    return (_jsx("div", { children: _jsxs("div", { className: "flex flex-col", children: [_jsx("div", { className: "", children: _jsx("h1", { children: "Wishlist" }) }), _jsx("div", { children: _jsxs("table", { className: "table-auto w-310 bg-blue-400", children: [" ", _jsxs("thead", { className: "", children: [" ", _jsxs("tr", { className: " ", children: [" ", _jsx("th", { children: "PRODUCTS" }), _jsx("th", { children: "PRICE" }), _jsx("th", { children: "STOCK STATUS" }), " ", _jsx("th", { children: "ACTIONS" }), " "] }), " "] }), " ", _jsxs("tbody", { className: "bg-gray-400", children: [" ", _jsxs("tr", { className: "bg-amber-400 ", children: [" ", _jsxs("td", { className: "flex flex-row w-150", children: [_jsx("img", { src: props.imgValue, className: "w-20 h-auto", alt: "" }), _jsx("h1", { children: props.itemdescription })] }), " ", _jsxs("td", { children: [" ", _jsx("h1", { children: props.priceTotal })] }), " ", _jsx("td", { children: _jsx("h1", { children: props.stockStatus }) }), " "] }), " "] })] }) })] }) }));
};
export default wishListPageComponent;
{
    /* //  <div classNameNameName='flex flex-row gap-12 '>
  //       <div classNameNameName=''><img src={props.imgValue} alt="" classNameNameName='h-30 w-30'/></div>
  //       <div classNameNameName=' line-clamp-4 w-80 '><h1 classNameNameName='line-clamp-2 truncate'>{props.itemdescription}</h1></div>
  //       <div><h1>{props.priceTotal}</h1></div>
  //       <div><h1>{props.stockStatus}</h1></div>
  //     </div> */
}
{
    /* <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                  <th scope="col" className="px-6 py-3">
                      Product<span className="sr-only"></span>
                  </th>
                  <th scope="col" className="px-6 py-3">
                      
                  </th>
                  <th scope="col" className="px-6 py-3">
                      Qty
                  </th>
                  <th scope="col" className="px-6 py-3">
                      Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                      Action
                  </th>
              </tr>
          </thead>
          <tbody>
              <tr className="bg-white border-b dark:bg-gray-300 dark:border-gray-200 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="p-4 w-160 ">
                    <div className="flex flex-row justify-center ">
                      <img src={props.imgValue} className="w-6 md:w-20 max-w-full max-h-full" alt="Apple Airpods"/>
                      <h1>{props.itemdescription}</h1></div>
                  </td>
                  
                  <td className="px-6 py-4">
                      <div className="flex items-center">
                          <button className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                              <span className="sr-only">Quantity button</span>
                              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                              </svg>
                          </button>
                          <div>
                              <input type="number" id="first_product" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required />
                          </div>
                          <button className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                              <span className="sr-only">Quantity button</span>
                              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                              </svg>
                          </button>
                      </div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      $599
                  </td>
                  <td className="px-6 py-4">
                      <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                  </td>
              </tr>
              
             
          </tbody>
      </table> */
}
