import React from "react";
import samsung from "../../../assets/misc/iphone.png";
import keyboard from "../../../assets/misc/keyboard.png";
import IMAC from "../../../assets/Misc/IMAC.png";
import Footer from "../../../Components/HomePage/Footer/Footer";
import BlackFriday from "../../../Components/HomePage/BlackFriday/BlackFriday";
import Header from "../../../Components/HomePage/Header/Header";
import Categories from "../../../Components/HomePage/Categories/Categories";
import ComparePageProductComponent from "./comparePageProductComponent";
import NavComparePageProductComponent from "./navComparePageProductComponent";
const ComparePage = () => {
  return (
    <>
      <BlackFriday />
      <Header />
      <Categories />
      <div className="mx-auto max-w-screen-xl my-20 h-220 px-4">
        <div className="grid grid-cols-4 grid-rows-1 gap-4">
          <div><NavComparePageProductComponent imgValue={""} productTitle={""} emptySize={""} emptyWeight={""}/></div>
          <div><ComparePageProductComponent
                imgValue={IMAC}
                productTitle={
                  "Macbook Pro 2024 Edition 1TB SSD i7-7700k CPU 27 inch"
                }
                reviewStars={2}
                reviewCount={245}
                price={undefined}
                number={undefined}
                soldBy={""}
                brandName={""}
                modelName={""}
                stockStatus={false}
                size={""}
                weight={""}
                emptySize={""}
                emptyWeight={""}
              /></div>
           <div><ComparePageProductComponent
                imgValue={IMAC}
                productTitle={
                  "Macbook Pro 2024 Edition 1TB SSD i7-7700k CPU 27 inch"
                }
                reviewStars={2}
                reviewCount={245}
                price={undefined}
                number={undefined}
                soldBy={""}
                brandName={""}
                modelName={""}
                stockStatus={false}
                size={""}
                weight={""}
                emptySize={""}
                emptyWeight={""}
              /></div>
            <div><ComparePageProductComponent
                imgValue={IMAC}
                productTitle={
                  "Macbook Pro 2024 Edition 1TB SSD i7-7700k CPU 27 inch"
                }
                reviewStars={2}
                reviewCount={245}
                price={undefined}
                number={undefined}
                soldBy={""}
                brandName={""}
                modelName={""}
                stockStatus={false}
                size={""}
                weight={""}
                emptySize={""}
                emptyWeight={""}
              /></div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ComparePage;
