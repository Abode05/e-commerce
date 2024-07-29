import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import PageHeader from '../../components/PageHeader'
import PopularPost from '../../components/shop/PopularPost'
import Tags from '../../components/Tags'
import Review from '../../components/shop/Review'
import ProductDisplay from '../../components/shop/ProductDisplay'

const SinglePageProduct = () => {
  const [product, setProduct] = useState([])
  const { id } = useParams()

  useEffect(() => {
    fetch('/public/products.json')
      .then((res) => res.json())
      .then((data) => setProduct(data))
  }, [])

  const result = product.filter((p) => p.id === id)
  console.log(result)

  return (
    <div className="relative">
      <PageHeader title={'Our Shop SinglePage'} curpage={'SingleProduct'} />
      <div className="bg-gradient-to-bl from-[#BB9B97]">
        <div className="flex flex-col lg:flex-row">
          <div className="shadow w-full lg:w-2/3 p-4">
            <article>
              <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                  <div className="relative">
                    <Swiper
                      className="mySwiper"
                      spaceBetween={30}
                      slidesPerView={1}
                      loop={true}
                      autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                      }}
                      modules={{ Autoplay }}
                      navigation={{
                        prevEl: '.pro-single-prev',
                        nextEl: '.pro-single-next',
                      }}
                    >
                      {result.map((detail, index) => (
                        <SwiperSlide key={index}>
                          <div className="relative">
                            <img
                              src={detail.img}
                              alt=""
                              className="w-full h-full object-cover rounded"
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <div className="pro-single-prev absolute left-0 bottom-1/2 transform translate-y-1/2 bg-black/20 hover:bg-black/40 cursor-pointer duration-200 px-1 py-4 z-10">
                      <MdKeyboardArrowLeft />
                    </div>
                    <div className="pro-single-next absolute right-0 bottom-1/2 transform translate-y-1/2 bg-black/20 hover:bg-black/40 cursor-pointer duration-200 px-1 py-4 z-10">
                      <MdKeyboardArrowRight />
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div>
                    {result.map((item) => (
                      <ProductDisplay key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <Review />
              </div>
            </article>
          </div>
          <div className="w-full lg:w-1/3 flex flex-col gap-4 p-4">
            <aside>
              <PopularPost />
              <Tags />
            </aside>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePageProduct
