import Home from "./pages/Home"
import Devlog from "./pages/Devlog"
import GoatCounterTracker from "./components/GoatCounterTracker";

import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    <BrowserRouter>

      <GoatCounterTracker />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/devlog" element={<Devlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;