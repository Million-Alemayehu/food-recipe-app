export default function Profile() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">My Profile</h1>
      <p className="text-gray-500 mb-4">This is where user recipes, favorites, and bookmarks will appear.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-gray-100 p-4 rounded-lg">Recipe 1</div>
        <div className="bg-gray-100 p-4 rounded-lg">Recipe 2</div>
        <div className="bg-gray-100 p-4 rounded-lg">Recipe 3</div>
      </div>
    </div>
  );
}
