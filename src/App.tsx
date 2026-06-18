import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import BagList from "@/pages/BagList";
import BagDetail from "@/pages/BagDetail";
import Favorites from "@/pages/Favorites";
import Navbar from "@/components/Navbar";
import ToastContainer from "@/components/Toast";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bags" element={<BagList />} />
          <Route path="/bags/:id" element={<BagDetail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
}
