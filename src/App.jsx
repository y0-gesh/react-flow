import React from "react";
import "./styles/App.css";
import StaticNode from "./components/StaticNode";
import Interactivity from "./components/Interactivity";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="flex w-screen h-screen box-border">
        <div className="bg-red-300 w-1/4 h-full">
          <Header title="Static Node" />
          <StaticNode />
        </div>
        <div className="bg-blue-300 w-1/4 h-full">
          <Header title="Static Node"/>
          <Interactivity />
        </div>
        <div className="bg-green-300 w-1/4 h-full">
          <Header title="Static Node"/>
          <Interactivity />
        </div>
        <div className="bg-yellow-300 w-1/4">
          <Header title="Static Node"/>
          <Interactivity />
        </div>
      </div>
    </>
  );
}

export default App;
