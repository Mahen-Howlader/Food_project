import React from 'react';
import Categorymenu from '../Categorymenu/Categorymenu';
import Foodcard from '../Foodcard/Foodcard';

function Product() {
    return (
        <div className='z-0'>
            <Categorymenu></Categorymenu>
            <div>
                <Foodcard></Foodcard>
            </div>
        </div>
    );
}

export default Product;