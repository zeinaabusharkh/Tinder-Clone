import React from 'react';
import './Chats.css';
import Chat from "./Chat";
function Chats(props) {
  return (
    <div className='chats'>
      
        <Chat 
        name = "Sara"
        message ="hey !!! long time no see :)"
        timestamp="35 minutes ago"
        profilePic="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        />

        <Chat 
        name = "Zena"
        message ="hey , i am hungry "
        timestamp="3 minutes ago"
        profilePic="https://st3.depositphotos.com/1037987/15097/i/600/depositphotos_150975580-stock-photo-portrait-of-businesswoman-in-office.jpg"
        />


    </div>
  )
}



export default Chats
