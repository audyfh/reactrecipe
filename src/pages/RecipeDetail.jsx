import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getRecipeId } from '../api/recipeService'
import { removeHTMLTags } from '../assets/Util/Util'
    
const RecipeDetail = () => {

    const{id} = useParams()
    const [recipe, setRecipe] = useState({})
    const [ingredients, setingredients] = useState([])
    const [instruction, setinstruction] = useState([])
   

    const fetchData = async () => {
        try{
            const data = await getRecipeId(id)
            setRecipe(data)
            setingredients(data.extendedIngredients)
            setinstruction(data.analyzedInstructions)
            console.log(data.analyzedInstructions)
        } catch(e){

        }
    }

    useEffect(() => {
      fetchData()
    }, [])
    

  return (
    <div className='h-full p-3 flex flex-col justify-between'>
        <div className='flex justify-center'>
            <img className='h-45 md:h-90  rounded-2xl' src={recipe.image} alt="" />  
        </div> 
        <div className='mt-10 text-3xl font-bold'>
            <h1>{recipe.title}</h1>
        </div>
        <div className='p-4'>
            <p className='text-justify overflow-clip indent-8 line-clamp-4'>{removeHTMLTags(recipe.summary)}</p>
        </div>
        <div>
            <h2 className='mt-5 text-2xl font-bold'>Ingredients</h2>
            <p className='p-3'>{`${recipe.servings} - Servings`}</p>
            <ul className='p-3 grid grid-cols-2'>
                {ingredients.map((i) => (
                    <li key={i.id}>
                        <p>{`${i.name} -${i.amount} ${i.unit}`}</p>
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <h2 className='mt-5 text-2xl font-bold'>Instruction</h2>
            <ul className='p-3'>
                {instruction.map((i) =>(
                    <li className='mb-3'>
                        {i.steps.map((j) =>(
                            <p className='mb-3'>{j.step}</p>
                        ))}
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default RecipeDetail