import React from "react";
import Footer from "../../../../Components/HomePage/Footer/Footer";
import Categories from "../../../../Components/HomePage/Categories/Categories";
import Header from "../../../../Components/HomePage/Header/Header";
import BlackFriday from "../../../../Components/HomePage/BlackFriday/BlackFriday";
import BannerPhoto from "../../../../assets/BlogDetail/bigbannerimage.svg";
import Stack from "../../../../assets/BlogDetails/Stack.svg"
import Person from "../../../../assets/BlogDetails/UserCircle.svg"
import Calender from "../../../../assets/BlogDetails/CalendarBlank.svg"
import Messages from "../../../../assets/BlogDetails/ChatCircleDots.svg"
import BlogDetailComponent from "./blogDetailComponent";




type articleDetailProps = {
  stack: string;
  articleTitle: string;
  title: string;

};
const articleDetail = (props: articleDetailProps) => {
  return (
    <>
      {" "}
      <BlackFriday />
      <Header />
      <Categories />
      <BlogDetailComponent imgurl={""} comments={0}
      title={"New developments for the RTX 5090 Graphics card"} description={""} 
      stack={"Electronics"} person={"Appy Store"} calenderDay={23} calenderMonth={"Sep"}
       calenderYear={2025} messages={425} introParagraph={"Nividia continues to expand its reach when it comes to ai data centers. One questions if this will impact the consumer long term and where their intentions lie."} 
       quote={"Nividia continues to expand its reach when it comes to ai data centers. One questions if this will impact the consumer long term and where their intentions lie."} secondParagraph={"Nividia continues to expand its reach when it comes to ai data centers. One questions if this will impact the consumer long term and where their intentions lie."} image1={""} image2={""} firstParagraph={"Nividia continues to expand its reach when it comes to ai data centers. One questions if this will impact the consumer long term and where their intentions lie."}/>

        <Footer />
      
    </>
  );
};

export default articleDetail;
