import { IoMdMenu } from "react-icons/io";

function Navbar() {
    return (
        <div className="bg-[#F3F3F3] py-3 flex items-center justify-between px-5 md:px-11">
            <div>
                <h2 className="text-3xl">FoodHouse</h2>
            </div>
            <div className="hidden md:flex  gap-x-5 items-center uppercase">
                <div className="flex gap-x-5 ">
                    <h3>Home</h3>
                    <h3>Products</h3>
                    <h3>About Us</h3>
                    <h3>Contacts</h3>
                </div>
                <div className="text-xl font-bold flex gap-x-3 ">
                    <h2>Login</h2>
                    <h2>Sign up</h2>
                </div>
            </div>
            <div className="md:hidden">
                <IoMdMenu size={35} />
            </div>
        </div>
    );
}

export default Navbar;