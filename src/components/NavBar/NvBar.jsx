import { useState, useEffect, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navlinkData } from '../../constant/data'
import { Menu, X } from 'lucide-react'
import { IoCart } from 'react-icons/io5'
import { CartContext } from '../../App'
const NavBar = () => {
  const [ToggleMenu, setToggleMenu] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
const { cart, setcart } = useContext(CartContext)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || []
    setcart(cartItems.length)
  }, [setcart])
  return (
    <div
      className={`fixed w-full z-20 transition-colors duration-300  ${
        isScrolled
          ? '  bg-primary backdrop-blur-lg bg-opacity-75'
          : 'bg-primary'
      }`}
    >
      <header className="shadow-md">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between ">
            <div className=" flex items-center gap-12 ">
              <Link className="flex items-center" to={'/'}>
                <img
                  src="/assets/logos.png"
                  alt="logo"
                  className="w-20 h-16 object-contain"
                />
                <h1 className="text-2xl sm:text-3xl font-bold text-white">
                  Mar<span className="text-secondary">ka</span>
                </h1>
              </Link>
            </div>
            <div className="hidden md:flex items-center gap-12 transform translate-x-8">
              <nav aria-label="Global" className="relative">
                <ul className="flex items-center gap-6 text-sm h-12">
                  {navlinkData.map((item, index) => (
                    <li key={index} className="cursor-pointer">
                      <NavLink
                        to={item.link}
                        className={({ isActive }) =>
                          `flex items-center ${
                            isActive
                              ? 'bg-secondary cursor-pointer duration-150 rounded'
                              : ''
                          } px-3 py-2 font-[400] text-white text-lg hover:bg-secondary rounded duration-150`
                        }
                      >
                        {item.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="">
              {' '}
              <div className="flex items-center gap-4">
                <Link
                  to={'/cartpage'}
                  className="rounded-md bg-transparent px-5 text-2xl 
                 py-2.5 font-medium   text-md relative "
                >
                  <div className="absolute -top-[5px]  right-2 px-1.5 text-center mx-auto rounded-full text-white bg-blue-500  text-sm">
                    <p className="m-auto relative -left-[1px]">{cart}</p>
                  </div>
                  <IoCart className="text-white" />
                </Link>
                <Link
                  className="rounded-md bg-secondary px-5 py-2.5 font-medium text-black shadow hover:bg-third duration-150 text-md"
                  to={'/login'}
                >
                  Login
                </Link>
                <Link
                  className="hidden sm:block rounded-md hover:bg-third text-black text-md duration-150 bg-gray-50 px-5 py-2.5 font-medium"
                  to={'/signin'}
                >
                  Register
                </Link>
              </div>
            </div>

            <div className="block md:hidden">
              <button
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                onClick={() => setToggleMenu(!ToggleMenu)}
              >
                {!ToggleMenu ? <Menu /> : <X />}
              </button>
            </div>
          </div>
        </div>
      </header>
      {ToggleMenu && (
        <div className="md:hidden mt-8 h-screen bg-primary">
          <nav aria-label="Global" className="relative">
            <ul className="flex flex-col items-center gap-6 text-sm">
              {navlinkData.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer w-full text-center relative"
                >
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      `flex items-center justify-center ${
                        isActive
                          ? 'bg-secondary cursor-pointer duration-150 rounded'
                          : ''
                      } block px-3 py-2 font-[400] text-white text-lg hover:bg-secondary rounded duration-150`
                    }
                    onClick={() => setToggleMenu(false)}
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
              <li>
                <Link
                  className="rounded-md bg-secondary px-5 py-2.5 font-medium text-black shadow hover:bg-third duration-150 text-md"
                  to={'/login'}
                >
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  )
}

export default NavBar
