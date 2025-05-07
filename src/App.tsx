import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
//import Footer from "./components/Footer";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Amendments from "./pages/Amendments";
import ArticleDetail from './components/ArticleDetail'; // Import new component
import NotFound from './components/NotFound'; // Import new component

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow bg-gray-50">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:id" element={<ArticleDetail />} />
            <Route path="/amendments" element={<Amendments />} />
            <Route path="*" element={<NotFound />} /> {/* Optional: 404 page */}
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}
