import { useState } from "react";
import GreenPage from "./pages/GreenPage";
import YellowPage from "./pages/YellowPage";
import RedPage from "./pages/RedPage";
import Button from "./components/Button";

const App = () => {
  const [pageChange, setPageChange] = useState("green");

  return (
    <>
     <GreenPage />
      <div className="Button-Container">
        <Button
          buttonName="赤エリア"
          onClickEvent={() => setPageChange("red")}
        />
        <Button
          buttonName="黄色エリア"
          onClickEvent={() => setPageChange("yellow")}
        />
        <Button
          buttonName="緑エリア"
          onClickEvent={() => setPageChange("green")}
        />
      </div>
    </>
  );
};

export default App;
