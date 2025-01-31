import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Layout from "./Pages/Layout/Layout";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Shop from "./Pages/Shop/Shop";
import Sitemap from "./Components/Sitemap/Sitemap";

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
          path: "/sitemap",
          element: <Sitemap />,
        },
        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
