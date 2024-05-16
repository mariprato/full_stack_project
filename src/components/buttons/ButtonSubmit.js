import React from 'react';
import "./ButtonSubmit.css"

function ButtonSubmit(props) {
  return (
    <button
    type='button'
    className="button-submit">{props.text}</button>
  );
}

export default ButtonSubmit;