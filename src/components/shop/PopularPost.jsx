import { Link } from 'react-router-dom'
import { postList } from '../../constant/data'

const PopularPost = () => {
  return (
    <div className="mt-4 font-mono">
      <div className="mx-2 ">
        <h5 className="text-white font-bold font-mono text-3xl  ">
          Most Popular Post
        </h5>
      </div>
      <ul className="mt-4  w-full   ">
        {postList.map((post, index) => (
          <li key={index} className=" w-full ">
            <div className="flex my-2 gap-2 ">
              {' '}
              <div className=" ">
                <Link to={`/blog/${post.id}`}>
                  <img
                    src={post.imgUrl}
                    alt="j"
                    className="w-[200px] h-32 object-cover "
                  />
                </Link>
              </div>
              <div className="    ">
                <Link to={`/blog/${post.id}`} className="font-bold  text-xl">
                  {post.title}
                </Link>
                <p> {post.date}</p>
              </div>
            </div>

            <hr className="text-white w-full" />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PopularPost
