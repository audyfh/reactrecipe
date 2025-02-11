import React, { useEffect, useState } from 'react'
import { getDailyMeal } from '../api/recipeService'
import { useSearchParams } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';

const MealDay = () => {

    const [searchParams] = useSearchParams();
    const ids = searchParams.get('ids')?.split(',') || [];
    const [recipes, setRecipes] = useState([])
    const [isLoading, setisLoading] = useState(false)
    

    const fetchData = async() => {
        setisLoading(true)
        try{
            const response = await getDailyMeal(ids)
            setRecipes(response)
            console.log(response)
            setisLoading(false)
        } catch{

        }
        setisLoading(false)
    }

    useEffect(() => {
      fetchData()
    }, [])
    

  return (
    <div className='w-full p-3 overflow-x-hidden'>
            <h1 className='font-bold text-4xl ps-3 pt-3'>Recipe</h1>
            <div className='mt-5 flex justify-center'>
            <ul className='p-5 mt-4 grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {recipes.map((recipe) => (
                   <li key={recipe.id} className="mb-4">
                        <RecipeCard recipe={recipe}/>
                    </li>
                ))}
            </ul>
            </div>
        </div>
  )
}

export default MealDay