import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./pages/Homepage";
import WorkProcess from "./pages/WorkProcess";
import About from "./pages/About";
import ConnectWithUs from "./pages/ConnectWithUs";
import ScrollToTop from "./components/scroll/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/introduction" element={<About />} />
        <Route path="/work-process" element={<WorkProcess />} />
        <Route path="/connect-with-us" element={<ConnectWithUs />} />
        <Route path="/contact" element={<Navigate to="/connect-with-us" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;