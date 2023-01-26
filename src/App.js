import React, { useEffect, useState } from 'react'

const App = () => {
  const [number,setNumber] = useState(0);
  const [name,setName] = useState("Mert")
  useEffect(()=>{
     console.log("güncellendi")
  },[number,name]);

  return (
    <div>
     <h1>{number}</h1>
      <h2>{name}</h2>
     <button onClick={()=>setNumber(number+1)}>Click</button>
    </div>
  )
}

export default App
