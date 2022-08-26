import React from 'react'
import Nav from '../components/Nav'
import Iframe from 'react-iframe'

function Calendar() {
  return (
    <div id="calendar">
        <Nav />
        <Iframe 
            url='https://calendar.google.com/calendar/appointments/schedules/AcZssZ2mhqP3CouPkpOag5mAiJ3r3SUDCz1Q11Qnhq1U6CAphrO0RuKTrR1fd2rwdRTCkFGWpDMFay1C?gv=true'
        ></Iframe>
    </div>
  )
}

export default Calendar