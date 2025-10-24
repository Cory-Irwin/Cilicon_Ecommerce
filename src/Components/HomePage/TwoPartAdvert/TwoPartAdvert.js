import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import HalfProductCard from '../../ProductCards/HalfProductCard';
import HalfProductCardBlack from '../../ProductCards/HalfProductCardBlack';
import ipodmini from '../../../assets/misc/podmini.svg';
import Iphone from '../../../assets/misc/iphone.png';
const TwoPartAdvert = () => {
    return (_jsx("div", { className: "mx-auto max-w-screen-xl my-20 px-4", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [_jsx(HalfProductCard, { imageurl: ipodmini, name: "New Apple HomePod Mini", description: "Jam-packed with innovation, HomePod mini delivers unexpectedly powerful sound." }), _jsx("div", { className: 'bg-black text-white', children: _jsx(HalfProductCardBlack, { imageurl: Iphone, name: "iPhone 16 12GB+256GB", description: "Powerful performance and sleek design at an unbeatable price." }) })] }) }));
};
export default TwoPartAdvert;
