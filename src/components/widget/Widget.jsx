import React,{useState} from 'react'
import './Widget.scss';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const Widget = ({type}) => {

  const [ishoverCart,setHoverCart]=useState(false);

  const handleMouseEnter=()=>{
    setHoverCart(true);
  }

  let data;
let amount=200;
let diff=100;


switch(type){

case 'user':
      data={
        title:"USERS",
        isMoney:false,
        link:"See all users",
        icon:<PersonOutlinedIcon className='icon'
        style={{color:'crimson',backgroundColor:'#FF6F91'
       
      }}
        />
      };
      break;
      case 'order':
      data={
        title:"ORDERS",
        isMoney:true,
        link:"View all orders",
        icon:<ShoppingCartOutlinedIcon className='icon' style={{color:'crimson',backgroundColor:'#FACCFF'}}/>
      };
      break;
      case 'earning':
      data={
        title:"EARNINGS",
        isMoney:false,
        link:"See all earfing",
        icon:<MonetizationOnOutlinedIcon className='icon'  
        style={{color:'crimson',backgroundColor:'#c0e386'}}
        />
      };
      break;
      case 'balance':
      data={
        title:"BALANCE",
        isMoney:true,
        link:"See details",
        icon:<AccountBalanceWalletOutlinedIcon className='icon'  
        style={{color:'crimson',backgroundColor:'#81d3d3'}}
        />
      };
      break;
      default:
        break;


}


  return (
    <div className='widget ' onMouseEnter={handleMouseEnter}>
        <div className="left">

      <div className="title">{data.title}</div>
      <div className="counter">{data.isMoney && '$'} {amount}</div>
      <div className="link">{data.link}</div>
        </div>
        <div className="right">
            <div className="persentage positive ">
<ArrowUpwardOutlinedIcon/>
           {diff}     
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget
