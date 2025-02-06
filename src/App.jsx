import './index.css'
import Navbar from './components/Navbar'
import { Router, Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import Recipe from './pages/Recipe'
import MealPlan from './pages/MealPlan'

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe" element={<Recipe />} />
      <Route path="/meal-plan" element={<MealPlan />} />
    </Routes>
  </>
  )
}

export default App
