import "./css/Display.css";
import DisplayHeader from "./DisplayHeader";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Session from "./pages/Session";

export default function Display() {
  return (
    <div className="display">
      <DisplayHeader />
      <Routes>
        {/* Paths will be dynamic to user later on */}
        <Route path="/" element={<Home />} />
        <Route path="/session" element={<Session />} />
      </Routes>
    </div>
  );
}
