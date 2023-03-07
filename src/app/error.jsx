"use client"

import React, { useEffect } from 'react';

function Error({error,reset}) {
    useEffect(() => {
      console.log(error)
    }, [error])
    
  return (
    <div className='text-white text-2xl text-center'>
        <h1>something went wrong</h1>
        <button onClick={() => reset()}>Try Again</button>
    </div>
  )
}

export default Error