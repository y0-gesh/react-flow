import React from "react";
import "./styles/App.scss";
import { Route, Routes } from "react-router-dom";
import StaticNode from "./nodes/StaticNode";
import Interactivity from "./nodes/Interactivity";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ExtraGoodies from "./nodes/ExtraGoodies";

function App() {
  return (
    <>
      <div className="main-container">
        <div className="sub-container">
          <div className="side-bar">
            <Sidebar />
          </div>
          <div className="title-bar">
            <Header title="Workflows" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
