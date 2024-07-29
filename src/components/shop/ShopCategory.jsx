/* eslint-disable react/prop-types */
import Data from '../../../public/products.json'
const ShopCategory = ({
  filterItem,
  setSelectedCategory,
  munuItem,
  setProducts,
  selectedCategory,
}) => {
  return (
    <>
      <div className="text-3xl mt-4">
        <h4 className="text-white font-bold font-mono">All category</h4>
      </div>
      <div className="mt-2 font-semibold font-sans text-lg">
        <button
          className={`m-2 px-4 py-2 rounded-md ${
            selectedCategory === 'ALL'
              ? 'bg-gray-400 text-gray-50  '
              : 'bg-slate-50'
          }`}
          onClick={() => {
            setProducts(Data)
            setSelectedCategory('ALL')
          }}
        >
          ALL
        </button>
        {munuItem.map((val, index) => {
          return (
            <button
              key={index}
              className={`m-2 px-4 py-2 rounded-md ${
                selectedCategory === val
                  ? 'bg-gray-400 text-gray-50 '
                  : 'bg-slate-50'
              }`}
              onClick={() => {
                filterItem(val)
                setSelectedCategory(val)
              }}
            >
              {val}
            </button>
          )
        })}
      </div>
    </>
  )
}

export default ShopCategory
