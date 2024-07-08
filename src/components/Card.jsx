import { FaArrowRight } from "react-icons/fa6";
import { IoIosTimer } from "react-icons/io";
import { useNavigate } from 'react-router-dom'


const Card = ({ recipe }) => {
    const nav = useNavigate()
    const handlDetails = () => {
        nav(`/recipes/details/${recipe.id}`)
    }
    return (
        <div className="w-1/4 rounded-lg shadow-2xl relative min-h-100" >
            <img src={recipe.image} alt="" className="h-72 rounded-lg w-full" />
            <div className="flex-col mx-2 pb-3 pt-3">
                <span className="font-bold text-xl">{recipe.name}</span>
                <div className="flex items-center absolute right-5 bottom-20">
                    <svg className="w-6 h-6 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <p className="text-base font-bold text-gray-900 dark:text-white">{recipe.rating} /5</p>
                </div >
                <p> <span className='font-bold'>cuisine:</span> {recipe.cuisine}</p>
                <p> <span className='font-bold'>difficulty:</span> {recipe.difficulty}</p>
                <div className='flex gap-1'>
                    <IoIosTimer className='w-5 h-6' />
                    <span>{recipe.cookTimeMinutes + recipe.prepTimeMinutes} min</span>
                </div>
                <button onClick={handlDetails} className="bg-[rgb(228,89,0)] text-white font-semibold text-base py-2 px-4 rounded-xl inline-flex items-center absolute right-4 bottom-4 focus:outline-none hover:bg-[#C24000] ">
                    <span className="mr-2">more details</span>
                    <FaArrowRight />
                </button>
            </div>
        </div>
    )
}

export default Card