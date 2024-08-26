import React from "react";
import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import StaticNode from "./nodes/StaticNode";
import Interactivity from "./nodes/Interactivity";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ExtraGoodies from "./nodes/ExtraGoodies";

function App() {
  return (
    <>
      <div className="w-screen h-screen box-border">
        <div className="w-full h-full flex box-border">
          <div className="w-full h-full box-border relative">
            <ExtraGoodies />
          </div>
          <div className="w-[500px] h-full box-border border-l-8 border-slate-200" >
            <Routes>
              <Route path="/" element={<Sidebar />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
