import { useState, useEffect } from 'react'
import { ListCategoryData, ProductData } from '../../constant/data'
import Ratting from '../Ratting'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'

// وظيفة لإضافة تقييم عشوائي بين 1 و 4 لكل منتج
// const addRandomRatings = (products) => {
//   return products.map((product) => ({
//     ...product,
//     ratting: Math.floor(Math.random() * 5) + 1,
//   }))
// }

const CategoryShowCase = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    // إضافة التقييمات العشوائية عند تحميل المكونات
    setItems(ProductData)
  }, [])

  const filterItem = (categItem) => {
    const updatedItems = ProductData.filter((currItem) => {
      return currItem.cate === categItem
    })
    if (categItem === 'all') {
      setItems(addRandomRatings(ProductData))
    } else {
      setItems(addRandomRatings(updatedItems))
    }
  }

  return (
    <div className="relative">
      <img
        src="/assets/images/bg/shape2.png"
        alt=""
        className="brightness-50 hue-rotate-180 absolute left-0 top-12 -z-10 animate-pulse"
      />
      <img
        src="/assets/images/bg/shape.png"
        alt=""
        className="brightness-50 hue-rotate-180 absolute right-0 -z-10 animate-pulse"
      />
      <div className="lg:px-12 mt-16">
        <div className="flex bg-[#e2d4d4] justify-between items-center lg:p-4 w-full rounded flex-col gap-5 md:flex-row">
          <h1 className="font-bold text-4xl">Our Product</h1>
          <div>
            <ul className="flex text-2xl gap-8 flex-wrap justify-center">
              {ListCategoryData.map((item, index) => (
                <li
                  key={index}
                  className="hover:bg-third md:px-5 md:py-2 p-2 bg-[#BB9B97] duration-200 rounded-md cursor-pointer"
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
      <div className="flex flex-wrap gap-10 justify-center mt-12 px-4 lg:px-0">
        {items.map((product) => (
          <div
            className="bg-slate-100 rounded w-full sm:w-60 md:w-72 lg:w-80"
            key={product.id}
          >
            <div className="relative">
              <img
                src={product.imgUrl}
                alt=""
                className="w-full h-64 object-cover"
              />
              <div className="flex justify-between p-2 items-center absolute bottom-0 w-full bg-gray-400 bg-opacity-75">
                <div className="text-xl font-semibold">
                  <a href="/">{product.cate}</a>
                </div>
                <div className="flex items-center">
                  <Ratting rate={product.ratting} />
                  <span className="bg-blue-50 text-blue-800 text-xs font-semibold px-1.5 py-0.5 rounded dark:bg-blue-200 ml-2">
                    5.0
                  </span>
                </div>
              </div>
            </div>
            {/* content */}
            <div className="text-xl flex flex-col p-4">
              <div className="flex justify-between items-center">
                <Link
                  to={`/shop/${product.id}`}
                  className="font-bold hover:text-blue-600 duration-200"
                >
                  {product.title}
                </Link>
                <div className="p-2 rounded-full hover:bg-gray-800 bg-gray-700 duration-700">
                  <ShoppingCart className="text-white cursor-pointer" />
                </div>
              </div>
              <div className="font-semibold text-2xl flex justify-between mt-2">
                <Link to={'/'}>{product.brand}</Link>
                <h1 className="font-bold text-gray-500">{product.price}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoryShowCase
