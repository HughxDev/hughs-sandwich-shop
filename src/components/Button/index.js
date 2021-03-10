import React from "react";
import "./Button.css";

export default function Button(props) {
  const { id, primary, secondary, onClick } = props;
  let className = `button`;

  if (primary) {
    className += ` button--primary`;
  } else if (secondary) {
    className += ` button--secondary`;
  }

  return (
    <button id={id} className={className} onClick={onClick}>
      {props.children}
    </button>
  );
}
