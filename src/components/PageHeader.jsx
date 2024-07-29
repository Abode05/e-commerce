import { Link } from 'react-router-dom'

const PageHeader = ({ title, curpage }) => {
  return (
    <div className="bg-black">
      {' '}
      <div className="bg-pageHead   -z-30 h-96 flex justify-center items-center pt-12   ">
        <div className="container text-center   w-full">
          <h2 className="text-5xl font-bold mb-4">{title}</h2>
          <div className="flex justify-center ">
            <ol className="flex gap-1 font-semibold">
              <li>
                <Link to={'/'}> Home</Link>
              </li>
              /
              <li aria-current="page" className="text-gray-400">
                {curpage}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageHeader
