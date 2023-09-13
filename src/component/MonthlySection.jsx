import React from 'react'
import './MonthlySection.css'
import PersonIcon from '@mui/icons-material/Person';
import BackupIcon from '@mui/icons-material/Backup';
import EmailIcon from '@mui/icons-material/Email';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function MonthlySection() {
  return (
  <div>
    <div className='cards'>
    <div className='card'>
        <div className='card-contents'>
        <h4>Basic</h4>
        <p style={{marginBottom:'5px'}}>$899.99/mo</p>
        <div className='basic-button'>
           Get started  
           <ArrowRightAltIcon/>
        </div>
        <div className='card-line'>
         <hr />
        </div>
          <p>what you'll get :</p>
          <div className='user'>
            <div><PersonIcon style={{height:'15px'}}/></div>
            <div className='user-cont'><p>upto 25 user</p> </div>
          </div>
          <div className='user'>
            <div><BackupIcon style={{height:'15px'}}/></div>
            <div className='user-cont'><p>upto 25 storage</p> </div>
          </div>
          <div className='user'>
            <div><EmailIcon style={{height:'15px'}}/></div>
            <div className='user-cont'><p>Email support</p> </div>
          </div>
          <div className='explore-feature'>
            <a href="" style={{color:'black'}}>EXPLORE FEATURE</a>
            <ArrowRightIcon style={{color:'#ffe49e'}}/>
          </div>
        </div>
    </div>
    <div className='card'>
    <div className='card-contents'>
        <h4>Standerd</h4>
        <p style={{marginBottom:'5px'}}>$899.99/mo</p>
        <div className='standerd-button'>
           Get started  
           <ArrowRightAltIcon/>
        </div>
        <div className='card-line'>
         <hr />
        </div>
          <p>what you'll get :</p>
          <div className='user'>
            <div><PersonIcon style={{height:'15px'}}/></div>
            <div className='user-cont'><p>upto 25 user</p> </div>
          </div>
          <div className='user'>
            <div><BackupIcon style={{height:'15px'}}/></div>
            <div className='user-cont'><p>upto 25 storage</p> </div>
          </div>
          <div className='user'>
            <div><EmailIcon style={{height:'15px'}}/></div>
            <div className='user-cont'><p>Email support</p> </div>
          </div>
          <div className='explore-feature'>
            <a href="" style={{color:'black'}}>EXPLORE FEATURE</a>
            <ArrowRightIcon style={{color:'#fc357b'}}/>
          </div>
        </div>
    </div>
    <div className='card'>
    <div className='card-contents'>
        <h4>Premium</h4>
        <p style={{marginBottom:'5px'}}>$899.99/mo</p>
        <div className='Premium-button'>
           Get started  
           <ArrowRightAltIcon/>
        </div>
        <div className='card-line'>
         <hr />
        </div>
          <p>what you'll get :</p>
          <div className='user'>
            <div><PersonIcon style={{height:'15px'}}/></div>
            <div className='user-cont'><p>upto 25 user</p> </div>
          </div>
          <div className='user'>
            <div><BackupIcon style={{height:'15px'}}/></div>
            <div className='user-cont'><p>upto 25 storage</p> </div>
          </div>
          <div className='user'>
            <div><EmailIcon style={{height:'15px'}}/></div>
            <div className='user-cont'><p>Email support</p> </div>
          </div>
          <div className='explore-feature'>
            <a href="" style={{color:'black'}}>EXPLORE FEATURE</a>
            <ArrowRightIcon style={{color:'#d964fa'}}/>
          </div>
        </div>
    </div>
 </div>
 <div className='sec-card'>
      <div className='left-card'>
        <div className='left-side'>
           <div className='free-btn'>Free forever</div>
            <div className='free-title'><h3>Free Starter</h3></div>
            <div className='free-content'><p >The quickest ans easiest way to try protocols with basic functionalities</p></div>
            <div className='free-button'>
              Get started  
              <ArrowRightAltIcon/>
            </div>
        </div>
        <div className='right-side'>
            <div className='right-section'>
            <p>what you'll get :</p>
          <div className='user'>
            <div><PersonIcon style={{height:'15px'}}/></div>
            <div className='user-cont'><p>upto 25 user</p> </div>
          </div>
          <div className='user'>
            <div><BackupIcon style={{height:'15px'}}/></div>
            <div className='user-cont'><p>upto 25 storage</p> </div>
          </div>
          <div className='user'>
            <div><EmailIcon style={{height:'15px'}}/></div>
            <div className='user-cont'><p>Email support</p> </div>
          </div>
          <div className='user'>
             <div><DoneAllIcon style={{height:'15px'}}/></div>
             <div className='user-cont'>Basics of documents,Task flow,Voting,Accounting,<br/>Banking,Notes,Investor,<br/>Director and Team Management include<p></p> </div>
          </div>
            </div>
         </div>
      </div>

      <div className='right-card'>
           <div className='left-side'>
           <div className='enterprise-btn'>Let's connect</div>
            <div className='enterprise-title'><h3>Enterprise Plan</h3></div>
            <div className='enterprise-content'><p >Effortlessly customize and fine-tune services as your need shift,ensuring the perfect tool for success </p></div>
            <div className='enterprise-button'>
              Get started  
              <ArrowRightAltIcon/>
            </div>
           </div>
           <div className='right-side'>
           <p>what you'll get :</p>
          <div className='user'>
            <div><PersonIcon style={{height:'15px'}}/></div>
            <div className='user-cont'><p>upto 25 user</p> </div>
          </div>
          <div className='user'>
             <div><DoneAllIcon style={{height:'15px'}}/></div>
             <div className='user-cont'>Customization of all other features</div>
          </div>
           </div>
      </div>
    </div>
</div>
  )
}

export default MonthlySection