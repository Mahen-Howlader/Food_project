import { createBrowserRouter } from "react-router";
import Home from "../HomeAllPage/Home/Home";
import Product from "../Component/Product/Product";
import App from "../App";
import Cartdetails from "../Component/Cartdetails/Cartdetails";
import Login from "../Authentication/Login";
import Signin from "../Authentication/Signin";
import From from "../Component/Contactfrom/From";
import About from "../Component/About/About";
import Dashboard from "../Dashboard/Dashboard";
import Statistic from "../Dashboard/Statistic";
import Products from "../Dashboard/Dashboardpage/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <App></App>
      },
      {
        path: "/fooddata",
        element: <Product></Product>
      },
      {
        path: "/fooddata/:id",
        element: <Cartdetails></Cartdetails>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signin",
        element: <Signin></Signin>
      },
      {
        path: "/contackfrom",
        element: <From></From>
      },
      {
        path: "/about",
        element: <About></About>
      },

    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        index: true,
        element: <Statistic></Statistic>
      },
      {
        path: "product",
        element: <Products></Products>
      }
    ],
  },
]);

export default router;