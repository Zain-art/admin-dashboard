
import React ,{useContext }from 'react'
import './Sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import InventoryIcon from '@mui/icons-material/Inventory';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {Link} from 'react-router-dom';
import { DarkModeContext } from "../../context/darkModeContext";
const Sidebar = () => {

    const { dispatch } = useContext(DarkModeContext);



  return (
    <div className='sidebar'>
        <div className="top">
            <Link to={'/'} >

            <span className='logo'>Zain Dev</span>
            </Link>

        </div>
        <hr />
<div className="center">
<ul>

    <p className="title">MAIN</p>
<Link to={'/'} >
<li>

    <DashboardIcon className='icon'/>
    <span>Dashboard</span>
</li>
</Link>
<p className="title">LIST</p>
<Link to={'/users/list'} >

<li>
    <PersonOutlineOutlinedIcon className='icon'/>
    <span>Users</span>
</li>
</Link>
<Link to={'/products'} >

<li>
    <InventoryIcon className='icon'/>
    <span>Products</span>
</li>
</Link>
<li>
    <FilterFramesIcon className='icon'/>
    <span>Orders</span>
</li>
<li>
    <LocalShippingIcon className='icon'/>
    <span>Delivery</span>
</li>
<p className="title">USEFUL</p>
<li>
    <QueryStatsIcon className='icon'/>
    <span>Stats</span>
</li>
<li>
    <NotificationsActiveIcon className='icon'/>
    <span>Notifications</span>
</li>
<p className="title">SERVICES</p>
<li>
    <SettingsSystemDaydreamOutlinedIcon className='icon'/>
    <span>System health</span>
</li>
<li>
    <PsychologyOutlinedIcon className='icon'/>
    <span>Logs</span>
</li>
<li>
    <SettingsApplicationsOutlinedIcon className='icon'/>
    <span>Settings</span>
</li>
<p className="title">USER</p>
<li>
    <AccountCircleOutlinedIcon className='icon'/>
    <span>Profile</span>
</li>
<li>
    <LogoutOutlinedIcon className='icon'/>
    <span>Logout</span>
</li>
</ul>
</div>
<div className="bottom">
    <div className="colorOption" onClick={()=> dispatch({type:'LIGHT'})}></div>
    <div className="colorOption" onClick={()=> dispatch({type:'DARK'})}></div>
   
</div>

    </div>
  )
}

export default Sidebar
