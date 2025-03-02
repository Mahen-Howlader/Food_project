import { createBrowserRouter } from "react-router";
import Home from "../HomeAllPage/Home/Home";
import Product from "../Component/Product/Product";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element : <Home></Home>,
    children: [
        {
            path : "/",
            element : <App></App>
        },
        {
            path : "/product",
            element : <Product></Product>
        },
    ]
  },
]);

export default router;