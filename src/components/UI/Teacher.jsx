import React, {useState} from 'react'

function Teacher({teacher}) {
  const [showMore, setShowMore] = useState(false);
  const comment = teacher.comment

  return (
      <li>
        <figure>
            <img src={teacher.img} alt="" />
            <div className="teacher_tag">
                <p className='color02 font02'>{teacher.name}</p>
                {/* <p className='color02 font01 teacher_position'>{teacher.position}</p> */}
            </div>
        </figure>
        <p className='teacher_para color02 font01'>
          {showMore ? comment : `${comment.substring(0, 150)}`}
          <button className='color02 font01' onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show Less" : "... Show More"}
          </button>
        </p>
      </li>
  )
}

export default Teacher