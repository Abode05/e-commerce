import { useState } from 'react'
import { Link } from 'react-router-dom'
import productData from '../../../public/products.json'
import SelectedCategory from './SelectedCategory'

const Banner = () => {
  const [searchInput, setSearchInput] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [filteredProduct, setFilteredProduct] = useState(productData)

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value
    setSearchInput(searchTerm)
    filterProducts(searchTerm, selectedCategory)
  }

  const handleCategoryChange = (e) => {
    const category = e.target.value
    setSelectedCategory(category)
    filterProducts(searchInput, category)
  }

  const filterProducts = (searchTerm, category) => {
    const filtered = productData.filter((product) => {
      const matchesSearchTerm = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
      const matchesCategory =
        category === 'all' ||
        product.category.toLowerCase() === category.toLowerCase()
      return matchesSearchTerm && matchesCategory
    })
    setFilteredProduct(filtered)
  }

  return (
    <div className="flex flex-col sm:flex-row items-center">
      <img
        src="/assets/images/bg/01.jpg"
        alt=""
        className="absolute object-cover w-full h-full -z-10"
      />
      <div className="relative flex flex-col items-center mx-auto justify-center sm:items-start sm:pl-10 h-screen space-y-10 px-4 sm:px-0">
        <div className="text-center sm:text-left max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-center text-black">
            Search your one from Thousands of{' '}
            <span className="text-[#c06b72]">Products</span>
          </h1>
        </div>
        <form className="mx-auto max-w-2xl w-full">
          <div className="flex flex-col  sm:flex-row w-full p-2 gap-5 md:gap-0 relative md:rounded-full shadow-md">
            <SelectedCategory
              select={selectedCategory}
              onChange={handleCategoryChange}
            />
            <input
              type="text"
              id="hs-hero-name-1"
              className="flex-1 py-3 px-4 bg-[#E4CCC9] text-lg font-semibold
               placeholder:text-black mb-3 sm:mb-0 outline-none"
              placeholder="Name of product..."
              onChange={handleSearchChange}
              value={searchInput}
            />
            <button
              className="py-2 px-4 inline-flex justify-center
               items-center text-sm font-semibold bg-zinc-800 md:rounded-r-full text-white hover:bg-gray-200 hover:text-black duration-150"
              type="submit"
            >
              Get started
            </button>
          </div>
          <div className="relative w-full max-w-2xl">
            <ul className="absolute bg-white w-full rounded-lg shadow-md max-h-40 overflow-y-auto mt-2">
              {searchInput &&
                filteredProduct.map((item, index) => (
                  <li key={index} className="p-2 hover:bg-gray-200">
                    <Link to={`/shop/${item.id}`} className="block">
                      {item.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Banner
