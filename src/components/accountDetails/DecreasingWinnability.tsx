import { CircleArrowDown } from "lucide-react";

export default function DecreasingWinnability() {
  return (
    <div className="bg-[#252A3D] rounded-xl p-3">
      <div className="flex items-center gap-2 mb-6">
        <div className="text-chart-3">
          <CircleArrowDown />
        </div>
        <span className="">Decreasing Winnability</span>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 text-chart-3 rounded-full border-2 shrink-0 border-chart-3 flex items-center justify-center text-xs">
              1
            </div>
            <div className="w-full">
              <span className="text-sm">Premium pricing</span>
              <div className="flex items-center gap-4">
                <div className="w-[48%] h-4 bg-gradient-to-r from-gray-700 to-chart-3 rounded-r-full"></div>
                <span className="text-xs text-gray-400 text-success">-24%</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 text-chart-3 rounded-full border-2 shrink-0 border-chart-3 flex items-center justify-center text-xs">
              2
            </div>
            <div className="w-full">
              <span className="text-sm">Total exposure</span>
              <div className="flex items-center gap-4">
                <div className="w-[36%] h-4 bg-gradient-to-r from-gray-700 to-chart-3 rounded-r-full"></div>
                <span className="text-xs text-gray-400 text-success">-18%</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 text-chart-3 rounded-full border-2 shrink-0 border-chart-3 flex items-center justify-center text-xs">
              3
            </div>
            <div className="w-full">
              <span className="text-sm">Loss ratio trend</span>
              <div className="flex items-center gap-4">
                <div className="w-[26%] h-4 bg-gradient-to-r from-gray-700 to-chart-3 rounded-r-full"></div>
                <span className="text-xs text-gray-400 text-success">-13%</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 text-chart-3 rounded-full border-2 shrink-0 border-chart-3 flex items-center justify-center text-xs">
              4
            </div>
            <div className="w-full">
              <span className="text-sm">Market competition</span>
              <div className="flex items-center gap-4">
                <div className="w-[10%] h-4 bg-gradient-to-r from-gray-700 to-chart-3 rounded-r-full"></div>
                <span className="text-xs text-gray-400 text-success">-5%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
