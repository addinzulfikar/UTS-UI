import { morphogeneticPhases } from "@/lib/mockData";
import ProgressBar from "@/components/ui/ProgressBar";

const colorMap: Record<string, { bg: string; text: string; bar: string; badge: string }> = {
  green: {
    bg: "bg-emerald-50 border-emerald-200",
    text: "text-emerald-700",
    bar: "bg-emerald-500",
    badge: "bg-emerald-100 text-emerald-700",
  },
  yellow: {
    bg: "bg-amber-50 border-amber-200",
    text: "text-amber-700",
    bar: "bg-amber-500",
    badge: "bg-amber-100 text-amber-700",
  },
  red: {
    bg: "bg-red-50 border-red-200",
    text: "text-red-700",
    bar: "bg-red-500",
    badge: "bg-red-100 text-red-700",
  },
  blue: {
    bg: "bg-blue-50 border-blue-200",
    text: "text-blue-700",
    bar: "bg-blue-500",
    badge: "bg-blue-100 text-blue-700",
  },
};

export default function PhaseAnalysis() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
      <div className="px-5 py-4 border-b border-slate-100">
        <h3 className="text-sm font-semibold text-slate-700">Fase Morphogenetic</h3>
        <p className="text-xs text-slate-400 mt-0.5">Deteksi otomatis fase perubahan sosial</p>
      </div>
      <div className="px-5 py-4 space-y-4">
        {morphogeneticPhases.map((phase) => {
          const c = colorMap[phase.color] ?? colorMap.blue;
          return (
            <div key={phase.id} className={`rounded-lg border p-4 ${c.bg}`}>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className={`text-sm font-semibold ${c.text}`}>{phase.name}</p>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${c.badge}`}>
                      {phase.period}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">{phase.description}</p>
                </div>
                <span className={`text-lg font-bold flex-shrink-0 ${c.text}`}>{phase.score}</span>
              </div>
              <div className="mt-2.5">
                <ProgressBar value={phase.score} color={c.bar} />
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {phase.indicators.map((ind) => (
                  <span
                    key={ind}
                    className="text-xs bg-white/70 border border-white/80 text-slate-500 px-2 py-0.5 rounded"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
