import { tagsList } from '../constant/data'

const Tags = () => {
  return (
    <div>
      <div className="mx-2 text-2xl font-bold">
        <h1>Our Tags</h1>
      </div>
      <div className="flex flex-wrap gap-5 mt-4 container">
        {tagsList.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-md px-4  py-2
         hover:bg-slate-200 text-xl duration-300 "
          >
            <a href={item.link}>{item.text}</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tags
