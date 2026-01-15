import { useState } from "react";

export default function NewRecipe() {
  const [ingredients, setIngredients] = useState([""]);
  const [steps, setSteps] = useState([""]);
  const [images, setImages] = useState([]);
  const [featured, setFeatured] = useState(null);

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <h1 className="text-3xl font-bold">Create New Recipe</h1>
      <input className="w-full p-2 border rounded" placeholder="Recipe Title" />
      <textarea className="w-full p-2 border rounded" placeholder="Description"></textarea>

      <h3 className="font-semibold">Ingredients</h3>
      {ingredients.map((ing, i) => (
        <div key={i} className="flex gap-2 mb-2">
          <input className="flex-1 p-2 border rounded" placeholder="Ingredient" />
          <button className="bg-red-500 text-white px-2 rounded">X</button>
        </div>
      ))}
      <button className="bg-green-500 text-white px-4 py-1 rounded">+ Add Ingredient</button>

      <h3 className="font-semibold mt-4">Steps</h3>
      {steps.map((step, i) => (
        <div key={i} className="flex gap-2 mb-2">
          <input className="flex-1 p-2 border rounded" placeholder={`Step ${i + 1}`} />
          <button className="bg-red-500 text-white px-2 rounded">X</button>
        </div>
      ))}
      <button className="bg-green-500 text-white px-4 py-1 rounded">+ Add Step</button>

      <h3 className="font-semibold mt-4">Images</h3>
      <input type="file" multiple onChange={e => setImages([...images, ...e.target.files])} />
      <div className="flex gap-2 mt-2">
        {Array.from(images).map((img, i) => (
          <div key={i} className="relative">
            <img src={URL.createObjectURL(img)} className="w-24 h-24 object-cover rounded" />
            <button className="absolute bottom-1 left-1 bg-yellow-400 px-1 text-sm rounded">
              {featured === i ? "Featured" : "Set Featured"}
            </button>
          </div>
        ))}
      </div>

      <button className="bg-blue-600 text-white px-6 py-2 rounded mt-4">Submit Recipe</button>
    </div>
  );
}
