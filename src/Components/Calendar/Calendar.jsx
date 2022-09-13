import React, {useState}  from 'react'
import { CalendarHeader } from '../CalendarHeader/CalendarHeader'
import { DaysOfWeek } from '../DaysOfWeek/DaysOfWeek'
import { DaysWrapper } from '../DaysWrapper/DaysWrapper'
import moment from 'moment'
import "./Calendar.css"

export const Calendar = () => {

  const [currentDay, setCurrentDay] = useState(moment())
  
  let currentMonth = currentDay.format('MMMM')
  let currentYear = currentDay.format('YYYY')

  return (
     <div>
        {console.log('rerender', currentDay)}
         <CalendarHeader currentDay={currentDay} month={currentMonth} year={currentYear} updateMonth={(newMonth)=>setCurrentDay(moment(newMonth))}/> 
         <DaysOfWeek/>
         <DaysWrapper currentDay={currentDay}/>
     </div>
  )
}
