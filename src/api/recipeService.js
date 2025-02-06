const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = 'https://api.spoonacular.com/recipes/'

export const getRecipes = async () => {
    try{
        const response = await fetch(`${BASE_URL}random?apiKey=${API_KEY}&number=10`)
        if(!response.ok) throw new Error('Failed get recipes')
        const data = await response.json()
        return data.recipes
    } catch (e) {
        
    }
}