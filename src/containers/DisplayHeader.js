import React from "react";
import { selectRoute } from "../features/reducers/counterSlice";
import { useSelector } from "react-redux";
import "./css/DisplayHeader.css";
import LoginIcon from "@mui/icons-material/Login";
import { Button } from "@mui/material";
import { userObject } from "../features/reducers/userSlice";

function DisplayHeader() {
  const currentRoute = useSelector(selectRoute);
  const user = useSelector(userObject)
  
  return (
    <div className="displayHeader">
      <h3>{currentRoute}</h3>
      <div className="displayHeader__user">{user.displayName}
      <Button sx={{
        color:'#a9aadd'
      }}>
        <LoginIcon />
      </Button>
      </div>
    </div>
  );
}

export default DisplayHeader;
