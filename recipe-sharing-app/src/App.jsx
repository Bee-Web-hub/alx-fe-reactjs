// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'

function App() {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>

        {/* Keep AddRecipeForm always visible */}
        <AddRecipeForm />

        {/* Define Routes for navigation */}
        <Routes>
          {/* Home route: shows recipe list */}
          <Route path="/" element={<RecipeList />} />

          {/* Details route: shows single recipe by id */}
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
