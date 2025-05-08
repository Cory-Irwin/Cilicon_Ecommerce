import React from "react";

type FlashcardProps = {
  imageurl: string;
  price: number;
  name: string;
  description: string;
  reviewStars?: string;
  reviewCount?: number;
};

const Flashcard = (props: FlashcardProps) => {
  return (
    <div className="flex justify-between p-6 border-2 w-72 h-30 border-gray-200 items-center">
      <div className="text-left max-w-[10rem]">
        <h1
          className="text-base font-semibold truncate overflow-hidden whitespace-nowrap"
          title={props.name}
        >
          {props.name}
        </h1>
         <p>{props.reviewStars}</p>
         <p>{props.reviewCount}</p>
       
        <h2
          className="text-sm text-gray-600 truncate overflow-hidden whitespace-nowrap"
          title={props.description}
        >
          {props.description}
        </h2>
        <h3 className="text-lg font-bold">${props.price}</h3>
      </div>
      <div className="flex-end">
        <img src={props.imageurl} alt="" className="h-20 w-20 object-contain" />
      </div>
    </div>
  );
};

export default Flashcard;
