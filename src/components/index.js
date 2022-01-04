import CountUp from "./countUp";
import KokyakuUser from "./kokyakuUser";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./header";

function MainComponent() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<CountUp />} />
          <Route path="/users" element={<KokyakuUser />} />
        </Routes>
      </Router>
    </>
  );
}

export default MainComponent;
