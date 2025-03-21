import React from 'react';

function Profile(props) {
    return (
        <div>
            <>
                {/* This is an example component */}
                <div className="h-full m-10 border shadow-slate-900-black shadow-md border-gray-500">
                    <div className="border-b-2 block md:flex">
                        <div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
                            <div className="flex justify-between">
                                <span className="text-xl font-semibold block">Admin Profile</span>
                                <a
                                    href="#"
                                    className="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800"
                                >
                                    Edit
                                </a>
                            </div>
                            <span className="text-gray-600">
                                This information is secret so be careful
                            </span>
                            <div className="w-full p-8 mx-2 flex justify-center">
                                <img
                                    id="showImage"
                                    className="max-w-xs w-32 items-center border"
                                    src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
                            <div className="rounded  shadow p-6">
                                <div className="pb-6">
                                    <label
                                        htmlFor="name"
                                        className="font-semibold text-gray-700 block pb-1"
                                    >
                                        Name
                                    </label>
                                    <div className="flex">
                                        <input
                                            disabled=""
                                            id="username"
                                            className="border-1  rounded-r px-4 py-2 w-full"
                                            type="text"
                                            defaultValue="Jane Name"
                                        />
                                    </div>
                                </div>
                                <div className="pb-4">
                                    <label
                                        htmlFor="about"
                                        className="font-semibold text-gray-700 block pb-1"
                                    >
                                        Email
                                    </label>
                                    <input
                                        disabled=""
                                        id="email"
                                        className="border-1  rounded-r px-4 py-2 w-full"
                                        type="email"
                                        defaultValue="example@example.com"
                                    />
                                    <span className="text-gray-600 pt-4 block opacity-70">
                                        Personal login information of your account
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        </div>
    );
}

export default Profile;