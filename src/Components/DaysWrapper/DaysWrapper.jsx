import React from 'react'
import { DayBox } from '../DayBox/DayBox'
import moment from 'moment'
import "./DaysWrapper.css"

export const DaysWrapper = ({currentDay}) => {

let daysToShowFromPreviousMonth = Number(currentDay.startOf('month').format('d'))
let allDaysInTheMonth = currentDay.daysInMonth()
let daysFromTheNextMonth = 42 - allDaysInTheMonth - daysToShowFromPreviousMonth

 const allDaysBox = () => {
  const days = [];

  // Days for the previous month
  for (let x = 0; x < daysToShowFromPreviousMonth; x++) { 
    let dayFromThePreviousMonth = daysToShowFromPreviousMonth - x
    let objectWithInformationForTheFirstDay = moment(currentDay).startOf('month')
    let previousDay = objectWithInformationForTheFirstDay.subtract(dayFromThePreviousMonth, 'days').format('D')
    days.push(<DayBox numberOfTheDay={previousDay} eventsOfTheDay={'event'} key={x+'daysFromPrevMonth'}/> );
  }

  // Days for the current month
  for (let i = 1; i <= allDaysInTheMonth; i++) {
    let currentDayIsToday = Number(moment().format('D')) === i && moment().format('MM') === currentDay.format('MM')
    days.push(<DayBox numberOfTheDay={i} isCurrentDay={ currentDayIsToday  } eventsOfTheDay={'event'} key={i}/> );
  }
  
  // Days for the next month
  for (let t = 1; t <= daysFromTheNextMonth; t++) {
    days.push(<DayBox numberOfTheDay={t} eventsOfTheDay={'event'} key={t + "daysFromNextMonth"}/> );
  }

  return days;
 }

  return (
    <div className='all-boxes'>
     { allDaysBox() }
    </div>
  )
}
