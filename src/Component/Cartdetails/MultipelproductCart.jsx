import React from 'react';

function MultipelproductCart({image,index}) {
    
    console.log(image)
    return (
           <>
            <img
                src={image?.url}
                alt={`Thumbil ${index}`}
                key={index}
                className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
            />
           </>

    );
}

export default MultipelproductCart;