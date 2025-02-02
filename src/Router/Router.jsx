import { createBrowserRouter } from "react-router";
import Home from "../HomeAllPage/Home/Home";
import Homepageallsection from "../HomeAllPage/Homepageallsection/Homepageallsection";
import Product from "../Component/Product/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element : <Home></Home>,
    children: [
        {
            path : "/",
            element : <Homepageallsection></Homepageallsection>
        },
        {
            path : "/product",
            element : <Product></Product>
        },
    ]
  },
]);

export default router;