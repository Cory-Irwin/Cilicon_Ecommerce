import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ArrowRight from "../../../assets/LandingPage/ArrowRight.svg";
import Profile from "../../../assets/news/UserCircle.svg";
import Calender from "../../../assets/news/CalendarBlank.svg";
import Comments from "../../../assets/news/ChatCircleDots.svg";
const NewsComponent = (props) => {
    return (_jsxs("div", { className: "bg-gray-100 p-2 w-150  h-175", children: [_jsxs("div", { className: "flex items-center p-4 flex-col ", children: [_jsx("img", { src: props.imgurl, alt: "", className: "" }), _jsxs("div", { className: " my-4 flex-row flex gap-4 ", children: [_jsxs("div", { className: "   flex-row line-clamp-2 gap-2  flex ", children: [_jsx("img", { src: Profile, alt: "" }), _jsx("h1", { children: props.name })] }), _jsxs("div", { className: " flex-row gap-2 line-clamp-2 flex", children: [_jsx("img", { src: Calender, alt: "" }), _jsx("h1", { children: props.date })] }), _jsxs("div", { className: "  flex-row gap-2 line-clamp-4 flex", children: [_jsx("img", { src: Comments, alt: "" }), _jsx("h1", { children: props.comments })] })] }), _jsxs("div", { children: [_jsx("h1", { className: "my-2 font-bold gap-2  text-2xl line-clamp-2 ", children: props.title }), _jsx("h1", { className: "line-clamp-9 ", children: props.description })] })] }), " ", _jsx("div", { className: "px-5", children: _jsx("a", { href: "", children: _jsxs("div", { className: " relative border-2 w-40 gap-2 hover:bg-gray-200 text-teal-800 font-bold justify-center h-15 border-teal-900 items-center flex\n       ", children: [_jsx("h1", { className: "", children: "READ MORE" }), _jsx("img", { src: ArrowRight, alt: "" })] }) }) })] }));
};
export default NewsComponent;
