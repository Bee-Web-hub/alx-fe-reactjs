import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useRecipeStore from './recipeStore'

const EditRecipeForm = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const recipe = useRecipeStore((s) => s.recipes.find(r => String(r.id) === id))
  const updateRecipe = useRecipeStore((s) => s.updateRecipe)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title)
      setDescription(recipe.description)
    }
  }, [recipe])

  if (!recipe) return <p>Recipe not found.</p>

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim()) return
    updateRecipe(id, { title: title.trim(), description: description.trim() })
    navigate(`/recipes/${id}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <button type="submit">Save</button>
      <button type="button" onClick={() => navigate(-1)}>Cancel</button>
    </form>
  )
}

export default EditRecipeForm
