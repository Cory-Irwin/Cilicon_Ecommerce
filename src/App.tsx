import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/homePages/homePage';
import ProductPage from './Pages/shopPages/productPage';
import './index.css';
import CartPage from './Pages/shopPages/cartPage';
import BillingPage from './Pages/shopPages/billingPage';
import ShopPage from './Pages/shopPages/shopPage';
import OrderSuccess from './Pages/shopPages/successfullyOrderedPage';
import TrackOrder from './Pages/shopPages/trackOrderPage';
import TrackOrderProgress from './Pages/shopPages/TrackOrderProgressPage/trackOrderProgressPage';
import ComparePage from './Pages/shopPages/ComparePage/comparePage';
import WishListPage from './Pages/shopPages/wishlistPage';
import SignInPage from './Pages/signInPages/signInPage';
import ForgotPasswordPage from './Pages/signInPages/forgotPasswordPage'
import ResetPasswordPage from './Pages/signInPages/resetPasswordPage'
import SignUpPage from './Pages/signInPages/signUpPage';
import EmailVerifyPage from './Pages/signInPages/emailVerifyPage';
import FaqPage from './Pages/signInPages/faqPage';
import ErrorPage from './Pages/signInPages/errorPage';
import AboutUsPage from './Pages/signInPages/aboutUsPage';
import CustomerSupportPage from './Pages/signInPages/customerSupportPage';
import BlogPost from './Pages/signInPages/blogPost'
import BlogDetail from './Pages/signInPages/blogDetail'
import DashboardPage from './Pages/dashboardPages/dashboardPage'
import DashboardOrderHistoryPage from './Pages/dashboardPages/dashboardOrderHistoryPage'
import DashboardOrderDetailPage from './Pages/dashboardPages/dashboardOrderDetailPage'
import BrowsingHistoryPage from './Pages/dashboardPages/browsingHistoryPage'
import DashboardSettingsPage from './Pages/dashboardPages/dashboardSettingsPage'
import 'rsuite/dist/rsuite-no-reset.min.css';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productpage" element={<ProductPage />} />
        <Route path='/CartPage' element={<CartPage/>}/>
        <Route path='/BillingPage' element={<BillingPage/>}/>
        <Route path='/SucessfullyOrderedPage' element={<OrderSuccess/>}/>
        <Route path='/ShopPage' element={<ShopPage/>}/>
        <Route path='/TrackOrderPage' element={<TrackOrder/>}/>
        <Route path='/TrackOrderProgressPage' element={<TrackOrderProgress/>}/>
        <Route path='/comparePage' element={<ComparePage/>}/>
        <Route path='/wishlistPage' element={<WishListPage/>}/>
        <Route path='/signInPage' element={<SignInPage/>}/>
        <Route path='/forgotPasswordPage' element={<ForgotPasswordPage/>}/>
        <Route path='/resetPasswordPage' element={<ResetPasswordPage/>}/>
        <Route path='/SignUpPage' element={<SignUpPage/>}/>
        <Route path='/emailVerifyPage' element={<EmailVerifyPage/>}/>
        <Route path='/faqPage' element={<FaqPage/>}/>
        <Route path='/errorPage' element={<ErrorPage/>}/>
        <Route path='/aboutUsPage' element={<AboutUsPage/>}/>
        <Route path='/customerSupportPage' element={<CustomerSupportPage/>}/>
        <Route path='/blogPost' element={<BlogPost/>}/>
        <Route path='/blogDetail' element={<BlogDetail/>}/>
        <Route path='/dashboardPage' element={<DashboardPage/>}/>
        <Route path='/dashboardOrderHistoryPage' element={<DashboardOrderHistoryPage/>}/>
        <Route path='/dashboardOrderDetailPage' element={<DashboardOrderDetailPage/>}/>
        <Route path='/browsingHistoryPage' element={<BrowsingHistoryPage/>}/>
        <Route path='/browsingHistorySettingsPage' element={<DashboardSettingsPage/>}/>
        
        <Route path=' ' element={<ErrorPage/>}/>
        
      </Routes>
    </Router>
    </>
  );
}

export default App;
