import React from 'react'
import BlackFriday from '../Components/BlackFriday/BlackFriday'
import Bestdeals from '../Components/BestDeals/Bestdeals'
import BigAdvert from '../Components/BigAdvert/BigAdvert'
import Categories from '../Components/Categories/Categories'
import ComputerAccessories from '../Components/ComputerAssessories/ComputerAccessories'
import Featuredproducts from '../Components/FeaturedProducts/Featuredproducts'
import { Flashsale } from '../Components/FlashSale/Flashsale'
import Footer from '../Components/Footer/Footer'
import Guarantee from '../Components/Guarantee/Guarantee'
import Header from '../Components/Header/Header'
import Landingpage from '../Components/LandingPage/Landingpage'
import { News } from '../Components/News/News'
import Newsletter from '../Components/Newsletter/Newsletter'
import Shopwithcat from '../Components/ShopWithCat/Shopwithcat'

import TwoPartAdvert from '../Components/TwoPartAdvert/TwoPartAdvert'

const Home = () => {
  return (
    <>
    <BlackFriday/>
    <Header/>
    <Categories/>
    <Landingpage/> 
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