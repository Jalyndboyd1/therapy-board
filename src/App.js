import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Sidebar from "./containers/Sidebar";
import Display from "./containers/Display";

function App() {
  return (
    <div className="app">
      {/* sidebar routes */}
      <Sidebar />
      {/* display container */}
      <Display />
    </div>
  );
}

export default App;
