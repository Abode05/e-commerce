import { Route, Routes, useLocation } from "react-router-dom"
import NavBar from "./components/NavBar/NvBar"
import Home from "./Pages/Home/Home"
import Footer from  './components/Footer'
import Shop from "./Pages/ShopPage/Shop"
import SinglePageProduct from "./Pages/ShopPage/SinglePageProduct"
import CartPage from "./Pages/cartPage/CartPage"
import Blog from "./Pages/blog/Blog"
import LogIn from "./Auth/LogIn"
import SignIn from "./Auth/SignIn"
import AboutUs from "./Pages/About/About"
import { createContext, useState } from "react"
import { ToastContainer } from "react-toastify"
 export const CartContext=createContext()
function App() {
  const [cart, setcart] = useState(0)
  
  const location = useLocation()
  const hideNavBar =
    location.pathname === '/login' || location.pathname === '/signin'
  return (
    <>
      <CartContext.Provider value={{ cart, setcart }}>
        {!hideNavBar && <NavBar />}
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:id" element={<SinglePageProduct />} />
            <Route path="/cartpage" element={<CartPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        
        </div>
        {!hideNavBar && <Footer />}
      </CartContext.Provider>
    </>
  )
}

export default App
