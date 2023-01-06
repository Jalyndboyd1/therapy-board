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
        <SidebarOption path="calendar" label="Calendar" />
        <SidebarOption path="telehealth" label="Telehealth" />
        <SidebarOption path="reminders" label="Appointment Reminders" />
      </div>
    </div>
  );
}
