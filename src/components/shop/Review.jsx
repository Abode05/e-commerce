import { useState } from 'react'
import { ReviewList } from '../../constant/data'
import Ratting from '../Ratting'
const Review = () => {
  const [reviewShow, setreviewShow] = useState(true)
  return (
    <>
      <ul className="my-12 flex gap-8 mx-4">
        <li
          className="px-4 py-2 bg-blue-700 hover:bg-blue-800  text-white font-semibold rounded-md  cursor-pointer  "
          onClick={() => setreviewShow(false)}
        >
          Description
        </li>
        <li
          className="px-4 py-2 bg-black/80 hover:black/90  text-white font-semibold rounded-md  cursor-pointer"
          onClick={() => setreviewShow(true)}
        >
          Reviews
        </li>
      </ul>
      {/* desc &review content */}
      <div className="">
        <div className={`${reviewShow ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col gap-7 ">
            {ReviewList.map((rev, index) => (
              <li key={index} className="flex ">
                <div className="">
                  <img
                    src={rev.imgUrl}
                    alt="ddw"
                    className="w-48  rounded-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-3 ml-4">
                  <div className="flex gap-6 items-center">
                    <a href="#" className="font-bold text-xl  ">
                      {rev.name}
                    </a>
                    <p className="text-gray-500 font-semibold">{rev.date}</p>
                  </div>

                  <div className="text-gray-600 text-lg">
                    <p>{rev.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {/* add review feild */}
          <div className="mt-10 ">
            <div className="">
              <div className="border w-full bg-gray-300 mb-2 "></div>
              <div className="text-3xl px-3 font-serif ">
                <h5>Add Review</h5>
              </div>
              <form action="action" className="flex p-3">
                <div className="flex gap-8 items-center flex-wrap">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name "
                    className="p-2 bg-gray-200 rounded"
                  />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="your email "
                    className="bg-gray-200 p-2 rounded"
                  />
                  <div className="flex items-center text-xl gap-1">
                    <span className='relative -top-0.5 '>your Ratting: </span>
                    <Ratting />
                  </div>
                  <div className="w-full ">
                    <textarea
                      name=""
                      id=""
                      placeholder='please comment here...'
                      className="bg-gray-200 w-96 rounded "
                    ></textarea>
                  </div>
                  <div className="">
                    <button className="px-4 py-2 bg-black/90 hover:bg-black duration-200  text-white text-lg  rounded-md  ">submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* desc */}
        <div className={`${reviewShow ? 'hidden' : 'block'}`}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident,
            maxime ratione quas culpa tempora ad enim atque aspernatur nam
            distinctio?
          </p>
          <div className="flex flex-row-reverse mt-6 ">
            <img src="/assets/images/blog/01.jpg" alt="" />
            <ul className="px-4 text-pretty flex flex-col gap-4 font-semibold">
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                perferendis?
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                perferendis?
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                perferendis?
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                perferendis?
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Review
