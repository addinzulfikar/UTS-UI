import MainLayout from "@/components/layout/MainLayout";
import DataSourceCard from "@/components/data-acquisition/DataSourceCard";
import AddSourceForm from "@/components/data-acquisition/AddSourceForm";
import { dataSources } from "@/lib/mockData";
import { Database, RefreshCw, Download } from "lucide-react";

export default function DataAcquisitionPage() {
  const activeCount = dataSources.filter((d) => d.status === "active").length;
  const totalRecords = dataSources.reduce((sum, d) => sum + d.recordsCollected, 0);

  return (
    <MainLayout
      title="Data Acquisition Module"
      subtitle="Modul pengumpulan data interaksi sosial"
      badge="Modul 1"
    >
      {/* Stats bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total Sumber", value: dataSources.length, icon: Database, color: "text-indigo-600" },
          { label: "Aktif", value: activeCount, icon: RefreshCw, color: "text-emerald-600" },
          { label: "Error / Dijeda", value: dataSources.length - activeCount, icon: Database, color: "text-red-500" },
          {
            label: "Total Record",
            value: totalRecords.toLocaleString("id-ID"),
            icon: Download,
            color: "text-amber-600",
          },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 flex items-center gap-3">
            <s.icon className={`w-5 h-5 ${s.color} flex-shrink-0`} />
            <div>
              <p className="text-xs text-slate-500">{s.label}</p>
              <p className={`text-xl font-bold ${s.color}`}>{s.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Add Source Form */}
      <div className="mb-6">
        <AddSourceForm />
      </div>

      {/* Data Sources Grid */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-slate-700">Sumber Data Terdaftar</h2>
        <button className="flex items-center gap-1.5 text-xs text-indigo-600 hover:text-indigo-700 font-medium">
          <RefreshCw className="w-3.5 h-3.5" /> Sinkronisasi Semua
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {dataSources.map((src) => (
          <DataSourceCard key={src.id} source={src} />
        ))}
      </div>

      {/* Description */}
      <div className="mt-6 bg-indigo-50 border border-indigo-100 rounded-xl p-5">
        <h3 className="text-sm font-semibold text-indigo-800 mb-2">Tentang Modul Ini</h3>
        <p className="text-xs text-indigo-700 leading-relaxed">
          Data Acquisition Module bertanggung jawab mengumpulkan data interaksi sosial dari
          berbagai sumber seperti media sosial, survei komunitas, dan catatan aktivitas. Data yang
          dikumpulkan akan digunakan sebagai input untuk modul Social Network Construction.
        </p>
      </div>
    </MainLayout>
  );
}
