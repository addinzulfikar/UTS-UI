import { keyActors } from "@/lib/mockData";
import Badge from "@/components/ui/Badge";

const roleBadge: Record<string, "info" | "success" | "warning" | "default"> = {
  Hub: "info",
  Broker: "success",
  Influencer: "warning",
  Bridge: "default",
};

export default function KeyActorsTable() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
      <div className="px-5 py-4 border-b border-slate-100">
        <h3 className="text-sm font-semibold text-slate-700">Aktor Kunci (Key Actors)</h3>
        <p className="text-xs text-slate-400 mt-0.5">Berdasarkan skor centrality tertinggi</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100">
              <th className="px-5 py-2.5 text-left text-xs font-medium text-slate-500">#</th>
              <th className="px-5 py-2.5 text-left text-xs font-medium text-slate-500">Nama</th>
              <th className="px-5 py-2.5 text-left text-xs font-medium text-slate-500">Betweenness</th>
              <th className="px-5 py-2.5 text-left text-xs font-medium text-slate-500">Closeness</th>
              <th className="px-5 py-2.5 text-left text-xs font-medium text-slate-500">Degree</th>
              <th className="px-5 py-2.5 text-left text-xs font-medium text-slate-500">Komunitas</th>
              <th className="px-5 py-2.5 text-left text-xs font-medium text-slate-500">Peran</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {keyActors.map((actor) => (
              <tr key={actor.rank} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-5 py-3 text-slate-400 font-medium">{actor.rank}</td>
                <td className="px-5 py-3 font-semibold text-slate-700">{actor.name}</td>
                <td className="px-5 py-3 text-slate-600">{(actor.betweenness * 100).toFixed(0)}%</td>
                <td className="px-5 py-3 text-slate-600">{(actor.closeness * 100).toFixed(0)}%</td>
                <td className="px-5 py-3 text-slate-600">{actor.degree}</td>
                <td className="px-5 py-3 text-slate-500 text-xs">{actor.community}</td>
                <td className="px-5 py-3">
                  <Badge variant={roleBadge[actor.role] ?? "default"}>{actor.role}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
