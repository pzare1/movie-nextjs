import React from 'react'

function Results({results}) {
  return (
    <div>
        {results?.map((result) => (
            <div className='text-white' key={result.id}>
                {result.title}
            </div>
        ))}
    </div>
  )
}

export default Results