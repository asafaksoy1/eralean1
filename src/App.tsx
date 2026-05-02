import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WebsitePage from "./pages/WebsitePage";
import AdsPage from "./pages/AdsPage";
import AIPage from "./pages/AIPage";
import AcquisitionSystemsPage from "./pages/AcquisitionSystemsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/website" element={<WebsitePage />} />
        <Route path="/services/ads" element={<AdsPage />} />
        <Route path="/services/ai" element={<AIPage />} />
        <Route path="/services/acquisition-systems" element={<AcquisitionSystemsPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
