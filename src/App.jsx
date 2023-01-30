import { BrowserRouter, Routes, Route } from "react-router-dom";
import GreenPage from "./pages/GreenPage";
import YellowPage from "./pages/YellowPage";
import RedPage from "./pages/RedPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<GreenPage />} />
        <Route path={`/yellow/`} element={<YellowPage />} />
        <Route path={`/red/`} element={<RedPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

