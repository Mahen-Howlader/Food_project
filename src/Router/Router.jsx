import { createBrowserRouter } from "react-router";
import Home from "../HomeAllPage/Home/Home";
import Homepageallsection from "../HomeAllPage/Homepageallsection/Homepageallsection";

const router = createBrowserRouter([
  {
    path: "/",
    element : <Home></Home>,
    children: [
        {
            path : "/",
            element : <Homepageallsection></Homepageallsection>
        }
    ]
  },
]);

export default router;