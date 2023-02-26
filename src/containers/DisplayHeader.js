import React from "react";
import { selectRoute } from "../features/reducers/counterSlice";
import { useSelector, useDispatch } from "react-redux";
import "./css/DisplayHeader.css";
import LoginIcon from "@mui/icons-material/Login";
import { Button } from "@mui/material";
import { userObject, handleUserLogout } from "../features/reducers/userSlice";

function DisplayHeader() {
  const currentRoute = useSelector(selectRoute);
  const user = useSelector(userObject)
  const dispatch = useDispatch()

  return (
    <div className="displayHeader">
      <h3>{currentRoute}</h3>
      <div className="displayHeader__user">{user.displayName}
        <Button sx={{
          color: '#a9aadd'
        }}>
          <LoginIcon onClick={() => dispatch(handleUserLogout())} />
        </Button>
      </div>
    </div>
  );
}

export default DisplayHeader;
