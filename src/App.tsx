import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./pages/Homepage";
import WorkProcess from "./pages/WorkProcess";
import About from "./pages/About";
import ConnectWithUs from "./pages/ConnectWithUs";
import ScrollToTop from "./components/scroll/ScrollToTop";

import BlogsPage from "./pages/BlogsPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import WebsiteDevelopmentPage from "./pages/WebsiteDevelopmentPage";
import WebsitePackageDetailPage from "./pages/WebsitePackageDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />

      <main id="main-content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/introduction" element={<About />} />
          <Route path="/work-process" element={<WorkProcess />} />
          <Route path="/connect-with-us" element={<ConnectWithUs />} />
          <Route path="/contact" element={<Navigate to="/connect-with-us" replace />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:slug" element={<BlogDetailPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route path="/blog" element={<Navigate to="/blogs" replace />} />
          
          {/* Website Development Service & Package Details Pages */}
          <Route path="/services/website-development" element={<WebsiteDevelopmentPage />} />
          <Route path="/services/website-development/:packageId" element={<WebsitePackageDetailPage />} />
          <Route path="/website-development" element={<Navigate to="/services/website-development" replace />} />
          <Route path="/website-development/:packageId" element={<WebsitePackageDetailPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;