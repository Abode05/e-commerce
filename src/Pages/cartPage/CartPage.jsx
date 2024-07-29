import  { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import CheckoutPopup from '../../components/cart/CheckoutPopup'
import { CartContext } from '../../App'

const CartPage = () => {
  const [cartItems, setCartItems] = useState([])
  const [country, setCountry] = useState('')
  const [region, setRegion] = useState('')
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const { setcart } = useContext(CartContext) // استخدام CartContext

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cart')) || []
    setCartItems(storedCartItems)
     setcart(storedCartItems.length)
  }, [setcart])

  const calculateTotalPrice = (item) => {
    return item.price * item.quantity
  }

  const handleIncrease = (item) => {
    item.quantity += 1
    setCartItems([...cartItems])
    updateLocalStorage([...cartItems])
  }

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1
      setCartItems([...cartItems])
      updateLocalStorage([...cartItems])
    }
  }

  const handleRemoveItem = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id)
    setCartItems(updatedCart)
    updateLocalStorage(updatedCart)
    setcart(updatedCart.length)
  }

  const updateLocalStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }

  const cartSubTotal = cartItems.reduce(
    (total, item) => total + calculateTotalPrice(item),
    0
  )
  const orderTotal = cartSubTotal

  return (
    <div className="font-sans bg-gradient-to-t  from-[#BB9B97] ">
      <PageHeader title="Shop Cart" curpage="cartPage" />
      <div className="grid lg:grid-cols-3  container mx-auto p-4">
        <div className="lg:col-span-2 p-6 bg-white/80 rounded overflow-x-auto">
          <div className="flex gap-2 border-b pb-4">
            <h2 className="text-2xl font-bold text-gray-800 flex-1">
              Shopping Cart
            </h2>
            <h3 className="text-base text-gray-800">
              {cartItems.length} Items
            </h3>
          </div>

          <table className="mt-6 w-full border-collapse divide-y">
            <thead className="whitespace-nowrap text-left">
              <tr>
                <th className="text-base text-gray-800 p-4">Description</th>
                <th className="text-base text-gray-800 p-4">Quantity</th>
                <th className="text-base text-gray-800 p-4">Price</th>
              </tr>
            </thead>

            <tbody className="whitespace-nowrap divide-y">
              {cartItems.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="p-4">
                    <div className="flex items-center gap-4 w-max">
                      <div className="h-32 shrink-0">
                        <Link to="/shop">
                          <img
                            src={item.img}
                            alt={item.name}
                            className="w-full h-full object-contain rounded-lg"
                          />
                        </Link>
                      </div>
                      <div>
                        <p className="text-base font-bold text-gray-800">
                          {item.name}
                        </p>
                        <button
                          type="button"
                          className="mt-2 font-semibold text-red-400 text-sm"
                          onClick={() => handleRemoveItem(item)}
                        >
                          <img src="/assets/images/shop/del.png" alt="del" />
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex divide-x border w-max rounded-lg overflow-hidden">
                      <button
                        type="button"
                        className="flex items-center justify-center bg-gray-100 w-10 h-10 font-semibold"
                        onClick={() => handleDecrease(item)}
                      >
                        -
                      </button>
                      <button
                        type="button"
                        className="bg-transparent w-10 h-10 font-semibold text-gray-800 text-base"
                      >
                        {item.quantity}
                      </button>
                      <button
                        type="button"
                        className="flex justify-center items-center bg-gray-800 text-white w-10 h-10 font-semibold"
                        onClick={() => handleIncrease(item)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="p-4">
                    <h4 className="text-base font-bold text-gray-800">
                      ${item.price}
                    </h4>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-white p-6 lg:sticky lg:top-0 lg:h-screen rounded-r ml-4">
          <h2 className="text-2xl font-bold text-gray-800 border-b pb-4">
            Order Summary
          </h2>

          <div className="mt-4">
            <label htmlFor="country" className="block text-gray-700">
              Country
            </label>
            <select
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="mt-2 p-2 cursor-pointer block w-full bg-gray-200 border-gray-300 rounded-md"
            >
              <option value="">Select Country</option>
              <option value="us">United States</option>
              <option value="ca">Canada</option>
              {/* Add more countries as needed */}
            </select>
          </div>

          <div className="mt-4">
            <label htmlFor="region" className="block text-gray-700">
              Region
            </label>
            <select
              id="region"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="mt-2 p-2 cursor-pointer block w-full bg-gray-200 border-gray-300 rounded-md"
            >
              <option value="">Select Region</option>
              <option value="ny">New York</option>
              <option value="ca">California</option>
              {/* Add more regions as needed */}
            </select>
          </div>

          <ul className="text-gray-800 divide-y mt-6">
            <li className="flex flex-wrap gap-4 text-base py-3">
              Subtotal{' '}
              <span className="ml-auto font-bold">
                ${cartSubTotal.toFixed(2)}
              </span>
            </li>
            <li className="flex flex-wrap gap-4 text-base py-3">
              Shipping <span className="ml-auto font-bold">$4.00</span>
            </li>
            <li className="flex flex-wrap gap-4 text-base py-3">
              Tax <span className="ml-auto font-bold">$4.00</span>
            </li>
            <li className="flex flex-wrap gap-4 text-base py-3 font-bold">
              Total <span className="ml-auto">${orderTotal.toFixed(2)}</span>
            </li>
          </ul>

          <div className="">
            <button
              className="bg-blue-700 hover:scale-110 shadow duration-200  text-white px-4 py-2 rounded"
              onClick={() => setIsPopupOpen(true)}
            >
              Make Payment
            </button>
            <CheckoutPopup
              isOpen={isPopupOpen}
              onClose={() => setIsPopupOpen(false)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
