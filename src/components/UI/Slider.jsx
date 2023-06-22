import { display } from "@mui/system";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Slider({ reviews }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <>
      {reviews.length > 0 && (
        <>
          <h2
            className="font02 color02"
            style={{ fontSize: "3rem", padding: "35px 0" }}
          >
            Student Stories
          </h2>
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: "20%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {currentSlide !== 0 && (
                <button
                  onClick={() => setCurrentSlide(currentSlide - 1)}
                  style={{
                    border: "none",
                    backgroundColor: "#fff",
                    fontSize: "24px",
                    width: "100%",
                    cursor: "posinter",
                  }}
                  className="color02"
                >
                  <FontAwesomeIcon icon="fa-angle-left" />
                </button>
              )}
            </div>
            <div className="color02 font01" style={{ width: "60%" }}>
              {reviews[currentSlide].comments ? (
                <>
                  {reviews[currentSlide].comments.map((comment, index) => (
                    <>
                      <div key={index}>{comment}</div>
                      <br />
                    </>
                  ))}
                </>
              ) : (
                <div style={{ width: "60%", aspectRatio: "16/9" }}>
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    src={`https://www.youtube.com/embed/${reviews[currentSlide].url}`}
                    allowFullScreen
                  />
                </div>
              )}
            </div>
            <div
              style={{
                width: "20%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {currentSlide !== reviews.length - 1 && (
                <button
                  onClick={() => setCurrentSlide(currentSlide + 1)}
                  style={{
                    border: "none",
                    backgroundColor: "#fff",
                    fontSize: "24px",
                    width: "100%",
                    cursor: "posinter",
                  }}
                  className="color02"
                >
                  <FontAwesomeIcon icon="fa-angle-right" />
                </button>
              )}
            </div>
          </div>
          <div
            className="font02"
            style={{
              backgroundColor: "#2e4051",
              color: "#fff",
              padding: "20px 0",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "center",
              marginTop: "35px",
              alignItems: "center",
              height: "50px",
            }}
          >
            <p style={{ marginRight: "4px" }}>{reviews[currentSlide].name}</p>
            <p>({reviews[currentSlide].country})</p>
            <img
              src={reviews[currentSlide].picture}
              style={{
                maxWidth: "40px",
                marginLeft: "10px",
                borderRadius: "50%",
              }}
            />
          </div>
        </>
      )}
    </>
  );
}

export default Slider;
