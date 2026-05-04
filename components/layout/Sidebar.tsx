"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Database,
  Network,
  BrainCircuit,
  BarChart3,
  ChevronRight,
} from "lucide-react";

const navItems = [
  {
    href: "/",
    label: "Dashboard",
    icon: LayoutDashboard,
    description: "Ringkasan sistem",
  },
  {
    href: "/data-acquisition",
    label: "Data Acquisition",
    icon: Database,
    description: "Modul pengumpulan data",
  },
  {
    href: "/network-construction",
    label: "Network Construction",
    icon: Network,
    description: "Pembangunan jaringan sosial",
  },
  {
    href: "/morphogenetic-engine",
    label: "Morphogenetic Engine",
    icon: BrainCircuit,
    description: "Analisis morphogenetic",
  },
  {
    href: "/visualization",
    label: "Visualization & Insight",
    icon: BarChart3,
    description: "Dashboard visualisasi",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white flex flex-col flex-shrink-0">
      {/* Brand */}
      <div className="px-6 py-5 border-b border-slate-700">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-indigo-500 flex items-center justify-center font-bold text-sm">
            MS
          </div>
          <div>
            <p className="font-semibold text-sm leading-tight">MorphoSocial</p>
            <p className="text-xs text-slate-400 leading-tight">Social Info System</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        <p className="px-3 mb-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
          Modul Sistem
        </p>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors group ${
                isActive
                  ? "bg-indigo-600 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Icon
                className={`w-4 h-4 flex-shrink-0 ${
                  isActive ? "text-white" : "text-slate-400 group-hover:text-white"
                }`}
              />
              <span className="flex-1 truncate">{item.label}</span>
              {isActive && <ChevronRight className="w-3 h-3 text-indigo-300" />}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-slate-700">
        <p className="text-xs text-slate-500">Versi 1.0.0</p>
        <p className="text-xs text-slate-600 mt-0.5">© 2026 MorphoSocial</p>
      </div>
    </aside>
  );
}
