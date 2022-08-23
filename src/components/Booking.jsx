import React from 'react'
import Iframe from 'react-iframe'

function Booking() {
  return (
    <section id="booking">
        <div className="booking_container">
            <div className="container">
                <div className="section_intro">
                    <div className="section_title font02 color02">Book a free assessment</div>
                    <p className='font01 color02'>Free speaking, writing, reading and grammar assessment to identify your needs.</p>
                </div>
                <Iframe 
                    url='https://calendar.google.com/calendar/appointments/schedules/AcZssZ2mhqP3CouPkpOag5mAiJ3r3SUDCz1Q11Qnhq1U6CAphrO0RuKTrR1fd2rwdRTCkFGWpDMFay1C?gv=true'
                ></Iframe>
            </div>
        </div>
    </section>
  )
}

export default Booking