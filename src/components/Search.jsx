/* eslint-disable react/prop-types */
import { IoSearchSharp } from 'react-icons/io5'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Search = ({ Products, GridList }) => {
  const [SearchTerm, setSearchTerm] = useState('')
  const filtered = Products.filter((product) =>
    product.name.toLowerCase().includes(SearchTerm.toLowerCase())
  )

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className=" p-4">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="search..."
          className="bg-slate-50 focus:outline-secondary  px-4 py-2 w-full relative rounded-md"
          value={SearchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="absolute right-1 top-2 text-2xl">
          <IoSearchSharp />
        </button>
      </form>
      {/* show search result */}
      <div className="bg-slate-50 flex  gap-2 flex-wrap rounded mt-1">
        {SearchTerm &&
          filtered.map((product) => (
            <Link
              to={`shop/${product.id}`}
              key={product.id}
              className="hover:bg-gray-200 w-full"
            >
              <div className="flex   gap-3 p-2  ">
                <div className="">
                  <div className="">
                    <img
                      src={product.img}
                      alt="product"
                      className="flex-shrink-0 flex-grow-0 "
                      width={70}
                    />
                  </div>
                </div>
                <div className="font-bold">
                  <Link to={`shop/${product.id}`}>
                    <p>{product.name}</p>
                    <h5 className="">${product.price}</h5>
                  </Link>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}

export default Search
