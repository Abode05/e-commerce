const Register = () => {
  return (
    <div className="relative flex items-center justify-between mt-12">
      <div className="relative h-96 w-full">
        <img
          src="/assets/images/bg/14.jpg"
          alt=""
          className="absolute w-full h-96 -z-0 object-cover"
        />
        <div className="relative flex flex-col md:flex-row justify-between bg-primary/60 h-96 p-8">
          <div className="text-white max-w-lg w-full text-center md:text-left relative md:left-6 md:top-8">
            <h2 className="text-blue-800 font-bold">SAVE THE DAY</h2>
            <h1 className="text-5xl font-bold mt-2">
              Join our Day Long Free Workshop for
            </h1>
            <h1 className="text-4xl font-bold text-blue-800 mt-1">
              Advance Mastering On Sales
            </h1>
            <p className="mt-3 text-lg font-bold text-blue-900">
              Limited Time Offer! Hurry Up
            </p>
          </div>
          <div className="bg-gradient-to-t from-transparent to-white py-6 rounded-lg shadow-lg max-w-md w-full lg:w-[25rem] mt-8 md:mt-0 md:ml-8">
            <h2 className="font-bold text-xl mb-4 text-center">Register Now</h2>
            <form className="flex flex-col gap-5 px-6">
              <input
                type="text"
                placeholder="Username"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:text-gray-600 font-semibold"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:text-gray-600 font-semibold"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:text-gray-600 font-semibold"
              />
              <button
                type="submit"
                className="w-1/2 mx-auto bg-white/30 rounded-md text-white p-2 font-semibold text-lg hover:bg-blue-800/80 transition duration-200"
              >
                Register Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
