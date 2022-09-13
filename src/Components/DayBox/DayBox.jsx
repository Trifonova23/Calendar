import React from 'react'
import "./dayBox.css"

export const DayBox = ( {numberOfTheDay, eventsOfTheDay,isCurrentDay}) => {
  return (
     <div className='day-box'>
        <div className='day-box-events'>
        { isCurrentDay ? 
            <p className='current-date'> <span className='current'>{ numberOfTheDay }</span></p> :
            <p className='current-date'><span>{ numberOfTheDay }</span></p>
         }
            <p className='event-of-the-day'> <button> {eventsOfTheDay} </button> </p>
        
        </div>
     </div>
  )
}
