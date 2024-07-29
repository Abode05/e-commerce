import {
 
  FaEnvelope,

  FaGoogle,

} from 'react-icons/fa'
import { FaEye, FaFacebookF, FaTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
const LogIn = () => {
  return (
    <div className="flex justify-center items-center font-sans h-full min-h-screen p-4 
    bg-gradient-to-tr  from-[#BB9B97]   ">
      <div className="max-w-md w-full mx-auto">
        <form className="bg-opacity-70 bg-white rounded-2xl p-6 shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)]">
          <div className="mb-12">
            <h3 className="text-gray-800 text-3xl font-extrabold text-center ">Login</h3>
          </div>

          <div>
            <div className="relative flex items-center">
              <input
                name="email"
                type="text"
                required
                className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
                placeholder="Enter email"
              />
              <FaEnvelope className="w-[18px] h-[18px] absolute right-2" />
            </div>
          </div>

          <div className="mt-6">
            <div className="relative flex items-center">
              <input
                name="password"
                type="password"
                required
                className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
                placeholder="Enter password"
              />
              <FaEye className="w-[18px] h-[18px] absolute right-2 cursor-pointer" />
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 shrink-0 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-3 block text-sm text-gray-800"
              >
                Remember me
              </label>
            </div>
            <div>
              <a
                href="javascript:void(0);"
                className="text-blue-600 text-sm font-semibold hover:underline"
              >
                Forgot Password?
              </a>
            </div>
          </div>

          <div className="mt-12">
            <button
              type="button"
              className="w-full py-2.5 px-4 text-sm font-semibold tracking-wider rounded-full text-white bg-gray-800 hover:bg-[#222] focus:outline-none"
            >
              Sign in
            </button>
            <p className="text-gray-800 text-sm text-center mt-6">
              Don't have an account
              <Link
                to={'/signin'}
                className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
              >
                Register here
              </Link>
            </p>
          </div>

          <hr className="my-6 border-gray-400" />

          <div className="space-x-8 flex justify-center">
            <button type="button" className="border-none outline-none">
              <FaGoogle size={30} className="inline text-[#aa3b3b]" />
            </button>
            <button type="button" className="border-none outline-none">
              <FaTwitter size={30} className="inline text-[#1DA1F2]" />
            </button>
            <button type="button" className="border-none outline-none">
              <FaFacebookF size={30} className="inline text-[#1877F2]" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LogIn
