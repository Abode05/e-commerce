import { Link } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import blogList from '../../constant/BlogData'
import Icons from '../../components/Icons'
import { CalendarDays, MessageCircle } from 'lucide-react'

const Blog = () => {
  return (
    <div className="">
      <PageHeader title={'Blog Page'} curpage={'Blog'} />
      <div className="font-sans bg-gradient-to-t   from-[#c2a7a4]">
        <div className="container ">
          <div className="flex flex-wrap justify-center gap-4   ">
            {blogList.map((blog, index) => (
              <div key={index} className="  mt-8 mb-2">
                <div
                  className="flex flex-col   justify-between
                   max-w-sm rounded  bg-white h-[30em]  "
                >
                  <div className="">
                    <Link to={`/blog/${blog.id}`}>
                      {' '}
                      <img
                        src={blog.imgUrl}
                        alt={blog.imgAlt}
                        className="w-96 h-56 object-cover  "
                      />
                    </Link>
                  </div>
                  <div className=" text-lg flex flex-col gap-4 h-52  p-2">
                    <Link to={`/blog/${blog.id}`}>
                      <h4 className="text-xl font-bold">{blog.title}</h4>
                    </Link>
                    <div className="">
                      <ul className="flex gap-4 items-center">
                        {blog.metaList.map((val, index) => (
                          <li key={index} className="flex gap-1">
                            {index == 0 ? (
                              <Icons name={'User'} />
                            ) : (
                              <Icons name={'Calendar'} />
                            )}

                            {val.text}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-gray-700 font-medium ">{blog.desc}</p>
                  </div>
                  <div className="border-b border-gray-800 h-1 w-full"></div>
                  <div className=" flex justify-between w-full p-2">
                    <div className="">
                      <Link
                        to={`/blog/${blog.id}`}
                        className="text-blue-700 hover:underline text-lg font-medium"
                      >
                        {blog.btnText}
                      </Link>
                    </div>
                    <div className="relative flex gap-1">
                      <p className='text-lg font-semibold' >comments:</p>
                      <div className="relative">
                        {' '}
                        <MessageCircle size={28} />
                        <p className='absolute -top-1 -right-1 font-bold  px-1 bg-blue-600 text-white  text-xs rounded-full   '>{blog.commentCount}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
