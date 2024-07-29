import { Link } from 'react-router-dom'
import { categoryList } from '../../constant/data'

const HomeCategory = () => {
  return (
    <div className=" mt-12 flex flex-col items-center">
      <p className="text-center text-2xl text-gray-700">Choose Any Products</p>
      <h1 className="text-center text-5xl text-gray-800 font-bold mb-12 mt-4">
        Buy Everything with Us
      </h1>
      <div className="w-full flex justify-center  ">
        <div className="grid gap-6 w-full max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {categoryList.map((product, index) => (
            <div
              key={index}
              className="bg-transparent py-3 rounded px-5 hover:scale-105"
            >
              <div className="relative">
                <Link
                  to={'/shop'}
                  className="absolute inset-0 flex items-end justify-center bg-transparent hover:bg-white/10 hover:backdrop-blur-sm duration-150 z-10 h-64 w-full cursor-pointer"
                >
                  {product.new? <div className="h-8 w-24 text-center bg-blue-400 text-xl text-white font-bold absolute  right-0  top-0">
                      {product.new}
                    </div>:<></>}
                   
                  
                  <h1 className="z-20 text-3xl font-bold p-3">
                    {product.title}
                  </h1>
                </Link>
                <img
                  src={product.imgUrl}
                  alt="product"
                  className="w-full h-64 text-center m-auto object-cover relative rounded"
                />
              </div>
            </div>
          ))}
          <div className="bg-transparent py-3 rounded px-5 hover:scale-105">
            <div className="relative">
              <Link
                to={'/shop'}
                className="absolute inset-0 flex items-end justify-center  bg-white/10 backdrop-blur-sm duration-150 z-10 h-64 w-full cursor-pointer"
              >
                <p className=" m-auto absolute top-[40%]  text-black/70 text-5xl font-bold  ">
                  {' '}
                  soon...
                </p>
                <h1 className="z-20  text-3xl font-bold p-3 text-black/70">
                  Home Decor
                </h1>
              </Link>
              <img
                src="assets/images/category/06.jpg"
                alt="product"
                className="w-full h-64 text-center m-auto object-cover relative rounded"
              />
            </div>
          </div>
        </div>
      </div>
      <button className="px-8 py-4 bg-[#b98a82] hover:bg-[#ddc0bc] duration-150 rounded-md text-xl font-bold mt-6">
        Get Started Now
      </button>
    </div>
  )
}

export default HomeCategory
