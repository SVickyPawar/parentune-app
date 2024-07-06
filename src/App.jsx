import { useEffect, useState } from 'react'

import './App.css'
import Card from './components/Card'

function App() {
  const [data,setData] = useState([]);

  useEffect(()=>{

    const getData = async()=>{
      const res = await fetch('https://qa7.parentune.com/api/subscription/subscribe/v2/plans')
      const result = await res.json();
      if(!res.status=='ok'){
        throw new Error("Api error: " + res.status)
      }
      setData(result.data)
      console.log(result.data)
    }
    getData();
  },[])

  return (
    <div className='w-full h-screen flex gap-7 border-2 border-solid border-red-700'>
      {data && data.length>0 ? data.map((el)=>(
        <Card info={el}/>
      )):"Nod Data found"}
      
    </div>
  )
}

export default App
