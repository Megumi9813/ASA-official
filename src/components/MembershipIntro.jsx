import React from 'react'
import { Link } from 'react-router-dom'

function MembershipIntro() {
  return (
      <section id="membershipIntro">
          <div className="programsMembership_container">
            <div className="section_intro">
                <div className="section_title font02 color02">Not Ready to take a 1:1 classes?</div>
                <p>Subscribe our membership plan to make your 1:1 classes more effective!</p>
            </div>
            <div className="programsMembership">
                <ul className="programsMembership_list">
                    <li className="programsMembership_item">
                        <img src="" alt="" />
                        <div className="programsMembership_info">
                            {/* <h5 className='programsMembership_title'></h5> */}
                            <p></p>
                        </div>
                    </li>
                </ul>
                <Link to='#'>
                    <button className='btn'>Membership Plan</button>
                </Link>
            </div>
        </div>
      </section>
  )
}

export default MembershipIntro