import React from 'react'
import { CalendarHeader } from '../CalendarHeader/CalendarHeader'
import { DaysOfWeek } from '../DaysOfWeek/DaysOfWeek'
import { DaysWrapper } from '../DaysWrapper/DaysWrapper'
import "./Calendar.css"

export const Calendar = () => {
//TODO - logic


  return (
     <div>
         <CalendarHeader month={"September"} year={2022}/> 
         <DaysOfWeek/>
         <DaysWrapper/>
     </div>
  )
}
