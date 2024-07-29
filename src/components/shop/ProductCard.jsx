/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { IoIosHeart } from 'react-icons/io'
import { FaShoppingCart } from 'react-icons/fa'
import Ratting from '../Ratting'
import { useContext, useState } from 'react'
import { CartContext } from '../../App'
import { toast, ToastContainer } from 'react-toastify'
const ProductCard = ({ products, GridList }) => {
const {setcart}=useContext(CartContext)

console.log(products)
  

  const handlecart=(product)=>{
    

const { name,  price, quantity, id, img } = product
    const productToAdd = {
      id,
      img,
      name,
      price,
      quantity:1,
    }
  console.log(name)
    
        const existingCart = JSON.parse(localStorage.getItem('cart')) || []
    const existingProductIndex = existingCart.findIndex(
      (item) => item.id === id
    )
    if (existingProductIndex !== -1) {
      existingCart[existingProductIndex].quantity += 1

    } else {
      existingCart.push(productToAdd)
      setcart((prev) => prev + 1)
    }

    localStorage.setItem('cart', JSON.stringify(existingCart))
   
 
}
 const [like, setlike] = useState(false)
  return (
    <div
      className={`flex flex-wrap gap-4 ${
        GridList ? ' justify-center ' : '  justify-start w-full'
      }`}
    >
      {products.map((product, index) => (
        <div key={index} className={GridList ? '' : 'w-full'}>
          <div className={`relative group flex  ${GridList ? 'w-full' : ''}`}>
            <div
              className={`relative flex items-center bg-white rounded p-2 ${
                GridList ? 'w-full flex-col py-2  ' : 'w-full '
              }`}
            >
              <div className="relative w-full h-52">
                <img
                  src={product.img}
                  alt="product"
                  className="w-full h-full object-cover rounded"
                />
                <div
                  className="absolute inset-0 flex items-center
                 justify-center gap-2 bg-transparent opacity-0 group-hover:bg-white/20 group-hover:backdrop-blur-sm group-hover:opacity-100 duration-150"
                >
                  <Link
                    to={`/shop`}
                    className="p-2 rounded-full bg-gray-400 text-white"
                  >
                    <IoIosHeart className={`text-4xl ${like?"text-red-600":""}`} onClick={() => setlike(!like)} />
                  </Link>
                  <Link
                    to={'/shop'}
                    className="p-2 rounded-full bg-gray-400 text-white"
                  >
                    <FaShoppingCart
                      className="text-4xl"
                      onClick={() => handlecart(product)}
                    />
                  </Link>
                  <ToastContainer />
                </div>
              </div>
              <div
                className="w-full font-semibold h-32 px-2 
               flex flex-col  justify-between    "
              >
                <h5 className="w-60">
                  <Link to={`/shop/${product.id}`} className="text-black ">
                    {product.name}
                  </Link>
                </h5>
                <p className="">
                  <Ratting />
                </p>
                <div className="flex w-full justify-between items-center ">
                  <Link
                    to={`/shop/${product.id}`}
                    className=" text-white flex items-center bg-[#bbbaba] p-1 
                    hover:bg-[#a8a6a6] rounded-md duration-200"
                  >
                    <p>veiw details</p>
                  </Link>
                  <h6 className="text-lg text-blue-700 font-bold">
                    {product.price}$
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductCard
