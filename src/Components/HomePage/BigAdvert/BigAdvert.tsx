// import React from "react";
import macbookpro from "../../../assets/misc/icon-1.svg";
import FullProductCards from "../../ProductCards/FullProductCard";
const BigAdvert = () => {
  return (
    <div className="mx-auto max-w-screen-xl my-20 px-4">
      <div className="bg-gradient-to-r from-neutral-900 to-green-900 ">
        <FullProductCards
          savings="Save up to $200.00"
          imageurl={macbookpro}
           name="Macbook Pro"
           price="2000"
          description="Apple M1 Max Chip. 32GB Unified Memory, 1TB SSD Storage" title={""}          // price={3999}
        />
      </div>
    </div>
  );
};

export default BigAdvert;
