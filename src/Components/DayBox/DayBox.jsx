import React from 'react'
import "./dayBox.css"

export const DayBox = ( {numberOfTheDay, eventsOfTheDay}) => {
  return (
     <div className='day-box'>
        <div className='day-box-events'>
            <p className='current-date'>{ numberOfTheDay }</p>
             <p className='event-of-the-day'> <button> {eventsOfTheDay} </button> </p>
        </div>
     </div>
  )
}
