import { Link } from "react-router-dom";

export default function ConstitutionCard({ article }: { article: any }) {
  return (
    <div className="card">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-blue-600">{article.title}</h3>
          <p className="text-sm text-gray-600 mb-2 line-clamp-1">{article.description}</p>
        </div>
        {article.important && (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            Important
          </span>
        )}
      </div>
      <p className="text-gray-700 mb-4 line-clamp-2">{article.content}</p>
      <Link
        to={`/articles/${article.id}`}
        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
      >
        Read more →
      </Link>
    </div>
  );
}
