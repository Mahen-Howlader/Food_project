import { Outlet } from "react-router";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";

function Home() {
    return (
        <>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-435px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
}

export default Home;