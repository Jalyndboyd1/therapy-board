import "./css/Display.css";
import DisplayHeader from "./DisplayHeader";
import Home from "./pages/Home";

export default function Display() {
  return (
    <div className="display">
      {/* Header */}
      <DisplayHeader />
      {/* Set Routes */}
      <Home />
    </div>
  );
}
