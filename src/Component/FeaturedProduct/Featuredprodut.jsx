import React from 'react';
import useFoodData from '../../Hook/Alldata';
import Marquee from 'react-fast-marquee';

function Featuredprodut() {

    const { isData, isLoading } = useFoodData();
    if (isLoading) return <h1>Loading...</h1>
    return (
        <div>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
                    <h2 className="text-xl sm:text-3xl font-bold text-gray-800 text-center mb-6 sm:mb-10">Customers also purchased</h2>

                    <div className="mt-6 grid gap-x-5">

                        <Marquee direction={'right'} className=''>
                            {isData.slice(0, 10).map((product) => (

                                <div key={product.id} className="group relative ml-5">
                                    <img
                                        alt={product.imageAlt}
                                        src={product?.img[0]?.url}
                                        className="w-40 h-40 rounded-full border-2"
                                    />
                                    <div className="mt-1 text-center">
                                        <div>
                                            <p className="mt-1 text-sm text-gray-500">{product?.category}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Marquee>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Featuredprodut;