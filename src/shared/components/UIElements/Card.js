import React from "react";

import Button from "../FormElements/Button";

import "./Card.css";

const Card = (props) => {
  return (
    <div className={`card ${props.iconName && "flex-row"}`}>
      {props.iconName && (
        <div className="card-icon d-flex align-self-center p-4">
          <i className={`bs bs-${props.iconName}`}></i>
        </div>
      )}
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <Button to={props.to}>{props.btnText}</Button>
      </div>
    </div>
  );
};

export default Card;
