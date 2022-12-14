import React from 'react'
import ReviewImg from '../assets/Review.jpg'

function Review() {
  return (
    <section id="review" style={{ backgroundImage: `url(${ReviewImg})`, backgroundSize: 'cover' }}>
        <div className="container">
            <div className="review_container">
                <ul className="review_list">
                    <li className="review_item">
                        <div className="review">
                            <h2 className='font02 color02'>Student Stories</h2>
                            <p className='color02 font01'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod itaque error, molestiae quia facere commodi. In dolorem officia, apora!</p>
                        </div>
                        <div className="name font02">
                            <h4>Ty S. (Brazil)</h4>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Review