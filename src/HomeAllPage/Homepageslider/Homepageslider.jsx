import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFoodData from '../../Hook/Alldata';
import { Link } from 'react-router-dom';
import Button from '../../Component/Button/Button';

function Homepageslider(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                   
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    
                }
            }
        ]
    };
    const { isData: foodData, isLoading } = useFoodData();

  if (isLoading) return <h1>Loading..</h1>
    return (
        <div>
            <div className="slider-container w-5/6 mx-auto">
                <h2 className="text-xl sm:text-3xl font-bold text-gray-800 text-center mb-6 sm:mb-10">Food and Flavours</h2>
                <Slider {...settings}>
                    {
                        foodData?.map((val, index) => {
                            const { category, desc, rating, price, name, img, } = val;
                            // console.log(img[0].url)
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
                </Slider>
            </div>
        </div>
    );
}

export default Homepageslider;