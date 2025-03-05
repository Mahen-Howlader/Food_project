import { createBrowserRouter } from "react-router";
import Home from "../HomeAllPage/Home/Home";
import Product from "../Component/Product/Product";
import App from "../App";
import Cartdetails from "../Component/Cartdetails/Cartdetails";

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
    ]
  },
]);

export default router;