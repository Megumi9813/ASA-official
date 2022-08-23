import React from 'react'
import Testimonial from './UI/Testimonial'
import Slider from "react-slick";

function Testimonials({testimonials}) {
    // const PrevArrow = (props) => {
    //     // console.log(props);
    //     const { className, onClick } = props;
    //     return (
    //       <div className={className} onClick={onClick}>
    //         <FontAwesomeIcon icon="fa-chevron-left" className='nextArrow'/>
    //       </div>
    //     );
    // };

    // const NextArrow = (props) => {
    //     const { className, onClick } = props;
    //     return (
    //       <div className={className} onClick={onClick}>
    //         <FontAwesomeIcon icon="fa-chevron-left" />
    //       </div>
    //     );
    // };

    // const NextArrow = ({ currentSlide, slideCount, ...props }) => (
    //     <FontAwesomeIcon icon="fa-chevron-right" {...props} />
    // );

    // const PrevArrow = ({ currentSlide, slideCount, ...props }) => (
    //     <FontAwesomeIcon icon="fa-chevron-left" {...props} />
    // );

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // nextArrow: <NextArrow />,
        // prevArrow: <PrevArrow />
    };

  return (
      <section id="testimonials">
          <div className="testimonials_container">
            <div className="container">
                <div className="section_intro">
                    <div className="section_title font02">What Our Students Say</div>
                </div>
                <div className="testimonial_list">
                    <Slider {...settings}>
                        {
                            testimonials
                            .slice(2)
                            .map(testimonial => (
                                <div className="testimonial_item" key={testimonial.id}>
                                    <Testimonial testimonial={testimonial} />
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
      </section>
  )
}

export default Testimonials