import { Link } from "react-router-dom"

const card = ({ image, title, description, link }) => {
  return (
    <div className='flex flex-col gap-5 justify-between items-center text-center 2xl:w-96 xl:w-80 lg:w-80 md:w-[500px] xs:w-72 px-4 pt-12 pb-5 rounded-xl card'>
      <img className='xl:w-56 w-36' src={image} alt="card-image" />
      <h1>{title}</h1>
      <p>{description}</p>
      <Link className="bg-[#FFD700] px-8 py-3 rounded-full" to={link}>Baca Selengkapanya</Link>
    </div>
  )
}

export default card