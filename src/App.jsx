import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Timeline from "./components/Timeline";
import Memory from "./components/Memory";
import Surprise from "./components/Surprise";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/memory/:id" element={<Memory />} />
        <Route path="/surprise" element={<Surprise />} />
      </Routes>
    </Router>
  );
}

export default App;