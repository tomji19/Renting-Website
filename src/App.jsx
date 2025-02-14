import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Layout from "./Pages/Layout/Layout";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Shop from "./Pages/Shop/Shop";
import Sitemap from "./Components/Sitemap/Sitemap";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import AuthComponent from "./Components/AuthComponent/AuthComponent";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import Cart from "./Pages/Cart/Cart";
import Checkout from "./Pages/Checkout/Checkout";
import ThankYou from "./Pages/ThankYou/ThankYou";
import Login from './Pages/Login/Login';
import { CartProvider } from "./Components/CartContext/CartContext";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/thankyou",
          element: <ThankYou />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/sitemap",
          element: <Sitemap />,
        },
        {
          path: "/product/:id",
          element: <ProductDetails />,
        },
        {
          path: "/auth",
          element: <AuthComponent />,
        },
        {
          path: "/forgot-password",
          element: <ForgotPassword />,
        },
        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
  ]);

  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}
