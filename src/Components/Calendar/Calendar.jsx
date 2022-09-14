import React, {useState}  from 'react'
import { CalendarHeader } from '../CalendarHeader/CalendarHeader'
import { DaysOfWeek } from '../DaysOfWeek/DaysOfWeek'
import { DaysWrapper } from '../DaysWrapper/DaysWrapper'
import moment from 'moment'
import "./Calendar.css"

export const Calendar = () => {

  const [currentDay, setCurrentDay] = useState(moment())

  return (
     <div>
         <CalendarHeader currentDay={currentDay}  updateMonth={(newMonth)=>setCurrentDay(moment(newMonth))}/> 
         <DaysOfWeek/>
         <DaysWrapper currentDay={currentDay}/>
     </div>
  )
}
