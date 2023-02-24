import "./css/Sidebar.css";
import logo from "../brandmark-design.png";
import SidebarOption from "../Components/SidebarOption";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <header className="sidebar__header">
        <img src={logo} alt="" />
        {/* CHange logo to: In House */}
      </header>
      {/* Sidebar Routes */}
      {/* links will have dynamic paths */}
      <div className="sidebar__routes">
        <SidebarOption path="" label="Home" />
        <SidebarOption path="session" label="Session" />
        <SidebarOption path="goals" label="Goal Board" />
        <SidebarOption path="calendar" label="Calendar" />
        <SidebarOption path="journal" label="Journal" />
      </div>
    </div>
  );
}
