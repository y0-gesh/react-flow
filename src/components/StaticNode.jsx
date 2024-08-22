import React from "react";
import { ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

function StaticNode() {
  // define the number of nodes:
  const initialNodes = [
    { id: "1", position: { x: 0, y: 0 }, data: { label: "Node 1" } },
    { id: "2", position: { x: 0, y: 100 }, data: { label: "Node 2" } },
    { id: "3", position: { x: 0, y: 200 }, data: { label: "Node 3" } },
  ];
  
  //Set the value of target so that edge connects node 1 and node 3
  const initialEdges = [{ id: "e1-2", source: "1", target: "3" }];
  
  return (
    <>
      {/* <div style={{ width: "100vw", height: "100vh" }}> */}
      <div className="w-full h-full">
        <ReactFlow nodes={initialNodes} edges={initialEdges} />
      </div>
    </>
  );
}

export default StaticNode;
