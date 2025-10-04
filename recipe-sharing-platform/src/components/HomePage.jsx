import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  // Load recipes from JSON dynamically
  useEffect(() => {
    fetch("/src/data.json") // Fetch from src folder
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error("Error loading recipes:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-center text-green-600 mb-10">
        🍲 Recipe Sharing Platform
      </h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <Link
            to={`/recipe/${recipe.id}`}
            key={recipe.id}
            className="block bg-white rounded-xl shadow-md p-4 hover:shadow-lg transform hover:scale-105 transition"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="rounded-md mb-3 w-full h-40 object-cover"
            />
            <h2 className="text-xl font-semibold">{recipe.title}</h2>
            <p className="text-gray-600">{recipe.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
