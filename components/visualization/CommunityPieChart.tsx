"use client";

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { communityData } from "@/lib/mockData";

export default function CommunityPieChart() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
      <div className="px-5 py-4 border-b border-slate-100">
        <h3 className="text-sm font-semibold text-slate-700">Distribusi Komunitas</h3>
        <p className="text-xs text-slate-400 mt-0.5">Komposisi tipe komunitas dalam jaringan</p>
      </div>
      <div className="px-5 py-4">
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie
              data={communityData}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={85}
              paddingAngle={3}
              dataKey="value"
            >
              {communityData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 11 }}
              formatter={(value) => [`${value}%`, ""] as [string, string]}
            />
            <Legend iconSize={10} iconType="circle" wrapperStyle={{ fontSize: 11 }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
