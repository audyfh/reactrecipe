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

export const getRecipeId = async (id) => {
    try{
        const response = await fetch(`${BASE_URL}${id}/information?apiKey=${API_KEY}`)
        if(!response.ok) throw new Error('Failed get recipes')
        const data = await response.json()
        return data
    } catch(e){

    }
}

export const getMealPlan = async () => {
    try {
        const response = await fetch (`https://api.spoonacular.com/mealplanner/generate?apiKey=${API_KEY}`)
        if(!response.ok) throw new Error('Failed get meal plan')
        const data = await response.json()
        return data.week
    } catch(e) {

    }
}

export const getDailyMeal = async (ids) => {

    const idsParam = ids.join(',');
    try {
        const response = await fetch(`${BASE_URL}informationBulk?apiKey=${API_KEY}&ids=${idsParam}`)
        const data = await response.json()
        return data
    } catch (e) {
        
    }
}