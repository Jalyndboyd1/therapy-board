import "./css/Sidebar.css";
import logo from "../brandmark-design.png";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <header className="sidebar__header">
        <img src={logo} alt="" />
        <p>Therapy Board</p>
      </header>
    </div>
  );
}
