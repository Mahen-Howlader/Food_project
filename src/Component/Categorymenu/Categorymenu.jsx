function Categorymenu() {

    return (
        <>

            <div className="sm:flex items-center text-center pt-14">
                <h2 className='text-xl font-bold p-2'>{new Date().toUTCString().toString().slice(0, 16)}</h2>
                <h3 className='text-gray-400 px-2 mt-3 -ml-3'>Find the best food</h3>
            </div>
            <div className='flex gap-x-5 px-2 py-3 overflow-x-scroll md:overflow-x-hidden scroll-smooth'>
                {/* {
                    data?.data?.map((val, index) => {
                        return <button onClick={() => handelProductFilter(val?._id)} key={index} className='bg-gray-200 px-3 py-1 rounded-lg hover:bg-green-500 hover:text-white'>{val?._id}</button>
                    })
                } */}
            </div>
        </>
    );
}

export default Categorymenu;