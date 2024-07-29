import { FaBuilding, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"
import PageHeader from "../../components/PageHeader"

const About = () => {
  return (
    <>
      <PageHeader title={'about us'} curpage={'about'} />

      <div className=" py-12 bg-gradient-to-b  from-[#BB9B97]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              About Us
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl">
              We are a team of passionate people
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-800 lg:mx-auto">
              Our mission is to deliver the best products and services to our
              customers.
            </p>
          </div>

          <div className="mb-10">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 p-4">
                <img
                  src="/assets/images/blog/single/01.jpg"
                  alt="Our Team"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="lg:w-1/2 p-4">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Our Team
                </h3>
                <p className="mt-2 text-lg text-gray-600">
                  We have a diverse team of professionals dedicated to making a
                  difference. Our team works together to design and deliver the
                  best solutions for our clients.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 p-4 lg:order-2">
                <img
                  src="/assets/images/blog/single/01.jpg"
                  alt="Our Mission"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="lg:w-1/2 p-4 lg:order-1">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Our Mission
                </h3>
                <p className="mt-2 text-gray-600 text-lg">
                  Our mission is to innovate and lead the market with our
                  cutting-edge products. We aim to provide exceptional value and
                  exceed customer expectations in every project we undertake.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-3xl font-semibold text-gray-900">
              Our Achievements
            </h3>
            <div className="flex flex-wrap justify-center mt-6">
              <div className="p-4 w-1/2 md:w-1/4 lg:w-1/6">
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <div className="text-indigo-600 text-3xl font-bold">10+</div>
                  <div className="text-gray-600 mt-2">Years in Business</div>
                </div>
              </div>
              <div className="p-4 w-1/2 md:w-1/4 lg:w-1/6">
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <div className="text-indigo-600 text-3xl font-bold">200+</div>
                  <div className="text-gray-600 mt-2">Projects Completed</div>
                </div>
              </div>
              <div className="p-4 w-1/2 md:w-1/4 lg:w-1/6">
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <div className="text-indigo-600 text-3xl font-bold">150+</div>
                  <div className="text-gray-600 mt-2">Happy Clients</div>
                </div>
              </div>
              <div className="p-4 w-1/2 md:w-1/4 lg:w-1/6">
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <div className="text-indigo-600 text-3xl font-bold">50+</div>
                  <div className="text-gray-600 mt-2">Awards Won</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-3xl font-semibold text-center text-gray-900">
              Meet Our Team
            </h3>
            <div className="flex flex-wrap justify-center mt-6">
              <div className="p-4 w-full md:w-1/2 lg:w-1/4">
                <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                  <img
                    src="/assets/images/blog/single/01.jpg"
                    alt="CEO"
                    className="w-32 h-32 rounded-full mx-auto mb-4"
                  />
                  <h4 className="text-xl font-semibold text-gray-900">
                    John Doe
                  </h4>
                  <p className="text-gray-600">CEO</p>
                </div>
              </div>
              <div className="p-4 w-full md:w-1/2 lg:w-1/4">
                <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                  <img
                    src="/assets/images/blog/single/01.jpg"
                    alt="Team Member 1"
                    className="w-32 h-32 rounded-full mx-auto mb-4"
                  />
                  <h4 className="text-xl font-semibold text-gray-900">
                    Jane Smith
                  </h4>
                  <p className="text-gray-600">Lead Designer</p>
                </div>
              </div>
              <div className="p-4 w-full md:w-1/2 lg:w-1/4">
                <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                  <img
                    src="/assets/images/blog/single/01.jpg"
                    alt="Team Member 2"
                    className="w-32 h-32 rounded-full mx-auto mb-4"
                  />
                  <h4 className="text-xl font-semibold text-gray-900">
                    Michael Brown
                  </h4>
                  <p className="text-gray-500 fon-bold">Head of Development</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-around  py-10">
            <div className="text-center bg-gray-50 shadow rounded p-4 ">
              <div className="bg-gray-200 p-3 rounded-full inline-block">
                <FaBuilding className="text-gray-600 text-2xl" />
              </div>
              <h3 className="text-lg font-semibold mt-3">
                Company information:
              </h3>
              <p className="text-gray-600">Flowbite LLC</p>
              <p className="text-gray-600">Tax id: USXXXXXX</p>
            </div>
            <div className="text-center bg-gray-50 shadow rounded p-4 max-w-xl">
              <div className="bg-gray-100 p-3 rounded-full inline-block">
                <FaMapMarkerAlt className="text-gray-600 text-2xl" />
              </div>
              <h3 className="text-lg font-semibold mt-3">Address:</h3>
              <p className="text-gray-600">SILVER LAKE, United States</p>
              <p className="text-gray-600">1941 Late Avenue</p>
              <p className="text-gray-600">Zip Code/Postal code: 03875</p>
            </div>
            <div className="text-center bg-gray-50 shadow rounded  p-2 max-w-xs ">
              <div className="bg-gray-100 p-3 rounded-full inline-block">
                <FaPhoneAlt className="text-gray-600 text-2xl" />
              </div>
              <h3 className="text-lg font-semibold mt-3">Contact us:</h3>
              <p className="text-gray-600">
                Email us for general queries, including marketing and
                partnership opportunities.
              </p>
              <p className="text-gray-600">hello@flowbite.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
