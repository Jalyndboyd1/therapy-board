import "./css/Display.css";
import DisplayHeader from "./DisplayHeader";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Session from "./pages/Session";
import { useSelector } from "react-redux";
import { selectPath } from "../features/reducers/counterSlice";

export default function Display() {
  const selectedPath = useSelector(selectPath)

  return (
    <div className="display">
      <DisplayHeader />
      <Routes>
        {/* Paths will be dynamic to user later on */}
        <Route path="/" element={<Home />} />
        <Route path={`/session/${selectedPath}`} element={<Session />} />
      </Routes>
    </div>
  );
}
