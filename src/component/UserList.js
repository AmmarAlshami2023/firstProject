import React from 'react'
import './UserList.css'
import Card from './Card'

function UserList(props) {
  return (
   <Card >
   <ul className='users'>{props.users.map((user)=>(<li className='users' key={user.id}>{user.name}({user.age} years)</li>)
    )}
    </ul>
    </Card>
  )
}

export default UserList