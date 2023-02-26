import React from "react";
import "./App.css";
import Sidebar from "./containers/Sidebar";
import Display from "./containers/Display";
import Login from './containers/pages/Login'
import { useSelector } from "react-redux";
import { userObject } from "./features/reducers/userSlice";

function App() {
  const user = useSelector(userObject)
  return (
    <div className="app__container">
      {
        !user ? <Login /> :

          <div className="app">
            <Sidebar />
            <Display />
          </div>
      }
    </div>
  );
}

export default App;
