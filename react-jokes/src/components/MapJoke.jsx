import React from 'react'

const MapJoke = ({ data }) => {
  if (!data) return <div>Loading...</div>;

  // If data is not an array, wrap it in an array
  const jokesArray = Array.isArray(data) ? data : [data];

  return (
    <div>
      {jokesArray.map((joke,idx) => (
        <div key={joke.id || idx} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <p>{joke.content}</p>
          <small>Category: {joke.categories?.join(', ') || 'General'}</small>
        </div>
      ))}
    </div>
  );
}

export default MapJoke