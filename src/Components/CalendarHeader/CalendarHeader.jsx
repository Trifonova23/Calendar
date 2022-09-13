import React from 'react'
import "./CalendarHeader.css";


export const CalendarHeader = ({month, year}) => {
  return (   
    <div className='header-information'>
        <div className='current-month-and-year'>
            <p className='month'> {month} </p>
            <p className='year'> {year} </p>
        </div>
 
        <div className='current-day-today'>
           <p onClick={() => console.log('click <')}  >{"<"} </p> 
            <p onClick={() => console.log('click Today')}>Today</p>
            <p onClick={()=> console.log('click >')}>{">"} </p> 
        </div>
    </div> 
  )
}
