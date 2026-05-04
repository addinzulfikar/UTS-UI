import { temporalData } from "@/lib/mockData";

const latestData = temporalData[temporalData.length - 1];

const metrics = [
  { label: "Total Node", value: latestData.nodes.toLocaleString("id-ID"), sub: "aktor aktif" },
  { label: "Total Edge", value: latestData.edges.toLocaleString("id-ID"), sub: "hubungan sosial" },
  {
    label: "Indeks Stabilitas",
    value: `${latestData.stability}%`,
    sub: "kondisi terkini",
  },
  {
    label: "Indeks Disrupsi",
    value: `${latestData.disruption}%`,
    sub: "gangguan jaringan",
  },
];

export default function StructureMetrics() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
      <div className="px-5 py-4 border-b border-slate-100">
        <h3 className="text-sm font-semibold text-slate-700">Metrik Struktur (Terkini)</h3>
      </div>
      <div className="px-5 py-4 grid grid-cols-2 gap-4">
        {metrics.map((m) => (
          <div key={m.label} className="bg-slate-50 rounded-lg p-4">
            <p className="text-xs text-slate-500">{m.label}</p>
            <p className="text-xl font-bold text-slate-800 mt-1">{m.value}</p>
            <p className="text-xs text-slate-400 mt-0.5">{m.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
