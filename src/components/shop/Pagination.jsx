/* eslint-disable react/prop-types */

import { Link } from 'lucide-react'
import { FaChevronLeft } from 'react-icons/fa6'
import { FaArrowRight } from 'react-icons/fa'
import { FaArrowLeft } from 'react-icons/fa'

const Pagination = ({
  productPerPage,
  totalProducrs,
  paginate,
  activePage,
}) => {
  const pageNumber = []
  for (let i = 1; i <= Math.ceil(totalProducrs / productPerPage); i++) {
    pageNumber.push(i)
  }
  return (
    <ul className="flex container md:gap-10 justify-center items-center text-xl  gap-2 ">
      <li>
        <button
          onClick={() => {
            if (activePage < pageNumber.length) {
              paginate(activePage - 1)
            }
          }}
        >
          <FaArrowLeft />
        </button>
      </li>
      {pageNumber.map((number) => (
        <li
          key={number}
          className={` ${
            number == activePage ? 'bg-gray-200 rounded-full' : ''
          }`}
        >
          <button
            onClick={() => paginate(number)}
            className="rounded-full px-3 py-1 mx-auto hover:bg-slate-100 duration-150"
          >
            {number}
          </button>
        </li>
      ))}
      <li>
        <button
          onClick={() => {
            if (activePage < pageNumber.length) {
              paginate(activePage + 1)
            }
          }}
        >
          {' '}
          <FaArrowRight />
        </button>
      </li>
    </ul>
  )
}

export default Pagination
