import React from 'react'
import "./DaysOfWeek.css"

export const DaysOfWeek = () => {
  return (
       <div className='days-of-week'>
          <div className='days-wrapper'>
              <div className='day'> <p>Sun</p> </div>
              <div className='day'> <p>Mon</p> </div>
              <div className='day'> <p>Tue</p> </div>
              <div className='day'> <p>Wed</p> </div>
              <div className='day'> <p>Thu</p> </div>
              <div className='day'> <p>Fri</p> </div>
              <div className='day'> <p>Sat</p> </div>
          </div>
       </div>
  )
}
