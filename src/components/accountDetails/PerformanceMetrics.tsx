import { Link } from "react-router-dom";
import { Card, CardContent } from "../ui/card";
import { ProgressBar } from "../ProgressBar";

const distributionData = {
  marineCargo: 71.4,
  generalLiability: 20,
  workersComp: 8.6,
};

export default function PerformanceMetrics() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <p className="col-span-2 md:col-span-4">Performance Metrics</p>
      <Card className="bg-secondary py-0 hover:border-primary-foreground">
        <CardContent className="p-4">
          <div className="flex items-center gap-4 mb-2">
            <p className="text-sm">Winnability</p>
            <div className="flex items-center gap-1">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-[6px] h-[6px] rounded-full ${
                    i < 4 ? "bg-primary" : "bg-gray-700"
                  }`}
                ></div>
              ))}
            </div>
          </div>
          <p className="text-2xl mb-7">Very Strong</p>
          <Link to="#" className="text-xs text-primary hover:text-white">
            See all factors →
          </Link>
        </CardContent>
      </Card>
      <Card className="bg-secondary py-0 hover:border-primary-foreground">
        <CardContent className="p-4">
          <div className="flex items-center gap-4 mb-3">
            <p className="text-sm">Loss Ratio</p>
          </div>
          <div className="flex items-end gap-1 mb-8">
            <p className="text-2xl leading-none ">25%</p>
            <p className="text-sm text-gray-400">vs 42% target</p>
          </div>
          <Link to="#" className="text-xs text-primary hover:text-white">
            See all factors →
          </Link>
        </CardContent>
      </Card>

      <Card className="bg-secondary py-0 hover:border-primary-foreground">
        <CardContent className="p-4">
          <div className="mb-2">
            <p className="text-sm">Premium Growth</p>
          </div>
          <div className="flex items-end gap-1 mb-1">
            <p className="text-2xl leading-none">12.4%</p>
            <p className="text-sm text-gray-400">YoY increase</p>
          </div>
          <p className="text-sm text-gray-400 mb-3">123M vs $150M Target</p>
          <Link to="#" className="text-xs text-primary hover:text-white">
            View trend →
          </Link>
        </CardContent>
      </Card>

      <Card className="bg-secondary py-0 hover:border-primary-foreground">
        <CardContent className="p-4">
          <div className="mb-2">
            <p className="text-sm">Exposure Distribution</p>
          </div>
          <div className="space-y-2 mt-2">
            <div className="flex items-center flex-col xl:flex-row xl:gap-4">
              <div className="h-4 w-full">
                <ProgressBar
                  value={distributionData.marineCargo}
                  total={100}
                  color="bg-gradient-to-r from-gray-700 to-blue-500"
                />
              </div>
              <div className="w-full flex gap-1 text-xs mb-1">
                <span className="shrink-0">Marine Cargo:</span>
                <span>{distributionData.marineCargo}%</span>
              </div>
            </div>
            <div className="flex items-center flex-col xl:flex-row xl:gap-4">
              <div className="h-4 w-full">
                <ProgressBar
                  value={distributionData.generalLiability}
                  total={100}
                  color="bg-gradient-to-r from-gray-700 to-blue-500"
                />
              </div>
              <div className="w-full flex gap-1 text-xs mb-1">
                <span className="shrink-0">General Liability:</span>
                <span>{distributionData.generalLiability}%</span>
              </div>
            </div>

            <div className="flex items-center flex-col xl:flex-row xl:gap-4">
              <div className="h-4 w-full">
                <ProgressBar
                  value={distributionData.workersComp}
                  total={100}
                  color="bg-gradient-to-r from-gray-700 to-blue-500"
                />
              </div>
              <div className="w-full flex gap-1 text-xs mb-1">
                <span className="shrink-0">Workers Comp:</span>
                <span>{distributionData.workersComp}%</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
