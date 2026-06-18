import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import BagList from "@/pages/BagList";
import BagDetail from "@/pages/BagDetail";
import Navbar from "@/components/Navbar";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bags" element={<BagList />} />
          <Route path="/bags/:id" element={<BagDetail />} />
        </Routes>
      </div>
    </Router>
  );
}
