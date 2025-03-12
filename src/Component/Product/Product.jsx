import React from 'react';
import Categorymenu from '../Categorymenu/Categorymenu';
import Foodcard from '../Foodcard/Foodcard';

function Product() {
    return (
        <div className='z-0'>
            <Categorymenu></Categorymenu>
            <div className="font-sans p-4 mx-auto lg:max-w-7xl md:max-w-4xl max-w-xl">
                <h2 className="text-xl sm:text-3xl font-bold text-gray-800 text-center mb-6 sm:mb-10">Food and Flavours</h2>
                <div>
                    <Foodcard></Foodcard>
                </div>
            </div>
        </div>
    );
}

export default Product;