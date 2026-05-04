import { insightCards } from "@/lib/mockData";
import Badge from "@/components/ui/Badge";
import { Lightbulb } from "lucide-react";

const priorityVariant: Record<string, "error" | "warning" | "info" | "default"> = {
  high: "error",
  medium: "warning",
  low: "info",
};

const priorityLabel: Record<string, string> = {
  high: "Tinggi",
  medium: "Sedang",
  low: "Rendah",
};

export default function InsightPanel() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
      <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-2">
        <Lightbulb className="w-4 h-4 text-amber-500" />
        <h3 className="text-sm font-semibold text-slate-700">Insight & Rekomendasi</h3>
      </div>
      <div className="px-5 py-4 space-y-4">
        {insightCards.map((card) => (
          <div key={card.id} className="flex gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <p className="text-sm font-semibold text-slate-700">{card.title}</p>
                <Badge variant={priorityVariant[card.priority] ?? "default"}>
                  {priorityLabel[card.priority]}
                </Badge>
                <span className="text-xs text-slate-400">{card.category}</span>
              </div>
              <p className="text-xs text-slate-500 mt-1">{card.description}</p>
              <p className="text-xs text-slate-400 mt-1">{card.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
