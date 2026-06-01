import React from "react";
import samsung from "../../../assets/misc/iphone.png";
import keyboard from "../../../assets/misc/keyboard.png";
import IMAC from "../../../assets/misc/IMAC.png";
import Footer from "../../../Components/HomePage/Footer/Footer";
import BlackFriday from "../../../Components/HomePage/BlackFriday/BlackFriday";
import Header from "../../../Components/HomePage/Header/Header";
import Categories from "../../../Components/HomePage/Categories/Categories";
import ComparePageProductComponent from "./navComparePageProductComponent";

const ComparePage = () => {
  return (
    <>
      <BlackFriday />
      <Header />
      <Categories />
      <div className="mx-auto max-w-screen-xl my-20 h-220 px-4">
        <div className="grid grid-cols-4 grid-rows-1 gap-4">
          {" "}
          <div className="flex  flex-row justify-evenly">
            <div className="border-2 h-181 w-200 border-gray-200">
              <div className=" flex">
                <div className="mt-4">
                  <div className="bg-gray-100 p-2"> </div>
                  <div className="p-2">
                    <h1>Customer Feedback:</h1>
                  </div>
                  <div className="bg-gray-100 p-2">
                    <h1>Price:</h1>
                  </div>
                  <div className="p-2">
                    <h1>Sold By:</h1>
                  </div>
                  <div className="bg-gray-100 p-2">
                    <h1>Brand:</h1>
                  </div>
                  <div className="p-2">
                    <h1>Model:</h1>
                  </div>
                  <div className="bg-gray-100 p-2">
                    <h1>Stock Status:</h1>
                  </div>
                  <div className="p-2">
                    <h1>Size:</h1>
                  </div>
                  <div className="bg-gray-100 p-2">
                    <h1>Weight:</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              {" "}
              <ComparePageProductComponent
                imgValue={IMAC}
                productTitle={
                  "Macbook Pro 2024 Edition 1TB SSD i7-7700k CPU 27 inch"
                }
                reviewStars={2}
                reviewCount={245}
                price={1299.00}
                number={undefined}
                soldBy={"Apple"}
                brandName={"IMac"}
                modelName={"Imac 2025"}
                stockStatus={false}
                size={"23x4x12"}
                weight={"14KG"}
                emptySize={""}
                emptyWeight={""}
              />
            </div>
            <div>
              {" "}
              <ComparePageProductComponent
                imgValue={IMAC}
                productTitle={
                  "Macbook Pro 2024 Edition 1TB SSD i7-7700k CPU 27 inch"
                }
                reviewStars={2}
                reviewCount={245}
                price={1299.00}
                number={undefined}
                soldBy={"Apple"}
                brandName={"IMac"}
                modelName={"Imac 2025"}
                stockStatus={false}
                size={"23x4x12"}
                weight={"14KG"}
                emptySize={""}
                emptyWeight={""}
              />
            </div>
            <div>
              {" "}
              <ComparePageProductComponent
                imgValue={IMAC}
                productTitle={
                  "Macbook Pro 2024 Edition 1TB SSD i7-7700k CPU 27 inch"
                }
                reviewStars={2}
                reviewCount={245}
                price={1299.00}
                number={undefined}
                soldBy={"Apple"}
                brandName={"IMac"}
                modelName={"Imac 2025"}
                stockStatus={false}
                size={"23x4x12"}
                weight={"14KG"}
                emptySize={""}
                emptyWeight={""}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ComparePage;
