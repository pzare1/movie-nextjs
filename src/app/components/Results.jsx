import React from 'react'
import Card from './Card'

function Results({results}) {
  return (
    <div>
        {results?.map((result) => (
            <div className='sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 max-w-6xl mx-auto py-4 text-white' key={result.id}>
                <Card result={result}/>
            </div>
        ))}
    </div>
  )
}

export default Results