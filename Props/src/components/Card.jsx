import React from 'react'

const Card = (props) => {
    console.log(props.user, props.age);
    
  return (
    <div>
      <div className="card">
        <img
          src={props.img}
          alt="profile picture"
        />
        <h1>{props.user}, {props.age} </h1>
        <p>Lorem ipsum dolor sit amet hii ho adipisicing elit.</p>
        <button className="info-btn">View Profile</button>
      </div>
    </div>
  );
}

export default Card
