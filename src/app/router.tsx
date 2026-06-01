import { createBrowserRouter } from "react-router-dom";

// Layouts
import MainLayout from "../layouts/MainLayout";

// Pages
import Home from "../pages/home";
import Shop from "../pages/shop";
import Product from "../pages/product";
import Cart from "../pages/cart";
import Billing from "../pages/billing";

import ErrorPage from "../pages/error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "product/:id", element: <Product /> },
      { path: "cart", element: <Cart /> },
      { path: "billing", element: <Billing /> },
    ],
  },
]);