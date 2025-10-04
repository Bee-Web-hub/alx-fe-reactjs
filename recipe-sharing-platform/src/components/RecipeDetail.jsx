import { useState } from "react";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState(""); // ✅ This is required

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !ingredients || !steps) {
      alert("All fields are required!");
      return;
    }

    console.log({
      title,
      ingredients: ingredients.split("\n"),
      steps: steps.split("\n"), // ✅ Use steps here
    });

    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-lg mx-auto bg-white rounded shadow space-y-4">
      <h1 className="text-2xl font-bold mb-4">Add Recipe</h1>

      <div>
        <label className="block font-semibold">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded p-2"
        />
      </div>

      <div>
        <label className="block font-semibold">Ingredients (one per line)</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          rows={4}
          className="w-full border rounded p-2"
        />
      </div>

      <div>
        <label className="block font-semibold">Preparation Steps (one per line)</label>
        <textarea
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          rows={4}
          className="w-full border rounded p-2"
        />
      </div>

      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Submit
      </button>
    </form>
  );
}
