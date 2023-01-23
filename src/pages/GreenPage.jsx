import React, { useState } from 'react';
import Button from '../components/Button';
import "../css/App.css";

const GreenPage = () => {
  const [count, setCount] = useState(0);

  const onClickPlusCounter = () => {
    setCount((prevState) => prevState + 1);
  };

  const onClickMinusCounter = () => {
    setCount((prevState) => prevState - 1);
  };

  return (
    <>
      <h1>緑のページ</h1>
      <h2>{count}</h2>
      <div className="Button-Container">
        <Button buttonName="+" onClickEvent={onClickPlusCounter} />
        <Button buttonName="-" onClickEvent={onClickMinusCounter} />
      </div>
    </>
  );
}

export default GreenPage