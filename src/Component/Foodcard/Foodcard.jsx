import { Link } from "react-router";
import useFoodData from "../../Hook/Alldata";
import { useContext, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowAltCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { UserContext } from "../../Context/Provider";
import Button from "../Button/Button";
function Foodcard() {
    const { isData: foodData, isLoading } = useFoodData();
    const {filterProduct} = useContext(UserContext);

    if (isLoading) return <h1>Loading...</h1>
    // console.log(foodData)
    return (
        <div className=" mx-auto mb-4 pb-4">
            <h2 className="text-xl sm:text-3xl font-bold text-gray-800 text-center mb-6 sm:mb-10">Food and Flavours</h2>
            <div className="px-3 sm:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {
                    foodData?.map((val, index) => {
                        const { category, desc, rating, price, name, img, } = val;
                        // console.log(img[0].url)
                        return <div key={index} className="bg-gray-100 p-2 overflow-hidden cursor-pointer border-2">
                            <div className="bg-white flex flex-col h-full">
                                <div className="w-full">
                                    <img src={img[0]?.url} alt="food1"
                                        className="aspect-[139/125] w-full object-cover" />
                                </div>

                                <div className="p-4 text-center flex-1">
                                    <h4 className="text-sm sm:text-base font-bold text-gray-800">{name ? name : "Not update Product title"}</h4>
                                    <h4 className="text-sm sm:text-base text-gray-800 font-bold mt-2">$22 <strike className="text-gray-500 ml-1">${price}</strike></h4>
                                </div>
                                <Button title={"View Product"} path={`/product/${val?._id}`}></Button>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default Foodcard;