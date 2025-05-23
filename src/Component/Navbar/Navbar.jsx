import { useContext, useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router";
import { UserContext } from "../../Context/Provider";
import { MdDashboard } from "react-icons/md";

function Navbar() {
    const { handelAddCart } = useContext(UserContext);
     const [isScrolled, setIsScrolled] = useState(false);

     useEffect(() => {
        const OnscrollY = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", OnscrollY)

        return () => window.removeEventListener("scroll", OnscrollY)
     })
    return (
        <div className={` fixed z-50 w-full py-3 flex items-center justify-between px-5 md:px-11 ${
        isScrolled ? "bg-slate-100 shadow-lg" : "bg-transparent"
      }`}>
            <div>
                <h2 className="text-3xl">FoodHouse</h2>
            </div>
            <div className="hidden md:flex  gap-x-5 items-center uppercase">
                <div className="flex gap-x-5 ">
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/fooddata"}>Products</NavLink>
                    <NavLink to={"/contackfrom"}>Contacts</NavLink>
                    {/* <NavLink to={"/about"}>About Us</NavLink> */}
                    <NavLink to={"/dashboard"}><MdDashboard size={22} /></NavLink>
                    <div className="relative">
                        <IoCartOutline onClick={() => handelAddCart()} size={22} />
                        <p className="absolute -top-4 -right-3"><span className=" p-1 rounded-full" >4</span></p>
                    </div>
                </div>
                <div className="text-xl font-bold flex gap-x-3 ">
                    <Link to={"/login"}>Login</Link>
                    <Link to={"/signin"}>Sign up</Link>
                </div>
            </div>
            <div className="md:hidden">
                <IoMdMenu size={35} />
            </div>
        </div>
    );
}

export default Navbar;