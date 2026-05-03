import React,{useState,useEffect} from 'react'

import MapJoke from './MapJoke.jsx';

const GetRandomJoke = () => {
      const [data,setData]  =useState([])
      useEffect(()=>{
         async function jokes(){
            const url = 'https://api.freeapi.app/api/v1/public/randomjokes/joke/random';
            const options = {method: 'GET', headers: {accept: 'application/json'}};

            try {
  const response = await fetch(url, options);
//   if (response.status === 429 && retries > 0){

//   }
  const result = await response.json();
 if (result && result.data) {
//   console.log(result.data.content);
  setData([result.data]);
}
  
} catch (error) {
  console.error(error);
}
            
         }
         jokes()
        },[]
    );
  return (
    <div>
        <MapJoke data={data}/>
    </div>
  )
}

export default  GetRandomJoke;