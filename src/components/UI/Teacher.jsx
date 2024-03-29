import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Teacher({ teacher }) {
  const [showMore, setShowMore] = useState(false);
  const comment = teacher.selfIntroduction

  return (
    <li>
      <figure>
        <img src={teacher.img} alt="" />
        <div className="teacher_tag">
          <p className="color02 font02">{teacher.displayName}</p>
        </div>
      </figure>
      <p className="teacher_para color02 font01">
        {showMore ? comment : `${comment.substring(0, 150)}`}
      </p>
      <button className="color02 font01 expand-button" onClick={() => setShowMore(!showMore)}>
        {showMore ? (
          <>
            <FontAwesomeIcon icon="fa-solid fa-minus" />
            <span>Show Less</span>
          </>
        ) : (
          <>
            <FontAwesomeIcon icon="fa-solid fa-plus" />
            <span>Show More</span>
          </>
        )}
      </button>
    </li>
  );
}

export default Teacher