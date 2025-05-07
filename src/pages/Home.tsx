import { Link } from "react-router-dom";
import ConstitutionCard from "../components/ConstitutionCard";
import { constitutionArticles } from "../data/constitutionData";

export default function Home() {
  const featuredArticles = constitutionArticles.filter(article => article.important);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Indian Constitution Guide</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A comprehensive resource for students preparing for government exams
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Featured Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredArticles.map((article) => (
            <ConstitutionCard key={article.id} article={article} />
          ))}
        </div>
      </div>

      <div className="text-center">
        <Link
          to="/articles"
          className="btn-primary inline-flex items-center px-6 py-3 text-lg"
        >
          Browse All Articles
          <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
