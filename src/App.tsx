
import './index.css'
import BlackFriday from './Components/BlackFriday/BlackFriday'
import Header from './Components/Header/Header'
import Categories from './Components/Categories/Categories'
import Landingpage from './Components/LandingPage/Landingpage'
import Footer from './Components/Footer/Footer'
import Guarantee from './Components/Guarantee/Guarantee'
import Bestdeals from './Components/BestDeals/Bestdeals'
import Shopwithcat from './Components/ShopWithCat/Shopwithcat'
import Featuredproducts from './Components/FeaturedProducts/Featuredproducts'
import TwoPartAdvert from './Components/TwoPartAdvert/TwoPartAdvert'
import ComputerAccessories from './Components/ComputerAssessories/ComputerAccessories'
import BigAdvert from './Components/BigAdvert/BigAdvert'
import { Flashsale } from './Components/FlashSale/Flashsale'
import { News } from './Components/News/News'
import Newsletter from './Components/Newsletter/Newsletter'
import LandingpageCopy from './Components/LandingPage/Landingpage copy'

function App() {
  

  return (
    <>
  <BlackFriday/>
    <Header/>
    <Categories/>
    {/* <Landingpage/> */}
    <LandingpageCopy/>
    <Guarantee/>
     <Bestdeals/>
    <Shopwithcat/>
    <Featuredproducts/>
    <TwoPartAdvert/>
    <ComputerAccessories/>
    <BigAdvert/>
    <Flashsale/>
    <News/>
    <Newsletter/>
    <Footer/>  
    
    </>
  )
}

export default App
