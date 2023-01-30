import { useEffect, useState } from 'react'
import './App.css'
import Axios from 'axios';

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data);
    })
  },[])

  return (
    <div className="App">
      <h1>
        <div className='userDisplay'>
          {listOfUsers.map((user) => 
          {return (
            <div>
              <h1>Name: {user.name}</h1>
              <h1>Age: {user.age}</h1>
              <h1>Username: {user.username}</h1>
            </div>
          )
          })}
        </div>
      </h1>
    </div>
  )
}

export default App
