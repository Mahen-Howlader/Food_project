import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CartImagepage from "./CartImagepage";
import ReactStars from "react-rating-stars-component";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";


function Cartdetails(props) {
    const { id } = useParams();
   const features=  [
        "Freshly grilled premium salmon",
        "Seasoned with organic herbs and spices",
        "Served with roasted seasonal vegetables",
        "High in omega-3 fatty acids",
        "Ideal for a healthy & nutritious dinner"
    ]
    const { data: productData, isLoading } = useQuery({

        queryKey: ["FoodData", id],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:5000/fooddata/${id}`);
            return data;
        }
    })

    if (isLoading) return <h1>Loading...</h1>
    console.log(productData)

    // const {category,desc,img1,img2,img3,img4,img5} = productData;


    const { img, rating, price, name, desc, category, } = productData;
    // console.log(img)

    const firstExample = {
        size: 30,
        value: rating,
        edit: false,
        isHalf: true,
        emptyIcon: <IoIosStarOutline />,
        halfIcon: <IoIosStarHalf />,
        filledIcon: <IoIosStar />,
    };
    return (
        <div>
            <div className="bg-gray-100 pt-10">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-wrap -mx-4">
                        {/* Product Images */}
                        <div className="w-full  md:w-1/2 px-4 mb-8">

                            <CartImagepage img={img}></CartImagepage>
                        </div>
                        {/* Product Details */}
                        <div className="w-full md:w-1/2 px-4">
                            <h2 className="text-3xl font-bold mb-2">{name}</h2>
                            <p className="text-gray-600 mb-4">{category}</p>
                            <div className="mb-4">
                                <span className="text-2xl font-bold mr-2">${price}</span>
                                <span className="text-gray-500 line-through">$399.99</span>
                            </div>
                            <div className=" items-center mb-4 flex">
                                <ReactStars {...firstExample} />
                                <span className="ml-2 text-gray-600 -mt-3">{rating}</span>
                            </div>
                            <p className="text-gray-700 mb-6">
                                {desc}
                            </p>

                            <div className="mb-6">
                                <label
                                    htmlFor="quantity"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Quantity:
                                </label>
                                <input
                                    type="number"
                                    id="quantity"
                                    name="quantity"
                                    min={1}
                                    defaultValue={1}
                                    className="w-16 text-center h-10 border border-gray-500 rounded-md border-gray-300  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                            <div className="flex space-x-4 mb-6">
                                <button className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                        />
                                    </svg>
                                    Add to Cart
                                </button>
                                <button className="bg-gray-200 flex gap-2 items-center  text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                        />
                                    </svg>
                                    Wishlist
                                </button>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
                                <ul className="list-disc list-inside text-gray-700">

                                    {
                                        features?.map((val,index) => {
                                            return <li key={index}>{val}</li>
                                        })
                                    }
                                    
                            
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cartdetails;