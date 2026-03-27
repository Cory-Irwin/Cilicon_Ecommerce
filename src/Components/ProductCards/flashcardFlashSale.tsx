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
    <div className="flex lg:justify-between p-2 border-2  gap-2
      border-gray-200 hover:border-gray-400  items-center">
      <div className="">
        <img src={props.imageurl} alt="" className="h-20 w-20" />
        </div>
      <div className="text-left lg:line-clamp-2">
        {" "}
        <h1 className="text-base lg:text-sm font-semibold truncate overflow-hidden  whitespace-nowrap"
          title={props.name}>{props.name} </h1>
        <p>{props.reviewStars}</p>
        <p>{props.reviewCount}</p>
        <h2 className="lg:text-sm text-gray-600 truncate overflow-hidden whitespace-nowrap"
          title={props.description}>
          {props.description}
        </h2>
        <h3 className="text-lg lg:text-sm font-semibold py-2 text-green-900">
          ${props.price}
        </h3>
      </div>
    </div>
  );
};

export default Flashcard;
