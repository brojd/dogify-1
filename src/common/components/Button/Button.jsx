import React from 'react';

function Button(props) {
  return (
    <button
      onClick={props.onButtonClick}
      className={props.buttonClassName}
    >
      {props.text}
    </button>
  );
}

export default Button;
