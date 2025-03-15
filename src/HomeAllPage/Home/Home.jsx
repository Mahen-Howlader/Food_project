import { Outlet } from "react-router";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";
import Addtocart from "../../Component/Addtocart/Addtocart";

function Home() {

    function handelAddCart() {

    }

    return (
        <div className="max-w-screen-2xl mx-auto">
            <Navbar ></Navbar>
            <div className="min-h-[calc(100vh-435px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <Addtocart></Addtocart>
            
        </div>
    );
}

export default Home;