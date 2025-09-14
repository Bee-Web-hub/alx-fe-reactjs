import { Link } from 'react-router-dom'
import useRecipeStore from './recipeStore'

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes)
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe)
  const updateRecipe = useRecipeStore((state) => state.updateRecipe)

  const handleEdit = (id) => {
    const newTitle = prompt('Enter new title:')
    const newDescription = prompt('Enter new description:')
    if (newTitle && newDescription) {
      updateRecipe(id, { title: newTitle, description: newDescription })
    }
  }

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes yet. Add one above!</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id}>
            {/* Make title clickable to go to details */}
            <h3>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>

            {/* Edit & Delete buttons */}
            <button onClick={() => handleEdit(recipe.id)}>Edit</button>
            <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  )
}

export default RecipeList
