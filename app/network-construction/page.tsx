import MainLayout from "@/components/layout/MainLayout";
import NetworkGraph from "@/components/network-construction/NetworkGraph";
import NodeList from "@/components/network-construction/NodeList";
import EdgeList from "@/components/network-construction/EdgeList";
import { networkNodes, networkEdges } from "@/lib/mockData";
import { Network, Users, Share2, LayoutGrid } from "lucide-react";

export default function NetworkConstructionPage() {
  const communities = [...new Set(networkNodes.map((n) => n.community))].length;

  return (
    <MainLayout
      title="Network Construction Module"
      subtitle="Pembangunan representasi jaringan sosial"
      badge="Modul 2"
    >
      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total Node", value: networkNodes.length, icon: Users, color: "text-indigo-600" },
          { label: "Total Edge", value: networkEdges.length, icon: Share2, color: "text-violet-600" },
          { label: "Komunitas", value: communities, icon: LayoutGrid, color: "text-emerald-600" },
          {
            label: "Avg Centrality",
            value:
              (
                networkNodes.reduce((s, n) => s + n.centrality, 0) / networkNodes.length
              ).toFixed(2),
            icon: Network,
            color: "text-amber-600",
          },
        ].map((s) => (
          <div
            key={s.label}
            className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 flex items-center gap-3"
          >
            <s.icon className={`w-5 h-5 ${s.color} flex-shrink-0`} />
            <div>
              <p className="text-xs text-slate-500">{s.label}</p>
              <p className={`text-xl font-bold ${s.color}`}>{s.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Graph */}
      <div className="mb-6">
        <NetworkGraph />
      </div>

      {/* Node & Edge Lists */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <NodeList />
        <EdgeList />
      </div>

      {/* Description */}
      <div className="bg-violet-50 border border-violet-100 rounded-xl p-5">
        <h3 className="text-sm font-semibold text-violet-800 mb-2">Tentang Modul Ini</h3>
        <p className="text-xs text-violet-700 leading-relaxed">
          Social Network Construction Module membangun representasi jaringan sosial dalam bentuk
          graf (node dan edge). Node merepresentasikan aktor sosial (individu/kelompok), sedangkan
          edge merepresentasikan hubungan interaksi. Ukuran node mencerminkan skor centrality
          masing-masing aktor.
        </p>
      </div>
    </MainLayout>
  );
}
