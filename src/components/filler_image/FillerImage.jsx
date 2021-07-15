import React from "react";

import home1 from "../../images/home1.webp";
import "./filler_image.css";

const FillerImage = (props) => {
  return (
    <>
      <div className="card border-0 rounded-0 bg-dark h-100">
        <img
          className="card-img img-fluid rounded-0 w-100 h-100"
          src={props.image || home1}
          alt="Card"
        />
        <div className="card-img-overlay rounded-0">
          <h1 className="card-title">{props.cardTitle}</h1>
          {props.buttonText ? (
            <a href="true" className="btn btn-outline-info rounded-pill">
              {props.buttonText}
            </a>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default FillerImage;
