import { ProgressBar } from "../ProgressBar";
import { Card, CardContent } from "../ui/card";
import AIPowered from "./AIPowered";
import DecreasingWinnability from "./DecreasingWinnability";
import IncreasingWinnability from "./IncreasingWinnability";

export default function Details() {
  return (
    <Card className="bg-secondary hover:border-primary-foreground">
      <CardContent className="p-6">
        <div className="sm:flex">
          <div className="sm:w-48 border-r border-gray-700 pr-4">
            <div className="mb-6 bg-[#252A3D] rounded-xl pl-4 py-2 pr-2">
              <p className="text-sm mb-4 flex justify-between items-end">
                <span>DECISION SUPPORT</span>
                <span className="border px-1 border-white rounded-sm">4</span>
              </p>
              <div className="space-y-2 text-sm pl-3">
                <div className="text-primary font-medium">Winnability</div>
                <div className="text-gray-400">
                  Exposure Review & Suggested Coverage
                </div>
                <div className="text-gray-400">
                  Portfolio Strategy Alignment
                </div>
                <div className="text-gray-400">Brocker Analytics</div>
              </div>
            </div>

            <div className="mb-6 flex justify-between items-end">
              <p className=" m">RISK ASSESSMENT</p>
              <p className="bg-gray-700 rounded-sm px-1 inline-block">6</p>
            </div>

            <div className="mb-6 flex justify-between items-center">
              <p className="">DOCUMENTS AND COMPLIANCE</p>
              <p className="bg-gray-700 rounded-sm px-1 inline-block">2</p>
            </div>
          </div>

          <div className="flex-1 pl-6">
            <p className="text-2xl mb-6">Winnability</p>

            <div className="grid md:grid-cols-3 gap-2 mb-6">
            {/* Overall Score */}
              <div className="bg-[#252A3D] rounded-xl p-3">
                <p className="text-sm text-gray-400 mb-1">Overall Score</p>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <p className="text-4xl">82%</p>
                  <div className="w-max flex items-center gap-1 border border-primary rounded-full py-1 px-2">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < 4 ? "bg-primary" : "bg-gray-700"
                          }`}
                        ></div>
                      ))}
                    </div>
                    <span className="text-xs text-primary">Very Strong</span>
                  </div>
                </div>
              </div>

              {/* Historical trend */}
              <div className="bg-[#252A3D] rounded-xl p-3">
                <p className="text-sm text-gray-400 mb-1">Historical trend</p>
                <div className="h-16 bg-[#252A3D] relative overflow-hidden">
                  <svg viewBox="0 0 100 30" className="w-full h-full">
                    <path
                      d="M0,15 Q10,10 20,15 T40,20 T60,15 T80,10 T100,15"
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="2"
                    />
                  </svg>
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-400 px-2">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>Now</span>
                  </div>
                </div>
              </div>

              {/* Position */}
              <div className="bg-[#252A3D] rounded-xl p-3">
                <p className="text-sm text-gray-400 mb-1">Position</p>
                <div className="space-y-1">
                  <div className="flex items-center flex-col xl:flex-row xl:gap-4">
                    <div className="h-4 w-full">
                      <ProgressBar
                        value={82}
                        total={100}
                        color="bg-gradient-to-r from-gray-700 to-blue-500"
                      />
                    </div>
                    <div className="w-full flex gap-1 text-xs mb-1">
                      <span className="sm:shrink-0">Your score:</span>
                      <span>82%</span>
                    </div>
                  </div>
                  <div className="flex items-center flex-col xl:flex-row xl:gap-4">
                    <div className="h-4 w-full">
                      <ProgressBar
                        value={68}
                        total={100}
                        color="bg-gradient-to-r from-gray-700 to-blue-500"
                      />
                    </div>
                    <div className="w-full flex gap-1 text-xs mb-1">
                      <span className="sm:shrink-0">Market avg:</span>
                      <span>68%</span>
                    </div>
                  </div>
                  <div className="flex items-center flex-col xl:flex-row xl:gap-4">
                    <div className="h-4 w-full">
                      <ProgressBar
                        value={88}
                        total={100}
                        color="bg-gradient-to-r from-gray-700 to-blue-500"
                      />
                    </div>
                    <div className="w-full flex gap-1 text-xs mb-1">
                      <span className="sm:shrink-0">Top competitor:</span>
                      <span>88%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <IncreasingWinnability />

              <DecreasingWinnability />
            </div>

            <AIPowered />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
