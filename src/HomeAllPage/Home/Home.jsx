import { Outlet } from "react-router";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";
import Addtocart from "../../Component/Addtocart/Addtocart";

function Home() {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <div className="">
                <Navbar ></Navbar>
            </div>
            <div className="min-h-[calc(100vh-435px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <Addtocart></Addtocart>
            <div>dfdf</div>
        </div>
    );
}

export default Home;