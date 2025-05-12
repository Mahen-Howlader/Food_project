import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFoodData from '../../Hook/Alldata';
import { Link } from 'react-router-dom';
import Button from '../../Component/Button/Button';

function Homepageslider(props) {

    const { isData: foodData, isLoading } = useFoodData();

    if (isLoading) return <h1>Loading..</h1>
    return (
        <div>
            <div className="">
                <h2 className="text-xl sm:text-3xl font-bold text-gray-800 text-center mb-6 sm:mb-10">Food and Flavours</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 mg:grid-cols-3 lg:grid-cols-4 gap-3'>
                    {
                        foodData.slice(0, 8).map((val, index) => {
                            const { category, desc, rating, price, name, img, } = val;
                            return <div key={index} className="bg-gray-100 p-2 cursor-pointer  ">
                                <div className="bg-white flex flex-col h-full">
                                    <div className="w-full">
                                        <img src={img[0]?.url} alt="food1"
                                            className="aspect-[139/125] w-full object-cover" />
                                    </div>

                                    <div className="p-4 text-center flex-1">
                                        <h4 className="text-sm sm:text-base font-bold text-gray-800">{name ? name.slice(0, 10) + "..." : "Not update title"}</h4>
                                        <h4 className="text-sm sm:text-base text-gray-800 font-bold mt-2">$22 <strike className="text-gray-500 ml-1">${price}</strike></h4>
                                    </div>
                                    <Button title={"View Product"} path={`/product/${val?._id}`}></Button>
                                </div>
                            </div>
                        })
                    }
                </div>
                <div className='w-60 mx-auto mt-6'>
                    <Button title={"See more .."} path={"fooddata"}></Button>
                </div>
            </div>
        </div>
    );
}

export default Homepageslider;