import React from 'react'
import { DayBox } from '../DayBox/DayBox'
import moment from 'moment'
import events from '../../Data/Events.json'
import "./DaysWrapper.css"

export const DaysWrapper = ({currentDay}) => {


let daysToShowFromPreviousMonth = Number(currentDay.startOf('month').format('d'))
let allDaysInTheMonth = currentDay.daysInMonth()
let daysFromTheNextMonth = 42 - allDaysInTheMonth - daysToShowFromPreviousMonth

 const allDaysBox = () => {
   const days = [];

  // Previous month boxes
  for (let x = 0; x < daysToShowFromPreviousMonth; x++) { 

    let dayFromThePreviousMonth = daysToShowFromPreviousMonth - x
    let objectWithInformationForTheFirstDay = moment(currentDay).startOf('month')
    let previousDay = objectWithInformationForTheFirstDay.subtract(dayFromThePreviousMonth, 'days')
    let previousDayFormattedDay = previousDay.format('D')
    let previousDayFormattedYMD = previousDay.format('YYYY-MM-DD')

    let currentDayEvent = ''

    for (let e = 0; e < events.data.length; e++) {
      if(events.data[e].date === previousDayFormattedYMD){
         currentDayEvent = {...events.data[e]} 
      }
    }
    days.push(<DayBox isCurrentMonth={false} numberOfTheDay={previousDayFormattedDay} eventsOfTheDay={currentDayEvent} key={x+'daysFromPrevMonth'}/> );
  }

  // // Current month boxes
  for (let i = 0; i < allDaysInTheMonth; i++) {
    let currentDayIsToday = Number(moment().format('D')) === i + 1 && moment().format('MM') === currentDay.format('MM')
    let objectWithInformationForTheFirstDay = moment(currentDay).startOf('month')
    let currentIterationOfTheCurrentMonth = objectWithInformationForTheFirstDay.add(i, 'days')
    let currentIterationOfTheCurrentMonthFormattedDD = currentIterationOfTheCurrentMonth.format('DD')
    let currentIterationOfTheCurrentMonthFormattedYMD = currentIterationOfTheCurrentMonth.format('YYYY-MM-DD')
    
    let currentDayEvent = {}
    for (let e = 0; e < events.data.length - 1; e++) {
      if(events.data[e].date === currentIterationOfTheCurrentMonthFormattedYMD){
         currentDayEvent = {...events.data[e]} 
      }
    }
    days.push(<DayBox isCurrentMonth={true} numberOfTheDay={currentIterationOfTheCurrentMonthFormattedDD} isCurrentDay={currentDayIsToday} eventsOfTheDay={currentDayEvent}  key={i}/> );
  }

  // // Next month boxes
  for (let t = 0; t <= daysFromTheNextMonth - 1; t++) {
    let nextMonthFirstDay = moment(currentDay).add(1, 'M').startOf('month');
    let currentIterationOfTheNextMonth = nextMonthFirstDay.add(t, 'days')
    let currentIterationOfTheNextMonthFormattedDD = currentIterationOfTheNextMonth.format('DD')
    let currenIterationOfTheNextMonthFormattedYMD = currentIterationOfTheNextMonth.format('YYYY-MM-DD')

    let currentDayEvent = {}

    for (let e = 0; e < events.data.length - 1; e++) {
      if(events.data[e].date === currenIterationOfTheNextMonthFormattedYMD){
        currentDayEvent = {...events.data[e]} 
      }
    }
    days.push(<DayBox isCurrentMonth={false} numberOfTheDay={currentIterationOfTheNextMonthFormattedDD} eventsOfTheDay={currentDayEvent} key={t + "daysFromNextMonth"}/> );
  }

  return days;
 }

  return (
    <div className='all-boxes'>
     { allDaysBox() }
    </div>
  )
}
