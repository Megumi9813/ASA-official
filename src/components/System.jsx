import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

function System() {
  return (
      <section id="system">
          <div className="system_container">
            <div className="container">
                <div className="section_intro">
                    <div className="section_title font02 color02">Here's How It Works</div>
                </div>
                <ul className="system_list">
                    <li className="system_item">
                        <FontAwesomeIcon icon='fa-comment-dots' className='color02' />
                        <h4 className='font02'>1, Send an email or Start a Chat</h4>
                        <p>What sets ASA apart is our needs-based, diagnostic-prognostic approach.</p>
                    </li>
                    <li className="system_item">
                        <FontAwesomeIcon icon="fa-calendar-days" className='color02' />
                        <h4 className='font02'>2, Book a Test</h4>
                        <p>We invite all prospective students to register for a free assessment where after a comprehensive grammar, reading and writing exam, students are provided with a range of options on how to achieve their desired goal.</p>
                    </li>
                    <li className="system_item">
                        <FontAwesomeIcon icon="fa-chalkboard-user" className='color02' />
                        <h4 className='font02'>3, Choose and built a Study Plan</h4>
                        <p>Students may very well only need a few English classes or may benefit from our long-term coaching program.</p>
                    </li>
                </ul>
                <Link to='#'>
                    <button className='btn'>Contatc Us</button>
                </Link>
            </div>
        </div>
      </section>
  )
}

export default System