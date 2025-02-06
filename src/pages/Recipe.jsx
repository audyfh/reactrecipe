    import React, { useEffect, useState } from 'react'
    import { getRecipes } from '../api/recipeService'

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
        <div>
            <h1>Recipe</h1>
            <ul>
                {recipes.map((recipe) => (
                    <li key={recipe.id}>
                        <p className='text-black'>{recipe.title}</p>
                    </li>
                ))}
            </ul>
        </div>
       
    )
    }

    export default Recipe