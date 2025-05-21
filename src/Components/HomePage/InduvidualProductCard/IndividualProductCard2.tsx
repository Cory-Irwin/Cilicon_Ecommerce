import Imac from "../../../assets/ProductPage/Main Image Macbook.svg";
import ArrowBigLeft from "../../../assets/shopwithcat/ArrowLeft.svg";
import ArrowRight2 from "../../../assets/shopwithcat/ArrowRight.svg";
import ShopDescription from "../../ProductCards/ShopPageProductCard/shopPageitem"
import ShopMainItem from "../../ProductCards/ShopPageProductCard/shopPageMainItem"

const IndividualProductCard2 = () => {
  return (
    <div className="mx-auto max-w-screen-xl my-10 px-4">
      <div className="grid grid-cols-2 grid-rows-1 gap-4">
      <ShopMainItem/>
      <ShopDescription name={"2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray"}
        price={1600} originalPrice={1999} ratingStars={4.7} discount={21} Availability={"In Stock"} brand={"Apple"}
        Category={"Electronic Devices"}  sku={"A264671"} feedback={120} reviewStars={4.6} reviewCount={110}/>
    

      </div>
    </div>
  );
};

export default IndividualProductCard2;
