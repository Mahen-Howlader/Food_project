import { useContext } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";
import { UserContext } from "../../Context/Provider";

function Addtocart() {
    const { cartOper,handelACrossCart } = useContext(UserContext);
    console.log(cartOper)
    return (
        <div className={`bg-white z-50 fixed transition-transform duration-300 ease-in-out top-0 right-0 border-2 border-gray-400 rounded-lg p-3 shadow-black w-2/6 h-full scroll-smooth overflow-auto ${cartOper ? "translate-x-0" : "translate-x-full"}`}
        >
            <div className="flex justify-between">
                <h2 className="capitalize">My order</h2>
                <RxCrossCircled onClick={() => handelACrossCart()} className="hover:text-red-500 size-8 " />
            </div>

            {/* cart */}

            <div>
                <section className="py-5 relative">
                    <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
                        <div className="grid grid-cols-1  min-[550px]:gap-6 border-t border-gray-200 py-6">
                            <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                                <div className="img-box">
                                    <img
                                        src="https://pagedone.io/asset/uploads/1701162850.png"
                                        alt="perfume bottle image"
                                        className="xl:w-[140px] rounded-xl object-cover"
                                    />
                                </div>
                                <div className="pro-data w-full  ">
                                    <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">
                                        Latest N-5 Perfuam
                                    </h5>
                                    <p className="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
                                        Perfumes
                                    </p>
                                    <h6 className="font-medium text-lg leading-8 text-indigo-600  max-[550px]:text-center">
                                        $120.00
                                    </h6>
                                </div>
                            </div>
                            <div className="flex items-center  justify-between">
                                <div className="flex items-center">
                                    <button className="group rounded-l-full px-6 py-[10px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                                        <svg
                                            className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={22}
                                            height={22}
                                            viewBox="0 0 22 22"
                                            fill="none"
                                        >
                                            <path
                                                d="M16.5 11H5.5"
                                                stroke=""
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                            />
                                            <path
                                                d="M16.5 11H5.5"
                                                stroke=""
                                                strokeOpacity="0.2"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                            />
                                            <path
                                                d="M16.5 11H5.5"
                                                stroke=""
                                                strokeOpacity="0.2"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </button>
                                    <input
                                        type="text"
                                        className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[70px] min-w-[40px] placeholder:text-gray-900 py-[7px] text-center bg-transparent"
                                        placeholder={1}
                                    />
                                    <button className="group rounded-r-full px-6 py-[10px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                                        <svg
                                            className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={22}
                                            height={22}
                                            viewBox="0 0 22 22"
                                            fill="none"
                                        >
                                            <path
                                                d="M11 5.5V16.5M16.5 11H5.5"
                                                stroke=""
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                            />
                                            <path
                                                d="M11 5.5V16.5M16.5 11H5.5"
                                                stroke=""
                                                strokeOpacity="0.2"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                            />
                                            <path
                                                d="M11 5.5V16.5M16.5 11H5.5"
                                                stroke=""
                                                strokeOpacity="0.2"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <AiOutlineDelete className="size-7 hover:text-red-600" />

                            </div>
                        </div>
                    </div>
                </section>
            </div>


            {/* end */}

            <section>
                <div className="bg-gray-100 rounded-xl p-3 w-full mb-2 max-lg:max-w-xl max-lg:mx-auto">
                    <div className="flex items-center justify-between w-full mb-6">
                        <p className="font-normal text-xl leading-8 text-gray-400">Sub Total</p>
                        <h6 className="font-semibold text-xl leading-8 text-gray-900">
                            $360.00
                        </h6>
                    </div>
                    <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200">
                        <p className="font-normal text-xl leading-8 text-gray-400">
                            Delivery Charge
                        </p>
                        <h6 className="font-semibold text-xl leading-8 text-gray-900">
                            $45.00
                        </h6>
                    </div>
                    <div className="flex items-center justify-between w-full py-6">
                        <p className="font-manrope font-medium text-2xl leading-9 text-gray-900">
                            Total
                        </p>
                        <h6 className="font-manrope font-medium text-2xl leading-9 text-indigo-500">
                            $405.00
                        </h6>
                    </div>
                </div>
                <div className="flex items-center justify-between flex-col sm:flex-row justify-center gap-3 mt-5">
                    <button className="border flex bg-blue-500 py-2 px-4 rounded-full">
                        <span className="">
                            Coupon Code
                        </span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={22}
                            height={22}
                            viewBox="0 0 22 22"
                            fill="none"
                        >
                            <path
                                d="M8.25324 5.49609L13.7535 10.9963L8.25 16.4998"
                                stroke="#4F46E5"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    <button className="border flex bg-blue-500 py-2 px-4 rounded-full">
                        Payment
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={22}
                            height={22}
                            viewBox="0 0 22 22"
                            fill="none"
                        >
                            <path
                                d="M8.25324 5.49609L13.7535 10.9963L8.25 16.4998"
                                stroke="#4F46E5"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Addtocart;