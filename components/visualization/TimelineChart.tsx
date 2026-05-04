"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { temporalData } from "@/lib/mockData";

export default function TimelineChart() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
      <div className="px-5 py-4 border-b border-slate-100">
        <h3 className="text-sm font-semibold text-slate-700">Pertumbuhan Jaringan (Node & Edge)</h3>
        <p className="text-xs text-slate-400 mt-0.5">Evolusi ukuran jaringan sosial per periode</p>
      </div>
      <div className="px-5 py-4">
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={temporalData} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis
              dataKey="period"
              tick={{ fontSize: 10, fill: "#94a3b8" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 10, fill: "#94a3b8" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{ borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 11 }}
            />
            <Bar dataKey="nodes" name="Node" fill="#6366f1" radius={[3, 3, 0, 0]} />
            <Bar dataKey="edges" name="Edge" fill="#a5b4fc" radius={[3, 3, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
