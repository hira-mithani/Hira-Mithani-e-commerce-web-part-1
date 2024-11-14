import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetails from "./components/product-details/ProductDetails";
import App from "./App";
import Layout from "./components/layout/layout"; 
import SignIn from "./components/auth/sign-in/SignIn";
import SignUp from "./components/auth/sign-up/SignUp";
import ErrorPage from "./components/error-page/ErrorPage";

const router = createBrowserRouter(
  [
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <App />,
         
        },
        {
          path: "product-details/:productId", 
          element: <ProductDetails />,
        },
        {
          path: "/sign-in", 
          element: <SignIn/>,
        },
        {
          path: "/sign-up", 
          element: <SignUp/>,
        },
      ],
      errorElement : <ErrorPage/>
    },
  ],
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
