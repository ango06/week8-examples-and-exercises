import "./App.css";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Destinations from "./pages/Destinations.jsx";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/destinations" element={<Destinations />} />
        </Routes> 
      </BrowserRouter>
    </>
  );
}

export default App;
