import React from 'react';
import "./Button.css";

const Button = (props) => {
  return (
    <div className="App">
      <button className='BtnSize'
      onClick={props.onClickEvent}>{props.buttonName}</button>
    </div>
  );
};

export default Button;