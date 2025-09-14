import { create } from 'zustand'

const useRecipeStore = create((set) => ({
  recipes: [],

  // ✅ already in your code
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  setRecipes: (recipes) => set({ recipes }),

  // ✅ NEW: update a recipe by id
  updateRecipe: (id, updates) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        String(r.id) === String(id) ? { ...r, ...updates } : r
      ),
    })),

  // ✅ NEW: delete a recipe by id
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => String(r.id) !== String(id)),
    })),
}))

export default useRecipeStore
