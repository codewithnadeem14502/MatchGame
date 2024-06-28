// App.js
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Reward from "./pages/Reward";
import NotMatch from "./components/NotMatch";
import Instruction from "./pages/Instruction";
import Activity from "./pages/Activity";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Reward" element={<Reward />} />
        <Route path="/instruction" element={<Instruction />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </>
  );
};

export default App;
