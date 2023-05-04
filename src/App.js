import React ,{useState}from 'react';
import User from './component/User';
import UserList from './component/UserList';

function App() {
const[userList,setUserList]=useState([])

const addUserHandler=(uName,uAge)=>{
  setUserList((prevUsersList)=>{
  return[...prevUsersList ,{ name : uName , age : uAge , id:Math.random().toString() }]

  })
}
  return (
    <div>
<User onUser={addUserHandler}/>

<UserList users={userList}/>

    </div>
  );
}

export default App;
