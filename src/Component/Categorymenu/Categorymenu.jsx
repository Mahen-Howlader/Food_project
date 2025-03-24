import useFoodData from "../../Hook/Alldata";

function Categorymenu() {
    const { isData: foodData, isLoading } = useFoodData();

    if (isLoading) return <h1>Loading data.....</h1>

    // ইউনিক ক্যাটাগরি বের করা
    const Catagory = [...new Set(foodData?.map(product => product.category))]
    return (
        <div>
            <div className="flex items-center">
                <h2 className='text-xl font-bold p-2'>{new Date().toUTCString().toString().slice(0, 16)}</h2>
                <h3 className='text-gray-400 px-2 mt-3 -ml-3'>Find the best food</h3>
            </div>
            <div className='flex gap-x-5 px-2 py-3 overflow-x-scroll md:overflow-x-hidden scroll-smooth'>

                {
                    Catagory?.map((val, index) => {
                        return <button key={index} className='bg-gray-200 px-3 py-1 rounded-lg hover:bg-green-500 hover:text-white'>{val}</button>
                        
                    })
                }

            </div>
        </div>
    );
}

export default Categorymenu;