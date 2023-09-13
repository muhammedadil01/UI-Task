import React  from 'react'
import titleLogo from '../Logo-Image/p-logo.png'
import './NavbarContainer.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {IconButton} from '@mui/material';
import companyLogo from '../Logo-Image/apple-logo.png'

function NavbarContainer() {
 
  return (
    <div className='navbar-container'>
        <div className='title-logo'>
         <img src={titleLogo} alt="Logo" className='logo' />
        </div>
        <div className='drop-box'>
          <div className='drop-cont'>
            <div><img src={companyLogo} alt="" className='company-logo' /></div>
            <div> <p className='box-title'>xyz Enterprices pvt.ltd</p></div>
          </div>  
          <div className='dropdown'>
      <IconButton>
        <KeyboardArrowDownIcon />
      </IconButton>
      
    </div>

        </div>
        
    </div>
  )
}

export default NavbarContainer