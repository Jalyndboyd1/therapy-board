import "./css/Display.css";
import DisplayHeader from "./DisplayHeader";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

export default function Display() {
  return (
    <div className="display">
      {/* Header */}
      <DisplayHeader />
      {/* Set Routes */}
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}
