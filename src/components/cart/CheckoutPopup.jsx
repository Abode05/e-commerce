import  { useState } from 'react'

const CheckoutPopup = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('visa')

  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 mt-4">
        <h2 className="text-xl font-semibold mb-4">
          Select Your Payment Method
        </h2>
        <div className="flex justify-around mb-4">
          <button
            className={`px-4 py-2 ${
              activeTab === 'visa' ? 'border-b-2 border-blue-500' : ''
            }`}
            onClick={() => handleTabChange('visa')}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
              alt="Visa"
              className="h-6"
            />
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === 'paypal' ? 'border-b-2 border-blue-500' : ''
            }`}
            onClick={() => handleTabChange('paypal')}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              alt="PayPal"
              className="h-6"
            />
          </button>
        </div>
        {activeTab === 'paypal' ? (
          <div>
            <h3 className="text-xl font-medium mb-2"><span className='text-blue-700  '>PayPal</span>  Account Info:</h3>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border rounded mb-2"
            />
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border rounded mb-2"
            />
            <input
              type="text"
              placeholder="Extra Info"
              className="w-full p-2 border rounded mb-4"
            />
            <div className="flex  gap-2 items-center mt-4 ">
              <button className="w-full bg-blue-600 duration-100 text-white py-2 rounded hover:bg-blue-700">
                Add Visa
              </button>
              <button
                className="  bg-red-500 text-white px-4 py-2 duration-100 rounded w-full hover:bg-red-600"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h3 className="text-lg font-medium mb-2">Visa Account Info</h3>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border rounded mb-2"
            />
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border rounded mb-2"
            />
            <input
              type="text"
              placeholder="Extra Info"
              className="w-full p-2 border rounded mb-4"
            />
            <div className="flex  gap-2 items-center mt-4 ">
              <button className="w-full bg-blue-600 duration-100 text-white py-2 rounded hover:bg-blue-700">
                Add Visa
              </button>
              <button
                className="  bg-red-500 text-white px-4 py-2 duration-100 rounded w-full hover:bg-red-600"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CheckoutPopup
