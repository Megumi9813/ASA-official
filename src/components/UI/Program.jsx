import React from 'react'

function Program({program}) {
  return (
    <li className="program_item">
      <figure>
        <img src={program.url} alt="" />
      </figure>
      <div className="program_info">
        <h4 className='program_title font02 color02'>{program.title}</h4>
        <p className='font01 color02'>{program.para}</p>
      </div>
    </li>
  )
}

export default Program