import Categories from "../../Components/HomePage/Categories/Categories";
import Footer from "../../Components/HomePage/Footer/Footer";
import Header from "../../Components/HomePage/Header/Header";
import InduvidualProductCard from "../../Components/HomePage/InduvidualProductCard/InduvidualProductCard";
import IndividualProductCard2 from "../../Components/HomePage/InduvidualProductCard/IndividualProductCard2";
import ShopPagetabs from "../../Components/ProductCards/ShopPageProductCard/shopPagetabs";
import Flashsale from "../../Components/HomePage/FlashSale/Flashsale";
const ProductPage = () => {
    return (
       <> 
        <Header/>
        <Categories/>
        {/* <InduvidualProductCard/> */}
        <IndividualProductCard2/>
        <ShopPagetabs/>
        <Flashsale/>
        <Footer/>
        </>
    );
  };
  
  export default ProductPage;
  