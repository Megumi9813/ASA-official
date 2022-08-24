import React from 'react'
import LandingImg from '../assets/LandingImg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Landing() {
  return (
    <section id="landing">
      <header>
        <div className="header_container">
          <div className="header_description color02">
            <h1 className='font02'>English classes for the 21st century</h1>
            <h3 className='font01'>For Anyone, from Anywhere, at Anytime.</h3>
          </div>
              <figure className='header_img-wrapper'>
                <img src={LandingImg} alt="" />
              </figure>
        </div>
      </header>
      <a href="#">
          <button className="toTop">
            <FontAwesomeIcon icon="fa-up-long" />
            <span>TO TOP</span>
          </button>
      </a>
      <a href="#">
        <button className='mail_btn'>
          <FontAwesomeIcon icon="fa-envelope" />
        </button>
      </a>
    </section>
  )
}

export default Landing