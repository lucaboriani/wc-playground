import { useState, useEffect } from 'react'
import {MyButton} from '../../wc/lit/my-button';


const url = "https://jsonplaceholder.typicode.com/users/";

export function App() {
  const [usersData, setUsersData] = useState([]);

  const getUsersData = async () => {
    const response = await fetch(url);
    const jsonData = await response.json();
    
    setUsersData([...jsonData]);
  };
  
 return (
    <div className="App" style={{display:'flex'}}>
      <div style={{flexGrow:1}}>
        <h2>
          React component + webcomponent button 
        </h2>

          {usersData.map(user => (
            <UserDetail user={user} key={user.id}/>
          )) }
      </div>
      <div>
        <my-button 
          text="load users" 
          onClick={e => getUsersData()}
          ></my-button>
      </div>
    </div>
  );
}


const UserDetail = ({user}) =>{
    return(
        <ul>
           <li>
              <strong>Name:</strong> {user.name}
            </li>
            <li>
              <strong>Website:</strong> {user.website}
            </li>
            <li>
              <strong>Email:</strong> {user.email}
            </li>
            <li>
              <strong>Phone:</strong> {user.phone}
            </li>
            <hr></hr>
        </ul>
    )
}

