import ArrowRight from "../../../assets/LandingPage/ArrowRight.svg";
import Profile from "../../../assets/news/UserCircle.svg";
import Calender from "../../../assets/news/CalendarBlank.svg";
import Comments from "../../../assets/news/ChatCircleDots.svg";
type blogPostComponentProp = {
  imgurl: string;
  name: string;
  date: string;
  comments: number;
  title: string;
  description: string;
};

const BlogPostComponent = (props: blogPostComponentProp) => {
  return (
    <div className="border-2 border-gray-200 bg-white  w-1/2  h-145">
      <div className="flex  p-4  flex-col ">
        <img src={props.imgurl} alt="" className="w-auto h-75" />
        <div className="  flex-row flex gap-4 ">
          <div className="   flex-row line-clamp-2 gap-2  flex ">
            <img src={Profile} alt="" className="" />
            <h1>{props.name}</h1>
          </div>
          <div className=" flex-row gap-2 line-clamp-2 flex">
            <img src={Calender} alt="" />
            <h1>{props.date}</h1>
          </div>
          <div className="  flex-row gap-2 line-clamp-4 flex">
            <img src={Comments} alt="" />
            <h1>{props.comments}</h1>
          </div>
        </div>
        <div>
          <h1 className="my-2 font-bold gap-2 line-clamp-2 ">{props.title}</h1>
          <h1 className="line-clamp-9 text-sm ">{props.description}</h1>
        </div>
      </div>{" "}
      <div className="px-4 pt-5 flex">
      <a href="">
        <div className="top-25  border-2 w-40 gap-2 hover:bg-teal-200 hover:text-white text-teal-900 font-bold justify-center h-15 border-teal-900 items-center flex
       ">
          <h1 className="">READ MORE</h1>
          <img src={ArrowRight} alt="" />
        </div>
      </a>
      </div>
    </div>
  );
};

export default BlogPostComponent;
