import { useState } from 'react'
import { ListCategoryData, ProductData } from '../../constant/data'
import Ratting from '../Ratting'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'

const CategoryShowCase = () => {
  const [items, setitems] = useState(ProductData)

  const filterItem = (categItem) => {
    const updateItem = ProductData.filter((currItem) => {
      return currItem.cate === categItem
    })
    if (categItem === 'all') {
      setitems(ProductData)
    } else {
      setitems(updateItem)
    }
  }
  return (
    <div className="relative ">
      <img
        src="/assets/images/bg/shape2.png"
        alt=""
        className="brightness-50 hue-rotate-180 absolute left-0 top-12 -z-10 animate-pulse"
      />

      <img
        src="/assets/images/bg/shape.png"
        alt=""
        className="brightness-50 hue-rotate-180 absolute right-0  -z-10 animate-pulse	"
      />
      <div className=" lg:px-12 mt-16 ">
        <div
          className="flex bg-[#e2d4d4] justify-between items-center
         lg:p-4 w-full rounded flex-col gap-5 
         md:flex-row"
        >
          <h1 className="font-bold   text-4xl">our Ptoduct </h1>
          <div className="">
            <ul className="flex text-2xl gap-8  ">
              {ListCategoryData.map((item, index) => (
                <li
                  key={index}
                  className="hover:bg-third md:px-5 md:py-2 p-2 bg-[#BB9B97] duration-200 rounded-md cursor-pointer "
                  onClick={() => filterItem(item.link)}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* section body */}
      <div className="">
        <div className="flex flex-wrap gap-10 justify-center mt-12">
          {items.map((product) => (
            <div className="bg-slate-100 rounded   " key={product.id}>
              <div className=" ">
                <div className="  relative">
                  <img
                    src={product.imgUrl}
                    alt=""
                    className="w-80 h-64 object-cover"
                  />
                  <div
                    className="flex justify-between p-2 items-center absolute 
                    -bottom-1 
                    w-full   bg-gray-400  "
                  >
                    <div className="text-xl font-semibold  ">
                      <a href="/">{product.cate}</a>
                    </div>
                    <div className="flex items-center">
                      <Ratting rate={product.ratting} />
                      <span
                        className="bg-blue-50
                       text-blue-800 text-xs font-semibold px-1.5 py-0.5
                       rounded dark:bg-blue-200 ml-2 "
                      >
                        5.0
                      </span>
                    </div>
                  </div>
                </div>
                {/* content */}
                <div className="text-xl flex flex-col ">
                  <div className="flex justify-between items-center p-4">
                    <Link
                      to={`/shop/${product.id}`}
                      className=" font-bold hover:text-blue-600 duration-200  "
                    >
                      {product.title}
                    </Link>
                    <div className=" p-2 rounded-full hover:bg-gray-800 bg-gray-700 duration-700 ">
                      <ShoppingCart className=" text-white cursor-pointer   " />
                    </div>
                  </div>

                  <div className="font-semibold text-2xl p-2  flex justify-between">
                    <Link to={'/'}>{product.brand}</Link>

                    <h1 className="font-bold text-gray-500 ">
                      {product.price}{' '}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategoryShowCase
