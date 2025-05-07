import { useState } from "react";
// import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import ConstitutionCard from "../components/ConstitutionCard";
import { constitutionArticles, categories } from "../data/constitutionData";

export default function Articles() {
  const [filteredArticles, setFilteredArticles] = useState(constitutionArticles);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleSearch = (query: string) => {
    const filtered = constitutionArticles.filter(
      (article) =>
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.description.toLowerCase().includes(query.toLowerCase()) ||
        article.content.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredArticles(filtered);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredArticles(constitutionArticles);
    } else {
      const filtered = constitutionArticles.filter(
        (article) => article.category === category
      );
      setFilteredArticles(filtered);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Constitution Articles</h1>
      
      <SearchBar onSearch={handleSearch} />
      
      <div className="mb-6">
        <h2 className="text-lg font-medium text-gray-700 mb-2">Filter by Category</h2>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleCategoryChange("All")}
            className={`px-3 py-1 rounded-full text-sm ${selectedCategory === "All" ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-3 py-1 rounded-full text-sm ${selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filteredArticles.map((article) => (
          <ConstitutionCard key={article.id} article={article} />
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No articles found matching your search criteria.</p>
        </div>
      )}
    </div>
  );
}