import React,{useState,useEffect} from 'react'

import MapRandomStock from './MapRandomStock.jsx';

const RandomStock = () => {
      const [data,setData]  =useState([])
      useEffect(()=>{
         async function stock(){
            const url = 'https://api.freeapi.app/api/v1/public/stocks/stock/random';
            const options = {method: 'GET', headers: {accept: 'application/json'}};


            try {
  const response = await fetch(url, options);
//   if (response.status === 429 && retries > 0){

//   }
  const result = await response.json();
//  if (result && result.data) {
  console.log([result.data]);
  setData([result.data]);
// }
  
} catch (error) {
  console.error(error);
}
            
         }
         stock()
        },[]
    );
  return (
    <div>
        <MapRandomStock data={data}/>
    </div>
  )
}

export default  RandomStock;