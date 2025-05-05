import arrow from "../../assets/shopwithcat/ArrowRight.svg";
import Profile from "../../assets/news/UserCircle.svg";
import Calender from "../../assets/news/CalendarBlank.svg";
import Comments from "../../assets/news/ChatCircleDots.svg";
type FullProductCards = {
  imgurl: string;

  name: string;
  date: string;
  comments: number;
  title: string;
  description: string;
};

const NewsComponent = (props: any) => {
  return (
    <div className="bg-gray-100 p-2 w-150  h-125">
      <div className="flex items-center my-5 flex-col ">
        <img src={props.imgurl} alt="" className="" />
        <div className="flex-row flex gap-6 ">
          <div className="flex-row flex ">
            <img src={Profile} alt="" />
            <h1>{props.name}</h1>
          </div>
          <div className="flex-row flex">
            <img src={Calender} alt="" />
            <h1>{props.date}</h1>
          </div>
          <div className="flex-row flex">
            <img src={Comments} alt="" />
            <h1>{props.comments}</h1>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-2xl">{props.title}</h1>
          <h1>{props.description}</h1>
        </div>
      </div>{" "}
      <a href="">
        <div className="   w-36 justify-center flex-row items-center flex">
          <h1 className="underline text-2xl">Read more</h1>
        </div>
      </a>
    </div>
  );
};

export default NewsComponent;
