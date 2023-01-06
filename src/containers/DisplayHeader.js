import React from "react";
import { selectRoute } from "../features/reducers/counterSlice";
import { useSelector } from "react-redux";
import "./css/DisplayHeader.css";
import LoginIcon from "@mui/icons-material/Login";
import { Button } from "@mui/material";

function DisplayHeader() {
  const currentRoute = useSelector(selectRoute);
  return (
    <div className="displayHeader">
      <h3>{currentRoute}</h3>
      <Button sx={{
        color:'#a9aadd'
      }}>
        <LoginIcon />
      </Button>
    </div>
  );
}

export default DisplayHeader;
