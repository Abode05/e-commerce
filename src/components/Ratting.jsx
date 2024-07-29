import { Star } from 'lucide-react'

const Ratting = ({rate}) => {
  return (
    <div>
      <span className="flex  gap-1 text-2xl">
        {[...Array(5)].map((i, index) =>
          index < rate ? (
            <Star
              size={26}
              key={index}
              strokeWidth={0.5}
              className="text-yellow-500 fill-yellow-500 "
            />
          ) : (
            <Star key={index} className="fill-black/60   " strokeWidth={0.5} size={26} />
          )
        )}
      </span>
    </div>
  )
}

export default Ratting