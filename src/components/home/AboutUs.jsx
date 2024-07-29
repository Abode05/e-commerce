import { countList } from '../../constant/data'

const AboutUs = () => {
  return (
    <section className="relative pt-12 md:py-24 overflow-hidden">
      <div className="hidden md:block absolute top-0 right-0 h-full w-3/12 lg:w-full lg:max-w-sm xl:max-w-md bg-violet-800">
        <div className="">
          <img
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 z-10 lg:w-72 xl:w-auto"
            src="/assets/images/01.png"
            alt=""
          />
        </div>
        <img
          className="w-full h-full object-cover"
          src="/assets/images/bg/04.jpg"
          alt=""
        />
      </div>

      <div className="relative px-8 md:px-12 lg:px-16 mt-64 md:mt-4">
        <div className="max-w-md xl:max-w-2xl mx-auto md:mx-0">
          <div className="mb-12">
            <h2 className="font-heading text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-medium text-white tracking-tight mb-4">
              About Us
            </h2>
            <p className="max-w-xl text-xl text-gray-300 leading-relaxed tracking-tight mb-6">
              Casper provides instant support, and boosts conversions like never
              before. Join thousands of satisfied customers who have already
              elevated their online presence with our AI chat assistant.
            </p>
            <a
              className="inline-flex items-center text-sm font-medium text-violet-500 hover:text-white uppercase"
              href="#"
            >
              <span className="mr-2">GET TO KNOW US</span>
            </a>
          </div>
          <div className="max-w-xl">
            <div className="flex flex-wrap -mx-4 -mb-8">
              {countList.map((item, index) => (
                <div key={index} className="w-full sm:w-1/2 px-4 mb-8">
                  <div className="relative p-6 rounded-3xl overflow-hidden bg-gray-800 bg-opacity-50 hover:bg-opacity-75 transition duration-150">
                    <div className="absolute top-0 left-0 w-full h-full backdrop-filter backdrop-blur-md bg-gray-700 bg-opacity-20 group-hover:bg-violet-400 group-hover:bg-opacity-100 transition duration-150"></div>
                    <div className="relative">
                      <span className="block text-4xl xl:text-5xl font-medium text-white">
                        {item.count}
                      </span>
                      <span className="block text-xl tracking-tight text-gray-400">
                        {item.text}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  )
}

export default AboutUs
