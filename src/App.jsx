import React from "react";
import "./styles/App.css";
import { ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

function App() {
  const initialNodes = [
    { id: "1", position: { x: 0, y: 0 }, data: { label: "Node 1" } },
    { id: "2", position: { x: 0, y: 100 }, data: { label: "Node 2" } },
  ];
  const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

  return (
    <>
      <div style={{ width: "100vw", height: "100vh" }}>
        <ReactFlow nodes={initialNodes} edges={initialEdges} />
      </div>
    </>
  );
}

export default App;
