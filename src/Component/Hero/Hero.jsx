function Hero() {
  return (
    <div>
      <div className=" w-full">
        <div className="relative bg-yellow-50">
          <div className="container m-auto   lg:px-7">
            <div className="md:flex items-center  px-2 md:px-0">
              <div className="relative lg:w-6/12 lg:py-24 xl:py-32">
                <h1 className="font-bold text-4xl text-yellow-900 md:text-5xl lg:w-10/12">Your favorite dishes, right at your door</h1>
                <form action="" className="w-full mt-12">
                  <div className="relative flex p-1 rounded-full bg-white border border-yellow-200 shadow-md md:p-2">
                    {/* <select className="hidden p-3 rounded-full bg-transparent md:block md:p-4" name="domain" id="domain">
                                            <option value="design">FastFood</option>
                                            <option value="development">Restaurant</option>
                                            <option value="marketing">Marketing</option>
                                        </select> */}
                    <input placeholder="Your favorite food" className="w-full outline-none p-4 rounded-full" type="text" />
                    <button type="button" title="Start buying" className="ml-auto py-3 px-6 rounded-full text-center transition bg-gradient-to-b from-yellow-200 to-yellow-300 hover:to-red-300 active:from-yellow-400 focus:from-red-400 md:px-12">
                      <span className="hidden text-yellow-900 font-semibold md:block">
                        Search
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 mx-auto text-yellow-900 md:hidden" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                      </svg>
                    </button>
                  </div>
                </form>
                <p className="mt-8 text-gray-700 lg:w-10/12">Sit amet consectetur adipisicing elit. <a href="#" className="text-yellow-700">connection</a> tenetur nihil quaerat suscipit, sunt dignissimos.</p>
              </div>
              <div className="ml-auto">
                <img
                  src="https://i.postimg.cc/5tWyx3rJ/418503eb-3d3e-4e39-9b42-f67e0ab547c6-removebg-preview.png"
                  className="min-h-[40%] max-h-[40%]"
                  alt="food illustration"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;



{/* <div class="font-sans p-4 mx-auto lg:max-w-7xl md:max-w-4xl max-w-xl">
<h2 class="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6 sm:mb-10">Food and Flavours</h2>
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">

<div class="bg-gray-100 p-2 overflow-hidden cursor-pointer">
<div class="bg-white flex flex-col h-full">
<div class="w-full">
  <img src="https://readymadeui.com/images/food1.webp" alt="food1"
    class="aspect-[139/125] w-full object-cover" />
</div>

<div class="p-4 text-center flex-1">
  <h4 class="text-sm sm:text-base font-bold text-gray-800">Veg Burger with Salad</h4>
  <h4 class="text-sm sm:text-base text-gray-800 font-bold mt-2">$22 <strike class="text-gray-500 ml-1">$28</strike></h4>
</div>
<button type="button" class="bg-gray-700 font-semibold hover:bg-gray-800 text-white text-sm px-2 py-2 w-full">Add to Cart</button>
</div>
</div>

<div class="bg-gray-100 p-2 overflow-hidden cursor-pointer">
<div class="bg-white flex flex-col h-full">
<div class="w-full">
  <img src="https://readymadeui.com/images/food2.webp" alt="food2"
    class="aspect-[139/125] w-full object-cover" />
</div>

<div class="p-4 text-center flex-1">
  <h4 class="text-sm sm:text-base font-bold text-gray-800">Spicy Veg Burger</h4>
  <h4 class="text-sm sm:text-base text-gray-800 font-bold mt-2">$24 <strike class="text-gray-500 ml-1">$29</strike></h4>
</div>
<button type="button" class="bg-gray-700 font-semibold hover:bg-gray-800 text-white text-sm px-2 py-2 w-full">Add to Cart</button>
</div>
</div>

<div class="bg-gray-100 p-2 overflow-hidden cursor-pointer">
<div class="bg-white flex flex-col h-full">
<div class="w-full">
  <img src="https://readymadeui.com/images/food4.webp" alt="food3"
    class="aspect-[139/125] w-full object-cover" />
</div>

<div class="p-4 text-center flex-1">
  <h4 class="text-sm sm:text-base font-bold text-gray-800">Veggie Burger</h4>
  <h4 class="text-sm sm:text-base text-gray-800 font-bold mt-2">$18 <strike class="text-gray-500 ml-1">$24</strike></h4>
</div>
<button type="button" class="bg-gray-700 font-semibold hover:bg-gray-800 text-white text-sm px-2 py-2 w-full">Add to Cart</button>
</div>
</div>

<div class="bg-gray-100 p-2 overflow-hidden cursor-pointer">
<div class="bg-white flex flex-col h-full">
<div class="w-full">
  <img src="https://readymadeui.com/images/food5.webp" alt="food4"
    class="aspect-[139/125] w-full object-cover" />
</div>

<div class="p-4 text-center flex-1">
  <h4 class="text-sm sm:text-base font-bold text-gray-800">The Best Chickpea Food</h4>
  <h4 class="text-sm sm:text-base text-gray-800 font-bold mt-2">$26 <strike class="text-gray-500 ml-1">$32</strike></h4>
</div>
<button type="button" class="bg-gray-700 font-semibold hover:bg-gray-800 text-white text-sm px-2 py-2 w-full">Add to Cart</button>
</div>
</div>

<div class="bg-gray-100 p-2 overflow-hidden cursor-pointer">
<div class="bg-white flex flex-col h-full">
<div class="w-full">
  <img src="https://readymadeui.com/images/food6.webp" alt="food5"
    class="aspect-[139/125] w-full object-cover" />
</div>

<div class="p-4 text-center flex-1">
  <h4 class="text-sm sm:text-base font-bold text-gray-800">Burgers with fries</h4>
  <h4 class="text-sm sm:text-base text-gray-800 font-bold mt-2">$26 <strike class="text-gray-500 ml-1">$32</strike></h4>
</div>
<button type="button" class="bg-gray-700 font-semibold hover:bg-gray-800 text-white text-sm px-2 py-2 w-full">Add to Cart</button>
</div>
</div>

<div class="bg-gray-100 p-2 overflow-hidden cursor-pointer">
<div class="bg-white flex flex-col h-full">
<div class="w-full">
  <img src="https://readymadeui.com/images/food7.webp" alt="food7"
    class="aspect-[139/125] w-full object-cover" />
</div>

<div class="p-4 text-center flex-1">
  <h4 class="text-sm sm:text-base font-bold text-gray-800">Plate of Pasta</h4>
  <h4 class="text-sm sm:text-base text-gray-800 font-bold mt-2">$18 <strike class="text-gray-500 ml-1">$22</strike></h4>
</div>
<button type="button" class="bg-gray-700 font-semibold hover:bg-gray-800 text-white text-sm px-2 py-2 w-full">Add to Cart</button>
</div>
</div>

<div class="bg-gray-100 p-2 overflow-hidden cursor-pointer">
<div class="bg-white flex flex-col h-full">
<div class="w-full">
  <img src="https://readymadeui.com/images/food8.webp" alt="food8"
    class="aspect-[139/125] w-full object-cover" />
</div>

<div class="p-4 text-center flex-1">
  <h4 class="text-sm sm:text-base font-bold text-gray-800">Vegetable Food</h4>
  <h4 class="text-sm sm:text-base text-gray-800 font-bold mt-2">$11 <strike class="text-gray-500 ml-1">$15</strike></h4>
</div>
<button type="button" class="bg-gray-700 font-semibold hover:bg-gray-800 text-white text-sm px-2 py-2 w-full">Add to Cart</button>
</div>
</div>

<div class="bg-gray-100 p-2 overflow-hidden cursor-pointer">
<div class="bg-white flex flex-col h-full">
<div class="w-full">
  <img src="https://readymadeui.com/images/food3.webp" alt="food6"
    class="aspect-[139/125] w-full object-cover" />
</div>

<div class="p-4 text-center flex-1">
  <h4 class="text-sm sm:text-base font-bold text-gray-800">Pasta with meatballs</h4>
  <h4 class="text-sm sm:text-base text-gray-800 font-bold mt-2">$15 <strike class="text-gray-500 ml-1">$22</strike></h4>
</div>
<button type="button" class="bg-gray-700 font-semibold hover:bg-gray-800 text-white text-sm px-2 py-2 w-full">Add to Cart</button>
</div>
</div>

</div>
</div> */}