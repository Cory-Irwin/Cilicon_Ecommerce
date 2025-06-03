import React from "react";

import Footer from "../../../../Components/HomePage/Footer/Footer";
import Categories from "../../../../Components/HomePage/Categories/Categories";
import Header from "../../../../Components/HomePage/Header/Header";
import BlackFriday from "../../../../Components/HomePage/BlackFriday/BlackFriday";
import BannerPhoto from "../../../../assets/BlogDetail/bigbannerimage.svg";
import Stack from "../../../../assets/BlogDetails/Stack.svg";
import Person from "../../../../assets/BlogDetails/UserCircle.svg";
import Calender from "../../../../assets/BlogDetails/CalendarBlank.svg";
import Messages from "../../../../assets/BlogDetails/ChatCircleDots.svg";
import Quotations from "../../../../assets/BlogDetails/double-quotes-r 1.svg";
import FiddyNighty from "../../../../assets/BlogDetails/5090.jpeg";
import TheJacketMan from "../../../../assets/BlogDetails/thejacketman.webp";
import Penguin from "../../../../assets/PenguinCrew/penguin4.jpg"

type blogPostComponentProp = {
  title: string;
  imgurl: string;
  stack: string;
  person: string;
  calenderDay: number;
  calenderMonth: string;
  calenderYear: number;
  messages: number;
  introParagraph: string;
  quote: string;
  firstParagraph: string;
  secondParagraph: string;
  image1: string;
  image2: string;
  description: string;
  comments: number;
};
const blogDetailComponent = (props: blogPostComponentProp) => {
  return (
    <div className="mx-auto max-w-screen-xl my-10  px-4">
      <div className="">
        <img src={BannerPhoto} alt="Banner" className="pb-10" />
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
          {/* Main Content (Article) */}
          <div>
            <div className="flex flex-row pt-5 pb-5  gap-6">
              <div className="flex flex-row gap-2">
                <img src={Stack} alt="" />
                <h1>{props.stack}</h1>
              </div>
              <div className="flex flex-row gap-2">
                <img src={Person} alt="" />
                <h1>{props.person}</h1>
              </div>
              <div className="flex flex-row gap-2">
                <img src={Calender} alt="" />
                <div className="flex flex-row gap-1">
                  <h1>{props.calenderDay}</h1>
                  <h1>{props.calenderMonth},</h1>

                  <h1>{props.calenderYear}</h1>
                </div>
              </div>
              <div className="flex flex-row gap-2">
                <img src={Messages} alt="" />
                <h1>{props.messages}</h1>
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-4">{props.title}</h1>
            <p className="text-lg text-gray-800 mb-6">{props.introParagraph}</p>

            <div className=" bg-teal-100 p-5  ">
              <div className="flex flex-row gap-4 relative">
                <img src={Quotations} alt="" className="relative bottom-6" />
                <h1 className="text-2xl font-semibold">{props.quote}</h1>
              </div>
            </div>

            <div className="space-y-4 mt-10">
              <p className="text-base text-gray-700">{props.introParagraph}</p>

              <div className="flex flex-row gap-2 max-w-114.5">
                <img src={FiddyNighty} alt="" />
                <img src={TheJacketMan} alt="" />
              </div>
              <p className="text-base text-gray-700">{props.firstParagraph}</p>
              <p className="text-base text-gray-700">{props.secondParagraph}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Category Section */}
            <div className="border-2 border-gray-200 p-4">
              <h1 className="text-lg font-bold mb-2">Category</h1>
              <div className="space-y-1">
                <label>
                  <input type="radio" name="category" /> All
                </label>
                <label>
                  <input type="radio" name="category" /> Electronic Devices
                </label>
              </div>
            </div>

            {/* Latest Article Section */}
            <div className="border-2 border-gray-200 p-4">
              <h2 className="text-lg font-bold mb-2">Latest Articles</h2>
              {[1, 2, 3].map((_, i) => (
                <div className="flex gap-3 mb-3" key={i}>
                  <div className="h-16 w-16 bg-gray-200"></div>
                  <div>
                    <h3 className="text-sm font-semibold">
                      Article title goes here
                    </h3>
                    <p className="text-xs text-gray-500">25 Nov, 2025</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Gallery */}
            <div>
              <h2 className="text-lg font-bold mb-2">Gallery</h2>
              <div className="grid grid-cols-4 gap-2">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="h-16 bg-gray-200">
                    IMG
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default blogDetailComponent;
