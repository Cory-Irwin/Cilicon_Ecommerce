import React from "react";
import Copy from "../../assets/DashboardPage/Copy.svg"
import VISA from "../../assets/DashboardPage/VISA.svg"

type dashboardPageProps = {
  accountBalance: number;
  cardNumber: number;
  cardHolderName: string;
  commaThousand: boolean;
  fullName: string;
};

const creditCardComponent = (props: dashboardPageProps) => {
  return (
    <div className="h-45 flex-col w-1/3 rounded-sm flex p-2 px-4 bg-gradient-to-r from-slate-500 to-slate-800  text-white">
      <div className="flex mt-2  flex-row justify-between w-full">
        <div>
          {" "}
          <h1 className="text-xl ">
            ${props.accountBalance}
            {props.commaThousand}
          </h1>
        </div>
        <div>
          {" "}
          <button className="text-xl text-center items-center px-5">...</button>
        </div>
      </div>
      <div>
        <h1 className="mt-5 text-sm">Card Number</h1>
      </div>
      <div className="flex flex-row gap-2">
        {" "}
        <h1 className="text-xl">**** **** **** {props.cardNumber}</h1>
        <img src={Copy} alt="" className="w-6 h-auto"/>
      </div>
      <div className="flex mt-5 flex-row gap-20 ">
        <img src={VISA} alt="" className="w-auto h-5"/>
        <h1>{props.fullName}</h1>
      </div>
    </div>
  );
};

export default creditCardComponent;
//
//
//   <div>
//     <h1>Visa</h1>
//     <h1>Appy Store</h1>
//   </div>
