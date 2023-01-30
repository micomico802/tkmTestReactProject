import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { decrease, increase } from "../redux/greenSlice";
import Button from "../components/Button";
import "../css/App.css";

const GreenPage = () => {
  const navigate = useNavigate();

  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const onClickPlusCounter = () => {
    dispatch(increase());
  };

  const onClickMinusCounter = () => {
    dispatch(decrease());
  };

  return (
    <>
      <h1>緑のページ</h1>
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
          buttonName="赤ページへ"
          onClickEvent={() => navigate("/red/")}
        />
      </div>
    </>
  );
};

export default GreenPage;
