import React from "react";
import NodeDetails from "../nodes/NodeDetails";

const Sidebar = () => {
  return (
    <div className="w-full h-full flex flex-col box-border">
        <h1 className="text-4xl text-center">React Flow</h1>
        <NodeDetails />
    </div>
  );
};

export default Sidebar;
