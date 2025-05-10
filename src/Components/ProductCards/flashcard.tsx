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
    <div className="flex justify-between p-6 border-2 w-74 h-30 gap-2 border-gray-100 items-center">
        <div className="flex-end">
        <img src={props.imageurl} alt="" className="h-20 w-20 object-contain" />
      </div><div className="text-left max-w-[10rem]">
        text-white{" "}
        <h1
          className="text-base font-semibold truncate overflow-hidden  whitespace-nowrap"
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
        <h3 className="text-lg font-bold text-green-900">${props.price}</h3>
      </div>
    
    </div>
  );
};

export default Flashcard;
