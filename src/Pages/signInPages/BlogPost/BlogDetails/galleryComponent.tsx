import React from "react";
type latestArticleComponentProp = {
  articleImage1: string;
  articleImage2: string;
  articleImage3: string;
  articleImage4: string;
  articleImage5: string;
  articleImage6: string;
  articleImage7: string;
  articleImage8: string;
};
const galleryComponent = (props: latestArticleComponentProp) => {
  return (
    <>
    <div className="p-4 border-2 border-gray-200">
      <h2 className="text-lg font-bold mb-2">Gallery</h2>
      <div className="flex flex-col gap-2">
        <div className=" w-auto flex flex-row h-9 gap-1 mt-4">
          <img src={props.articleImage1} alt="" className="" />
          <img src={props.articleImage2} alt="" className="" />
          <img src={props.articleImage3} alt="" className="" />
          <img src={props.articleImage4} alt="" className="" />
        </div>
        <div className="w-auto flex flex-row h-9 gap-1 mt-4">
          <img src={props.articleImage5} alt="" className="" />
          <img src={props.articleImage6} alt="" className="" />
          <img src={props.articleImage7} alt="" className="" />
          <img src={props.articleImage8} alt="" className="" />
        </div>
      </div>
    </div>
     <h1 className="text-2xl font-bold mt-5">Popular Tags</h1>
              <div className="flex  flex-wrap gap-2">
                <span className="border-2 hover:bg-gray-200 border-gray-200 px-3 py-1 rounded">
                  iPhone
                </span>
                <span className="border-2 border-gray-200 px-3 py-1 rounded">
                  TV
                </span>
                <span className="border-2 hover:bg-gray-200 border-gray-200 px-3 py-1 rounded">
                  Game
                </span>
                <span className="border-2 hover:bg-gray-200 border-gray-200 px-3 py-1 rounded">
                  Asus Laptops
                </span>
                <span className="border-2 hover:bg-gray-200 border-gray-200 px-3 py-1 rounded">
                  Macbook
                </span>
                <span className="border-2 hover:bg-gray-200 border-gray-200 px-3 py-1 rounded">
                  SSD
                </span>
                <span className="border-2 hover:bg-gray-200 border-gray-200 px-3 py-1 rounded">
                  Graphics Card
                </span>
              </div></>
  );
};

export default galleryComponent;
