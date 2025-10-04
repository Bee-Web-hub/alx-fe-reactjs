import { Link } from "react-router-dom";
import data from "../data.json"; // your JSON in src

export default function HomePage() {
  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-center text-blue-500 mb-10">
        Recipe Sharing Platform
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((recipe) => (
          <Link
            to={`/recipe/${recipe.id}`}
            key={recipe.id}
            className="block bg-white rounded-xl shadow-md p-4 hover:shadow-lg transform hover:scale-105 transition"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <h2 className="text-xl font-semibold">{recipe.title}</h2>
            <p className="text-gray-600">{recipe.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
