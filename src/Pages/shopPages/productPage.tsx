import Categories from "../../Components/HomePage/Categories/Categories";
import Footer from "../../Components/HomePage/Footer/Footer";
import Header from "../../Components/HomePage/Header/Header";
import InduvidualProductCard from "../../Components/HomePage/InduvidualProductCard/InduvidualProductCard";
import IndividualProductCard2 from "../../Components/HomePage/InduvidualProductCard/IndividualProductCard2";

const ProductPage = () => {
    return (
       <> 
        <Header/>
        <Categories/>
        {/* <InduvidualProductCard/> */}
        <IndividualProductCard2/>
        <Footer/>
        </>
    );
  };
  
  export default ProductPage;
  