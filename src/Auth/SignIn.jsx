import { FaEnvelope, FaEye, FaGoogle, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { FaFacebook, FaLock, FaUser } from 'react-icons/fa6';

const SignIn = () => {
  return (
    <div className="bg-gradient-to-tr  from-[#BB9B97]">
      {' '}
      <div className="font-sans  max-w-4xl flex items-center mx-auto p-4 ">
        <div className="bg-white grid md:grid-cols-3 items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl overflow-hidden">
          <div className="max-md:order-1 flex flex-col justify-center space-y-16 max-md:mt-16 min-h-full 
        bg-primary lg:px-8 px-4 py-4">
            <div>
              <h4 className="text-white text-lg font-semibold">
                Create Your Account
              </h4>
              <p className="text-[13px] text-gray-300 mt-3 leading-relaxed">
                Welcome to our registration page! Get started by creating your
                account.
              </p>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold">
                Simple & Secure Registration
              </h4>
              <p className="text-[13px] text-gray-300 mt-3 leading-relaxed">
                Our registration process is designed to be straightforward and
                secure. We prioritize your privacy and data security.
              </p>
            </div>
          </div>

          <form className="md:col-span-2 w-full py-6 px-6 sm:px-16">
            <div className="mb-6">
              <h3 className="text-gray-800 text-2xl font-bold">
                Create an account
              </h3>
            </div>

            <div className="space-y-4">
              <div className="flex  items-center justify-between">
                {' '}
                <div className="">
                  <label className="text-gray-800 text-sm mb-2 block">
                    Name
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="name"
                      type="text"
                      required
                      className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                      placeholder="Enter name"
                    />
                    <FaUser className="w-4 h-4 absolute right-4 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="text-gray-800 text-sm mb-2 block">
                    Username
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="username"
                      type="text"
                      required
                      className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                      placeholder="Enter username"
                    />
                    <FaUser className="w-4 h-4 absolute right-4 text-gray-400" />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-gray-800 text-sm mb-2 block">
                  Email Id
                </label>
                <div className="relative flex items-center">
                  <input
                    name="email"
                    type="email"
                    required
                    className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                    placeholder="Enter email"
                  />
                  <FaEnvelope className="w-4 h-4 absolute right-4 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="text-gray-800 text-sm mb-2 block">
                  Password
                </label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type="password"
                    required
                    className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                    placeholder="Enter password"
                  />
                  <FaLock className="w-4 h-4 absolute right-4 text-gray-400 cursor-pointer" />
                </div>
              </div>

              <div>
                <label className="text-gray-800 text-sm mb-2 block">
                  Confirm Password
                </label>
                <div className="relative flex items-center">
                  <input
                    name="confirm-password"
                    type="password"
                    required
                    className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                    placeholder="Confirm password"
                  />
                  <FaLock className="w-4 h-4 absolute right-4 text-gray-400 cursor-pointer" />
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-3 block text-sm text-gray-800"
                >
                  I accept the{' '}
                  <a
                    href="javascript:void(0);"
                    className="text-blue-600 font-semibold hover:underline ml-1"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>

            <div className="!mt-12">
              <button
                type="button"
                className="w-full py-3 px-4 tracking-wider text-sm rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none"
              >
                Create an account
              </button>
            </div>

            <div className="flex items-center justify-center mt-6 space-x-4">
              <button className="flex items-center text-sm text-gray-800 bg-white border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50">
                <FaGoogle className="mr-2" /> Sign up with Google
              </button>
              <button className="flex items-center text-sm text-gray-800 bg-white border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50">
                <FaFacebook className="mr-2" /> Sign up with Facebook
              </button>
            </div>

            <p className="text-gray-800 text-sm mt-6 text-center">
              Already have an account?{' '}
              <a
                href="javascript:void(0);"
                className="text-blue-600 font-semibold hover:underline ml-1"
              >
                Login here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
};

export default SignIn;
   