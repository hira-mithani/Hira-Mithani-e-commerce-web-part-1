import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetails from "./components/product-details/ProductDetails";
import App from "./App";
import Layout from "./components/layout/layout"; 

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
      ],
    },
  ],
  {
        future: {
            v7_startTransition: true, 
            v7_relativeSplatPath: true,
            v7_fetcherPersist: true,
            v7_normalizeFormMethod: true,
            v7_partialHydration: true,
            v7_skipActionErrorRevalidation: true,
    },
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
