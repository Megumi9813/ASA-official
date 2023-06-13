import React from 'react'
import Avatar from '@mui/material/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

function Booking({teachers}) {
  return (
    <section id="booking">
      <div className="booking_container">
        <div className="container">
          <div className="section_intro">
            <div className="section_title font02 color02">
              Book a free assessment
            </div>
            <p className="font01 color02">
              Free speaking, writing, reading and grammar assessment to identify
              your needs.
            </p>
          </div>
          <ul className="booking_list">
            <Link to="/Booking/calendar">
              <li className="booking_item">
                <h3>CELPIP</h3>
                <div className="booking_item-info">
                  <div className="booking_teacher">
                    {teachers
                      .sort((a, b) => a.id - b.id)
                      .slice(5, 6)
                      .map((teacher) => (
                        <>
                          {/* <Avatar src={teacher.img} /> */}
                          <span>{teacher.name}</span>
                        </>
                      ))}
                  </div>
                  <div className="booking_during">
                    <FontAwesomeIcon icon="fa-clock" />
                    45 minutes
                  </div>
                  <button className="btn">Book a Test</button>
                </div>
              </li>
            </Link>
            <Link to="/Booking/calendar">
              <li className="booking_item">
                <h3>General(Speaking)</h3>
                <div className="booking_item-info">
                  {/* <div className="booking_teacher">
                    {teachers
                      .sort((a, b) => a.id - b.id)
                      .slice(0, 1)
                      .map((teacher) => (
                        <>
                          <Avatar src={teacher.img} />
                          <span>{teacher.name}</span>
                        </>
                      ))}
                  </div> */}
                  <div className="booking_during">
                    <FontAwesomeIcon icon="fa-clock" />
                    45 minutes
                  </div>
                  <button className="btn">Book a Test</button>
                </div>
              </li>
            </Link>
            {/* <Link to="/Booking/calendar">
              <li className="booking_item">
                <h3>General(Reading)</h3>
                <div className="booking_item-info">
                  <div className="booking_during">
                    <FontAwesomeIcon icon="fa-clock" />
                    45 minutes
                  </div>
                  <button className="btn">Book a Test</button>
                </div>
              </li>
            </Link> */}
            {/* <Link to="/Booking/calendar">
              <li className="booking_item">
                <h3>General(Writing)</h3>
                <div className="booking_item-info">
                  <div className="booking_during">
                    <FontAwesomeIcon icon="fa-clock" />
                    45 minutes
                  </div>
                  <button className="btn">Book a Test</button>
                </div>
              </li>
            </Link> */}
            <Link to="/Booking/calendar">
              <li className="booking_item">
                <h3>General(Listning)</h3>
                <div className="booking_item-info">
                  {/* <div className="booking_teacher">
                    {teachers
                      .sort((a, b) => a.id - b.id)
                      .slice(3, 4)
                      .map((teacher) => (
                        <>
                          <Avatar src={teacher.img} />
                          <span>{teacher.name}</span>
                        </>
                      ))}
                  </div> */}
                  <div className="booking_during">
                    <FontAwesomeIcon icon="fa-clock" />
                    45 minutes
                  </div>
                  <button className="btn">Book a Test</button>
                </div>
              </li>
            </Link>
            <Link to="/Booking/calendar">
              <li className="booking_item">
                <h3>IELTS</h3>
                <div className="booking_item-info">
                  {/* <div className="booking_teacher">
                    {teachers
                      .sort((a, b) => a.id - b.id)
                      .slice(4, 5)
                      .map((teacher) => (
                        <>
                          <Avatar src={teacher.img} />
                          <span>{teacher.name}</span>
                        </>
                      ))}
                  </div> */}
                  <div className="booking_during">
                    <FontAwesomeIcon icon="fa-clock" />
                    45 minutes
                  </div>
                  <button className="btn">Book a Test</button>
                </div>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Booking