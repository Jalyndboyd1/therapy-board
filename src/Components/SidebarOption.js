import React from "react";
import { Link } from "react-router-dom";
import './css/SidebarOption.css'

function SidebarOption({path, label}) {
  return <div className="sidebarOption">
    <Link to={`/${path}`}>{label}</Link>
  </div>;
}

export default SidebarOption;
