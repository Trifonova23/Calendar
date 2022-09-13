import React from 'react'
import "./CalendarHeader.css";
import moment from 'moment'

export const CalendarHeader = ({currentDay, month, year,updateMonth}) => {
  return (   
    <div className='header-information'>
        <div className='current-month-and-year'>
          <p className="arrow-left" onClick={() => updateMonth(currentDay.subtract(1,'month'))}  >{"<"} </p>
          <p className='month'> {month} </p>
          <p className='year'> {year} </p>
          <p className="arrow-right" onClick={()=> updateMonth(currentDay.add(1,'month'))}>{">"} </p> 
        </div>
 
        <div className='current-day-today'>
            <p onClick={() => updateMonth(moment())}>Today</p>
        </div>
    </div> 
  )
}
