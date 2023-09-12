import React, { useState } from 'react'
import titleLogo from '../Logo-Image/p-letter-logo-concept-isolated-on-white-background-vector.jpg'
import './NavbarContainer.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {IconButton} from '@mui/material';

function NavbarContainer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='navbar-container'>
        <div className='title-logo'>
         <img src={titleLogo} alt="Logo" className='logo' />
        </div>
        <div className='drop-box'>
          <div className='drop-cont'>
           <p className='box-title'>xyz Enterprices pvt.ltd</p>
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