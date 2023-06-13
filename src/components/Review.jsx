import React from "react";
import ReviewImg from "../assets/Review.jpg";
import Slider from "./UI/Slider";

function Review({ reviews }) {
  return (
    <section
      id="review"
      style={{ backgroundImage: `url(${ReviewImg})`, backgroundSize: "cover" }}
    >
      <div className="container">
        <div className="review_container">
          <ul className="review_list">
            <li className="review_item">
              <Slider reviews={reviews} />
              {/* <div className="review">
                <h2 className="font02 color02">Student Stories</h2>
                <p className="color02 font01">
                  With the assistance of the exceptional teachers and programs
                  here, you are on the right path to pursue whatever you aspire
                  to achieve in the future.
                </p>
              </div>
              <div className="name font02">
                <h4>Miki T. (Japan)</h4>
              </div> */}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Review;
