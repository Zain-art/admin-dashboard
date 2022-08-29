import React,{useContext} from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import GTranslateOutlinedIcon from '@mui/icons-material/GTranslateOutlined';
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import { DarkModeContext } from "../../context/darkModeContext";

import './Navbar.scss'
const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);


  return (
   <>
   <div className="navbar">
    <div className="wrapper">
      <div className="search">
        <input type="text" placeholder='Search...' name='search' />
        <SearchOutlinedIcon className='icon'/>
      </div>
      <div className="items">
        <div className="item">
          <GTranslateOutlinedIcon className='icon'/>
         &nbsp;English
        </div>
        <div className="item">
          <NightsStayOutlinedIcon className='icon' onClick={()=> dispatch({type:'TOGGLE'})}/>
       
        </div>
        <div className="item">
          <FullscreenExitOutlinedIcon className='icon'/>
        
        </div>
        <div className="item">
          <NotificationsActiveOutlinedIcon className='icon'/>
        <div className="counter">1</div>
        </div>
        <div className="item">
          <ChatBubbleOutlineOutlinedIcon className='icon'/>
        <div className="counter">2</div>
         
        </div>
        <div className="item">
          <FormatListBulletedOutlinedIcon className='icon'/>
        </div>
        <div className="item">
          <img src="https://images.pexels.com/photos/1756959/pexels-photo-1756959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="not show pexel form" className='avatar' />
        </div>
      </div>
    </div>
   </div>
   
   
   </>
  )
}

export default Navbar