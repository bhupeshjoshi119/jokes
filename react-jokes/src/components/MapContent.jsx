import React from 'react'

const MapContent = ({data}) => {
  if (!data) return <div>Loading...</div>;

  return (
    <div>
         {/* 1. Check if data exists, 2. Map through the inner array */}
        {data.map((joke) => (
      <div key={joke.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
        <p>{joke.content}</p>
        <small>Category: {joke.categories.join(', ') || 'General'}</small>
      </div>
    ))}

    </div>
  )
}

export default MapContent