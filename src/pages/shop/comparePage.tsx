import React from "react";
import samsung from "../../../assets/misc/iphone.png";
import keyboard from "../../../assets/misc/keyboard.png";
import IMAC from "../../../assets/misc/IMAC.png";
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
      <div className="mx-auto max-w-screen-xl my-20 h-100 px-4">
        <div className="grid grid-cols-4 border-2 border-gray-200 grid-rows-1 ">
          <div>
            <NavComparePageProductComponent
              imgValue={""}
              productTitle={""}
              emptySize={""}
              emptyWeight={""}
            />
          </div>
          <div>
            <ComparePageProductComponent
              imgValue={IMAC}
              productTitle={
                "Macbook Pro 2024 Edition 1TB SSD i7-7700k CPU 27 inch"
              }
              reviewStars={2}
              reviewCount={245}
              price={1299.0}
              number={undefined}
              soldBy={"Apple"}
              brandName={"IMac"}
              modelName={"Imac 2025"}
              stockStatus={"In Stock"}
              size={"23x4x12"}
              weight={"14KG"}
              emptySize={""}
              emptyWeight={""}
            />
          </div>
          <div>
            <ComparePageProductComponent
              imgValue={IMAC}
              productTitle={
                "Macbook Pro 2024 Edition 1TB SSD i7-7700k CPU 27 inch"
              }
              reviewStars={2}
              reviewCount={245}
              price={1299.0}
              number={undefined}
              soldBy={"Apple"}
              brandName={"IMac"}
              modelName={"Imac 2025"}
              stockStatus={"Out Of Stock"}
              size={"23x4x12"}
              weight={"14KG"}
              emptySize={""}
              emptyWeight={""}
            />
          </div>
          <div>
            <ComparePageProductComponent
              imgValue={IMAC}
              productTitle={
                "Macbook Pro 2024 Edition 1TB SSD i7-7700k CPU 27 inch"
              }
              reviewStars={2}
              reviewCount={245}
              price={1299.0}
              number={undefined}
              soldBy={"Apple"}
              brandName={"IMac"}
              modelName={"Imac 2025"}
              stockStatus={"In Stock"}
              size={"23x4x12"}
              weight={"14KG"}
              emptySize={""}
              emptyWeight={""}
            />
          </div>
        </div>
      </div>
<div className="mt-140">
      <Footer /></div>
    </>
  );
};

export default ComparePage;
