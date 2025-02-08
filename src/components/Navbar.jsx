import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {

const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white border-gray-200 shadow sticky top-0 z-10">
      <div className="max-w-full flex items-center justify-between p-4 mx-auto">

        <a href="/" className="flex items-center space-x-2">
          <img src="/cooking.png" className="h-8" alt="Logo" />
          <span className="text-lg font-semibold text-gray-800">CariResep</span>
        </a>
        
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-green-800 hover:text-green-600">Home</Link>
          <Link to="/recipe" className="text-green-800 hover:text-green-600">Recipe</Link>
          <Link to="/meal-plan" className="text-green-800 hover:text-green-600">Meal Plan</Link>
        </div>
        
        <div className="hidden md:flex space-x-6">
          <a href="/login" className="text-gray-600 hover:text-blue-500 font-medium">Login</a>
          <a href="/register" className="text-gray-600 hover:text-blue-500 font-medium">Register</a>
        </div>

        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <Link to="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Home</Link>
          <Link to="/recipe" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Recipe</Link>
          <Link to="/meal-plan" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Meal Plan</Link>
          <div className="border-t my-2"></div>
          <a href="/login" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Login</a>
          <a href="/register" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Register</a>
        </div>
      )}
    </nav>
  )
}

export default Navbar