"use client";

import { networkNodes, networkEdges } from "@/lib/mockData";

const communityColors: Record<number, string> = {
  1: "#6366f1",
  2: "#f59e0b",
  3: "#10b981",
  4: "#ef4444",
};

export default function NetworkGraph() {
  const width = 660;
  const height = 440;

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-700">Graf Jaringan Sosial</h3>
        <div className="flex items-center gap-3">
          {Object.entries(communityColors).map(([c, color]) => (
            <div key={c} className="flex items-center gap-1.5 text-xs text-slate-500">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
              Komunitas {c}
            </div>
          ))}
        </div>
      </div>
      <div className="overflow-auto p-2">
        <svg
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          className="w-full"
          style={{ minHeight: 300 }}
        >
          {/* Edges */}
          {networkEdges.map((edge, i) => {
            const s = networkNodes.find((n) => n.id === edge.source)!;
            const t = networkNodes.find((n) => n.id === edge.target)!;
            return (
              <line
                key={i}
                x1={s.x}
                y1={s.y}
                x2={t.x}
                y2={t.y}
                stroke="#cbd5e1"
                strokeWidth={edge.weight * 2.5}
                strokeOpacity={0.6}
              />
            );
          })}

          {/* Nodes */}
          {networkNodes.map((node) => {
            const r = 10 + node.centrality * 14;
            const color = communityColors[node.community] ?? "#94a3b8";
            return (
              <g key={node.id}>
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={r}
                  fill={color}
                  fillOpacity={0.85}
                  stroke="white"
                  strokeWidth={2}
                  className="cursor-pointer hover:fill-opacity-100 transition-all"
                />
                <text
                  x={node.x}
                  y={node.y + r + 12}
                  textAnchor="middle"
                  fontSize={10}
                  fill="#475569"
                  fontWeight={node.centrality > 0.7 ? "bold" : "normal"}
                >
                  {node.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
