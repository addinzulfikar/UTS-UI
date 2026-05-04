import { networkEdges, networkNodes } from "@/lib/mockData";

function findLabel(id: string) {
  return networkNodes.find((n) => n.id === id)?.label ?? id;
}

export default function EdgeList() {
  const sorted = [...networkEdges].sort((a, b) => b.weight - a.weight);

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
      <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-700">Daftar Edge (Hubungan)</h3>
        <span className="text-xs text-slate-400">{networkEdges.length} edge</span>
      </div>
      <ul className="divide-y divide-slate-50 max-h-72 overflow-y-auto">
        {sorted.map((edge, i) => (
          <li key={i} className="flex items-center gap-3 px-5 py-2.5">
            <div className="flex-1 min-w-0">
              <p className="text-xs text-slate-600 truncate">
                <span className="font-medium text-slate-700">{findLabel(edge.source)}</span>
                <span className="mx-1.5 text-slate-400">⟷</span>
                <span className="font-medium text-slate-700">{findLabel(edge.target)}</span>
              </p>
            </div>
            <div
              className="h-1.5 rounded-full bg-indigo-400 flex-shrink-0"
              style={{ width: `${edge.weight * 48}px` }}
            />
            <span className="text-xs text-slate-400 w-8 text-right flex-shrink-0">
              {(edge.weight * 100).toFixed(0)}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
