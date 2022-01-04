import CountUp from "./countUp";
import KokyakuSoshiki from "./kokyakuSoshiki";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./header";

function MainComponent() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<CountUp />} />
          <Route path="/about" element={<KokyakuSoshiki />} />
        </Routes>
      </Router>
    </>
  );
}

export default MainComponent;
