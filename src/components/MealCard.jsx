import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../util/custom-swiper.css';
const MealCard = ({day, week}) => {

  const IMG_URL = 'https://img.spoonacular.com/recipes/'


  return (
    <div className="max-w-sm h-100 bg-green-600 rounded-lg shadow-lg p-5">
    <h2 className="text-xl font-bold text-white text-center mb-4">{day || "No Day"}</h2>
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="h-40"
      spaceBetween={10}
    >
      {week[day]?.meals.map((item, index) => (
        <SwiperSlide key={index}>
          <img
            src={`${IMG_URL}${item.id}-312x231.jpg`}
            alt='img'
            className="rounded-md w-full h-40 object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
    <div className="mt-2">
      <p className="text-white font-semibold">Calories: {week[day].nutrients.calories || 0} kcal</p>
      <p className="text-white font-semibold">Protein: {week[day].nutrients.protein || 0}g</p>
      <p className="text-white font-semibold">Carbs: {week[day].nutrients.carbohydrates || 0}g</p>
      <p className="text-white font-semibold">Fat: {week[day].nutrients.fat || 0}g</p>
    </div>
    <button className="mt-5 w-full bg-white text-green-600 font-bold py-2 rounded-lg">
      View Details
    </button>
  </div>
  )
}

export default MealCard