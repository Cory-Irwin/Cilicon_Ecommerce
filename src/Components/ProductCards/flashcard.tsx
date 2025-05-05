import React from "react";
type flashcard = {
  imageurl: string;
  price: number;
  title: string;
  linkUrl: string;
  tagText?: string;
  reviewStars?: number;
  reviewCount?: number;
};

const flashcard = (props: any) => {
  return (
  
    <div className="flex justify-between p-6 border-2 w-73 h-25 border-gray-200 items-center">
      <div className="text-left">
        <h1>{props.name}</h1>
        <h2>{props.description}</h2>
        <h3>{props.price}</h3>
      </div>
      <div className="flex-end ">
        <img src={props.imageurl} alt="" className="h-20 w-20" />
      </div>
    </div>
  );
};

export default flashcard;
