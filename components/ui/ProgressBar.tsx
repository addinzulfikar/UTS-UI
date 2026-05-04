interface ProgressBarProps {
  value: number; // 0-100
  color?: string;
  className?: string;
}

export default function ProgressBar({ value, color = "bg-indigo-500", className = "" }: ProgressBarProps) {
  return (
    <div className={`w-full bg-slate-100 rounded-full h-2 ${className}`}>
      <div
        className={`h-2 rounded-full transition-all ${color}`}
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  );
}
