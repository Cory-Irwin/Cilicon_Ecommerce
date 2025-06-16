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
import TheJacketMan from "../../../../assets/BlogDetails/thejacketman.webp";
import FiddyNighty from "../../../../assets/BlogDetails/5090.jpeg";
import Penguin from "../../../../assets/PenguinCrew/penguin4.jpg";
import { BiCommentDetail } from "react-icons/bi";
import CommentDetail from "./commentDetail";
import MagGlass from "../../../../assets/ShopPage/MagnifyingGlass.svg";
import Latestarticlecomponent from "./latestarticlecomponent";
import GalleryComponent from "./galleryComponent";

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
    <>
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
              <p className="text-lg text-gray-800 mb-6">
                {props.introParagraph}
              </p>

              <div className=" bg-teal-100 p-5  ">
                <div className="flex flex-row gap-4 relative">
                  <img src={Quotations} alt="" className="relative bottom-6" />
                  <h1 className="text-2xl font-semibold">{props.quote}</h1>
                </div>
              </div>

              <div className="space-y-4 mt-10">
                <p className="text-base text-gray-700">
                  {props.introParagraph}
                </p>

                <div className="flex flex-row gap-2 max-w-114.5">
                  <img src={TheJacketMan} alt="" />
                  <img src={FiddyNighty} alt="" />
                </div>
                <p className="text-base text-gray-700">
                  {props.firstParagraph}
                </p>
                <p className="text-base text-gray-700">
                  {props.secondParagraph}
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Category Section */}
              <div className=" flex relative flex-row gap-6">
                <input
                  type="text"
                  placeholder="Search Blogs..."
                  className="w-112.5 px-4 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="absolute right-5 top-3 h-15 w-auto">
                  <img src={MagGlass} alt="" />
                </div>
              </div>
              <div className="border-2 border-gray-200 p-4">
                <h1 className="text-lg font-bold mb-2">Category</h1>
                <div className="space-y-1 flex flex-col">
                  <label>
                    <input type="radio" name="category" /> All
                  </label>
                  <label>
                    <input type="radio" name="category" /> Electronic Devices
                  </label>{" "}
                  <label>
                    <input type="radio" name="category" /> Computer Accessories
                  </label>
                </div>
              </div>

              {/* Latest Article Section */}
              <Latestarticlecomponent
                articleImage={FiddyNighty}
                articleTitle={""}
                calenderDay={0}
                calenderMonth={""}
                calenderYear={0}
              />

              {/* Gallery */}
              <GalleryComponent
                articleImage1={FiddyNighty}
                articleImage2={FiddyNighty}
                articleImage3={FiddyNighty}
                articleImage4={FiddyNighty}
                articleImage5={FiddyNighty}
                articleImage6={FiddyNighty}
                articleImage7={FiddyNighty}
                articleImage8={FiddyNighty}
              />
            </div>
          </div>
        </div>
        <h1></h1>
        <div>
          <h1 className="text-2xl font-semibold mb-5">Leave a Comment</h1>
          <div className="flex flex-row gap-6">
            <div className="mb-4">
              <label className="block text-lg font-medium">Full Name</label>
              <input
                type="text"
                className="w-112.5 p-2 border  border-gray-200 "
                placeholder=" "
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-lg font-medium">Email Address</label>
              <input
                type="text"
                className="w-112.5 p-2 border  border-gray-200 "
                placeholder=" "
                required
              />
            </div>
          </div>
          <h1 className="text-2xl font-semibold mb-5">Description</h1>
          <textarea
            id="question"
            rows={4}
            placeholder="Type your question here..."
            className="w-231 px-3 bg-white py-2 border border-gray-200  focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          ></textarea>
          <div className="p-2  text-center bg-teal-900 w-45 mt-5 hover:bg-teal-500 text-xcl font-semibold mb-15 text-white ">
            <button>POST COMMENT</button>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-semibold mb-5">Comments</h1>
          <div>
            <CommentDetail
              name={"Appy Store"}
              imgurl={Penguin}
              dateDay={21}
              dateMonth={"Dec"}
              dateYear={"2025"}
              commentText={
                "Haha! This was an awesome blog post! I really appreciate what you had to say about these topics and I'm sure theres more to learn about the topic in the future!"
              }
            />
            <CommentDetail
              name={"Appy Store"}
              imgurl={Penguin}
              dateDay={21}
              dateMonth={"Dec"}
              dateYear={"2025"}
              commentText={
                "Haha! This was an awesome blog post! I really appreciate what you had to say about these topics and I'm sure theres more to learn about the topic in the future!"
              }
            />
            <CommentDetail
              name={"Appy Store"}
              imgurl={Penguin}
              dateDay={21}
              dateMonth={"Dec"}
              dateYear={"2025"}
              commentText={
                "Haha! This was an awesome blog post! I really appreciate what you had to say about these topics and I'm sure theres more to learn about the topic in the future!"
              }
            />
            <CommentDetail
              name={"Appy Store"}
              imgurl={Penguin}
              dateDay={21}
              dateMonth={"Dec"}
              dateYear={"2025"}
              commentText={
                "Haha! This was an awesome blog post! I really appreciate what you had to say about these topics and I'm sure theres more to learn about the topic in the future!"
              }
            />
            <CommentDetail
              name={"Appy Store"}
              imgurl={Penguin}
              dateDay={21}
              dateMonth={"Dec"}
              dateYear={"2025"}
              commentText={
                "Haha! This was an awesome blog post! I really appreciate what you had to say about these topics and I'm sure theres more to learn about the topic in the future!"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default blogDetailComponent;
