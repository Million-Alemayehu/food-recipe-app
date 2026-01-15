export const recipes = [
  {
    id: 1,
    title: "Spaghetti Bolognese",
    featured_image: "https://source.unsplash.com/400x300/?spaghetti",
    description: "Hearty Italian pasta with beef and tomato sauce",
    ingredients: ["Pasta", "Tomato", "Beef", "Onion", "Garlic"],
    steps: ["Boil pasta", "Cook sauce", "Mix together", "Serve hot"],
    cook_time: 30,
    category: "Dinner",
    likes: 12,
    comments: [
      { user: "Anna", text: "Delicious!", date: "2026-01-09" },
      { user: "John", text: "My family loved it", date: "2026-01-10" },
    ],
  },
  {
    id: 2,
    title: "Avocado Toast",
    featured_image: "https://source.unsplash.com/400x300/?avocado-toast",
    description: "Simple and healthy breakfast",
    ingredients: ["Bread", "Avocado", "Salt", "Pepper", "Lemon Juice"],
    steps: ["Toast bread", "Mash avocado", "Spread & serve"],
    cook_time: 10,
    category: "Breakfast",
    likes: 25,
    comments: [{ user: "Lily", text: "Quick and tasty!", date: "2026-01-08" }],
  },
];
