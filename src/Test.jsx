

let currentData = moment() //current data

let currentMonth = moment().format('MMMM') //object with information for current data

let daysInTheCurrentMonth = moment().daysInMonth() //30

let previousMonth = moment().subtract(1,'months').endOf('month').format('YYYY-MM-DD');  '2022-08-31'

const monthMinusOneName =  moment('2021-08-10').subtract(1, "month").startOf("month").format('MMMM'); //July
