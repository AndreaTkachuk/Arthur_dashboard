"use client";
import { Link } from "react-router-dom";
import {
  Info,
  ShieldCheck,
  ShieldUser,
  Paperclip,
  MoveRight,
  Ship,
  Building2,
  Umbrella,
  CircleCheck,
  Check,
  CircleArrowUp,
  Rocket,
  CircleArrowDown,
  CircleEllipsis,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockAccountDetails, mockPolicies } from "@/data/mockData";

const ProgressBar = ({
  value,
  total,
  color,
}: {
  value: number;
  total: number;
  color: string;
}) => {
  const percentage = (value / total) * 100;
  return (
    <div className="w-full bg-slate-700 rounded-e-full overflow-hidden">
      <div
        className={`h-4 ${color} text-end rounded-e-full pr-2 text-xl`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

const distributionData = {
  marineCargo: 71.4,
  generalLiability: 20,
  workersComp: 8.6,
};

const AccountDetails = () => {
  const account = mockAccountDetails;

  return (
    <div className="container mx-auto space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1 text-sm text-gray-400 mb-4">
        <Link to="/" className="hover:text-white">
          Dashboard
        </Link>
        <span>//</span>
        <Link to="/accounts" className="hover:text-white">
          Accounts
        </Link>
        <span>//</span>
        <span className="text-primary">{account.name}</span>
      </div>

      {/* Account Header */}
      <div className="flex 2xl:items-end flex-col xl:flex-row gap-6 justify-between">
        <div className="flex gap-4 items-start">
          <div className="bg-white rounded-full p-4 flex-shrink-0">
            <img src="/vite.svg" alt="Company Logo" className="h-16 w-16" />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl mb-1">{account.name}</h1>
            <div className="flex items-center gap-4 text-sm flex-wrap">
              <p className="w-52">{account.address}</p>
              <div className="border-l pl-4">
                <p className="text-xs uppercase text-gray-400">
                  Existing Account
                </p>
                <p className="">{account.accountId}</p>
              </div>
              <div className="border-l pl-4">
                <p className="text-xs uppercase text-gray-400">BROKER</p>
                <p className="">{account.broker}</p>
              </div>
              <div className="border-l pl-4">
                <p className="text-xs uppercase text-gray-400">UNDERWRITER</p>
                <p className="">{account.underwriter}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-secondary border border-chart-3 rounded-xl p-4 w-max">
          <div className="flex items-center">
            <Info size={14} className="mr-1 text-chart-3" />
            <div className="text-chart-3">Needs Attention</div>
          </div>

          <div className="flex gap-4 text-sm flex-col sm:flex-row">
            <div>
              <p className="text-sm">Marine Survey Required</p>
              <p className="text-[10px] text-gray-400">
                Scheduled for 06/15/2025
              </p>
              <Link
                to="#"
                className="flex items-center text-primary hover:underline text-xs"
              >
                Review details link
                <MoveRight size={12} className="pt-1" />
              </Link>
            </div>
            <div>
              <p className="text-sm">Loss Control Complete</p>
              <p className="text-[10px] text-gray-400">
                Last inpection: 02/15/2025
              </p>
              <Link
                to="#"
                className="flex items-center text-primary hover:underline text-xs"
              >
                View report
                <MoveRight size={12} className="pt-1" />
              </Link>
            </div>
            <div>
              <p className="text-sm">Claims Review Required</p>
              <p className="text-[10px] text-gray-400">
                3 open claims // $245.000 TTL
              </p>
              <Link
                to="#"
                className="flex items-center text-primary hover:underline text-xs"
              >
                View claims
                <MoveRight size={12} className="pt-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <p className="col-span-4">Performance Metrics</p>
        <Card className="bg-secondary py-0">
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
        <Card className="bg-secondary py-0">
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

        <Card className="bg-secondary py-0">
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

        <Card className="bg-secondary py-0">
          <CardContent className="p-4">
            <div className="mb-2">
              <p className="text-sm">Exposure Distribution</p>
            </div>
            <div className="space-y-2 mt-2">
              <div className="flex items-center flex-col xl:flex-row xl:gap-4">
                <ProgressBar
                  value={distributionData.marineCargo}
                  total={100}
                  color="bg-gradient-to-r from-gray-700 to-blue-500"
                />
                <div className="w-full flex gap-1 text-xs mb-1">
                  <span className="shrink-0">Marine Cargo:</span>
                  <span>{distributionData.marineCargo}%</span>
                </div>
              </div>
              <div className="flex items-center flex-col xl:flex-row xl:gap-4">
                <ProgressBar
                  value={distributionData.generalLiability}
                  total={100}
                  color="bg-gradient-to-r from-gray-700 to-blue-500"
                />
                <div className="w-full flex gap-1 text-xs mb-1">
                  <span className="shrink-0">General Liability:</span>
                  <span>{distributionData.generalLiability}%</span>
                </div>
              </div>

              <div className="flex items-center flex-col xl:flex-row xl:gap-4">
                <ProgressBar
                  value={distributionData.workersComp}
                  total={100}
                  color="bg-gradient-to-r from-gray-700 to-blue-500"
                />
                <div className="w-full flex gap-1 text-xs mb-1">
                  <span className="shrink-0">Workers Comp:</span>
                  <span>{distributionData.workersComp}%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Policies */}
      <p className="mb-4">Policies</p>
      <div className="bg-secondary p-4 rounded-xl border">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <Card className="bg-[#252A3D] border-none py-0">
            <CardContent className="p-4 flex flex-col">
              <div className="flex items-center gap-1">
                <Ship size={20} className="text-primary" />
                <p className="">Marine Cargo</p>
              </div>
              <p className="text-xs text-gray-400">Premium: $625,000</p>
              <p className="text-xs text-gray-400">Effective: 6/30/2026</p>
            </CardContent>
          </Card>
          <Card className="bg-[#252A3D] border-none py-0">
            <CardContent className="p-4 flex flex-col">
              <div className="flex items-center gap-1">
                <ShieldCheck size={20} className="text-chart-2" />
                <p className="">General Liability</p>
              </div>
              <p className="text-xs text-gray-400">Premium: $715,000</p>
              <p className="text-xs text-gray-400">Eff.Date: 6/30/2026</p>
            </CardContent>
          </Card>
          <Card className="bg-[#252A3D] border-none py-0">
            <CardContent className="p-4 flex flex-col">
              <div className="flex items-center gap-1">
                <ShieldUser size={20} className="text-chart-4" />
                <p className="">Workers Comp</p>
              </div>
              <p className="text-xs text-gray-400">Premium: $75,000</p>
              <p className="text-xs text-gray-400">Eff.Date: ---</p>
            </CardContent>
          </Card>
          <Card className="bg-[#252A3D] border-none py-0">
            <CardContent className="p-4 flex flex-col">
              <div className="flex items-center gap-1">
                <Building2 size={20} className="text-chart-3" />
                <p className="">Property</p>
              </div>
              <p className="text-xs text-gray-400">Premium: $64,829.83</p>
              <p className="text-xs text-gray-400">Eff.Date: ---</p>
            </CardContent>
          </Card>
          <Card className="bg-[#252A3D] border-none py-0">
            <CardContent className="p-4 flex flex-col">
              <div className="flex items-center gap-1">
                <Umbrella size={20} className="text-chart-5" />
                <p className="">Umbrella</p>
              </div>
              <p className="text-xs text-gray-400">Premium: $275,000</p>
              <p className="text-xs text-gray-400">Eff.Date: 13/03/2026</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Account Status and Compliance */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="Account">
          <p className="mb-4">Account Status</p>
          <Card className="bg-secondary">
            <CardContent>
              <div className="flex items-top justify-between">
                <div className="flex flex-col items-center">
                  <CircleCheck className="text-chart-2" />

                  <span className="text-sm pt-2">Submitted</span>
                </div>
                <div className="flex-1 h-3 -ml-4 -mr-2 border-b-2 border-dashed border-chart-2"></div>
                <div className="flex flex-col items-center">
                  <CircleCheck className="text-chart-2" />

                  <span className="text-sm pt-2">Review</span>
                </div>

                <div className="flex-1  h-3 -ml-2 -mr-2 border-b-2 border-dashed border-chart-2"></div>
                <div className="flex flex-col items-center">
                  <CircleCheck className="text-chart-2" />

                  <span className="text-sm pt-2">Quote</span>
                </div>

                <div className="flex-1 h-3 -ml-2 -mr-1 border-b-2 border-dashed border-chart-2"></div>
                <div className="flex flex-col items-center">
                  <CircleCheck className="text-chart-2" />

                  <span className="text-sm pt-2">Bind</span>
                </div>

                <div className="flex-1 h-3 -ml-1 -mr-1 border-b-2 border-dashed border-chart-2"></div>
                <div className="flex flex-col items-center">
                  <CircleCheck className="text-chart-2" />

                  <span className="text-sm pt-2">Issue</span>
                </div>

                <div className="flex-1 h-3 -ml-1 -mr-2 border-b-2 border-dashed border-gray-500"></div>
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full border-3 flex items-center justify-center">
                    <Check className="text-gray-500 w-3 h-3" />
                  </div>

                  <span className="text-sm pt-2">Renew</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="Compliance">
          <p className="flex items-center justify-between mb-4">
            <span className="">Compliance & Documentation</span>
            <Link to="#" className="text-xs text-primary hover:underline">
              See history →
            </Link>
          </p>
          <Card className="bg-secondary py-[22px]">
            <CardContent>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <CircleCheck className="text-chart-2 w-5" />
                  <span>KYC verification</span>
                </div>
                <div className="flex items-center gap-2">
                  <CircleCheck className="text-chart-2 w-5" />
                  <span>Required Documentation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CircleCheck className="text-chart-2 w-5" />
                  <span>Regulatory approval</span>
                </div>
                <div className="flex items-center gap-2">
                  <CircleCheck className="text-chart-2 w-5" />
                  <span>Financial Verification</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Account Details */}
      <p className="mb-4">Account Details</p>
      <Card className="bg-secondary">
        <CardContent className="p-6">
          <div className="flex">
            <div className="w-48 border-r border-gray-700 pr-4">
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

              <div className="grid grid-cols-3 gap-2 mb-6">
                <div className="bg-[#252A3D] rounded-xl p-3">
                  <p className="text-sm text-gray-400 mb-1">Overall Score</p>
                  <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                    <p className="text-4xl">82%</p>
                    <div className="flex gap-1 border border-primary rounded-full py-1 px-2">
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

                <div className="bg-[#252A3D] rounded-xl p-3">
                  <p className="text-sm text-gray-400 mb-1">Position</p>
                  <div className="space-y-1">
                    <div className="flex items-center flex-col xl:flex-row xl:gap-4">
                      <ProgressBar
                        value={82}
                        total={100}
                        color="bg-gradient-to-r from-gray-700 to-blue-500"
                      />
                      <div className="w-full flex gap-1 text-xs mb-1">
                        <span className="shrink-0">Your score:</span>
                        <span>82%</span>
                      </div>
                    </div>
                    <div className="flex items-center flex-col xl:flex-row xl:gap-4">
                      <ProgressBar
                        value={68}
                        total={100}
                        color="bg-gradient-to-r from-gray-700 to-blue-500"
                      />
                      <div className="w-full flex gap-1 text-xs mb-1">
                        <span className="shrink-0">Market avg:</span>
                        <span>68%</span>
                      </div>
                    </div>
                    <div className="flex items-center flex-col xl:flex-row xl:gap-4">
                      <ProgressBar
                        value={88}
                        total={100}
                        color="bg-gradient-to-r from-gray-700 to-blue-500"
                      />
                      <div className="w-full flex gap-1 text-xs mb-1">
                        <span className="shrink-0">Top competitor:</span>
                        <span>88%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {/* Increasing Winnability */}
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
                            <span className="text-xs text-gray-400 text-success">
                              +28%
                            </span>
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
                            <span className="text-xs text-gray-400 text-success">
                              +22%
                            </span>
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
                            <span className="text-xs text-gray-400 text-success">
                              +16%
                            </span>
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
                            <span className="text-xs text-gray-400 text-success">
                              +11%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decreasing Winnability */}
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
                            <span className="text-xs text-gray-400 text-success">
                              -24%
                            </span>
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
                            <span className="text-xs text-gray-400 text-success">
                              -18%
                            </span>
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
                            <span className="text-xs text-gray-400 text-success">
                              -13%
                            </span>
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
                            <span className="text-xs text-gray-400 text-success">
                              -5%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI-Powered Recommendations */}
              <div className="mt-6 bg-[#252A3D] rounded-xl p-4 pr-6">
                <div className="flex items-center gap-2 mb-4">
                  <Rocket className="text-chart-2" />
                  <span className="text-chart-2">
                    AI-Powered Recommendations
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div>
                      <p className="">
                        Offer 5% premium discount in exchange for 3-year
                        commitment
                      </p>
                      <p className="text-sm text-gray-400 mb-4">
                        Historical analysis indicates 25% churn in multi-year
                        contracts. Current pricing is 12% above market average.
                        This approach would strengthen retention while
                        maintaining adequate profitability.
                      </p>
                    </div>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button className="w-25 bg-chart-2 hover:bg-chart-2 hover:text-foreground rounded-full">
                          Apply
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-40">
                        <div className="grid gap-4">
                          <div className="space-y-2">
                            <h4 className="font-medium leading-none">Note</h4>
                            <p className="text-sm text-muted-foreground">
                              Coming soon...
                            </p>
                          </div>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <div>
                      <p className="">
                        Propose risk control services for cargo handling
                        procedures
                      </p>
                      <p className="text-sm text-gray-400 mb-4">
                        Can potentially reduce loss ratio by 15-20% based on
                        similar maritime accounts in your portfolio. Special
                        focus on loading/unloading operations would address the
                        most frequent claim scenarios.
                      </p>
                    </div>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button className="w-25 bg-chart-2 hover:bg-chart-2 hover:text-foreground rounded-full">
                          Apply
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-40">
                        <div className="grid gap-4">
                          <div className="space-y-2">
                            <h4 className="font-medium leading-none">Note</h4>
                            <p className="text-sm text-muted-foreground">
                              Coming soon...
                            </p>
                          </div>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Communication Section */}
      <p className="mb-4">Communication</p>
      <Card className="bg-secondary">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-accent text-accent-foreground pl-3 pr-10 py-1 rounded-full"
                />
              </div>
              <Button
                variant="outline"
                size="sm"
                className="w-25 bg-secondary border-primary text-primary hover:text-foreground rounded-full"
              >
                <span>Filter</span>
              </Button>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-25 bg-secondary border-primary text-primary hover:text-foreground rounded-full"
                  >
                    <span>Group</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-40">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">Note</h4>
                      <p className="text-sm text-muted-foreground">
                        Coming soon...
                      </p>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#252A3D] rounded-xl border border-primary p-4">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="rounded-full px-2 py-0.5 text-xs text-foreground">
                  NEW
                </Badge>
                <h3 className="">Policy Renewal - Auto Insurance 5/15/25</h3>
              </div>
              <div className="text-xs text-gray-400 mb-2">
                <span>Michael Roberts</span> // <span>Apr 5</span>
              </div>
              <p className="text-sm mb-3 text-gray-300">
                Hello Arthur, I'm reaching out regarding the upcoming auto
                policy renewal for Fleet Estate Group. It expires on 5/15/2024.
                Would you like to review coverage options? I've attached the
                current policy details and premium breakdown for your reference.
              </p>
              <div className="flex items-center gap-2 mb-3">
                <Badge className="bg-chart-2 text-foreground rounded-full px-2 py-0.5 text-xs flex items-center gap-1">
                  <Paperclip size={12} />
                  <span>3 attachments</span>
                </Badge>
              </div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    size="sm"
                    className="w-25 rounded-full text-foreground bg-blue-500"
                  >
                    Reply
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-40">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">Note</h4>
                      <p className="text-sm text-muted-foreground">
                        Coming soon...
                      </p>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            <div className="bg-[#252A3D] rounded-xl border border-primary p-4">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="rounded-full px-2 py-0.5 text-xs text-foreground">
                  RESPONDED
                </Badge>
                <h3 className="">
                  Fwd: New Submission - BPM Real Estate - EFF 4/1/24
                </h3>
              </div>
              <div className="text-xs text-gray-400 mb-2">
                <span>Joshua Donovan</span> // <span>Mar 25</span>
              </div>
              <p className="text-sm text-gray-300 mb-3">
                Arthur, attached please find our submission for the above
                mentioned applicant. We have...
              </p>

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    size="sm"
                    className="w-25 rounded-full text-foreground bg-blue-500"
                  >
                    Reply
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-40">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">Note</h4>
                      <p className="text-sm text-muted-foreground">
                        Coming soon...
                      </p>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            <div className="bg-[#252A3D] rounded-xl border border-primary p-4">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="rounded-full px-2 py-0.5 text-xs text-foreground">
                  NEW
                </Badge>
                <h3 className="">New Quote Request - Workers Comp Insurance</h3>
              </div>
              <div className="text-xs text-gray-400 mb-2">
                <span>Sarah Chen</span> // <span>Apr 5</span>
              </div>
              <p className="text-sm text-gray-300 mb-3">
                Hi Arthur, Real Estate Group has expressed interest in adding
                workers compensation coverage to their insurance portfolio. I've
                completed the initial risk assessment based...
              </p>
              <div className="flex items-center gap-2 mb-3">
                <Badge
                  variant="secondary"
                  className="bg-chart-2 text-foreground rounded-full px-2 py-0.5 text-xs flex items-center gap-1"
                >
                  <Paperclip size={12} />
                  <span>3 attachments</span>
                </Badge>
              </div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    size="sm"
                    className="w-25 rounded-full text-foreground bg-blue-500"
                  >
                    Reply
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-40">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">Note</h4>
                      <p className="text-sm text-muted-foreground">
                        Coming soon...
                      </p>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            <div className="bg-[#252A3D] rounded-xl border border-primary p-4">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="rounded-full px-2 py-0.5 text-xs text-foreground">
                  NEW
                </Badge>
                <h3 className="">New Business: BPM Real Estate Group, LLc</h3>
              </div>
              <div className="text-xs text-gray-400 mb-2">
                <span>Isabel Kreller</span> // <span>Feb 28</span>
              </div>
              <p className="text-sm text-gray-300 mb-3">
                Hello Arthur, I am pleased to present you a submission on this
                client #39;s upco...
              </p>
              <div className="flex items-center gap-2 mb-3">
                <Badge
                  variant="secondary"
                  className="bg-chart-2 text-foreground rounded-full px-2 py-0.5 text-xs flex items-center gap-1"
                >
                  <Paperclip size={12} />
                  <span>5 attachments</span>
                </Badge>
              </div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    size="sm"
                    className="w-25 rounded-full text-foreground bg-blue-500"
                  >
                    Reply
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-40">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">Note</h4>
                      <p className="text-sm text-muted-foreground">
                        Coming soon...
                      </p>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Policies Table */}
      <p className="mb-4">Policies</p>
      <Card className="bg-secondary">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-accent text-accent-foreground pl-3 pr-10 py-1 rounded-full"
                />
              </div>
              <Button
                variant="outline"
                size="sm"
                className="w-25 bg-secondary border-primary text-primary hover:text-foreground rounded-full"
              >
                <span>Filter</span>
              </Button>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-25 bg-secondary border-primary text-primary hover:text-foreground rounded-full"
                  >
                    <span>Group</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-40">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">Note</h4>
                      <p className="text-sm text-muted-foreground">
                        Coming soon...
                      </p>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-xs text-gray-400 uppercase bg-[#252A3D]">
                  <th className="text-left py-2 pl-3">Line</th>
                  <th className="text-left py-2">Eff. Date</th>
                  <th className="text-left py-2">Exp. Date</th>
                  <th className="text-left py-2">Status</th>
                  <th className="text-left py-2">Expiring Tech</th>
                  <th className="text-left py-2">Expiring Premium</th>
                  <th className="text-left py-2">Renewal to tech</th>
                  <th className="text-left py-2">Renewal tech</th>
                  <th className="text-left py-2">Renewal Premium</th>
                  <th className="text-left py-2">Auto Change</th>
                  <th className="text-left py-2">Loss Ratio</th>
                  <th className="text-left py-2"></th>
                </tr>
              </thead>
              <tbody>
                {mockPolicies.map((policy) => (
                  <tr
                    key={policy.id}
                    className={`${
                      policy.id % 2 === 0
                        ? "bg-[#252A3D] border-t border-b"
                        : ""
                    }`}
                  >
                    <td className="py-3 pl-3">
                      <div className="flex items-center gap-1">
                        {policy.line.includes("Marine") && (
                          <Ship className="rounded-full bg-blue-500 p-1" />
                        )}
                        {policy.line.includes("General") && (
                          <ShieldCheck className="rounded-full bg-chart-2 p-1" />
                        )}
                        {policy.line.includes("Workers") && (
                          <ShieldUser className="rounded-full bg-chart-4 p-1" />
                        )}
                        {policy.line.includes("Umbrella") && (
                          <Umbrella className="rounded-full bg-red-400 p-1" />
                        )}
                        <div className="">{policy.line}</div>
                      </div>
                      <div className="text-xs text-gray-400">
                        {policy.number}
                      </div>
                    </td>
                    <td className="py-3">{policy.effDate}</td>
                    <td className="py-3">{policy.expDate}</td>
                    <td className="py-6 flex items-center gap-0">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          policy.status === "Active" && "bg-chart-2"
                        } ${policy.status === "Pending" && "bg-chart-3"}`}
                      ></div>
                      <span className="rounded-sm text-xs px-2">
                        {policy.status}
                      </span>
                    </td>
                    <td className="py-3">
                      ${policy.expiringTech.toLocaleString()}
                    </td>
                    <td className="py-3">
                      ${policy.expiringPremium.toLocaleString()}
                    </td>
                    <td className="py-3">
                      ${policy.renewalToTech.toLocaleString()}
                    </td>
                    <td className="py-3">
                      ${policy.renewalTech.toLocaleString()}
                    </td>
                    <td className="py-3">
                      ${policy.renewalPremium.toLocaleString()}
                    </td>
                    <td
                      className={`py-3 ${
                        policy.rateChange > 5 && "text-chart-5"
                      }`}
                    >
                      {policy.rateChange}%
                    </td>
                    <td className="py-3">
                      <Badge
                        className={`rounded-full text-xs text-foreground px-2 ${
                          policy.lossRatio < 30
                            ? "bg-chart-2"
                            : policy.lossRatio < 60
                            ? "bg-chart-3 text-gray-700"
                            : "bg-chart-5"
                        }`}
                      >
                        {policy.lossRatio}%
                      </Badge>
                    </td>
                    <td className="py-3">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <CircleEllipsis size={16} className="rotate-90" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-40">
                          <div className="grid gap-4">
                            <div className="space-y-2">
                              <h4 className="font-medium leading-none">Note</h4>
                              <p className="text-sm text-muted-foreground">
                                Coming soon...
                              </p>
                            </div>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </td>
                  </tr>
                ))}
                <tr className="border-b border-border font-medium">
                  <td className="py-3 pl-3">TOTAL ({mockPolicies.length})</td>
                  <td className="py-3"></td>
                  <td className="py-3"></td>
                  <td className="py-3"></td>
                  <td className="py-3">
                    $
                    {mockPolicies
                      .reduce((total, policy) => total + policy.expiringTech, 0)
                      .toLocaleString()}
                  </td>
                  <td className="py-3">
                    $
                    {mockPolicies
                      .reduce(
                        (total, policy) => total + policy.expiringPremium,
                        0
                      )
                      .toLocaleString()}
                  </td>
                  <td className="py-3">
                    $
                    {mockPolicies
                      .reduce(
                        (total, policy) => total + policy.renewalToTech,
                        0
                      )
                      .toLocaleString()}
                  </td>
                  <td className="py-3">
                    $
                    {mockPolicies
                      .reduce((total, policy) => total + policy.renewalTech, 0)
                      .toLocaleString()}
                  </td>
                  <td className="py-3">
                    $
                    {mockPolicies
                      .reduce(
                        (total, policy) => total + policy.renewalPremium,
                        0
                      )
                      .toLocaleString()}
                  </td>
                  <td className="py-3">6.9%</td>
                  <td className="py-3">
                    <Badge className="rounded-full bg-chart-3 text-gray-700 text-xs px-2">
                      58.3%
                    </Badge>
                  </td>
                  <td className="py-3"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountDetails;
