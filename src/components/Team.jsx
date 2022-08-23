import React from 'react'
import { Link } from 'react-router-dom'
import Teacher from './UI/Teacher'

function Team({teachers}) {
  return (
    <section id="team">
        <div className="section_intro">
            <h2 className="section_title font02 color02">Our Team.</h2>
            <p className='font01 color02'>This is your Team section. It's a great place to introduce your team and talk about what makes it special, such as your culture and work philosophy. Don't be afraid to illustrate personality and character to help users connect with your team.</p>
        </div>
        <div className="teacher_list-container">
            <div className="container">
                <ul className="teacher_list">
                    {
                        teachers
                        .sort((a, b) => a.id - b.id)
                        .slice(0, 4).map(teacher => (
                            <Teacher teacher={teacher} key={teacher.id}/>
                        ))
                    }
                </ul>
                <Link to="/About">
                    <button className='btn'>Lean More</button>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Team