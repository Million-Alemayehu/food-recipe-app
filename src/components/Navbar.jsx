import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const linkClass = (path) =>
    `px-4 py-2 rounded-full font-semibold transition ${
      location.pathname === path
        ? "bg-yellow-400 text-white shadow-lg"
        : "text-gray-700 hover:bg-yellow-100"
    }`;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-yellow-600 flex items-center gap-2">
          <span>🍴</span> Flavorify
        </Link>

        {/* Links */}
        <div className="flex items-center gap-4">
          <Link to="/" className={linkClass("/")}>Home</Link>
          <Link to="/new" className={linkClass("/new")}>Create Recipe</Link>
          <Link to="/profile" className={linkClass("/profile")}>Profile</Link>
        </div>
      </div>
    </nav>
  );
}
