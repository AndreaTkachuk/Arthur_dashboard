export const ProgressBar = ({
    value,
    total,
    color,
    text,
  }: {
    value: number;
    total: number;
    color: string;
    text?: string;
  }) => {
    const percentage = (value / total) * 100;
    return (
      <div className="w-full h-full bg-slate-700 rounded-e-full overflow-hidden">
        <div
          className={`h-full ${color} text-end rounded-e-full pr-2 text-xl`}
          style={{ width: `${percentage}%` }}
        >
          {text}
        </div>
      </div>
    );
  };