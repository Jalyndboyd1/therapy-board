import React from "react";
import { selectRoute } from "../features/reducers/counterSlice";
import { useSelector } from "react-redux";
import "./css/DisplayHeader.css"

function DisplayHeader() {
  const currentRoute = useSelector(selectRoute);
  return (
    <div className="displayHeader">
      <h3>{currentRoute}</h3>
    </div>
  );
}

export default DisplayHeader;
