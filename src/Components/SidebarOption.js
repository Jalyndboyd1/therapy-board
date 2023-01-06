import React from "react";
import { Link } from "react-router-dom";
import "./css/SidebarOption.css";
import { handleSelectedRoute } from "../features/reducers/counterSlice";
import { useDispatch } from "react-redux";

function SidebarOption({ path, label }) {
  const dispatch = useDispatch()
  return (
    <div className="sidebarOption">
      <Link
        to={`/${path}`}
        onClick={() => dispatch(handleSelectedRoute(label))}
      >
        {label}
      </Link>
    </div>
  );
}

export default SidebarOption;
