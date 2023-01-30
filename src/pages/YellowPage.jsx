import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const YellowPage = () => {
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
      <h1>黄色いページ</h1>
      <h2>{count}</h2>
      <div className="Button-Container">
        <Button buttonName="+" onClickEvent={onClickPlusCounter} />
        <Button buttonName="-" onClickEvent={onClickMinusCounter} />
      </div>
      <div className="Button-Container">
        <Button buttonName="緑ページへ" onClickEvent={() => navigate('/')} />
        <Button buttonName="赤ページへ" onClickEvent={() => navigate('/red/')} />
      </div>
    </>
  );
};

export default YellowPage;
