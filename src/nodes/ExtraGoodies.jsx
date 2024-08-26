import React, { useCallback } from "react";
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  BackgroundVariant,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import Header from "../components/Header";

const initialNodes = [
  { id: "1", position: { x: 10, y: 30 }, data: { label: "1" } },
  { id: "2", position: { x: 20, y: 130 }, data: { label: "2" } },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

export default function ExtraGoodies() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className="w-full h-full box-border">
      <Header title="Extra Goodies" />
      <div className="w-full h-full box-border ">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}>
          <Controls />
          <MiniMap />
          <Background
            variant={BackgroundVariant.Dots}
            gap={12}
            size={1}
            color="#16a34a"
          />
        </ReactFlow>
      </div>
    </div>
  );
}
