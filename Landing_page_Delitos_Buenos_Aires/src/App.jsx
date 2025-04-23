import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import { Graficos } from "./routes/Graficos";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/graficos" element={<Graficos></Graficos>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
