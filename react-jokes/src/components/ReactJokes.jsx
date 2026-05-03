import React,{useState,useEffect} from 'react'
import MapContent from './MapContent.jsx'


const ReactJokes = () => {
  const [data,setData]=useState(null)
    
  
  useEffect(()=>{
    async function jokes(){
    const url = 'https://api.freeapi.app/api/v1/public/randomjokes?limit=10&query=science&inc=categories%252Cid%252Ccontent&page=1';
const options = {method: 'GET', headers: {accept: 'application/json'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
 
  setData(data.data.data);
  
} catch (error) {
  console.error(error);
}
  }
  jokes()
  },[])
    
  return (
    <div>

        <MapContent data={data}/>
    </div>
  )
}

export default ReactJokes;