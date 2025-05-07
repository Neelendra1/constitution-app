import { useParams, Link } from 'react-router-dom';
import { constitutionArticles } from '../data/constitutionData'; // Adjust path as needed

function ArticleDetail() {
  const { id }: any = useParams();
  const article = constitutionArticles.find(
    (article) => article.id === parseInt(id)
  );

  if (!article) {
    return (
      <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Article Not Found</h1>
        <p className="text-gray-600 mb-6">No article found with ID {id}.</p>
        <Link
          to="/articles"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Back to Articles
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{article.title}</h1>
      <h2 className="text-xl text-gray-600 mb-4">{article.description}</h2>
      <div className="flex items-center mb-4">
        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full mr-2">
          {article.category}
        </span>
        <span
          className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
            article.important
              ? 'bg-green-100 text-green-800'
              : 'bg-gray-100 text-gray-800'
          }`}
        >
          {article.important ? 'Important' : 'Not Important'}
        </span>
      </div>
      <p className="text-gray-700 leading-relaxed mb-6">{article.content}</p>
      <Link
        to="/articles"
        className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        Back to Articles
      </Link>
    </div>
  );
}

export default ArticleDetail;