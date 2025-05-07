import { useState } from "react";
import SearchBar from "../components/SearchBar";
import AmendmentList from "../components/AmendmentList";
import { amendments } from "../data/amendmentsData";

export default function Amendments() {
  const [filteredAmendments, setFilteredAmendments] = useState(amendments);

  const handleSearch = (query: string) => {
    const filtered = amendments.filter(
      (amendment) =>
        amendment.number.toLowerCase().includes(query.toLowerCase()) ||
        amendment.description.toLowerCase().includes(query.toLowerCase()) ||
        amendment.impact.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredAmendments(filtered);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Constitutional Amendments</h1>
      
      <SearchBar onSearch={handleSearch} />
      
      <div className="mb-6">
        <h2 className="text-lg font-medium text-gray-700 mb-2">
          {filteredAmendments.length} amendments found
        </h2>
      </div>

      <AmendmentList amendments={filteredAmendments} />

      {filteredAmendments.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No amendments found matching your search criteria.</p>
        </div>
      )}
    </div>
  );
}
