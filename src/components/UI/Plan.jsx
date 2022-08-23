import React from 'react'
import { Link } from 'react-router-dom'

function Plan({item}) {
  return (
    <li className="plan_item">
        <figure>
            <img src={item.url} alt="" />
        </figure>
        <h5 className='plan_title font02 color02'>{item.title}</h5>
        <Link to='/ProgramIntro'>
            <button className='btn'>Let's get started!</button>
        </Link>
    </li>
  )
}

export default Plan