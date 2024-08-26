import React from "react";
import { ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import Header from "../components/Header";

function StaticNode() {
  // define the number of nodes:
  const initialNodes = [
    { id: "1", position: { x: 100, y: 50 }, data: { label: "Node 1" } },
    { id: "2", position: { x: 15, y: 150 }, data: { label: "Node 2" } },
    { id: "3", position: { x: 200, y: 250 }, data: { label: "Node 3" } },
  ];

  //Set the value of source and target so that edge connects node 1, node 2 & node 3
  const initialEdges = [
    { id: "e1-2", source: "1", target: "2" },
    { id: "e2-3", source: "2", target: "3" },
  ];

  return (
    <>
      {/* <div className="w-full h-full"> */}
      <div style={{ width: "100vw", height: "100vh" }}>
        <Header title="Static Node" />
        <ReactFlow nodes={initialNodes} edges={initialEdges} />
      </div>
    </>
  );
}

export default StaticNode;
