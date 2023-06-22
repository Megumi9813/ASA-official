import React from 'react'

function Testimonial({testimonial}) {
    
  return (
    <div className="testimonial_content-wrapper font01" style={{fontSize: "18px"}}>
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