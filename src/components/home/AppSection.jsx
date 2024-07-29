import { Link } from 'react-router-dom'

const AppSection = () => {
  return (
    <div className="container  text-center flex flex-col justify-center items-center gap-6 mt-16">
   
      <h2 className="text-5xl">buy any think ,any where</h2>
      <p className="max-w-md w-full text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto,
        rem.
      </p>
      <div className="flex gap-4">
        <Link>
          <img src="/assets/images/app/01.jpg" alt="" />
        </Link>
        <Link>
          <img src="/assets/images/app/02.jpg" alt="" />
        </Link>
      </div>
    </div>
  )
}

export default AppSection
