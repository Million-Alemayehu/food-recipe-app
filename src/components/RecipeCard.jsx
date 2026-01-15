import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  return (
    <Link to={`/recipe/${recipe.id}`}>
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer transform transition hover:scale-105 hover:shadow-2xl">
        <img 
          src={recipe.featured_image} 
          alt={recipe.title}
          className="w-full h-56 object-cover"
        />
        <div className="p-5">
          <h3 className="font-bold text-xl text-gray-800 truncate">{recipe.title}</h3>
          <p className="text-sm text-gray-500 mt-1">{recipe.category} • ⏱ {recipe.cook_time} min</p>
          <div className="flex justify-between items-center mt-3">
            <span className="text-red-500 font-semibold">❤️ {recipe.likes}</span>
            <button className="bg-yellow-400 text-white px-3 py-1 rounded-full text-sm shadow hover:bg-yellow-500 transition">
              View
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
