import useFoodData from "../../Hook/Alldata";

function Foodcard() {

    const { isData : foodData, isLoading } = useFoodData();
    if (isLoading) return <h1>Loading...</h1>

    console.log(foodData)

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {
                foodData?.map((val, index) => {

                    const {category,desc,rating,price,name,img,} = val;

                   return <div key={index} className="bg-gray-100 p-2 overflow-hidden cursor-pointer">
                    <div className="bg-white flex flex-col h-full">
                        <div className="w-full">
                            <img src={img}alt="food1"
                                className="aspect-[139/125] w-full object-cover" />
                        </div>
    
                        <div className="p-4 text-center flex-1">
                            <h4 className="text-sm sm:text-base font-bold text-gray-800">{name}</h4>
                            <h4 className="text-sm sm:text-base text-gray-800 font-bold mt-2">$22 <strike className="text-gray-500 ml-1">${price}</strike></h4>
                        </div>
                        <button type="button" className="bg-gray-700 font-semibold hover:bg-gray-800 text-white text-sm px-2 py-2 w-full">Add to Cart</button>
                    </div>
                </div>
                })
            }

          
        </div>
    );
}

export default Foodcard;