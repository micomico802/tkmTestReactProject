import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Button from '../components/Button';

const RedPage = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  const onClickPlusCounter = () => {
    setCount((prevState) => prevState + 1);
  };

  const onClickMinusCounter = () => {
    setCount((prevState) => prevState - 1);
  };

  return (
    <>
      <h1>赤いページ</h1>
      <h2>{count}</h2>
      <div className="Button-Container">
        <Button buttonName="+" onClickEvent={onClickPlusCounter} />
        <Button buttonName="-" onClickEvent={onClickMinusCounter} />
      </div>
      <div className="Button-Container">
        <Button
          buttonName="黄色ページへ"
          onClickEvent={() => navigate("/yellow/")}
        />
        <Button
          buttonName="緑ページへ"
          onClickEvent={() => navigate("/")}
        />
      </div>
    </>
  );
}

export default RedPage