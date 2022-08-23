import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Services() {
  return (
      <section id="services">
          <div className="container color01">
              <h2 className="section_title font02">Professional. Experienced. Compassionate.</h2>
              <div className="service_container">
                <ul className="service_list">
                    <li className="service_item">
                        <FontAwesomeIcon icon='fa-people-robbery'/>
                        <h5>Mentorship and Academic Coaching Program (MACP)</h5>
                    </li>
                    <li className="service_item">
                        <FontAwesomeIcon icon='fa-briefcase'/>
                        <h5>Business Communication Program (BCP)</h5>
                    </li>
                    <li className="service_item">
                        <FontAwesomeIcon icon='fa-chart-column'/>
                        <h5>Test Preparation Program (TPP)</h5>
                    </li>
                    <li className="service_item">
                        <FontAwesomeIcon icon='fa-earth-americas'/>
                        <h5>English Program for Immigrants in Canada (EPIC)</h5>
                    </li>
                </ul>
                <Link to='/Programs'>
                    <button className='btn'>Learn More</button>
                </Link>
              </div>
          </div>
      </section>
  )
}

export default Services