import React, { useState } from 'react'

const App = () => {
  const [name,setName] = useState("Mehmet");
  const [age,setAge] = useState(29);
  const [friends,setFriends] = useState(["Ayşe","Fatma"]);
  const[address,setAddress] = useState({title:"Istanbul",zip:34400});


  return (
    <div className='App'>
      <h1> {name}</h1>
      <h2>{age}</h2>
      <button onClick={()=> setName("Hariye")}>Change name</button>
      <button onClick={()=> setAge(25)}>Change age</button>
      <hr />
      <br></br>
    <h2>Friends</h2>
    {friends.map((friend,index)=>(
      <div key={index}>{friend}</div>
    ))}
    <button onClick={()=> setFriends([...friends,"Hayriye"])}>add new friend</button>
    <hr />
      <br></br>

      <h3>Adress</h3>
       <div>{address.title} {address.zip}</div>
      
      <button onClick={()=>setAddress({title:"Ankara",zip:6555})}>Change Adress</button>
      
    </div>
  )
}

export default App
