import MainLayout from "@/components/layout/MainLayout";
import TemporalChart from "@/components/morphogenetic-engine/TemporalChart";
import PhaseAnalysis from "@/components/morphogenetic-engine/PhaseAnalysis";
import StructureMetrics from "@/components/morphogenetic-engine/StructureMetrics";
import { BrainCircuit, Activity, Layers, TrendingUp } from "lucide-react";

export default function MorphogeneticEnginePage() {
  return (
    <MainLayout
      title="Morphogenetic Analysis Engine"
      subtitle="Analisis perubahan struktur jaringan dari waktu ke waktu"
      badge="Modul 3"
    >
      {/* Feature Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {[
          { label: "SNA Analysis", icon: Activity, color: "text-indigo-600", bg: "bg-indigo-50" },
          {
            label: "Temporal Clustering",
            icon: Layers,
            color: "text-violet-600",
            bg: "bg-violet-50",
          },
          {
            label: "Phase Detection",
            icon: TrendingUp,
            color: "text-emerald-600",
            bg: "bg-emerald-50",
          },
          {
            label: "ML Unsupervised",
            icon: BrainCircuit,
            color: "text-amber-600",
            bg: "bg-amber-50",
          },
        ].map((f) => (
          <div
            key={f.label}
            className={`${f.bg} rounded-xl border border-slate-200 p-4 flex items-center gap-3`}
          >
            <f.icon className={`w-5 h-5 ${f.color} flex-shrink-0`} />
            <p className={`text-sm font-medium ${f.color}`}>{f.label}</p>
          </div>
        ))}
      </div>

      {/* Temporal Chart */}
      <div className="mb-6">
        <TemporalChart />
      </div>

      {/* Phase + Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
        <div className="lg:col-span-3">
          <PhaseAnalysis />
        </div>
        <div className="lg:col-span-2">
          <StructureMetrics />
        </div>
      </div>

      {/* Description */}
      <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5">
        <h3 className="text-sm font-semibold text-emerald-800 mb-2">Tentang Modul Ini</h3>
        <p className="text-xs text-emerald-700 leading-relaxed">
          Morphogenetic Analysis Engine menganalisis perubahan struktur jaringan sosial dari waktu
          ke waktu dengan mempertimbangkan faktor struktural (kondisi sosial yang ada) dan agensi
          (tindakan individu/kelompok). Menggunakan teknik Social Network Analysis (SNA) dan
          unsupervised machine learning untuk mendeteksi fase-fase perubahan sosial seperti
          stabilitas, transisi, dan disrupsi.
        </p>
      </div>
    </MainLayout>
  );
}
