import React, { useState } from 'react'
import './CardArea.css'
import MonthlySection from './MonthlySection'
import AnnualySection from './AnnualySection'

function CardArea() {
    const [card, setcard] = useState(true)
    const [isClicked, setisClicked] = useState(false)
 function monthlyCards (){
   setcard(true)
   handleClick()
}
function annualyCard(){
    setcard(false)
    setisClicked(false)
}
const handleClick = () => {
    setisClicked(true); 
  };
  return (
    <div className='card-area'>
        <div className='card-content'>
            <h5>choose a plan that's just right for you !</h5>
        </div>
        <div className='card-sec'>
            <div className='card-btn'>
                <div className={card ? "monthly-btn" : "isMonthly"} onClick={()=>{monthlyCards()}}>monthly</div>
                <div className={!card ?  "annualy-btn-clicked" : "annualy-btn"} onClick={()=>{annualyCard()}}>annualy</div>
            </div>
            <div className='show-card'>
            {
            card ? <MonthlySection/> : <AnnualySection/>
            }
           </div>
           
        </div>
    </div>
  )
}

export default CardArea