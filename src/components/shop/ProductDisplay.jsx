/* eslint-disable react/prop-types */
import { useContext, useState } from 'react'
import { IoStar } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { CartContext } from '../../App'

const ProductDisplay = ({ item }) => {
  const { name, seller, price, ratingsCount, quantity, id, img } = item
  const [preQuantity, setPreQuantity] = useState(quantity)
  const [coupon, setCoupon] = useState('')
  const [size, setSize] = useState('select size')
  const [color, setColor] = useState('select color')
 const { setcart } = useContext(CartContext)
  const handleSizeChange = (e) => {
    setSize(e.target.value)
  }

  const handleColorChange = (e) => {
    setColor(e.target.value)
  }

  const handleIncrease = () => {
    setPreQuantity((prev) => prev + 1)
  }

  const handleDecrease = () => {
    setPreQuantity((prev) => (prev > 0 ? prev - 1 : 0))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const product = {
      id,
      img,
      name,
      price,
      quantity: preQuantity,
      size,
      color,
      coupon,
    }

    const existingCart = JSON.parse(localStorage.getItem('cart')) || []
    const existingProductIndex = existingCart.findIndex(
      (item) => item.id === id
    )
    if (existingProductIndex !== -1) {
      existingCart[existingProductIndex].quantity += preQuantity
    } else {
      existingCart.push(product)
    }

    localStorage.setItem('cart', JSON.stringify(existingCart))
   setcart((prev) => prev + 1)

    setPreQuantity(1)
    setSize('select size')
    setColor('select color')
    setCoupon('')
  }

  return (
    <div className="p-4 flex flex-col gap-4">
      <div>
        <h4 className="text-2xl font-bold font-sans ">{name}</h4>
        <p className="flex items-center gap-1">
          <IoStar className="text-yellow-400" />
          <IoStar />
          <IoStar />
          <IoStar />
          {ratingsCount} Reviews
        </p>
        <h4 className="text-lg font-bold text-blue-600">${price}</h4>
        <h6 className="text-lg font-semibold text-fray-600">{seller}</h6>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          magni, optio est hic quasi officiis!
        </p>
      </div>
      <div>
        <form className="flex flex-wrap gap-4 " onSubmit={handleSubmit}>
          <div className="w-[10rem]">
            <select
              value={size}
              onChange={handleSizeChange}
              className="w-full p-2 bg-gray-200 text-lg font-semibold"
            >
              <option>select size</option>
              <option>sm</option>
              <option>md</option>
              <option>lg</option>
              <option>xl</option>
              <option>xxl</option>
            </select>
          </div>
          <div className="w-1/2">
            <select
              value={color}
              onChange={handleColorChange}
              className="w-full p-2 text-lg bg-gray-200 font-semibold"
            >
              <option>select color</option>
              <option>red</option>
              <option>black</option>
              <option>yellow</option>
              <option>gray</option>
              <option>pink</option>
            </select>
          </div>
          <div className="flex">
            <div
              className="px-3 py-1 bg-blue-700 rounded-l cursor-pointer text-xl text-white"
              onClick={handleDecrease}
            >
              -
            </div>
            <input
              type="text"
              className="text-center w-16 bg-gray-200 "
              value={preQuantity}
              onChange={(e) => setPreQuantity(Number(e.target.value))}
            />
            <div
              className="px-3 py-1 bg-black/80 rounded-r cursor-pointer text-xl text-white "
              onClick={handleIncrease}
            >
              +
            </div>
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter Discount Code"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              className="p-2 rounded  text-md font-semibold bg-gray-200"
            />
          </div>
          <div className="flex justify-between w-full p-4">
            <button
              type="submit"
              className="bg-blue-700  hover:bg-blue-800 duration-150 rounded py-2 px-4 text-white font-semibold"
            >
              Add To Cart
            </button>
            <Link
              to="/cartpage"
              className="bg-black/80 hover:bg-black/90 duration-150 rounded py-2 px-4 text-white font-semibold"
            >
              Checkout
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

// ProductDisplay.propTypes = {
//   item: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     seller: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     ratingsCount: PropTypes.number.isRequired,
//     quantity: PropTypes.number.isRequired,
//     id: PropTypes.string.isRequired,
//     img: PropTypes.string.isRequired,
//   }).isRequired,
// }

export default ProductDisplay
