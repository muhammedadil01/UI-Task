import React, { useState } from 'react'
import './Home.css'
import Sidebar from './Sidebar'
import CardArea from './CardArea'

function Home() {
  const [cardArea, setcardArea] = useState(false)
  return (
    <div className='body-container'>
       <div className='body-sec'>
        <div className='sidebar-container'>
         <Sidebar setcardArea={setcardArea}/>
        </div>
        <div className='cardArea-container'>
          {
            cardArea ? <CardArea/> : ""
          }
        </div>
         
       </div>
        
     </div>
  )
}

export default Home