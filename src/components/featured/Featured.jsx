import React from 'react'
import './Featured.scss';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const Featured = () => {
  return (
    <div className='featured'>
    <div className='top'>
    <h1 className='title'>Total Revenue</h1>
<MoreVertOutlinedIcon fontSize='small' />
      </div>  
      <div className="bottom">
       <div className="featuredChart">
<CircularProgressbar  value={60} text={'60%'} strokeWidth={3}/>
       </div>
<p className='title'>Total sales made today</p>
<p className='amount'>$544</p>
<p className='desc'>this isi chart descriptionthis this isi chart descriptionthis this isi chart descriptionthis isi chart description</p>
<div className="summary">
  <div className="item">
    <div className="itemTitle">
      Target
      <div className="itemResult">
        <KeyboardArrowDownOutlinedIcon fontSize='small' />
        <div className="resultAmount">$12.3</div>
      </div>
    </div>
  </div>
  <div className="item">
    <div className="itemTitle">
      last week
      <div className="itemResult negative">
        <KeyboardArrowDownOutlinedIcon fontSize='small' />
        <div className="resultAmount">$12.3</div>
      </div>
    </div>
  </div>
  <div className="item">
    <div className="itemTitle">
      last month
      <div className="itemResult positive">
        <KeyboardArrowDownOutlinedIcon fontSize='small' />
        <div className="resultAmount">$12.3</div>
      </div>
    </div>
  </div>
</div>

      </div>
    
    </div>
  )
}

export default Featured
