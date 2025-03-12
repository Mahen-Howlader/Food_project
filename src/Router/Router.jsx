import { createBrowserRouter } from "react-router";
import Home from "../HomeAllPage/Home/Home";
import Product from "../Component/Product/Product";
import App from "../App";
import Cartdetails from "../Component/Cartdetails/Cartdetails";
import Login from "../Authentication/Login";
import Signin from "../Authentication/Signin";

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
        path: "/product",
        element: <Product></Product>
      },
      {
        path: "/product/:id",
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
    ]
  },
]);

export default router;