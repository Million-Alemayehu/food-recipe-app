import { useParams } from "react-router-dom";
import { recipes as initialRecipes } from "../data";
import { useState } from "react";

export default function RecipeDetail() {
  const { id } = useParams();
  const recipe = initialRecipes.find(r => r.id === Number(id));
  if (!recipe) return <p className="p-6">Recipe not found</p>;

  const [likes, setLikes] = useState(recipe.likes);
  const [bookmarked, setBookmarked] = useState(false);
  const [comments, setComments] = useState(recipe.comments);
  const [rating, setRating] = useState(0);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (!newComment) return;
    setComments([...comments, { user: "You", text: newComment, date: new Date().toISOString().split("T")[0] }]);
    setNewComment("");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 bg-yellow-50 rounded-3xl shadow-lg">
      <img 
        src={recipe.featured_image} 
        alt={recipe.title}
        className="w-full h-72 object-cover rounded-3xl shadow-md hover:scale-105 transition-transform"
      />
      <h2 className="text-4xl font-extrabold text-yellow-600">{recipe.title}</h2>
      <p className="text-gray-700 text-lg">{recipe.description}</p>

      {/* Interactions */}
      <div className="flex flex-wrap gap-4 mt-4">
        <button 
          onClick={() => setLikes(likes + 1)}
          className="bg-red-500 text-white px-5 py-2 rounded-2xl shadow hover:bg-red-600 transition"
        >
          ❤️ {likes}
        </button>

        <button 
          onClick={() => setBookmarked(!bookmarked)}
          className={`px-5 py-2 rounded-2xl shadow font-semibold transition ${bookmarked ? 'bg-yellow-400 text-white hover:bg-yellow-500' : 'bg-white text-gray-700 hover:bg-yellow-100'}`}
        >
          🔖 {bookmarked ? "Bookmarked" : "Bookmark"}
        </button>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }, (_, i) => (
            <span 
              key={i}
              className={`cursor-pointer text-3xl transition hover:text-yellow-400 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
              onClick={() => setRating(i + 1)}
            >
              ★
            </span>
          ))}
        </div>
      </div>

      {/* Ingredients */}
      <div>
        <h3 className="font-bold text-2xl text-gray-800 mb-2 border-b pb-1">Ingredients</h3>
        <ul className="list-disc ml-6 space-y-1">
          {recipe.ingredients.map((i, idx) => <li key={idx}>{i}</li>)}
        </ul>
      </div>

      {/* Steps */}
      <div>
        <h3 className="font-bold text-2xl text-gray-800 mb-2 border-b pb-1">Steps</h3>
        <ol className="list-decimal ml-6 space-y-2">
          {recipe.steps.map((s, idx) => <li key={idx}>{s}</li>)}
        </ol>
      </div>

      {/* Comments */}
      <div>
        <h3 className="font-bold text-2xl text-gray-800 mb-2 border-b pb-1">Comments</h3>
        <div className="space-y-2 mb-2">
          {comments.map((c, idx) => (
            <div key={idx} className="p-2 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <strong>{c.user}</strong>: {c.text} <span className="text-gray-400 text-sm">({c.date})</span>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="Add a comment..." 
            value={newComment} 
            onChange={(e) => setNewComment(e.target.value)}
            className="flex-1 p-3 border rounded-xl shadow focus:ring-2 focus:ring-yellow-400 transition"
          />
          <button 
            onClick={handleAddComment} 
            className="bg-blue-600 text-white px-5 py-2 rounded-xl shadow hover:bg-blue-700 transition"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
