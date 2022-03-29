
import './ChatScreen.css';
import React, { useEffect, useState } from 'react';
import { Avatar } from '@mui/material';
import { SettingsInputAntenna } from '@mui/icons-material';
function ChatScreen() {
    const [input, setInput] = useState([]);
    const [message,setMessage]=useState([
        {
            name:'Zena',
            image:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
            message:'Whats up'
        },
        {
            name:'Zena',
            image:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
            message:'How its going?'
        },
        {
            message:'how is idhfjhfj?'
        }


    ]);

    const handleSend =(e) =>
    {
        e.preventDefault();
        setMessage([...message , {message:input}]);
        setInput("");
    };

  return (
    <div className='chatScreen'>
        <p className='chatScreen__timestamp'>you matched with ellen on the 10/23/2020 </p>

    {message.map( message => ( 

        message.name ? (<div className='chatScreen__message'>
        <Avatar className='chatScreen__image' alt={message.name} src={message.image} />
        <p className='chatScreen__text'> {message.message}</p>
        </div>):
    (<div className='chatScreen__message'>
    <p className='chatScreen__textUser'> {message.message}</p>
    </div>)    
    ))}
  
        <form className='ChatScreen__input'>
            <input value={input} 
            onChange={(e)=> setInput(e.target.value)} 
            className='ChatScreen__feild' type="text" placeholder='Type a message!!' />
            <button type='submit' onClick={handleSend} className='ChatScreen__submit'> SEND</button>
        </form>
    </div>
  )
}

export default ChatScreen