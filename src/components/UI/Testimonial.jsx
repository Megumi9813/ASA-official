import React from 'react'

function Testimonial({testimonial}) {
    
  return (
    <div className="testimonial_content-wrapper">
        <p>{testimonial.comment}</p>
        <div className="student">
            <img src="" alt="" />
            <div className="student_info">
                <span className="student_name">{testimonial.name}</span>
                <span className="country">({testimonial.country})</span>
            </div>
        </div>
    </div>
  )
}

export default Testimonial