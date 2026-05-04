import MainLayout from "@/components/layout/MainLayout";
import MetricCard from "@/components/dashboard/MetricCard";
import ActivityFeed from "@/components/dashboard/ActivityFeed";
import { systemStats } from "@/lib/mockData";
import {
  Users,
  Share2,
  Database,
  BarChart3,
  Network,
  BrainCircuit,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <MainLayout
      title="Dashboard"
      subtitle="Ringkasan sistem informasi morphogenetic"
      badge="Live"
    >
      {/* Hero Banner */}
      <div className="mb-6 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 p-6 text-white">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-lg font-bold">Selamat Datang di MorphoSocial</h2>
            <p className="text-sm text-indigo-200 mt-1 max-w-xl">
              Sistem Informasi Morphogenetic untuk memetakan, menganalisis, dan memahami dinamika
              struktur sosial secara temporal dan berbasis data.
            </p>
          </div>
          <div className="text-right text-xs text-indigo-300">
            <p>Terakhir diperbarui</p>
            <p className="font-semibold text-white mt-0.5">
              {new Date(systemStats.lastUpdated).toLocaleString("id-ID", {
                dateStyle: "medium",
                timeStyle: "short",
              })}
            </p>
          </div>
        </div>
      </div>

      {/* KPI Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <MetricCard
          title="Total Node"
          value={systemStats.totalNodes.toLocaleString("id-ID")}
          subtitle="Aktor sosial aktif"
          icon={Users}
          trend={{ value: 3.2, label: "vs bulan lalu" }}
          color="text-indigo-600"
        />
        <MetricCard
          title="Total Edge"
          value={systemStats.totalEdges.toLocaleString("id-ID")}
          subtitle="Hubungan sosial"
          icon={Share2}
          trend={{ value: 5.1, label: "vs bulan lalu" }}
          color="text-violet-600"
        />
        <MetricCard
          title="Komunitas Aktif"
          value={systemStats.activeCommunities}
          subtitle="Kluster teridentifikasi"
          icon={Network}
          trend={{ value: 2, label: "komunitas baru" }}
          color="text-emerald-600"
        />
        <MetricCard
          title="Sumber Data"
          value={systemStats.dataSourcesConnected}
          subtitle="Terhubung & aktif"
          icon={Database}
          trend={{ value: -1, label: "sumber error" }}
          color="text-amber-600"
        />
        <MetricCard
          title="Analisis Dijalankan"
          value={systemStats.analysisRuns}
          subtitle="Total sesi analisis"
          icon={BrainCircuit}
          color="text-blue-600"
        />
        <MetricCard
          title="Laporan Tersedia"
          value={12}
          subtitle="Laporan dihasilkan"
          icon={BarChart3}
          color="text-rose-600"
        />
      </div>

      {/* Module Overview + Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Module Cards */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              num: "01",
              label: "Data Acquisition",
              desc: "Pengumpulan data interaksi sosial dari berbagai sumber.",
              href: "/data-acquisition",
              color: "bg-indigo-500",
            },
            {
              num: "02",
              label: "Network Construction",
              desc: "Pembangunan representasi jaringan sosial berbentuk graf.",
              href: "/network-construction",
              color: "bg-violet-500",
            },
            {
              num: "03",
              label: "Morphogenetic Engine",
              desc: "Analisis perubahan struktur jaringan dari waktu ke waktu.",
              href: "/morphogenetic-engine",
              color: "bg-emerald-500",
            },
            {
              num: "04",
              label: "Visualization & Insight",
              desc: "Peta sosial visual interaktif dan dashboard analitik.",
              href: "/visualization",
              color: "bg-amber-500",
            },
          ].map((m) => (
            <a
              key={m.num}
              href={m.href}
              className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 hover:shadow-md transition-shadow flex gap-4"
            >
              <div
                className={`w-10 h-10 rounded-lg ${m.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
              >
                {m.num}
              </div>
              <div>
                <p className="font-semibold text-slate-800 text-sm">{m.label}</p>
                <p className="text-xs text-slate-500 mt-1">{m.desc}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Activity Feed */}
        <div>
          <ActivityFeed />
        </div>
      </div>
    </MainLayout>
  );
}
