import React from 'react';

import './SwipeButtons.css';

import CloseIcon from '@mui/icons-material/Close';
import ReplayIcon from '@mui/icons-material/Replay';
import StarIcon from '@mui/icons-material/Star';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';

function SwipeButtons()
{
return (
    <div className='swipeButtons'>
    <IconButton className='swipeButtons__repeat'>  <ReplayIcon fontSize='large' /> </IconButton>
    <IconButton className='swipeButtons__left'>  <CloseIcon fontSize='large'/> </IconButton>
    <IconButton className='swipeButtons__star'>  <StarIcon fontSize='large'/> </IconButton> 
    <IconButton className='swipeButtons__right'>  <FavoriteIcon fontSize='large'/> </IconButton> 
    <IconButton className='swipeButtons__lightning'>  <FlashOnIcon fontSize='large'/> </IconButton> 
        
    </div>
)
}


export default SwipeButtons;