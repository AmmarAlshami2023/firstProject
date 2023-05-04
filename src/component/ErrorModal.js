import React , {useState} from 'react'
import './ErrorModal.css'
import Card from './Card'
import "./User.css"
export default function ErrorModal(props) {
  
  return (
  
        <div>
        <div className='backdrop' onConfirm={props.errorHandler}/>
        
<Card  className="modal" >
<header className='header'>
<h2 className='header'>{props.title}</h2>

</header>
<div className='content'>
        <p>
            {props.message}
        </p>
      
        </div>
<footer className='actions'>
    <button className='butten' onConfirm={props.errorHandler}>okey</button>
</footer>

</Card>
</div>
  )
} 
