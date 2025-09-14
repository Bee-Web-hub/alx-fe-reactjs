import { Link, useParams } from 'react-router-dom'
import useRecipeStore from './recipeStore'

const RecipeDetails = () => {
  const { id } = useParams()
  const recipe = useRecipeStore((state) => state.recipes.find(r => String(r.id) === id))

  if (!recipe) return <p>Recipe not found.</p>

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <div style={{ marginTop: 16 }}>
        <Link to={`/recipes/${id}/edit`}>Edit</Link> {' | '}
        <Link to="/">Back to list</Link>
      </div>
    </div>
  )
}

export default RecipeDetails
