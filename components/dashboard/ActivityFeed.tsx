import { recentActivities } from "@/lib/mockData";
import { CheckCircle, AlertCircle, Info } from "lucide-react";

const iconMap = {
  success: <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />,
  error: <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />,
  info: <Info className="w-4 h-4 text-indigo-500 flex-shrink-0" />,
};

export default function ActivityFeed() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
      <div className="px-5 py-4 border-b border-slate-100">
        <h3 className="text-sm font-semibold text-slate-700">Aktivitas Terkini</h3>
      </div>
      <ul className="divide-y divide-slate-50">
        {recentActivities.map((activity) => (
          <li key={activity.id} className="flex items-start gap-3 px-5 py-3">
            {iconMap[activity.type as keyof typeof iconMap]}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-700 truncate">{activity.action}</p>
              <p className="text-xs text-slate-400 truncate">{activity.detail}</p>
            </div>
            <span className="text-xs text-slate-400 flex-shrink-0 mt-0.5">{activity.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
