import React, { useState } from 'react'
import './Sidebar.css'
import loginImage from '../Logo-Image/IMG_2724.jpeg'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SpaIcon from '@mui/icons-material/Spa';
import ExtensionIcon from '@mui/icons-material/Extension';
import QuizIcon from '@mui/icons-material/Quiz';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

function Sidebar(props) {
  const [featureColor, setfeatureColor] = useState(false)
  function dashboardClick (){
    props.setcardArea(true)
    setfeatureColor(true)
  }
  return (
    <div className='side-bar'>
      <div className='log-area'>
        <div >
         <img src={loginImage} alt="" className='log-img'  />
        </div>
         <div className='name-sec'>
           <p className='log-name'>Muhammed Adil M </p>
           <IconButton style={{width:'5px'}}>
            <ArrowForwardIosIcon style={{height:'12px',color:'#3f99f2'}}/>
           </IconButton>
         </div>
         <div className='email-sec'>
           <p className='log-email'>muhammedadil932@gmail.com</p>
         </div> 
      </div>
      <div className='feature-area'>
        <div className='feature-area-container'>
        <div className='feature-sec'>
          <div className={featureColor ? "feature-btn-bl" : 'feature-btn'} onClick={()=>{dashboardClick()}}>
            <DashboardIcon style={{marginTop:'5px', color:'#3f99f2'}}/>
            <p className='dashboard'>Dashbord</p>
          </div>
        </div>
        <div className='feature-sec'>
          <div className= 'feature-btn'>
            <SpaIcon style={{marginTop:'5px', color:'#3f99f2'}}/>
            <p className='dashboard'>Perk</p>
          </div>
        </div>
        <div className='feature-sec'>
          <div className='feature-btn'>
            <ExtensionIcon style={{marginTop:'5px', color:'#3f99f2'}}/>
            <p className='dashboard'>Addons</p>
          </div>
        </div>
        <div className='feature-sec'>
          <div className='feature-btn'>
            <QuizIcon style={{marginTop:'5px', color:'#3f99f2'}}/>
            <p className='dashboard'>FAQ</p>
          </div>
        </div>
        <div className='feature-sec'>
          <div className='feature-btn'>
            <SupportAgentIcon style={{marginTop:'5px', color:'#3f99f2'}}/>
            <p className='dashboard'>Support</p>
          </div>
        </div> 
        </div>
       <div className='logout-area'>
          Logout <PowerSettingsNewIcon style={{color:'#2a8ff5'}}/>
        </div>
        
      </div>
    </div>
  )
}

export default Sidebar