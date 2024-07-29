
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay } from 'swiper/modules'
import { sponsorList } from '../../constant/data'


const BrandList = () => {
  return (
    <div>
      <div className="mt-24 bg-gray-100 py-6">
        <div className="container">
          <div className="">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
              modules={[Autoplay]}
              className=" "
            >
              {sponsorList.map((brand, index) => (
                <SwiperSlide key={index} className="flex justify-center">
                  <div className="">
                    <div className="">
                      <img src={brand.imgUrl} alt="" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrandList
