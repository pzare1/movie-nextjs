import React from 'react';
import Card from './Card';

function Results({ results }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 max-w-6xl mx-auto py-4 text-white">
      {results?.map((result) => (
        <div key={result.id}>
          <Card result={result} />
        </div>
      ))}
    </div>
  );
}

export default Results;
