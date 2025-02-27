function Categorymenu() {
    return (
        <div>
            <div className="flex items-center">
                <h2 className='text-xl font-bold p-2'>{new Date().toUTCString().toString().slice(0, 16)}</h2>
                <h3 className='text-gray-400 px-2 mt-3 -ml-3'>Find the best food</h3>
            </div>
            <div className='flex gap-x-5 px-2 py-3 overflow-x-scroll md:overflow-x-hidden scroll-smooth'>
                <button className='bg-gray-200 px-3 py-1 rounded-lg hover:bg-green-500 hover:text-white'>All</button>
                <button className='bg-gray-200 px-3 py-1 rounded-lg hover:bg-green-500 hover:text-white'>Lunch</button>
                <button className='bg-gray-200 px-3 py-1 rounded-lg hover:bg-green-500 hover:text-white'>Breakfast</button>
                <button className='bg-gray-200 px-3 py-1 rounded-lg hover:bg-green-500 hover:text-white'>Dinner</button>
            </div>
        </div>
    );
}

export default Categorymenu;