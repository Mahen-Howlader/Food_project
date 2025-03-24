import React from 'react';
import { FaCarSide } from 'react-icons/fa';
import { FaMoneyBillTrendUp } from 'react-icons/fa6';
import { GrInsecure } from 'react-icons/gr';
import { MdDiscount } from 'react-icons/md';

function Benefitbuy(props) {
    return (
        <div className='mx-auto px-5'>
            <div className='mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                <div className='bg-gray-700 p-4 r flex rounded-md  flex-col justify-center items-center text-center space-y-1 ounded-md text-white'>
                    <FaCarSide className='' size={35} />
                    <h2 className='text-2xl font-bold shadow-xl'>Fast Delivery</h2>
                    <p className="text-gray-300 text-sm">Same day delivery as soon as possible</p>
                </div>
                <div className='bg-gray-700 p-4 ro flex rounded-md  flex-col justify-center items-center text-center space-y-1 unded-md text-white'>
                    <MdDiscount className='' size={35} />
                    <h2 className='text-2xl font-bold shadow-xl'>Special Discount</h2>
                    <p className="text-gray-300 text-sm">Get attractive offers day by day</p>
                </div>
                <div className='bg-gray-700 p-4 ro flex rounded-md  flex-col justify-center items-center text-center space-y-1 unded-md text-white'>
                    <GrInsecure className='' size={35} />
                    <h2 className='text-2xl font-bold shadow-xl'>Secure Checkout</h2>
                    <p className="text-gray-300 text-sm">Fully secured SSL checkout technology</p>
                </div>
                <div className='bg-gray-700 p-4 rounded-md flex  flex-col justify-center items-center text-center space-y-1  text-white'>
                    <FaMoneyBillTrendUp className='' size={35} />
                    <h2 className='text-2xl font-bold shadow-xl'>Money Returns</h2>
                    <p className="text-gray-300 text-sm">100% Money back guarntee</p>
                </div>
            </div>
        </div>
    );
}

export default Benefitbuy;