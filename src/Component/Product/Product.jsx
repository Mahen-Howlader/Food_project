import React from 'react';
import Categorymenu from '../Categorymenu/Categorymenu';
import Foodcard from '../Foodcard/Foodcard';

function Product() {
    return (
        <div>
            <Categorymenu></Categorymenu>
            <div class="font-sans p-4 mx-auto lg:max-w-7xl md:max-w-4xl max-w-xl">
                <h2 class="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6 sm:mb-10">Food and Flavours</h2>
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                <Foodcardg></Foodcardg>
                
                </div>
            </div>
        </div>
    );
}

export default Product;