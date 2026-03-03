import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="icon">
        <img src={props.img} className="img-icon" alt="" />
        <button className="save">
          Save{" "}
          <img
            src="https://cdn-icons-png.flaticon.com/128/9511/9511721.png"
            alt=""
          />
        </button>
      </div>
      <div className="about">
        <div className="company-info">
          <h3>{props.company}</h3>
          <h6 className="updates">{props.updated}</h6>
        </div>
        <h3>{props.designation} </h3>
        <div className="job-type">
          <h5>{props.jobtype} </h5>
          <h5>{props.post} </h5>
        </div>
      </div>
      <div className="cta">
              <div>
          <h4>{props.fee} </h4>
          <h6>{props.location} </h6>
              </div>
              <button className="apply">Apply now</button>
      </div>
    </div>
  );
};

export default Card;
