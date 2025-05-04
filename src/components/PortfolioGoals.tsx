import { portfolioData } from "../data/mockData";

const ProgressBar = ({
  value,
  total,
  color,
  text,
}: {
  value: number;
  total: number;
  color: string;
  text: string;
}) => {
  const percentage = (value / total) * 100;
  return (
    <div className="w-full bg-slate-700 rounded-e-full overflow-hidden">
      <div
        className={`h-full ${color} text-end rounded-e-full pr-2 text-xl`}
        style={{ width: `${percentage}%` }}
      >
        {text}
      </div>
    </div>
  );
};

export default function PortfolioGoals() {
  const { lossRatio, renewalRetention, newBusinessTarget, annualGwpTarget } =
    portfolioData;

  return (
    <div className="flex flex-col gap-6 text-white p-6 rounded-xl bg-secondary border hover:border-primary-foreground xl:col-span-3 row-span-2 hover:border-primary-foreground">
      <h2 className="text-lg font-semibold">Portfolio goals</h2>

      {/* Portfolio Loss Ratio */}
      <div>
        <p className="text-sm text-[#9EA5B8]">PORTFOLIO LOSS RATIO TARGET</p>
        <div className="relative flex my-8">
          <div
            className={`absolute -top-7 left-[${lossRatio.goal}%] -translate-x-1/2 text-xs text-[#4B5161]`}
          >
            TG:{lossRatio.goal}%
          </div>
          <div className={`absolute -top-3 left-[${lossRatio.goal}%] -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-l-transparent border-r-transparent border-t-[10px] rounded-xs border-t-chart-1`} />

          <div className={`relative h-6 bg-green-500 rounded-l-full w-[${Math.round(lossRatio.percentage)}%] text-end`}>
            <div className={`absolute -right-4`}>{lossRatio.percentage}%</div>
          </div>
          <div className="bg-yellow-400 w-[12%]" />
          <div className={`bg-red-600 w-[${100 - 12 - Math.round(lossRatio.percentage)}%] rounded-r-full`} />
          
          <div className={`absolute -bottom-3 left-[${Math.round(lossRatio.percentage)}%] -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-l-transparent border-r-transparent border-b-[10px] rounded-xs border-b-chart-2`} />
          <p className={`absolute text-xs -bottom-7 left-[${Math.round(lossRatio.percentage)}%] -translate-x-1/2 text-green-400`}>-{(lossRatio.goal - lossRatio.percentage).toFixed(1)}% (GOOD)</p>
        </div>
      </div>

      {/* Renewal Retention */}
      <div>
        <p className="text-sm text-[#9EA5B8]">RENEWAL RETENTION</p>
        <div className="relative flex my-8">
          <div
            className={`absolute -top-7 left-[${renewalRetention.percentage}%] -translate-x-1/2 text-xs text-[#4B5161]`}
          >
            TG:{renewalRetention.min}-{renewalRetention.goal}%
          </div>
          <div className={`absolute -top-3 left-[${renewalRetention.percentage}%] -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-l-transparent border-r-transparent border-t-[10px] rounded-xs border-t-chart-1`} />

          <div className={`bg-red-600 w-[30%] rounded-l-full`} />
          <div className="bg-yellow-400 w-[50%]" />
          <div className={`relative h-6 bg-green-500 w-[15%] text-end`}>
            <div className={`absolute left-2`}>{renewalRetention.percentage}%</div>
          </div>
          <div className="bg-yellow-400 w-[5%] rounded-r-full" />
          
          <div className={`absolute -bottom-3 left-[${renewalRetention.percentage}%] -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-l-transparent border-r-transparent border-b-[10px] rounded-xs border-b-chart-2`} />
          <p className={`absolute text-xs -bottom-7 left-[${renewalRetention.percentage}%] -translate-x-1/2 text-green-400 w-max`}>ON TARGET</p>
        </div>
      </div>

      {/* New Business */}
      <div>
        <p className="text-sm text-[#9EA5B8]">NEW BUSINESS TARGET</p>
        <div className="flex gap-4 text-xs mt-1 mb-1">
          <ProgressBar
            value={newBusinessTarget.value}
            total={newBusinessTarget.goal}
            color="bg-gradient-to-l from-blue-500 to-blue-700"
            text={`${newBusinessTarget.value}M`}
          />
          <span className="text-xl">${newBusinessTarget.goal}M</span>
        </div>

        <p className="text-xs mt-1 text-[#9EA5B8] text-center">
          {newBusinessTarget.percentage}%
        </p>
      </div>

      {/* Annual GWP */}
      <div>
        <p className="text-sm text-[#9EA5B8]">ANNUAL GWP TARGET</p>
        <div className="flex gap-4 text-xs">
          <ProgressBar
            value={annualGwpTarget.value}
            total={annualGwpTarget.goal}
            color="bg-gradient-to-l from-blue-600 to-blue-800"
            text={`${annualGwpTarget.value}M`}
          />
          <span className="text-xl">${annualGwpTarget.goal}M</span>
        </div>

        <p className="text-xs mt-1 text-[#9EA5B8] text-center">
          {annualGwpTarget.percentage}%
        </p>
      </div>
    </div>
  );
}
