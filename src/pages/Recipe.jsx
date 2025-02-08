    import React, { useEffect, useState } from 'react'
    import { getRecipes } from '../api/recipeService'
    import RecipeCard from '../components/RecipeCard'

    const Recipe = () => {

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
    fetchData()
    }, [])
    

    const fetchData = async () => {
        try{
            const data = await getRecipes()
            setRecipes(data)
        } catch(e){
            console.log(e)
        }
    }

    return (
        <div className='w-full p-3 overflow-x-hidden'>
            <h1 className='font-bold text-4xl ps-3 pt-3'>Recipe</h1>
            <div className='mt-5 flex justify-center'>
            <ul className='p-5 mt-4 grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {recipes.map((recipe) => (
                   <li key={recipe.id} className="mb-4">
                        <RecipeCard recipe={recipe} />
                    </li>
                ))}
            </ul>
            </div>
        </div>
       
    )
    }

    export default Recipe


  