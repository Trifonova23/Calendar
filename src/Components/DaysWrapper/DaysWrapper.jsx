import React from 'react'
import { DayBox } from '../DayBox/DayBox'
import "./DaysWrapper.css"

export const DaysWrapper = () => {

 const allDaysBox = () => {
  const days = [];
    for (let i = 0; i < 42; i++) {
      days.push(<DayBox numberOfTheDay={i} eventsOfTheDay={'event'} key={i}/> );
  }
  return days;
 }

  return (
    <div className='all-boxes'>
     { allDaysBox() }
    </div>
  )
}
