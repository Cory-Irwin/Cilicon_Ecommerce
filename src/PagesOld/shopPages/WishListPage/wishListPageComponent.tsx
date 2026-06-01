import React from "react";
type wishListPageComponentProps = {
  imgValue: string;
  itemdescription: string;
  priceTotal: number;
  stockStatus: string;
};

const wishListPageComponent = (props: wishListPageComponentProps) => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="">
          <h1>Wishlist</h1>
        </div>
        <div>
          <table className="table-auto w-310 bg-blue-400">
            {" "}
            <thead className="">
              {" "}
              <tr className=" ">
                {" "}
                <th>PRODUCTS</th>
                <th>PRICE</th>
                <th>STOCK STATUS</th> <th>ACTIONS</th>{" "}
              </tr>{" "}
            </thead>{" "}
            <tbody className="bg-gray-400">
              {" "}
              <tr className="bg-amber-400 ">
                {" "}
                <td className="flex flex-row w-150">
                  <img src={props.imgValue} className="w-20 h-auto" alt="" />
                  <h1>{props.itemdescription}</h1>
                </td>{" "}
                <td>
                  {" "}
                  <h1>{props.priceTotal}</h1>
                </td>{" "}
                <td>
                  <h1>{props.stockStatus}</h1>
                </td>{" "}
              </tr>{" "}
            </tbody>
          </table>
          {/* <div><WishListPageComponent imgValue={EarBuds} itemdescription={'Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear Headphones for Workouts and Running, Triple Black'} priceTotal={399.99} stockStatus={'In Stock'}/></div>
          <div><WishListPageComponent imgValue={''} itemdescription={'Simple Mobile 5G LTE Galexy 12 Mini 512GB Gaming Phone'} priceTotal={0} stockStatus={''}/></div>
          <div><WishListPageComponent imgValue={''} itemdescription={'TOZO T6 True Wireless Earbuds Bluetooth Headphones Touch Control with Wireless Charging Case IPX8 Waterproof Stereo Earphones in-Ear'} priceTotal={0} stockStatus={''}/></div>
          <div><WishListPageComponent imgValue={''} itemdescription={''} priceTotal={0} stockStatus={''}/></div> */}
        </div>
      </div>
    </div>
  );
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
