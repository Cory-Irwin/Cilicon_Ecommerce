import React from "react";

type commentDetailProps = {
  name: string;
  imgurl: string;
  dateDay: number;
  dateMonth: string;
  dateYear: string;
  commentText: string;
};
const commentDetail = (props: commentDetailProps) => {
  return (
    <div className="flex flex-row gap-6">
      <div className="rounded-full    flex">
        <img src={props.imgurl} alt="" className="h-15 p-1 border-2  rounded-full w-auto" />
      </div>
      <div>
        <div className="flex flex-row gap-1">
          <h1>{props.name}•</h1>
          <h1>{props.dateDay}</h1>
          <h1>{props.dateMonth}</h1>
          <h1>,</h1>
          <h1>{props.dateYear}</h1>
        </div>
        <div className="w-210">
          <h1>{props.commentText}</h1>
        </div>
     <hr className="w-full bg-gray-200 mt-5 " /> </div>

    </div>
  );
};

export default commentDetail;
