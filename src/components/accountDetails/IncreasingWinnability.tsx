import { CircleArrowUp } from "lucide-react";

export default function IncreasingWinnability() {
  return (
    <div className="bg-[#252A3D] rounded-xl p-3">
      <div className="flex items-center gap-2 mb-6">
        <div className="text-chart-2">
          <CircleArrowUp />
        </div>
        <span className="">Increasing Winnability</span>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 text-chart-2 rounded-full border-2 shrink-0 border-chart-2 flex items-center justify-center text-xs">
              1
            </div>
            <div className="w-full">
              <span className="text-sm">Brokers relationship</span>
              <div className="flex items-center gap-4">
                <div className="w-[56%] h-4 bg-gradient-to-r from-gray-700 to-chart-2 rounded-r-full"></div>
                <span className="text-xs text-gray-400 text-success">+28%</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 text-chart-2 rounded-full border-2 shrink-0 border-chart-2 flex items-center justify-center text-xs">
              2
            </div>
            <div className="w-full">
              <span className="text-sm">Loss history</span>
              <div className="flex items-center gap-4">
                <div className="w-[44%] h-4 bg-gradient-to-r from-gray-700 to-chart-2 rounded-r-full"></div>
                <span className="text-xs text-gray-400 text-success">+22%</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 text-chart-2 rounded-full border-2 shrink-0 border-chart-2 flex items-center justify-center text-xs">
              3
            </div>
            <div className="w-full">
              <span className="text-sm">Industry growth</span>
              <div className="flex items-center gap-4">
                <div className="w-[32%] h-4 bg-gradient-to-r from-gray-700 to-chart-2 rounded-r-full"></div>
                <span className="text-xs text-gray-400 text-success">+16%</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 text-chart-2 rounded-full border-2 shrink-0 border-chart-2 flex items-center justify-center text-xs">
              4
            </div>
            <div className="w-full">
              <span className="text-sm">Multiline opportunity</span>
              <div className="flex items-center gap-4">
                <div className="w-[22%] h-4 bg-gradient-to-r from-gray-700 to-chart-2 rounded-r-full"></div>
                <span className="text-xs text-gray-400 text-success">+11%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
