import React from 'react';
import './App.css';
import './header.css';
import {Link , useNavigate} from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import IconButton from '@mui/material/IconButton';
import { ArrowBackIos } from '@mui/icons-material';
function Header({backButton}) {
const navigate= useNavigate();
  return (
      //BEM
    <div className='header' >


      {backButton  ? 
       <IconButton onClick={()=> navigate(backButton)}>
        <ArrowBackIos className='header__icon' fontSize="large"/>  
        </IconButton>

      :
        <IconButton>      
         <PersonIcon className='header__icon' fontSize='large'/>
         </IconButton>
      }
       

     <Link to="/"> <img className='header__logo' src='https://1000logos.net/wp-content/uploads/2018/07/Tinder-icon.png' alt='tinder-logo'></img> </Link>   
     
     
     <Link to="Chats">
     <IconButton> 
     <ChatBubbleIcon  className='header__icon' fontSize='large'/>
     </IconButton> 
     </Link>
     
     
    </div>
  );
}

export default Header;
