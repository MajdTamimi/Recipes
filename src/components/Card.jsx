import React from 'react'

const Card = ({ recipe }) => {
    return (
        <div className="w-72 mt-5 p-3 bg-[#b1dae3] rounded-lg shadow-2xl" >
            <img src={recipe.image} alt="" className="w-full h-72 rounded-t-lg" />
            <div className="flex items-center justify-between my-4">
                <span className="font-bold text-lg">{recipe.name}</span>
                <span className="text-red-600 font-bold">{recipe.rating}</span>
            </div>
        </div>
    )
}

export default Card