import "./css/Sidebar.css";
import logo from "../brandmark-design.png";
import SidebarOption from "../Components/SidebarOption";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <header className="sidebar__header">
        <img src={logo} alt="" />
      </header>
      {/* Sidebar Routes */}
      <div className="sidebar__routes">
        <SidebarOption path="" label="Home" />
        <SidebarOption path="session" label="Session" />
        <SidebarOption path="calendar" label="Calendar" />
        <SidebarOption path="goals" label="Goal Board" />
        <SidebarOption path="journal" label="Journal" />
      </div>
    </div>
  );
}
