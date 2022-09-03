import React from 'react'
import { Link } from 'react-router-dom'
import Teacher from './UI/Teacher'

function Team({teachers}) {
  return (
    <section id="team">
      <div className="section_intro">
        <h2 className="section_title font02 color02">Our Team.</h2>
        <p className="font01 color02">
          Having over 70 years of combined teaching experience, we are a group
          of dedicated education professionals who have taught students from a
          wide range of ages in Canada and overseas. We use literature, direct
          and indirect grammar instruction, conversation, and authentic
          materials to engage learners. Our students will develop their language
          proficiency, achieve higher test scores, and gain the confidence to
          flourish in academic environments.
        </p>
      </div>
      <div className="teacher_list-container">
        <div className="container">
          <ul className="teacher_list">
            {teachers
              .sort((a, b) => a.id - b.id)
              .slice(0, 4)
              .map((teacher) => (
                <Teacher teacher={teacher} key={teacher.id} />
              ))}
          </ul>
          <Link to="/About">
            <button className="btn">Learn More</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Team