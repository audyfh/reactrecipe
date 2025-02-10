import React, { useEffect, useState } from 'react'
import { getMealPlan } from '../api/recipeService';
import MealCard from '../components/MealCard';


const MealPlan = () => {

  const [recipe, setrecipe] = useState({})
  const [isLoading, setisLoading] = useState(false)

  const fetchData = async() => {
    setisLoading(true)
    const data = await getMealPlan()

    setrecipe(data);
    setisLoading(false)
  }
  useEffect(() => {
    fetchData()
  }, []);
  

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="text-green-600 text-lg font-semibold">Loading...</div>
      </div>
    );
  }

  return (
    <section className="p-5">
      <div className='flex justify-center p-2'>
        <h1 className='text-4xl font-bold'>Your Weekly Meals!</h1>
      </div>
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-5'>
        { Object.keys(recipe).map((day) => (
          <li key={day}>
              <MealCard day ={day} week={recipe} />
          </li>
        ))}
      </ul>
    </section>
  );
   
}

export default MealPlan