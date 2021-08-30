import React from "react";


const Card = (props) => {
  return (

    <div className="card">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.cardTitle}</h5>
        <p className="card-text">{props.cardText}</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">{props.updateTime}</small>
      </div>
    </div>

  );
};

export default Card;
