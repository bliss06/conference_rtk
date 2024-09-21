import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import ConfPage from "./components/ConfPage";
import { useNavigate } from "react-router-dom";

import "./App.css";
import LandingPage from "./components/LandingPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/conf" element={<ConfPage />} />
      </Routes>
    </>
  );
}

export default App;
