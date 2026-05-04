import MainLayout from "@/components/layout/MainLayout";
import TimelineChart from "@/components/visualization/TimelineChart";
import CommunityPieChart from "@/components/visualization/CommunityPieChart";
import KeyActorsTable from "@/components/visualization/KeyActorsTable";
import InsightPanel from "@/components/visualization/InsightPanel";
import { BarChart3, Download, Filter } from "lucide-react";

export default function VisualizationPage() {
  return (
    <MainLayout
      title="Visualization & Insight Module"
      subtitle="Dashboard analitik dan visualisasi peta sosial"
      badge="Modul 4"
    >
      {/* Action Bar */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-indigo-600" />
          <h2 className="text-sm font-semibold text-slate-700">Ringkasan Analitik</h2>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
            <Filter className="w-3.5 h-3.5" /> Filter
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            <Download className="w-3.5 h-3.5" /> Ekspor Laporan
          </button>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <TimelineChart />
        </div>
        <div>
          <CommunityPieChart />
        </div>
      </div>

      {/* Table + Insight */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <KeyActorsTable />
        </div>
        <div>
          <InsightPanel />
        </div>
      </div>

      {/* Use Cases */}
      <div className="bg-amber-50 border border-amber-100 rounded-xl p-5">
        <h3 className="text-sm font-semibold text-amber-800 mb-3">Konteks Penggunaan</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            "Perencanaan Pembangunan Berbasis Masyarakat",
            "Analisis Konflik Sosial",
            "Evaluasi Program Intervensi",
            "Pemetaan Pemangku Kepentingan",
          ].map((uc) => (
            <div key={uc} className="bg-white rounded-lg border border-amber-100 p-3">
              <p className="text-xs text-amber-700 font-medium">{uc}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-amber-700 mt-3 leading-relaxed">
          Visualization and Insight Module menyajikan peta sosial dalam bentuk visual interaktif
          dan dashboard analitik, mendukung pengambil kebijakan dalam memahami dinamika sosial
          secara komprehensif dan merancang strategi intervensi yang tepat sasaran.
        </p>
      </div>
    </MainLayout>
  );
}
