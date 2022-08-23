import React from 'react'
import AsaLogoBrown from '../assets/AsaLogoBrown.png'

function Footer() {
  return (
    <div id="footer">
        <div className="container color01">
            <div className="footer_wrapper">
                <div className="footer_left">
                    <figure>
                        <img src={AsaLogoBrown} alt="" />
                    </figure>
                    <p className='font01'>For our latest membership plan and Blog subscribe below</p>
                    <div className="email_container">
                        <input type="email" />
                        <button className='btn'>Send</button>
                    </div>
                    <p className='font01'>Thanks for submitting!</p>
                </div>
                <div className="footer_right">
                    <div className="menu font02">
                        <h3>Menu</h3>
                        <ul className="menu_list font01">
                            <li className='link_item'>Home</li>
                            <li className='link_item'>About</li>
                            <li className='link_item'>Programs</li>
                            <li className='link_item'>Book</li>
                            <li className='link_item'>Testimonials</li>
                            <li className='link_item'>Blog</li>
                        </ul>
                    </div>
                    <div className="social font02">
                        <h3>Social</h3>
                        <ul className="social_list font01">
                            <li className='link_item'>Facebook</li>
                            <li className='link_item'>Instagram</li>
                            <li className='link_item'>Linkedin</li>
                            <li className='link_item'>Twitter</li>
                            <li className='link_item'>Youtube</li>
                        </ul>
                    </div>
                    <div className="contact font02">
                        <h3>Contact</h3>
                        <ul className="contact_list font01">
                            <li className="link_item contact_item">info@asavancouver.com</li>
                            <li className="link_item contact_item">604-774-4501</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copyRight font01">Copyright © 2022 Academy of Scholastic Achievement - All Rights Reserved.</div>
        </div>
    </div>
  )
}

export default Footer