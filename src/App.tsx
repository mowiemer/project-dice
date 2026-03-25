import Home from "./pages/Home"
import Devlog from "./pages/Devlog"
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/devlog" element={<Devlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;