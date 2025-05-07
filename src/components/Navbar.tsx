import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-bold text-blue-600">
              Constitution Guide
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600"
              >
                Home
              </Link>
              <Link
                to="/articles"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600"
              >
                Articles
              </Link>
              <Link
                to="/amendments"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600"
              >
                Amendments
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
