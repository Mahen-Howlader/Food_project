import { useState } from "react";
import MultipelproductCart from "./MultipelproductCart";

function CartImagepage({ img }) {

    const [mainImage,setMainImage] = useState(img[0]);
    
    return ( 
        <>
            <img
                src={mainImage?.url}
                alt="Product"
                className="w-full min-h-2/6 max-h-2/6 max-h-96 rounded-lg object-fill shadow-md mb-4"
                id="mainImage"
            />
            <div className="flex gap-4 py-4 justify-center overflow-x-auto">

                {
                    img?.map((image, index) => {

                        return  <img
                        src={image?.url}
                        alt={`Thumbil ${index}`}
                        key={index}
                        className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                        onClick={() => setMainImage(image)}
                    />

                    })
                }
            </div></>
    );
}

export default CartImagepage;