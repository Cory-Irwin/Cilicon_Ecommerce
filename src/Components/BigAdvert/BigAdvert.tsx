import React from "react";
import macbookpro from "../../assets/expensivemac.svg";
import FullProductCards from "../ProductCards/FullProductCard";
const BigAdvert = () => {
  return (
    <div className="mx-auto max-w-screen-xl my-20 px-4">
      <div className="bg-gradient-to-r from-neutral-900 to-green-900 h-150">
        <FullProductCards
         savings="Save up to $200.00"
          imageurl={macbookpro}
          name="Macbook Pro"
          description="Apple M1 Max Chip. 32GB Unified Memory, 1TB SSD Storage"
          price={3999}
        />
      </div>
    </div>
  );
};

export default BigAdvert;
