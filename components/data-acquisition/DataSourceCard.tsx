import Badge from "@/components/ui/Badge";

interface DataSource {
  id: string;
  name: string;
  type: string;
  status: string;
  recordsCollected: number;
  lastSync: string;
  icon: string;
}

type StatusVariant = "success" | "warning" | "error" | "info" | "default";

const statusLabel: Record<string, string> = {
  active: "Aktif",
  paused: "Dijeda",
  error: "Error",
};

const statusVariant: Record<string, StatusVariant> = {
  active: "success",
  paused: "warning",
  error: "error",
};

interface DataSourceCardProps {
  source: DataSource;
}

export default function DataSourceCard({ source }: DataSourceCardProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 flex items-start gap-4">
      <div className="text-3xl flex-shrink-0">{source.icon}</div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <p className="font-semibold text-slate-800 text-sm truncate">{source.name}</p>
          <Badge variant={statusVariant[source.status] ?? "default"}>
            {statusLabel[source.status] ?? source.status}
          </Badge>
        </div>
        <p className="text-xs text-slate-400 mt-0.5">{source.type}</p>
        <div className="mt-3 flex items-center gap-4 text-xs text-slate-500">
          <span>
            <span className="font-semibold text-slate-700">
              {source.recordsCollected.toLocaleString("id-ID")}
            </span>{" "}
            record
          </span>
          <span>Sinkronisasi: {source.lastSync}</span>
        </div>
      </div>
    </div>
  );
}
