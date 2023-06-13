import React from "react";
import TestimonialPhoto from "./UI/TestimonialPhoto";

function TestimonialPhotos({ testimonials }) {
  return (
    <section id="testimonialPhotos">
      <div className="testimonialPhotos_container">
        <div className="container">
          <ul className="testimonialPhotos_list">
            {testimonials
              .sort((a, b) => a.id - b.id)
              .slice(0, 2)
              .map((testimonial) => (
                <TestimonialPhoto
                  testimonial={testimonial}
                  key={testimonial.id}
                />
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default TestimonialPhotos;
