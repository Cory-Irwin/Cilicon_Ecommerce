import React from 'react'
import BlackFriday from '../../Components/HomePage/BlackFriday/BlackFriday'
import Bestdeals from '../../Components/HomePage/BestDeals/Bestdeals'
import BigAdvert from '../../Components/HomePage/BigAdvert/BigAdvert'
import Categories from '../../Components/HomePage/Categories/Categories'
import ComputerAccessories from '../../Components/HomePage/ComputerAssessories/ComputerAccessories'
import Featuredproducts from '../../Components/HomePage/FeaturedProducts/Featuredproducts'
import { Flashsale } from '../../Components/HomePage/FlashSale/Flashsale'
import Footer from '../../Components/HomePage/Footer/Footer'
import Guarantee from '../../Components/HomePage/Guarantee/Guarantee'
import Header from '../../Components/HomePage/Header/Header'
import Landingpage from '../../Components/HomePage/LandingPage/Landingpage'
import { News } from '../../Components/HomePage/News/News'
import Newsletter from '../../Components/HomePage/Newsletter/Newsletter'
import Shopwithcat from '../../Components/HomePage/ShopWithCat/Shopwithcat'
import Categories from '../../Components/HomePage/Categories/Categories'
import TwoPartAdvert from '../../Components/HomePage/TwoPartAdvert/TwoPartAdvert'

const Home = () => {
  return (
    <>
    <BlackFriday/>
    <Header/>
    <Categories/>
    <Landingpage /> 
    <Guarantee/>
    <Bestdeals/>
    <Shopwithcat/>
    <Featuredproducts/>
    <TwoPartAdvert/>
    <ComputerAccessories/>
    <Flashsale/>
    <BigAdvert/>
    <News/>
    <Newsletter/>
    <Footer/> 
    </> 
  )
}

export default Home