import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function TestimonialPhotos({testimonial}) {
  return (
    <li className="testimonialPhotos_item font01" style={{ fontSize: "16px" }}>
      <FontAwesomeIcon icon="fa-quote-left" className="quote-up" />
      <p>{testimonial.comment}</p>
      <div className="student_info-wrapper">
        <img src={testimonial.image.fields.file.url} alt="" />
        <div className="student_info">
          <div className="studentName">{testimonial.name}</div>
          <div className="country">{testimonial.country}</div>
        </div>
      </div>
      <FontAwesomeIcon icon="fa-quote-right" className="quote-down" />
    </li>
  );
}

export default TestimonialPhotos