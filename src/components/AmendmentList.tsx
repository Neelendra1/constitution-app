export default function AmendmentList({ amendments }: { amendments: any[] }) {
  return (
    <div className="space-y-4">
      {amendments.map((amendment) => (
        <div key={amendment.id} className="card">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-blue-600">{amendment.number}</h3>
              <p className="text-sm text-gray-600 mb-2">Year: {amendment.year}</p>
            </div>
            {amendment.important && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                Important
              </span>
            )}
          </div>
          <p className="text-gray-700 mb-2">{amendment.description}</p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Impact:</span> {amendment.impact}
          </p>
        </div>
      ))}
    </div>
  );
}
