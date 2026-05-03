// import React from 'react'

// const MapRandomStock = ({data}) => {
//       if (!data) return <div>Loading...</div>;

//   // If data is not an array, wrap it in an array
//   const randomStockArray = Array.isArray(data) ? data : [data];

//   return (
//     <div>
//         randomStockArray.map((stock,idx) =(<div key={idx || randomStockArray.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
//             <h3>{stock.volumeInfo.title}</h3>
//             <p>{stock.volumeInfo.description}</p>
//             </div>))
//     </div>
//   )
// }

// export default MapRandomStock


import React from 'react';

const MapRandomStock = ({ data }) => {
  if (!data || data.length === 0) return <div>Loading...</div>;

  return (
    <div>
      {data.map((stock,index) => (
        <div key={`${stock.Symbol}-${index}`} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>{stock.Name}</h3>
          <p>Symbol: {stock.Symbol}</p>
          <p>Current Price: {stock.CurrentPrice}</p>
          <p>Market Cap: {stock.MarketCap}</p>
          {/* Add more fields as needed */}
        </div>
      ))}
    </div>
  );
};

export default MapRandomStock;