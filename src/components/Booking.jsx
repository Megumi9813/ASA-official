import React from "react";
import Avatar from "@mui/material/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { calendarData } from "../calendarData";

function Booking({ teachers }) {
  return (
    <section id="booking">
      <div className="booking_container">
        <div className="container">
          <div className="section_intro">
            <div className="section_title font02 color02">Book a free Assessment</div>
            <p className="font01 color02">
              Free speaking, writing, reading and grammar assessment to identify
              your needs.
            </p>
          </div>
          <ul className="booking_list color02">
            {calendarData.map((calendar) => (
              <a href={calendar.url} target="_blank">
                <li className="booking_item">
                  <h3>{calendar.title}</h3>
                  <div className="booking_item-info">
                    <div className="booking_during">
                      <FontAwesomeIcon icon="fa-clock" />
                      55 minutes
                    </div>
                    <button className="btn">Free Assessment</button>
                  </div>
                </li>
              </a>
            ))}
            {/* <Link to="/Booking/calendar">
              <li className="booking_item">
                <h3>CELPIP</h3>
                <div className="booking_item-info">
                  <div className="booking_teacher">
                    {teachers
                      .sort((a, b) => a.id - b.id)
                      .slice(5, 6)
                      .map((teacher) => (
                        <>
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
                <h3>General(Listning)</h3>
                <div className="booking_item-info">
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
                  <div className="booking_during">
                    <FontAwesomeIcon icon="fa-clock" />
                    45 minutes
                  </div>
                  <button className="btn">Book a Test</button>
                </div>
              </li>
            </Link> */}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Booking;
