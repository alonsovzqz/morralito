import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";

const Button = (props) => {
  if (props.href) {
    return (
      <a
        className={`btn btn-${
          props.inverse
            ? `outline-${props.buttonType}-`
            : props.buttonType || "primary"
        } ${props.buttonBlock && "btn-block"} ${props.disabled && "disabled"}`}
        href={props.href}
        role="button"
        aria-disabled={props.disabled}
        tabIndex={props.disabled && "-1"}
      >
        {props.children}
      </a>
    );
  }

  if (props.to) {
    return (
      <Link
        to={props.to}
        className={`btn btn-${
          props.inverse
            ? `outline-${props.buttonType}-`
            : props.buttonType || "primary"
        } ${props.buttonBlock && "btn-block"}`}
      >
        {props.children}
      </Link>
    );
  }

  return (
    <button
      type={props.type}
      className={`btn btn-${
        props.inverse
          ? `outline-${props.buttonType}`
          : props.buttonType || "primary"
      } ${props.buttonBlock && "btn-block"}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
