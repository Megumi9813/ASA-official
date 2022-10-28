import React from 'react'
import Plan from './UI/Plan'
import { programData } from '../programData'

function Plans() {
  return (
      <section id="plans">
        <div className="plan_container">
            <div className="container">
                <div className="section_intro">
                    <div className="section_title font02 color02">What We Offer</div>
                    <p className='font01 color02'>Providing English language training based on the most effective approaches to language acquisition in order to maximize performance on standardized tests such as CELPIP, SAT, TOEFL, Cambridge and IELTS.</p>
                </div>
                <ul className="plan_list">
                    {
                        programData
                        .slice(0, 3)
                        .map(item => (
                            <Plan item={item} key={item.id}/>
                        ))
                    }
                </ul>
            </div>
        </div>
      </section>
  )
}

export default Plans