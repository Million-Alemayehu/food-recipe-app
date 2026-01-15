import { recipes as initialRecipes } from "../data";
import RecipeCard from "../components/RecipeCard";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [maxTime, setMaxTime] = useState(60);

  const filteredRecipes = initialRecipes.filter(r => {
    const matchesCategory = category === "All" || r.category === category;
    const matchesSearch = r.title.toLowerCase().includes(search.toLowerCase()) 
      || r.ingredients.some(i => i.toLowerCase().includes(search.toLowerCase()));
    const matchesTime = r.cook_time <= maxTime;
    return matchesCategory && matchesSearch && matchesTime;
  });

  return (
    <div className="p-6 bg-gradient-to-b from-yellow-50 to-white min-h-screen">
      {/* Hero */}
      <div className="text-center mb-8 space-y-3">
        <h1 className="text-5xl font-extrabold text-yellow-600 drop-shadow-lg">🍽️ Flavorify Recipes</h1>
        <p className="text-gray-600 text-lg">Browse, save, and create your favorite dishes</p>
        <input 
          type="text"
          placeholder="Search by title or ingredient..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="mt-4 w-full max-w-md p-3 border border-gray-300 rounded-full shadow focus:ring-2 focus:ring-yellow-400 transition"
        />
        <input 
          type="number"
          placeholder="Max cooking time (min)"
          value={maxTime}
          onChange={e => setMaxTime(Number(e.target.value))}
          className="mt-2 w-40 p-2 border border-gray-300 rounded-full shadow focus:ring-2 focus:ring-yellow-400 transition"
        />
      </div>

      {/* Categories */}
      <div className="flex gap-3 mb-6 overflow-x-auto py-2">
        {["All", "Vegan", "Breakfast", "Dinner", "Dessert"].map(cat => (
          <button 
            key={cat} 
            onClick={() => setCategory(cat)}
            className={`px-5 py-2 rounded-full shadow font-semibold text-sm transition ${
              category === cat 
                ? "bg-yellow-400 text-white shadow-lg hover:bg-yellow-500" 
                : "bg-white text-gray-700 hover:bg-yellow-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Recipes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredRecipes.map(r => <RecipeCard key={r.id} recipe={r} />)}
      </div>
    </div>
  );
}
