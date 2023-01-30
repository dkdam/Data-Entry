import { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [username, setUsername] = useState("")

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data);
    })
  },[]);

  const createUser = () => {
    Axios.post("http://localhost:3001/createUser", {
      name: name, 
      age: age, 
      username: username,
    }).then((response) => [
      setListOfUsers([...listOfUsers, {
        name,
        age,
        username,
      }])
    ]);
  };

  return (
    <div className="App">
      <div>
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
      </div>

      <div>
        <input type="text" placeholder="Name..." onChange={(e) => {setName(e.target.value)}} />
        <input type="number" placeholder="Age..." onChange={(e) => {setAge(e.target.value)}} />
        <input type="username" placeholder="Username..." onChange={(e) => {setUsername( e.target.value)}} />
        <button onClick={createUser}>Create User</button>
      </div>
    </div>
  )
}

export default App
