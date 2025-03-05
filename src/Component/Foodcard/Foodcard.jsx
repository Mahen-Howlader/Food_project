import { Link } from "react-router";
import useFoodData from "../../Hook/Alldata";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

function Foodcard() {
    const [pageNumbar, setPageNumber] = useState(0);
    const { isData: foodData ,isLoading} = useFoodData();


    // const { data: isData, isLoading, error } = useQuery({
    //     queryKey: ["pageData", pageNumbar],
    //     queryFn: async () => usePagination(pageNumbar),
    //     refetchIntervalInBackground: true
    // })


    if (isLoading) return <h1>Loading...</h1>
    // console.log(foodData)
    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {
                    foodData?.map((val, index) => {

                        const { category, desc, rating, price, name, img, } = val;

                        return <div key={index} className="bg-gray-100 p-2 overflow-hidden cursor-pointer">
                            <div className="bg-white flex flex-col h-full">
                                <div className="w-full">
                                    <img src={img} alt="food1"
                                        className="aspect-[139/125] w-full object-cover" />
                                </div>

                                <div className="p-4 text-center flex-1">
                                    <h4 className="text-sm sm:text-base font-bold text-gray-800">{name}</h4>
                                    <h4 className="text-sm sm:text-base text-gray-800 font-bold mt-2">$22 <strike className="text-gray-500 ml-1">${price}</strike></h4>
                                </div>
                                <Link to={`/product/${val?._id}`} className="bg-gray-700 font-semibold hover:bg-gray-800 text-white text-sm px-2 py-2 w-full">Add to Cart</Link>
                            </div>
                        </div>
                    })
                }


            </div>
            {/* pagination */}
            {/* <div className="flex justify-center my-10">
                <div className="flex">
                    <button onClick={() => setPageNumber((prev) => prev - 1)} className="border border-teal-500 text-teal-500 block rounded-sm font-bold py-4 px-6 mr-2 flex items-center hover:bg-teal-500 hover:text-white">
                        <svg
                            className="h-5 w-5 mr-2 fill-current"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="-49 141 512 512"
                            style={{ enableBackground: "new -49 141 512 512" }}
                            xmlSpace="preserve"
                        >
                            <path
                                id="XMLID_10_"
                                d="M438,372H36.355l72.822-72.822c9.763-9.763,9.763-25.592,0-35.355c-9.763-9.764-25.593-9.762-35.355,0 l-115.5,115.5C-46.366,384.01-49,390.369-49,397s2.634,12.989,7.322,17.678l115.5,115.5c9.763,9.762,25.593,9.763,35.355,0 c9.763-9.763,9.763-25.592,0-35.355L36.355,422H438c13.808,0,25-11.193,25-25S451.808,372,438,372z"
                            />
                        </svg>
                        Previous page
                    </button>

                    <h2 className="border border-teal-500 bg-teal-500 text-white block rounded-sm font-bold py-4 px-6 ml-2 flex items-center">{pageNumbar}</h2>

                    <button onClick={() => setPageNumber((prev) => prev + 1)} className="border border-teal-500 bg-teal-500 text-white block rounded-sm font-bold py-4 px-6 ml-2 flex items-center">
                        Next page
                        <svg
                            className="h-5 w-5 ml-2 fill-current"
                            clasversion="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="-49 141 512 512"
                            style={{ enableBackground: "new -49 141 512 512" }}
                            xmlSpace="preserve"
                        >
                            <path
                                id="XMLID_11_"
                                d="M-24,422h401.645l-72.822,72.822c-9.763,9.763-9.763,25.592,0,35.355c9.763,9.764,25.593,9.762,35.355,0
      l115.5-115.5C460.366,409.989,463,403.63,463,397s-2.634-12.989-7.322-17.678l-115.5-115.5c-9.763-9.762-25.593-9.763-35.355,0
      c-9.763,9.763-9.763,25.592,0,35.355l72.822,72.822H-24c-13.808,0-25,11.193-25,25S-37.808,422-24,422z"
                            />
                        </svg>
                    </button>
                </div>
            </div>            */}
        </div>
    );
}

export default Foodcard;