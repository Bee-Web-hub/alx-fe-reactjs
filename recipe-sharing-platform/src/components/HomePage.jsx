import { useState, useEffect } from "react";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  // Load recipes from data.json
  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error("❌ Error loading recipes:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center text-green-600 mb-10">
        🍲 Recipe Sharing Platform
      </h1>

      {/* Recipe Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl hover:scale-105"
          >
            {/* Recipe Image */}
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />

            {/* Recipe Info */}
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                {recipe.title}
              </h2>
              <p className="text-gray-600 mb-4">{recipe.summary}</p>

              {/* View Recipe Button */}
              <a
                href="#"
                className="inline-block bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
              >
                View Recipe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
