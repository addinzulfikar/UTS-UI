import { networkNodes } from "@/lib/mockData";
import ProgressBar from "@/components/ui/ProgressBar";

const communityColors: Record<number, string> = {
  1: "bg-indigo-500",
  2: "bg-amber-500",
  3: "bg-emerald-500",
  4: "bg-red-500",
};

export default function NodeList() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
      <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-700">Daftar Node (Aktor)</h3>
        <span className="text-xs text-slate-400">{networkNodes.length} node</span>
      </div>
      <ul className="divide-y divide-slate-50 max-h-72 overflow-y-auto">
        {networkNodes.map((node) => (
          <li key={node.id} className="flex items-center gap-3 px-5 py-3">
            <div
              className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${
                communityColors[node.community] ?? "bg-slate-400"
              }`}
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-700 truncate">{node.label}</p>
              <div className="mt-1">
                <ProgressBar value={node.centrality * 100} />
              </div>
            </div>
            <span className="text-xs text-slate-400 flex-shrink-0 w-8 text-right">
              {(node.centrality * 100).toFixed(0)}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
