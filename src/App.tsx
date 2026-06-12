import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/homePage.tsx';
import TestProductsPage from "../src/pages/Test/TestProductsPage.tsx"

/*import ProductPage from './pages/shop/productPage.tsx';
import './index.css';
import CartPage from './Pages/shopPages/CartPage/cartPage';
import BillingPage from './pages/shop/billingPage.tsx';
import ShopPage from './pages/shop/shopPage.tsx';
import OrderSuccess from './pages/shop/successfullyOrderedPage.tsx';
import TrackOrder from './pages/shop/trackOrderPage.tsx';
import TrackOrderProgress from './Pages/shopPages/TrackOrderProgressPage/trackOrderProgressPage';
import ComparePage from './Pages/shopPages/ComparePage/comparePage';
import WishListPage from './Pages/shopPages/WishListPage/wishlistPage copy';
import SignInPage from './pages/auth/signInPage.tsx';
import ForgotPasswordPage from './pages/auth/forgotPasswordPage.tsx'
import ResetPasswordPage from './pages/auth/resetPasswordPage.tsx'
import SignUpPage from './pages/auth/signUpPage.tsx';
import EmailVerifyPage from './pages/auth/emailVerifyPage.tsx';
import FaqPage from './Pages/signInPages/faqPage';
import ErrorPage from './pages/error/errorPage.tsx';
import AboutUsPage from './Pages/signInPages/aboutUsPage';
import CustomerSupportPage from './Pages/signInPages/customerSupportPage';
import BlogPost from './pages/blog/blogPost.tsx'
import BlogDetail from './pages/blog/blogDetail.tsx'
import DashboardPage from './Pages/dashboardPages/dashboardPage'
import DashboardOrderHistoryPage from './pages/dashboard/dashboardOrderHistoryPage.tsx'
import DashboardOrderDetailPage from './pages/dashboard/dashboardOrderDetailPage.tsx'
import BrowsingHistoryPage from './Pages/dashboardPages/browsingHistoryPage'
import DashboardSettingsPage from './pages/dashboard/dashboardSettingsPage.tsx'
import 'rsuite/dist/rsuite-no-reset.min.css';
import TasksPage from "./pages/dashboard/tasksPage.tsx";
*/
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
            path="/test-products"
            element={<TestProductsPage />}
        />
        {/* <Route path="/productpage" element={<ProductPage />} />
        <Route path='/CartPage' element={<CartPage/>}/>
        <Route path='/BillingPage' element={<BillingPage/>}/>
        <Route path='/SucessfullyOrderedPage' element={<OrderSuccess/>}/>
        <Route path='/ShopPage' element={<ShopPage/>}/>
        <Route path='/TrackOrderPage' element={<TrackOrder/>}/>
        <Route path='/TrackOrderProgressPage' element={<TrackOrderProgress/>}/>
        <Route path='/comparePage' element={<ComparePage/>}/>
        <Route path='/WishListPage' element={<WishListPage/>}/>
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
        <Route path='/blogDetail' element={<BlogDetail stack={''} articleTitle={''} title={''}/>}/>
        <Route path='/dashboardPage' element={<DashboardPage  firstName={'Tech'} billingPhone={24059687} lastName={'Store'} addressNumber={12}
          addressName={'Edwards St'} profilePicture={"Penguin1"} mainEmail={'Techcilicon@Techland.com'}
          secondaryEmail={'Tech@appland.com'} phoneNumber={413225698} phoneOrigin={0} totalOrders={12} pendingOrders={2} completedOrders={52} billingAddress={'142 Techlane Applands'} billingEmail={'Techstore@applands.com'} billingPhoneOrigin={'+12'} recentOrders={[]} />}/>
        <Route path='/dashboardOrderHistoryPage' element={<DashboardOrderHistoryPage/>}/>
        <Route path='/dashboardOrderDetailPage' element={<DashboardOrderDetailPage/>}/>
        <Route path='/browsingHistoryPage' element={<BrowsingHistoryPage/>}/>
        <Route path='/browsingHistorySettingsPage' element={<DashboardSettingsPage/>}/>
        <Route path="/tasksPage" element={<TasksPage/>}/>
        <Route path='*' element={<ErrorPage/>}/>
         */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
