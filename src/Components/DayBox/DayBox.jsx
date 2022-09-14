import React from 'react'
import "./dayBox.css"

export const DayBox = ( {numberOfTheDay, eventsOfTheDay,isCurrentDay, isCurrentMonth}) => {
  return (
     <div className='day-box'>
        <div className='day-box-events'>
        { 
            isCurrentDay ? 
            <p className= {"current-date " + (isCurrentMonth === true ? 'current-month' : "")} > <span className='current'>{ numberOfTheDay }</span></p> :
            <p className= {"current-date " + (isCurrentMonth === true ? 'current-month' : "")} ><span>{ numberOfTheDay }</span></p>
         }
         <p className='event-of-the-day'> 
         {
            eventsOfTheDay.eventName ? 
            <button onClick={()=> alert(eventsOfTheDay.moreInfo)} > {eventsOfTheDay.eventName} </button>  :
            ''
         }
         </p>
        
        </div>
     </div>
  )
}
