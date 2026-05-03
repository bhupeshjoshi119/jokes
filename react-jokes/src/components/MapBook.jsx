import React from 'react'

const MapBook = ({data}) => {
    if(!data)
      return <div>Loading...</div>;
    const booksArray = Array.isArray(data) ? data : [data];
  return (
    <div>
        {booksArray.map((book,idx) => (
          <div key={book.id ? `${book.id}-${idx}` : idx} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <h3>{book.volumeInfo.title}</h3>
            <p>{book.volumeInfo.description}</p>
          </div>
        ))} 
    </div>
  )
}

export default MapBook


// import React from 'react';

// const MapBook = ({ data }) => {
//   if (!data || data.length === 0) {
//     return <div>No books found</div>;
//   }

//   return (
//     <div>
    
//       {data.map((book) => {
//         const info = book?.volumeInfo.title;

//         return (
//           <div key={book.id} style={{ marginBottom: "20px" }}>
//             <h3>{info?.title || "No Title"}</h3>
//             <p>{info?.description || "No Description available"}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default MapBook;