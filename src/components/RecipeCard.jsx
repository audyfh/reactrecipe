import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = ({recipe}) => {
  return (
    <div className="max-w-sm h-90 bg-green-600 rounded-lg flex flex-col justify-between">
    <a href="">
        <img className="rounded-t-lg" src={recipe.image} alt="" />
    </a>
    <div className="p-5 flex-1">
        <a
            className="mb-2 text-lg truncate font-bold text-white text-center block"
            href=""
        >
            {recipe.title}
        </a>
    </div>
    <div className="flex mt-auto p-5">
        <Link to={`/recipe/${recipe.id}`}
            className="px-3 py-2 text-sm font-medium text-center text-orange-400 bg-white rounded-lg mx-auto"
            
        >
            Lets Cook
        </Link>
    </div>
</div>
  )
}

export default RecipeCard