import { useState } from 'react'
import Data from '../../../public/products.json'
import PageHeader from '../../components/PageHeader'
import ProductCard from '../../components/shop/ProductCard'
import Pagination from '../../components/shop/Pagination'
import Search from '../../components/Search'
import ShopCategory from '../../components/shop/ShopCategory'
import PopularPost from '../../components/shop/PopularPost'
import Tags from '../../components/Tags'
import { FaList } from 'react-icons/fa'
import { IoGridSharp } from 'react-icons/io5'

const Shop = () => {
  const [Products, setProducts] = useState(Data)
  const [GridList, setGridList] = useState(true)
  // pagination
  const [currentPage, setcurrentPage] = useState(1)
  const productPerPage = 12
  const indexofLastProduct = currentPage * productPerPage
  const indexofFirstProduct = indexofLastProduct - productPerPage
  const currentProducts = Products.slice(
    indexofFirstProduct,
    indexofLastProduct
  )
  // function to change the current page
  const paginate = (pageNumber) => {
    setcurrentPage(pageNumber)
  }

  // filter products based on category
  const [selectedCategory, setselectedCategory] = useState('ALL')
  const munuItem = [...new Set(Data.map((val) => val.category))]
  const filterItem = (curcat) => {
    const newItem = Data.filter((newValue) => {
      return newValue.category === curcat
    })
    setselectedCategory(curcat)
    setProducts(newItem)
  }
  return (
    <div className=''>
      <PageHeader title={'Our Shop Page'} curpage={'page'} />
      <div className="bg-gradient-to-t from-[#BB9B97] min-h-screen">
        <div className=" mx-auto p-4 flex flex-col lg:flex-row justify-between gap-4">
          <div className="w-full lg:w-2/3">
            <article>
              <div className="flex justify-between items-center bg-primary p-3">
                <p className="text-white">View Options</p>
                <div className="flex gap-5 px-2">
                  <button
                    onClick={() => setGridList(true)}
                    className="text-white"
                  >
                    <IoGridSharp className="text-2xl hover:text-gray-800" />
                  </button>
                  <button
                    onClick={() => setGridList(false)}
                    className="text-white text-2xl hover:text-gray-800"
                  >
                    <FaList />
                  </button>
                </div>
              </div>
              <div className="mt-8">
                <ProductCard products={currentProducts} GridList={GridList} />
              </div>
              <div className="my-8">
                <Pagination
                  productPerPage={productPerPage}
                  totalProducrs={Products.length}
                  paginate={paginate}
                  activePage={currentPage}
                />
              </div>
            </article>
          </div>
          <div className="w-full lg:w-1/3 bg-primary p-4 flex flex-col gap-4">
            <Search Products={Products} />
            <ShopCategory
              filterItem={filterItem}
              setSelectedCategory={setselectedCategory}
              munuItem={munuItem}
              setProducts={setProducts}
              selectedCategory={selectedCategory}
            />
            <PopularPost />
            <Tags />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
