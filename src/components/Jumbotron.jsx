import React from 'react'
import { Link } from 'react-router-dom';

const Jumbotron = () => {
  return (
    <section className='bg-white min-h-screen relative flex items-center'>
        
         <div className='absolute inset-0 flex justify-end'>
            <img  className="object-contain w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-auto max-w-full" src="https://static.vecteezy.com/system/resources/previews/023/742/347/non_2x/green-fresh-salad-isolated-illustration-ai-generative-free-png.png" alt="" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white px-6 md:px-12">
        <div>
          <p className="text-4xl md:text-5xl font-semibold text-green-800">
            Cari resep Makananmu
          </p>
          <p className="text-lg mt-4 text-green-800">
            Temukan berbagai resep sehat dan lezat untuk setiap kesempatan.
          </p>
          <Link to="/recipe"><button className='text-white w-auto p-3 text-2xl mt-7 rounded-xl bg-green-900'>Get Started</button></Link>
          
        </div>
      </div>
      
    </section>
  )
}

export default Jumbotron