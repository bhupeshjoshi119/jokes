import React,{useState,useEffect} from 'react'
import MapBook from './MapBook';


const GetBook = () => {
      const [data,setData]  =useState([])
      useEffect(()=>{
         async function books(){
            

            
            const url = 'https://api.freeapi.app/api/v1/public/books?page=1&limit=10&inc=kind%252Cid%252Cetag%252CvolumeInfo&query=tech';
const options = {method: 'GET', headers: {accept: 'application/json'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
//   console.log(data.data?.data || []);
  setData(data.data?.data || []);
} catch (error) {
  console.error(error);
}
         }
         books()
        },[]
    );
  return (
    <div>
        <MapBook data={data}/>
    </div>
  )
}

export default  GetBook;